"use client";

import { RefreshCw, ChevronRight } from "lucide-react";
import Image from "next/image";
import { DayMenu } from "@/hooks/useMenu";
import { Recipe, RecipeCategory } from "@/data/recipes";

interface WeekCardProps {
    dayMenu: DayMenu;
    dayIndex: number;
    onSwap: (dayIndex: number, mealType: "almoco" | "jantar") => void;
    onViewRecipe: (recipe: Recipe) => void;
}

const CATEGORY_CHIP: Record<RecipeCategory, { bg: string; text: string; label: string }> = {
    peixe: { bg: "bg-blue-100", text: "text-blue-700", label: "Peixe" },
    vegetariano: { bg: "bg-green-100", text: "text-green-700", label: "Veggie" },
    massa: { bg: "bg-yellow-100", text: "text-yellow-700", label: "Massa" },
    ovos: { bg: "bg-orange-100", text: "text-orange-700", label: "Ovos" },
    frutos_do_mar: { bg: "bg-teal-100", text: "text-teal-700", label: "Mar" },
};

// Uma foto apetitosa para cada categoria
const CATEGORY_IMAGE: Record<RecipeCategory, string> = {
    peixe: "/images/peixe.jpg",
    vegetariano: "/images/vegetariano.jpg",
    massa: "/images/massa.jpg",
    ovos: "/images/ovos.jpg",
    frutos_do_mar: "/images/frutos_do_mar.jpg",
};

const MEAL_LABELS = {
    almoco: { label: "Almoço", bg: "bg-amber-50", text: "text-amber-600" },
    jantar: { label: "Jantar", bg: "bg-indigo-50", text: "text-indigo-600" },
} as const;

function MealRow({
    mealType,
    recipe,
    onSwap,
    onViewRecipe,
}: {
    mealType: "almoco" | "jantar";
    recipe: Recipe;
    onSwap: () => void;
    onViewRecipe: () => void;
}) {
    const chip = CATEGORY_CHIP[recipe.category];
    const meal = MEAL_LABELS[mealType];
    const imgSrc = CATEGORY_IMAGE[recipe.category];

    return (
        <div className="flex items-center gap-3 py-3">
            {/* Foto circular da categoria */}
            <button
                onClick={onViewRecipe}
                className="w-12 h-12 rounded-full overflow-hidden shrink-0 ring-2 ring-slate-100 hover:ring-teal-300 transition-all shadow-sm"
                aria-label={`Ver ingredientes de ${recipe.name}`}
            >
                <Image
                    src={imgSrc}
                    alt={chip.label}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-200"
                />
            </button>

            {/* Info clicável */}
            <button
                onClick={onViewRecipe}
                className="flex-1 min-w-0 text-left group"
                aria-label={`Ver receita de ${recipe.name}`}
            >
                <span className={`inline-flex items-center text-[10px] font-bold px-1.5 py-0.5 rounded-full mb-0.5 ${meal.bg} ${meal.text}`}>
                    {meal.label}
                </span>
                <div className="flex items-center gap-0.5">
                    <p className="text-sm font-semibold text-slate-800 leading-snug truncate group-hover:text-teal-700 transition-colors">
                        {recipe.name}
                    </p>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-teal-500 shrink-0 transition-colors" />
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                    <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${chip.bg} ${chip.text}`}>
                        {chip.label}
                    </span>
                    <span className="text-[10px] text-slate-400">{recipe.prepTime}</span>
                </div>
            </button>

            {/* Swap button com tooltip */}
            <div className="relative group/swap shrink-0">
                <button
                    onClick={onSwap}
                    className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-orange-100 hover:text-orange-600 text-slate-400 flex items-center justify-center transition-colors"
                    aria-label="Não gostei, trocar prato"
                >
                    <RefreshCw className="w-3.5 h-3.5" />
                </button>
                <span className="absolute bottom-full right-0 mb-2 w-max max-w-[160px] bg-slate-800 text-white text-[11px] leading-tight px-2.5 py-1.5 rounded-lg opacity-0 group-hover/swap:opacity-100 transition-opacity pointer-events-none shadow-lg z-20">
                    Não gostei, trocar prato
                    <span className="absolute top-full right-3 -translate-y-px border-4 border-transparent border-t-slate-800" />
                </span>
            </div>
        </div>
    );
}

export default function WeekCard({ dayMenu, dayIndex, onSwap, onViewRecipe }: WeekCardProps) {
    return (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            {/* Day header */}
            <div className="bg-teal-600 px-4 py-2.5 flex items-center gap-2">
                <span className="text-white font-bold text-sm">{dayMenu.shortDay}</span>
                <span className="text-teal-200 text-xs">{dayMenu.day}</span>
            </div>

            {/* Meals */}
            <div className="px-3 divide-y divide-slate-50">
                <MealRow
                    mealType="almoco"
                    recipe={dayMenu.almoco}
                    onSwap={() => onSwap(dayIndex, "almoco")}
                    onViewRecipe={() => onViewRecipe(dayMenu.almoco)}
                />
                <MealRow
                    mealType="jantar"
                    recipe={dayMenu.jantar}
                    onSwap={() => onSwap(dayIndex, "jantar")}
                    onViewRecipe={() => onViewRecipe(dayMenu.jantar)}
                />
            </div>
        </div>
    );
}
