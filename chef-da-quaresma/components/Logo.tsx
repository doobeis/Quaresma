// Logo da Quaresma Prática — peixe teal com checkmark interno
export default function Logo({ size = 32 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size * 0.65}
            viewBox="0 0 120 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Quaresma Prática logo"
        >
            <defs>
                <linearGradient id="fishGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#14b8a6" />
                    <stop offset="100%" stopColor="#0d9488" />
                </linearGradient>
            </defs>

            {/* Corpo principal do peixe */}
            <path
                d="M105 39 C105 22 86 8 58 8 C36 8 18 18 10 28 C6 33 6 33 10 39 C6 45 6 45 10 50 C18 60 36 70 58 70 C86 70 105 56 105 39Z"
                fill="url(#fishGrad)"
            />

            {/* Cauda do peixe (esquerda) */}
            <path
                d="M18 39 L4 22 L2 39 L4 56 Z"
                fill="url(#fishGrad)"
            />

            {/* Nadadeira dorsal */}
            <path
                d="M58 8 C65 2 75 -2 82 4 C72 6 65 8 60 10 Z"
                fill="url(#fishGrad)"
            />

            {/* Nadadeira ventral */}
            <path
                d="M62 70 C68 74 76 78 82 74 C74 71 67 69 62 68 Z"
                fill="url(#fishGrad)"
            />

            {/* Checkmark branco dentro do peixe */}
            <path
                d="M42 42 L53 53 L75 28"
                stroke="white"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />

            {/* Olho do peixe */}
            <circle cx="82" cy="34" r="4" fill="white" opacity="0.9" />
        </svg>
    );
}
