"use client";

import { useState, useMemo } from "react";
import { X, ChefHat, Plus, Trash2, Sparkles, Search } from "lucide-react";
import { recipes, Recipe } from "@/data/recipes";

interface Props {
    onClose: () => void;
    onViewRecipe: (recipe: Recipe) => void;
}

function normalize(str: string) {
    return str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

export default function CookWithWhatIHaveModal({ onClose, onViewRecipe }: Props) {
    const [input, setInput] = useState("");
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [searched, setSearched] = useState(false);

    function addIngredient() {
        const val = input.trim();
        if (!val) return;
        const already = ingredients.some((i) => normalize(i) === normalize(val));
        if (!already) setIngredients((prev) => [...prev, val]);
        setInput("");
        setSearched(false);
    }

    function removeIngredient(idx: number) {
        setIngredients((prev) => prev.filter((_, i) => i !== idx));
        setSearched(false);
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            e.preventDefault();
            addIngredient();
        }
    }

    // Score: how many of the user's ingredients appear in the recipe
    const results = useMemo(() => {
        if (!searched || ingredients.length === 0) return [];

        const normIngredients = ingredients.map(normalize);

        return recipes
            .map((recipe) => {
                const matched = normIngredients.filter((userIng) =>
                    recipe.ingredients.some((ri) => normalize(ri.name).includes(userIng) || userIng.includes(normalize(ri.name)))
                );
                return { recipe, matchCount: matched.length, matchedNames: matched };
            })
            .filter((r) => r.matchCount > 0)
            .sort((a, b) => b.matchCount - a.matchCount);
    }, [ingredients, searched]);

    const categoryLabel: Record<string, string> = {
        peixe: "Peixe",
        vegetariano: "Vegetariano",
        massa: "Massa",
        ovos: "Ovos",
        frutos_do_mar: "Frutos do Mar",
    };

    const categoryColor: Record<string, string> = {
        peixe: "bg-blue-100 text-blue-700",
        vegetariano: "bg-green-100 text-green-700",
        massa: "bg-amber-100 text-amber-700",
        ovos: "bg-yellow-100 text-yellow-700",
        frutos_do_mar: "bg-cyan-100 text-cyan-700",
    };

    return (
        <div className="fixed inset-0 z-50 flex flex-col" style={{ background: "rgba(15,23,42,0.55)", backdropFilter: "blur(4px)" }}>
            <div className="flex-1 overflow-y-auto">
                <div className="min-h-full flex items-end sm:items-center justify-center p-0 sm:p-4">
                    <div className="bg-white w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden">
                        {/* Header */}
                        <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                                <div className="w-9 h-9 bg-teal-100 rounded-xl flex items-center justify-center">
                                    <ChefHat className="w-5 h-5 text-teal-600" />
                                </div>
                                <div>
                                    <h2 className="font-bold text-slate-800 text-base leading-tight">O que tenho em casa?</h2>
                                    <p className="text-slate-400 text-xs">Adicione ingredientes e veja as receitas</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                            >
                                <X className="w-4 h-4 text-slate-500" />
                            </button>
                        </div>

                        {/* Input area */}
                        <div className="px-5 pt-4 pb-3">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Ex: atum, batata, ovo…"
                                    className="flex-1 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                                    autoFocus
                                />
                                <button
                                    onClick={addIngredient}
                                    className="w-10 h-10 flex-shrink-0 bg-teal-600 hover:bg-teal-700 active:scale-95 rounded-xl flex items-center justify-center transition-all shadow-sm shadow-teal-100"
                                >
                                    <Plus className="w-5 h-5 text-white" />
                                </button>
                            </div>

                            {/* Chips */}
                            {ingredients.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {ingredients.map((ing, i) => (
                                        <span
                                            key={i}
                                            className="inline-flex items-center gap-1.5 bg-teal-50 border border-teal-200 text-teal-800 text-xs font-medium rounded-full px-3 py-1"
                                        >
                                            {ing}
                                            <button onClick={() => removeIngredient(i)} className="text-teal-400 hover:text-teal-700 transition-colors">
                                                <Trash2 className="w-3 h-3" />
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Search button */}
                            <button
                                onClick={() => {
                                    if (ingredients.length > 0) setSearched(true);
                                }}
                                disabled={ingredients.length === 0}
                                className="mt-4 w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 active:scale-95 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-all text-sm shadow-sm shadow-teal-100"
                            >
                                <Sparkles className="w-4 h-4" />
                                Buscar Receitas
                            </button>
                        </div>

                        {/* Results */}
                        {searched && (
                            <div className="px-5 pb-6">
                                <div className="border-t border-slate-100 pt-4">
                                    {results.length === 0 ? (
                                        <div className="flex flex-col items-center text-center py-8 text-slate-400">
                                            <Search className="w-10 h-10 mb-3 text-slate-200" />
                                            <p className="text-sm font-medium text-slate-500">Nenhuma receita encontrada</p>
                                            <p className="text-xs mt-1">Tente adicionar mais ingredientes como alho, cebola ou azeite.</p>
                                        </div>
                                    ) : (
                                        <>
                                            <p className="text-xs text-slate-400 mb-3">
                                                <span className="font-semibold text-teal-600">{results.length}</span> receita{results.length > 1 ? "s" : ""} encontrada{results.length > 1 ? "s" : ""} com o que você tem
                                            </p>
                                            <div className="space-y-2.5">
                                                {results.map(({ recipe, matchCount }) => (
                                                    <button
                                                        key={recipe.id}
                                                        onClick={() => {
                                                            onViewRecipe(recipe);
                                                            onClose();
                                                        }}
                                                        className="w-full text-left bg-slate-50 hover:bg-teal-50 border border-slate-100 hover:border-teal-200 rounded-2xl px-4 py-3 transition-all group"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <span className="text-2xl">{recipe.emoji}</span>
                                                            <div className="flex-1 min-w-0">
                                                                <p className="text-sm font-semibold text-slate-800 group-hover:text-teal-700 truncate">{recipe.name}</p>
                                                                <div className="flex items-center gap-2 mt-1">
                                                                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${categoryColor[recipe.category]}`}>
                                                                        {categoryLabel[recipe.category]}
                                                                    </span>
                                                                    <span className="text-[10px] text-slate-400">{recipe.prepTime}</span>
                                                                </div>
                                                            </div>
                                                            <div className="flex-shrink-0 text-right">
                                                                <span className="text-xs font-bold text-teal-600">{matchCount}</span>
                                                                <p className="text-[10px] text-slate-400 leading-tight">
                                                                    ingrediente{matchCount > 1 ? "s" : ""}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
