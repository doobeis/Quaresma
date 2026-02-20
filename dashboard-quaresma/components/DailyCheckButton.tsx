"use client";

import { useCallback, useRef, useState } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";

interface DailyCheckButtonProps {
    hasCheckedToday: boolean;
    sacrifice: string;
    currentDay: number;
    onCheck: () => void;
}

export default function DailyCheckButton({
    hasCheckedToday,
    sacrifice,
    currentDay,
    onCheck,
}: DailyCheckButtonProps) {
    const [isAnimating, setIsAnimating] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const fireConfetti = useCallback(async () => {
        const confetti = (await import("canvas-confetti")).default;

        // First burst
        confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.7 },
            colors: ["#d4a017", "#f5c842", "#fde68a", "#7c3aed", "#a78bfa", "#ffffff"],
        });

        // Second burst with delay
        setTimeout(() => {
            confetti({
                particleCount: 50,
                angle: 60,
                spread: 55,
                origin: { x: 0, y: 0.7 },
                colors: ["#d4a017", "#f5c842", "#fde68a"],
            });
            confetti({
                particleCount: 50,
                angle: 120,
                spread: 55,
                origin: { x: 1, y: 0.7 },
                colors: ["#7c3aed", "#a78bfa", "#ffffff"],
            });
        }, 200);
    }, []);

    const handleClick = async () => {
        if (hasCheckedToday || isAnimating) return;
        setIsAnimating(true);
        await fireConfetti();
        onCheck();
        setTimeout(() => setIsAnimating(false), 600);
    };

    if (hasCheckedToday) {
        return (
            <div className="card-glass p-6 text-center border border-green-500/20">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <CheckCircle2 className="w-8 h-8 text-green-400" />
                    <span className="text-lg font-semibold text-green-300">
                        Propósito cumprido hoje!
                    </span>
                </div>
                <p className="text-slate-400 text-sm">
                    Dia {currentDay} concluído. Volte amanhã para continuar sua jornada.
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 bg-green-900/30 border border-green-500/20 rounded-full px-3 py-1">
                    <Sparkles className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-green-400 text-xs font-medium">
                        Sem {sacrifice} hoje ✓
                    </span>
                </div>
            </div>
        );
    }

    return (
        <div className="text-center">
            <button
                ref={buttonRef}
                onClick={handleClick}
                disabled={isAnimating || currentDay === 0}
                className={`btn-gold w-full py-5 text-base font-bold flex items-center justify-center gap-3 relative overflow-hidden ${isAnimating ? "scale-95" : ""
                    } ${currentDay === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                style={{ transition: "transform 0.15s ease, box-shadow 0.2s ease" }}
            >
                <CheckCircle2 className="w-6 h-6" />
                {isAnimating ? "Registrando..." : "Cumpri o propósito hoje!"}
            </button>
            {currentDay > 0 && (
                <p className="text-slate-500 text-xs mt-2">
                    Dia {currentDay} — Sem {sacrifice}
                </p>
            )}
            {currentDay === 0 && (
                <p className="text-slate-500 text-xs mt-2">
                    A Quaresma começa em 18 de Fevereiro de 2026
                </p>
            )}
        </div>
    );
}
