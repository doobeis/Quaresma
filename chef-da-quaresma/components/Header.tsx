"use client";

import { useMemo } from "react";
import Logo from "@/components/Logo";

const EASTER_DATE = new Date("2026-04-05T00:00:00");

export default function Header() {
    const daysLeft = useMemo(() => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const diff = Math.ceil(
            (EASTER_DATE.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
        );
        return Math.max(0, diff);
    }, []);

    return (
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-teal-100 shadow-sm">
            <div className="max-w-lg mx-auto px-4 h-14 flex items-center justify-between">
                {/* Logo + Nome */}
                <div className="flex items-center gap-2.5">
                    <Logo size={40} />
                    <div className="leading-tight">
                        <p className="font-bold text-teal-800 text-sm">Quaresma</p>
                        <p className="font-bold text-teal-600 text-sm -mt-0.5">Prática</p>
                    </div>
                </div>

                {/* Countdown */}
                <div className="flex items-center gap-1.5 bg-orange-50 border border-orange-200 rounded-full px-3 py-1">
                    <span className="text-orange-500 font-bold text-sm">{daysLeft}</span>
                    <span className="text-orange-700 text-xs font-medium">
                        {daysLeft === 1 ? "dia" : "dias"} para a Páscoa
                    </span>
                </div>
            </div>
        </header>
    );
}
