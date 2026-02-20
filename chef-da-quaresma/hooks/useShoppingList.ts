"use client";

import { useState, useCallback, useMemo } from "react";
import { DayMenu } from "@/hooks/useMenu";

export interface ShoppingItem {
    name: string;
    qtys: string[];
    checked: boolean;
}

function normalizeName(name: string): string {
    return name.toLowerCase().trim();
}

export function useShoppingList(menu: DayMenu[] | null) {
    const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

    const items = useMemo<ShoppingItem[]>(() => {
        if (!menu) return [];

        const map = new Map<string, string[]>();

        for (const day of menu) {
            for (const recipe of [day.almoco, day.jantar]) {
                for (const ing of recipe.ingredients) {
                    const key = normalizeName(ing.name);
                    if (map.has(key)) {
                        // Avoid duplicate qty strings
                        const existing = map.get(key)!;
                        if (!existing.includes(ing.qty)) {
                            existing.push(ing.qty);
                        }
                    } else {
                        map.set(key, [ing.qty]);
                    }
                }
            }
        }

        return Array.from(map.entries())
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([name, qtys]) => ({
                name: name.charAt(0).toUpperCase() + name.slice(1),
                qtys,
                checked: checkedItems.has(name),
            }));
    }, [menu, checkedItems]);

    const toggleItem = useCallback((normalizedName: string) => {
        setCheckedItems((prev) => {
            const next = new Set(prev);
            if (next.has(normalizedName)) {
                next.delete(normalizedName);
            } else {
                next.add(normalizedName);
            }
            return next;
        });
    }, []);

    const copyToWhatsApp = useCallback(async () => {
        const unchecked = items
            .filter((i) => !i.checked)
            .map((i) => `⬜ ${i.name} (${i.qtys.join(" / ")})`)
            .join("\n");

        const checked = items
            .filter((i) => i.checked)
            .map((i) => `✅ ${i.name}`)
            .join("\n");

        let text = `🐟 *Lista de Compras — Quaresma Prática*\n\n`;
        if (unchecked) text += `*Preciso comprar:*\n${unchecked}\n`;
        if (checked) text += `\n*Já tenho em casa:*\n${checked}`;

        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch {
            return false;
        }
    }, [items]);

    const resetChecked = useCallback(() => {
        setCheckedItems(new Set());
    }, []);

    const totalChecked = items.filter((i) => i.checked).length;

    return { items, toggleItem, copyToWhatsApp, resetChecked, totalChecked };
}
