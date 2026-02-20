"use client";

interface CircularProgressProps {
    currentDay: number;
    totalDays: number;
    percent: number;
}

export default function CircularProgress({
    currentDay,
    totalDays,
    percent,
}: CircularProgressProps) {
    const size = 200;
    const strokeWidth = 14;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;

    return (
        <div className="flex flex-col items-center">
            <div className="relative" style={{ width: size, height: size }}>
                <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                    <defs>
                        <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#d4a017" />
                            <stop offset="50%" stopColor="#f5c842" />
                            <stop offset="100%" stopColor="#fde68a" />
                        </linearGradient>
                        <linearGradient id="trackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1a0a2e" />
                            <stop offset="100%" stopColor="#2d1b69" />
                        </linearGradient>
                    </defs>

                    {/* Track */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke="url(#trackGrad)"
                        strokeWidth={strokeWidth}
                    />

                    {/* Progress */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke="url(#progressGrad)"
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        className="progress-ring-circle"
                    />
                </svg>

                {/* Center content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-gradient-gold leading-none">
                        {currentDay > 0 ? currentDay : "—"}
                    </span>
                    <span className="text-slate-400 text-xs mt-1">de {totalDays} dias</span>
                    <span className="text-gold-500 text-xs font-medium mt-0.5">
                        {percent}%
                    </span>
                </div>
            </div>

            <div className="text-center mt-3">
                <p className="text-slate-300 text-sm font-medium">
                    {currentDay === 0
                        ? "A Quaresma começa hoje!"
                        : currentDay >= totalDays
                            ? "Quaresma concluída! 🎉"
                            : `Dia ${currentDay} da Quaresma`}
                </p>
                <p className="text-slate-500 text-xs mt-0.5">
                    Domingo de Páscoa: 5 de Abril
                </p>
            </div>
        </div>
    );
}
