"use client";

import { useState } from "react";
import { ChefHat, UtensilsCrossed, RefreshCw, Sparkles } from "lucide-react";
import { useMenu } from "@/hooks/useMenu";
import { Recipe } from "@/data/recipes";
import WeekCard from "@/components/WeekCard";
import CookWithWhatIHaveModal from "@/components/CookWithWhatIHaveModal";
import RecipeDetailModal from "@/components/RecipeDetailModal";
import Header from "@/components/Header";
import QuaresmaBanner from "@/components/QuaresmaBanner";

export default function Home() {
  const { menu, generateMenu, swapMeal, clearMenu } = useMenu();
  const [showCookWithWhat, setShowCookWithWhat] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Frase do dia — sempre no topo */}
      <QuaresmaBanner />

      <Header />

      <main className="max-w-lg mx-auto px-4 py-6 pb-32">
        {/* Welcome / Empty state */}
        {!menu ? (
          <div className="flex flex-col items-center justify-center min-h-[65vh] text-center px-4">
            {/* Illustration */}
            <div className="relative mb-8">
              <div className="w-28 h-28 bg-teal-100 rounded-full flex items-center justify-center">
                <ChefHat className="w-14 h-14 text-teal-600" strokeWidth={1.5} />
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-orange-500" />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-slate-800 mb-3 leading-tight">
              Seu cardápio da<br />
              <span className="text-teal-600">Quaresma Prática</span>
            </h1>
            <p className="text-slate-500 text-sm mb-8 max-w-xs leading-relaxed">
              40 dias de refeições criativas, sem carne vermelha e sem dor de cabeça. Peixes, vegetarianos, massas e muito mais.
            </p>

            <button
              onClick={generateMenu}
              className="w-full max-w-xs bg-teal-600 hover:bg-teal-700 active:scale-95 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-teal-200 transition-all text-base flex items-center justify-center gap-2"
            >
              <ChefHat className="w-5 h-5" />
              Gerar Meu Cardápio da Semana
            </button>

            <p className="text-slate-400 text-xs mt-4">
              Baseado em receitas econômicas do dia a dia 🐟
            </p>
          </div>
        ) : (
          <>
            {/* Actions bar */}
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-bold text-slate-800 text-base">
                Cardápio da Semana
              </h2>
              <button
                onClick={clearMenu}
                className="flex items-center gap-1.5 text-slate-400 hover:text-slate-600 text-xs transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Refazer Semana
              </button>
            </div>

            {/* Hint */}
            <p className="text-xs text-teal-600 mb-3 flex items-center gap-1">
              <span>💡</span>
              Toque no nome de qualquer prato para ver os ingredientes
            </p>

            {/* Week cards */}
            <div className="space-y-3">
              {menu.map((dayMenu, i) => (
                <WeekCard
                  key={dayMenu.day}
                  dayMenu={dayMenu}
                  dayIndex={i}
                  onSwap={swapMeal}
                  onViewRecipe={setSelectedRecipe}
                />
              ))}
            </div>
          </>
        )}
      </main>

      {/* Floating button — O que tenho em casa */}
      <div className="fixed bottom-6 left-0 right-0 flex justify-center z-30 px-4">
        <button
          onClick={() => setShowCookWithWhat(true)}
          className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 active:scale-95 text-white font-bold py-3.5 px-8 rounded-full shadow-xl shadow-teal-200 transition-all text-sm"
        >
          <UtensilsCrossed className="w-4 h-4" />
          Gerar Receita com o que Tenho
        </button>
      </div>

      {/* Cook with what I have modal */}
      {showCookWithWhat && (
        <CookWithWhatIHaveModal
          onClose={() => setShowCookWithWhat(false)}
          onViewRecipe={setSelectedRecipe}
        />
      )}

      {/* Recipe detail modal */}
      {selectedRecipe && (
        <RecipeDetailModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
}
