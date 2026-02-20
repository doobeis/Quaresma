"use client";

import { getDayDate } from "@/hooks/useQuaresma";
import { Check } from "lucide-react";

interface CalendarGridProps {
    completedDays: number[];
    currentDay: number;
    totalDays: number;
}

const MONTH_LABELS: Record<number, string> = {
    1: "Jan", 2: "Fev", 3: "Mar", 4: "Abr",
};

export default function CalendarGrid({
    completedDays,
    currentDay,
    totalDays,
}: CalendarGridProps) {
    const completedSet = new Set(completedDays);

    return (
        <div className="card-dark p-5">
            <h3 className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold-500 inline-block" />
                Log de Constância — 40 Dias
            </h3>

            <div className="grid grid-cols-8 gap-1.5 sm:grid-cols-10">
                {Array.from({ length: totalDays }, (_, i) => {
                    const dayIndex = i + 1;
                    const date = getDayDate(dayIndex);
                    const day = date.getDate();
                    const month = date.getMonth() + 1;
                    const isCompleted = completedSet.has(dayIndex);
                    const isToday = dayIndex === currentDay;
                    const isFuture = dayIndex > currentDay;

                    let className = "calendar-day ";
                    if (isCompleted) className += "completed";
                    else if (isToday) className += "today pulse-gold";
                    else if (isFuture) className += "future";
                    else className += "past-unchecked";

                    return (
                        <div key={dayIndex} className={className} title={`Dia ${dayIndex} — ${day}/${month}`}>
                            {isCompleted ? (
                                <Check className="w-3 h-3" strokeWidth={3} />
                            ) : (
                                <>
                                    <span className="text-[0.6rem] leading-none font-bold">{day}</span>
                                    <span className="text-[0.5rem] leading-none opacity-70">
                                        {MONTH_LABELS[month]}
                                    </span>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-3 mt-4 pt-3 border-t border-gray-700/40">
                <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-sm bg-gold-600/30 border border-gold-500/40" />
                    <span className="text-slate-500 text-xs">Concluído</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-sm border border-gold-500" />
                    <span className="text-slate-500 text-xs">Hoje</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-sm bg-gray-800/50 border border-gray-700/50" />
                    <span className="text-slate-500 text-xs">Futuro</span>
                </div>
            </div>
        </div>
    );
}
