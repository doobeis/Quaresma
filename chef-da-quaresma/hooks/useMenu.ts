"use client";

import { useState, useCallback, useEffect } from "react";
import { recipes, Recipe } from "@/data/recipes";

export interface MealSlot {
    recipeId: string;
    type: "almoco" | "jantar";
}

export interface DayMenu {
    day: string;
    shortDay: string;
    almoco: Recipe;
    jantar: Recipe;
}

const DAYS = [
    { day: "Segunda-feira", shortDay: "Seg" },
    { day: "Terça-feira", shortDay: "Ter" },
    { day: "Quarta-feira", shortDay: "Qua" },
    { day: "Quinta-feira", shortDay: "Qui" },
    { day: "Sexta-feira", shortDay: "Sex" },
    { day: "Sábado", shortDay: "Sáb" },
    { day: "Domingo", shortDay: "Dom" },
];

const STORAGE_KEY = "chef_quaresma_menu_2026";

function shuffleArray<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function getRecipeById(id: string): Recipe {
    return recipes.find((r) => r.id === id) ?? recipes[0];
}

function serializeMenu(menu: DayMenu[]): string {
    return JSON.stringify(
        menu.map((d) => ({
            day: d.day,
            shortDay: d.shortDay,
            almocoId: d.almoco.id,
            jantarId: d.jantar.id,
        }))
    );
}

function deserializeMenu(raw: string): DayMenu[] | null {
    try {
        const parsed = JSON.parse(raw) as {
            day: string;
            shortDay: string;
            almocoId: string;
            jantarId: string;
        }[];
        return parsed.map((d) => ({
            day: d.day,
            shortDay: d.shortDay,
            almoco: getRecipeById(d.almocoId),
            jantar: getRecipeById(d.jantarId),
        }));
    } catch {
        return null;
    }
}

export function useMenu() {
    // Sempre inicia null (igual no servidor) — useEffect hidrata do localStorage
    // após a montagem, evitando hydration mismatch
    const [menu, setMenu] = useState<DayMenu[] | null>(null);

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            const parsed = deserializeMenu(stored);
            if (parsed) setMenu(parsed);
        }
    }, []);

    const saveMenu = useCallback((m: DayMenu[]) => {
        localStorage.setItem(STORAGE_KEY, serializeMenu(m));
        setMenu(m);
    }, []);

    const generateMenu = useCallback(() => {
        // Shuffle recipes pool twice (for lunch and dinner) to maximize variety
        const lunches = shuffleArray(recipes);
        const dinners = shuffleArray(recipes);

        const newMenu: DayMenu[] = DAYS.map((d, i) => ({
            day: d.day,
            shortDay: d.shortDay,
            almoco: lunches[i % lunches.length],
            // Ensure dinner !== lunch for same day
            jantar:
                dinners[i % dinners.length].id !== lunches[i % lunches.length].id
                    ? dinners[i % dinners.length]
                    : dinners[(i + 7) % dinners.length],
        }));

        saveMenu(newMenu);
    }, [saveMenu]);

    const swapMeal = useCallback(
        (dayIndex: number, mealType: "almoco" | "jantar") => {
            if (!menu) return;
            const currentId = menu[dayIndex][mealType].id;
            const otherMealId =
                mealType === "almoco"
                    ? menu[dayIndex].jantar.id
                    : menu[dayIndex].almoco.id;

            const candidates = recipes.filter(
                (r) => r.id !== currentId && r.id !== otherMealId
            );
            const newRecipe = candidates[Math.floor(Math.random() * candidates.length)];

            const updated = menu.map((d, i) =>
                i === dayIndex ? { ...d, [mealType]: newRecipe } : d
            );
            saveMenu(updated);
        },
        [menu, saveMenu]
    );

    const clearMenu = useCallback(() => {
        localStorage.removeItem(STORAGE_KEY);
        setMenu(null);
    }, []);

    return { menu, generateMenu, swapMeal, clearMenu };
}
