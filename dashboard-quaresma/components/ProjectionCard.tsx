"use client";

import { Target } from "lucide-react";

interface ProjectionCardProps {
    projection: number;
    goal: string;
    dailyCost: number;
}

function formatBRL(value: number): string {
    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
    });
}

export default function ProjectionCard({
    projection,
    goal,
    dailyCost,
}: ProjectionCardProps) {
    return (
        <div className="card-dark p-6 border border-gold-600/20">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-purple-900/60 border border-purple-500/30 flex items-center justify-center">
                    <Target className="w-4 h-4 text-purple-300" />
                </div>
                <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                        Projeção de Páscoa
                    </p>
                    <p className="text-xs text-slate-500">Se mantiver os 40 dias</p>
                </div>
            </div>

            <div className="text-center py-2">
                <span className="text-3xl font-bold text-white">{formatBRL(projection)}</span>
            </div>

            <div className="mt-4 pt-4 border-t border-purple-800/40">
                <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Objetivo</span>
                    <span className="text-gold-400 font-medium truncate max-w-[60%] text-right">
                        {goal}
                    </span>
                </div>
                <div className="flex items-center justify-between text-xs mt-1.5">
                    <span className="text-slate-500">Custo diário</span>
                    <span className="text-slate-300 font-medium">{formatBRL(dailyCost)}/dia</span>
                </div>
            </div>
        </div>
    );
}
