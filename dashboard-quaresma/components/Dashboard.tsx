"use client";

import { useState } from "react";
import { Cross, RotateCcw, Flame } from "lucide-react";
import CircularProgress from "./CircularProgress";
import SavingsCard from "./SavingsCard";
import ProjectionCard from "./ProjectionCard";
import DailyCheckButton from "./DailyCheckButton";
import CalendarGrid from "./CalendarGrid";
import { QuaresmaData } from "@/hooks/useQuaresma";

interface DashboardProps {
    data: QuaresmaData;
    currentDay: number;
    totalDays: number;
    progressPercent: number;
    hasCheckedToday: boolean;
    accumulatedSavings: number;
    easterProjection: number;
    onCheck: () => void;
    onReset: () => void;
}

export default function Dashboard({
    data,
    currentDay,
    totalDays,
    progressPercent,
    hasCheckedToday,
    accumulatedSavings,
    easterProjection,
    onCheck,
    onReset,
}: DashboardProps) {
    const [showResetConfirm, setShowResetConfirm] = useState(false);

    return (
        <div className="min-h-screen px-4 py-6 max-w-lg mx-auto">
            {/* Header */}
            <header className="flex items-center justify-between mb-8 fade-in">
                <div className="flex items-center gap-2">
                    <Cross className="w-5 h-5 text-gold-500" strokeWidth={1.5} />
                    <span className="font-bold text-white text-sm">Dashboard da Quaresma</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 bg-purple-900/40 border border-purple-700/30 rounded-full px-3 py-1">
                        <Flame className="w-3.5 h-3.5 text-gold-400" />
                        <span className="text-gold-400 text-xs font-medium">{data.sacrifice}</span>
                    </div>
                    <button
                        onClick={() => setShowResetConfirm(true)}
                        className="w-8 h-8 rounded-lg bg-gray-800/60 border border-gray-700/40 flex items-center justify-center text-slate-500 hover:text-slate-300 transition-colors"
                        title="Reiniciar"
                    >
                        <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                </div>
            </header>

            {/* Reset confirm modal */}
            {showResetConfirm && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4">
                    <div className="card-glass p-6 max-w-sm w-full">
                        <h3 className="text-white font-semibold text-center mb-2">Reiniciar Quaresma?</h3>
                        <p className="text-slate-400 text-sm text-center mb-6">
                            Todos os dados serão apagados. Esta ação não pode ser desfeita.
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowResetConfirm(false)}
                                className="btn-purple flex-1 py-2.5 text-sm"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={() => { onReset(); setShowResetConfirm(false); }}
                                className="flex-1 py-2.5 text-sm font-semibold rounded-xl bg-red-900/50 border border-red-700/40 text-red-300 hover:bg-red-900/70 transition-colors"
                            >
                                Sim, reiniciar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Circular Progress */}
            <div className="flex justify-center mb-8 fade-in fade-in-delay-1">
                <CircularProgress
                    currentDay={currentDay}
                    totalDays={totalDays}
                    percent={progressPercent}
                />
            </div>

            {/* Daily Check Button */}
            <div className="mb-6 fade-in fade-in-delay-2">
                <DailyCheckButton
                    hasCheckedToday={hasCheckedToday}
                    sacrifice={data.sacrifice}
                    currentDay={currentDay}
                    onCheck={onCheck}
                />
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 gap-4 mb-6 fade-in fade-in-delay-3">
                <SavingsCard
                    amount={accumulatedSavings}
                    completedDays={data.completedDays.length}
                    sacrifice={data.sacrifice}
                />
                <ProjectionCard
                    projection={easterProjection}
                    goal={data.goal}
                    dailyCost={data.dailyCost}
                />
            </div>

            {/* Calendar */}
            <div className="fade-in fade-in-delay-4">
                <CalendarGrid
                    completedDays={data.completedDays}
                    currentDay={currentDay}
                    totalDays={totalDays}
                />
            </div>

            {/* Footer */}
            <p className="text-center text-slate-600 text-xs mt-8 pb-4">
                Quaresma 2026 · 18 Fev → 5 Abr
            </p>
        </div>
    );
}
