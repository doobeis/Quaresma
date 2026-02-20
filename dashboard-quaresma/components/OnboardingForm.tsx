"use client";

import { useState } from "react";
import { Cross, Target, DollarSign, ChevronRight, Flame } from "lucide-react";

interface OnboardingFormProps {
    onComplete: (sacrifice: string, dailyCost: number, goal: string) => void;
}

const steps = [
    {
        id: 1,
        icon: Flame,
        title: "O que você vai sacrificar?",
        subtitle: "Seja específico. Quanto mais claro, mais fácil manter o foco.",
        placeholder: "Ex: iFood, Café, Cerveja, Cigarro...",
        field: "sacrifice" as const,
        type: "text",
    },
    {
        id: 2,
        icon: DollarSign,
        title: "Qual o custo médio diário?",
        subtitle: "Quanto você gasta por dia com esse hábito?",
        placeholder: "Ex: 25.00",
        field: "dailyCost" as const,
        type: "number",
    },
    {
        id: 3,
        icon: Target,
        title: "Qual é o seu objetivo?",
        subtitle: "Para onde vai o dinheiro economizado?",
        placeholder: "Ex: Viagem, Doação, Pagar Dívida...",
        field: "goal" as const,
        type: "text",
    },
];

export default function OnboardingForm({ onComplete }: OnboardingFormProps) {
    const [currentStep, setCurrentStep] = useState(0);
    const [values, setValues] = useState({
        sacrifice: "",
        dailyCost: "",
        goal: "",
    });
    const [error, setError] = useState("");

    const step = steps[currentStep];
    const isLast = currentStep === steps.length - 1;

    const handleNext = () => {
        const val = values[step.field];
        if (!val || (step.type === "number" && (isNaN(Number(val)) || Number(val) <= 0))) {
            setError(
                step.type === "number"
                    ? "Por favor, insira um valor válido maior que zero."
                    : "Por favor, preencha este campo."
            );
            return;
        }
        setError("");
        if (isLast) {
            onComplete(values.sacrifice, Number(values.dailyCost), values.goal);
        } else {
            setCurrentStep((s) => s + 1);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") handleNext();
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
            {/* Header */}
            <div className="text-center mb-10 fade-in">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <Cross className="w-8 h-8 text-gold-500" strokeWidth={1.5} />
                    <h1 className="text-2xl font-bold text-gradient-gold">
                        Dashboard da Quaresma
                    </h1>
                </div>
                <p className="text-slate-400 text-sm max-w-xs mx-auto">
                    40 dias de propósito. Cada sacrifício tem um valor.
                </p>
            </div>

            {/* Step indicator */}
            <div className="flex gap-2 mb-8 fade-in fade-in-delay-1">
                {steps.map((s, i) => (
                    <div
                        key={s.id}
                        className={`h-1.5 rounded-full transition-all duration-500 ${i <= currentStep
                                ? "bg-gold-500 w-8"
                                : "bg-gray-700 w-4"
                            }`}
                    />
                ))}
            </div>

            {/* Card */}
            <div className="card-glass w-full max-w-md p-8 fade-in fade-in-delay-2">
                {/* Step icon */}
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl gradient-purple border border-gold-600/30 mb-6 mx-auto">
                    <step.icon className="w-7 h-7 text-gold-400" strokeWidth={1.5} />
                </div>

                <h2 className="text-xl font-semibold text-white text-center mb-2">
                    {step.title}
                </h2>
                <p className="text-slate-400 text-sm text-center mb-6">
                    {step.subtitle}
                </p>

                {/* Input */}
                <div className="relative mb-2">
                    {step.type === "number" && (
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-500 font-semibold text-sm">
                            R$
                        </span>
                    )}
                    <input
                        key={step.id}
                        type={step.type}
                        inputMode={step.type === "number" ? "decimal" : "text"}
                        placeholder={step.placeholder}
                        value={values[step.field]}
                        onChange={(e) => {
                            setError("");
                            setValues((v) => ({ ...v, [step.field]: e.target.value }));
                        }}
                        onKeyDown={handleKeyDown}
                        autoFocus
                        className={`input-dark w-full py-3.5 pr-4 text-sm ${step.type === "number" ? "pl-10" : "pl-4"
                            }`}
                    />
                </div>

                {error && (
                    <p className="text-red-400 text-xs mb-4 px-1">{error}</p>
                )}

                {/* Button */}
                <button
                    onClick={handleNext}
                    className="btn-gold w-full py-3.5 mt-4 flex items-center justify-center gap-2 text-sm"
                >
                    {isLast ? "Começar Quaresma" : "Próximo"}
                    <ChevronRight className="w-4 h-4" />
                </button>

                {/* Step count */}
                <p className="text-center text-slate-500 text-xs mt-4">
                    Passo {currentStep + 1} de {steps.length}
                </p>
            </div>

            {/* Footer */}
            <p className="text-slate-600 text-xs mt-8 text-center fade-in fade-in-delay-3">
                18 de Fevereiro → 5 de Abril de 2026
            </p>
        </div>
    );
}
