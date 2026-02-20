"use client";

import { X, Clock, Users, List, ChefHat, Share2, Copy, Check } from "lucide-react";
import { Recipe, RecipeCategory } from "@/data/recipes";
import { useState } from "react";

interface RecipeDetailModalProps {
    recipe: Recipe;
    onClose: () => void;
}

const CATEGORY_LABELS: Record<RecipeCategory, { label: string; emoji: string }> = {
    peixe: { label: "Peixe", emoji: "🐟" },
    vegetariano: { label: "Vegetariano", emoji: "🥦" },
    massa: { label: "Massa", emoji: "🍝" },
    ovos: { label: "Ovos", emoji: "🥚" },
    frutos_do_mar: { label: "Frutos do Mar", emoji: "🦐" },
};

function buildShoppingText(recipe: Recipe): string {
    const cat = CATEGORY_LABELS[recipe.category];
    let text = `🛒 *Lista de Compras — ${recipe.name}*\n`;
    text += `${cat.emoji} ${cat.label}  |  ⏱ ${recipe.prepTime}  |  🍽 ${recipe.servings} porções\n\n`;
    recipe.ingredients.forEach((ing) => {
        text += `⬜ ${ing.name}: ${ing.qty}\n`;
    });
    text += `\n_Quaresma Prática 🐟_`;
    return text;
}

function buildRecipeText(recipe: Recipe): string {
    const cat = CATEGORY_LABELS[recipe.category];
    let text = `🐟 *Quaresma Prática — Receita*\n\n`;
    text += `${cat.emoji} *${recipe.name}*\n`;
    text += `⏱ ${recipe.prepTime}  |  🍽 ${recipe.servings} porções\n\n`;
    text += `📋 *Ingredientes:*\n`;
    recipe.ingredients.forEach((ing) => {
        text += `• ${ing.name}: ${ing.qty}\n`;
    });
    text += `\n👨‍🍳 *Modo de Preparo:*\n`;
    recipe.prepSteps.forEach((step, i) => {
        text += `${i + 1}. ${step}\n`;
    });
    text += `\n_Quaresma Prática 🐟_`;
    return text;
}

