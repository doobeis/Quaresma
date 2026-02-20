"use client";

import { useMemo } from "react";

const PHRASES = [
    "\"A quaresma é tempo de conversão, não de privação.\"",
    "\"Comer simples é nutrir o corpo e a alma.\"",
    "\"40 dias para cultivar novos hábitos e descobrir novos sabores.\"",
    "\"A mesa simples alimenta mais do que o prato farto.\"",
    "\"Cada refeição sem carne é um passo de fé e consciência.\"",
    "\"Quaresma: tempo de simplicidade, gratidão e criatividade.\"",
    "\"O peixe na mesa é símbolo de partilha e esperança.\"",
    "\"Na quaresma, o que sobra no prato pode suprir a mesa de outro.\"",
    "\"Jejuar do supérfluo para saborear o essencial.\"",
    "\"Comer com consciência é também um ato de amor.\"",
    "\"Quaresma é renovar a fé também através do que escolhemos comer.\"",
    "\"Da mesa simples nasce a gratidão pelo que é necessário.\"",
    "\"Cada dia de quaresma é uma oportunidade de recomeçar.\"",
    "\"A simplicidade na mesa abre espaço para o que realmente importa.\"",
    "\"Quaresma: 40 dias para se descobrir através da simplicidade.\"",
];

export default function QuaresmaBanner() {
    const phrase = useMemo(() => {
        // Pick phrase based on day of year so it rotates diariamente
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const dayOfYear = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
        return PHRASES[dayOfYear % PHRASES.length];
    }, []);

    return (
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-4 py-2.5 text-center">
            <p className="text-white text-xs font-medium leading-snug italic opacity-95">
                {phrase}
            </p>
        </div>
    );
}
