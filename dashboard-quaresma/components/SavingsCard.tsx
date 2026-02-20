"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp } from "lucide-react";

interface SavingsCardProps {
    amount: number;
    completedDays: number;
    sacrifice: string;
}

function formatBRL(value: number): string {
    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
    });
}

export default function SavingsCard({
    amount,
    completedDays,
    sacrifice,
}: SavingsCardProps) {
    const [displayValue, setDisplayValue] = useState(0);
    const prevAmount = useRef(0);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const start = prevAmount.current;
        const end = amount;
        const duration = 800;
        const startTime = performance.now();

        if (rafRef.current) cancelAnimationFrame(rafRef.current);

        const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(start + (end - start) * eased);
            if (progress < 1) {
                rafRef.current = requestAnimationFrame(animate);
            } else {
                prevAmount.current = end;
            }
        };

        rafRef.current = requestAnimationFrame(animate);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [amount]);

    return (
        <div className="card-glass p-6">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-green-900/40 border border-green-500/30 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                </div>
                <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                        Economia Acumulada
                    </p>
                    <p className="text-xs text-slate-500">
                        {completedDays} dia{completedDays !== 1 ? "s" : ""} sem {sacrifice}
                    </p>
                </div>
            </div>

            <div className="text-center py-2">
                <span className="text-4xl font-bold text-gradient-gold counter-animate">
                    {formatBRL(displayValue)}
                </span>
            </div>

            {completedDays === 0 && (
                <p className="text-center text-slate-500 text-xs mt-2">
                    Marque seu primeiro dia para começar a acumular!
                </p>
            )}
        </div>
    );
}