export default function RecipeDetailModal({ recipe, onClose }: RecipeDetailModalProps) {
    const cat = CATEGORY_LABELS[recipe.category];
    const [activeTab, setActiveTab] = useState<"lista" | "preparo">("lista");
    const [checked, setChecked] = useState<Set<number>>(new Set());
    const [copied, setCopied] = useState(false);

    const toggleItem = (i: number) => {
        setChecked((prev) => {
            const next = new Set(prev);
            next.has(i) ? next.delete(i) : next.add(i);
            return next;
        });
    };

    const handleCopyList = async () => {
        const unchecked = recipe.ingredients
            .filter((_, i) => !checked.has(i))
            .map((ing) => `⬜ ${ing.name}: ${ing.qty}`)
            .join("\n");
        const checkedItems = recipe.ingredients
            .filter((_, i) => checked.has(i))
            .map((ing) => `✅ ${ing.name}`)
            .join("\n");

        let text = `🛒 *Lista de Compras — ${recipe.name}*\n\n`;
        if (unchecked) text += `*Preciso comprar:*\n${unchecked}\n`;
        if (checkedItems) text += `\n*Já tenho em casa:*\n${checkedItems}`;
        text += `\n\n_Quaresma Prática 🐟_`;

        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    const handleShareWhatsApp = () => {
        const text = buildRecipeText(recipe);
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
    };

    const totalChecked = checked.size;
    const total = recipe.ingredients.length;

    return (
        <div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={(e) => e.target === e.currentTarget && onClose()}
            role="dialog"
            aria-modal="true"
            aria-label={recipe.name}
        >
            <div className="bg-white w-full max-w-lg rounded-t-3xl sm:rounded-2xl shadow-2xl max-h-[90vh] flex flex-col">
                {/* Handle bar (mobile) */}
                <div className="flex justify-center pt-3 pb-1 sm:hidden">
                    <div className="w-10 h-1 bg-slate-200 rounded-full" />
                </div>

                {/* Header */}
                <div className="px-5 pt-3 pb-4 border-b border-slate-100 flex items-start gap-3">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-lg">{cat.emoji}</span>
                            <span className="text-xs font-semibold text-teal-600 uppercase tracking-wide">
                                {cat.label}
                            </span>
                        </div>
                        <h2 className="font-bold text-slate-800 text-base leading-tight">
                            {recipe.name}
                        </h2>
                        <div className="flex items-center gap-3 mt-2 text-xs text-slate-500">
                            <span className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5" /> {recipe.prepTime}
                            </span>
                            <span className="flex items-center gap-1">
                                <Users className="w-3.5 h-3.5" /> {recipe.servings} porções
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors shrink-0"
                        aria-label="Fechar"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-slate-100 shrink-0">
                    <button
                        onClick={() => setActiveTab("lista")}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold transition-colors border-b-2 ${activeTab === "lista"
                            ? "border-teal-600 text-teal-700"
                            : "border-transparent text-slate-400 hover:text-slate-600"
                            }`}
                    >
                        <List className="w-4 h-4" />
                        Lista de Compras
                    </button>
                    <button
                        onClick={() => setActiveTab("preparo")}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold transition-colors border-b-2 ${activeTab === "preparo"
                            ? "border-teal-600 text-teal-700"
                            : "border-transparent text-slate-400 hover:text-slate-600"
                            }`}
                    >
                        <ChefHat className="w-4 h-4" />
                        Modo de Preparo
                    </button>
                </div>

                {/* Tab: Lista de Compras */}
                {activeTab === "lista" && (
                    <>
                        {/* Progress bar */}
                        <div className="px-5 pt-3 pb-2 shrink-0">
                            <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
                                <span>{total - totalChecked} itens faltando</span>
                                <span className="text-teal-600 font-semibold">
                                    {totalChecked}/{total} já tenho
                                </span>
                            </div>
                            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-teal-500 rounded-full transition-all duration-300"
                                    style={{ width: `${(totalChecked / total) * 100}%` }}
                                />
                            </div>
                        </div>

                        {/* Ingredients with checkboxes */}
                        <div className="flex-1 overflow-y-auto px-5 pb-2">
                            <ul className="space-y-1.5">
                                {recipe.ingredients.map((ing, i) => (
                                    <li key={i}>
                                        <button
                                            onClick={() => toggleItem(i)}
                                            className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-colors ${checked.has(i) ? "bg-teal-50 opacity-60" : "bg-slate-50 hover:bg-slate-100"
                                                }`}
                                        >
                                            {/* Checkbox */}
                                            <div
                                                className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors ${checked.has(i) ? "bg-teal-500 border-teal-500" : "border-slate-300"
                                                    }`}
                                            >
                                                {checked.has(i) && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                                            </div>
                                            <span
                                                className={`flex-1 text-sm font-medium ${checked.has(i) ? "line-through text-slate-400" : "text-slate-800"
                                                    }`}
                                            >
                                                {ing.name}
                                            </span>
                                            <span className="text-xs text-teal-700 font-semibold bg-teal-50 px-2 py-0.5 rounded-full shrink-0">
                                                {ing.qty}
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Footer: lista actions */}
                        <div className="px-5 py-4 border-t border-slate-100 space-y-2 shrink-0">
                            <button
                                onClick={handleCopyList}
                                className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3.5 rounded-xl transition-colors text-sm"
                            >
                                {copied ? (
                                    <><Check className="w-4 h-4" /> Lista copiada!</>
                                ) : (
                                    <><Copy className="w-4 h-4" /> Copiar Lista para WhatsApp</>
                                )}
                            </button>
                            <button
                                onClick={handleShareWhatsApp}
                                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold py-3 rounded-xl transition-colors text-sm"
                            >
                                <Share2 className="w-4 h-4" />
                                Compartilhar Receita Completa no WhatsApp
                            </button>
                        </div>
                    </>
                )}

                {/* Tab: Modo de Preparo */}
                {activeTab === "preparo" && (
                    <>
                        <div className="flex-1 overflow-y-auto px-5 py-4">
                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                                {recipe.prepSteps.length} passos
                            </p>
                            <ol className="space-y-4">
                                {recipe.prepSteps.map((step, i) => (
                                    <li key={i} className="flex gap-3">
                                        <div className="w-7 h-7 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                            {i + 1}
                                        </div>
                                        <p className="text-sm text-slate-700 leading-relaxed flex-1">{step}</p>
                                    </li>
                                ))}
                            </ol>
                        </div>
                        <div className="px-5 py-4 border-t border-slate-100 shrink-0">
                            <button
                                onClick={handleShareWhatsApp}
                                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold py-3.5 rounded-xl transition-colors text-sm"
                            >
                                <Share2 className="w-4 h-4" />
                                Compartilhar Receita no WhatsApp
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
