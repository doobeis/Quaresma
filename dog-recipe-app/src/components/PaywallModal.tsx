import { LockIcon, Check, X } from 'lucide-react';

interface PaywallModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function PaywallModal({ isOpen, onClose }: PaywallModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Overlay Escuro com Blur */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="bg-white rounded-3xl w-full max-w-sm overflow-hidden relative shadow-2xl animate-in zoom-in-95 duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors z-10"
                >
                    <X className="w-5 h-5 text-slate-500" />
                </button>

                <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-8 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>

                    <div className="mx-auto w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/30 shadow-inner">
                        <LockIcon className="w-8 h-8 text-white drop-shadow-md" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
                        Conteúdo Exclusivo
                    </h2>
                    <p className="text-amber-50 font-medium text-sm">
                        Assine o Plano Premium para desbloquear todas as receitas feitas por especialistas!
                    </p>
                </div>

                <div className="p-6">
                    <ul className="space-y-4 mb-8">
                        {[
                            'Acesso a +150 receitas exclusivas',
                            'Dietas para problemas de saúde',
                            'Atualizações semanais',
                            'Suporte via grupo VIP'
                        ].map((benefit, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-4 h-4 text-emerald-600" />
                                </div>
                                {benefit}
                            </li>
                        ))}
                    </ul>

                    <div className="space-y-3">
                        <button className="w-full py-4 px-6 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold transition-transform active:scale-95 shadow-lg shadow-slate-900/20">
                            Desbloquear Acesso Vitalício
                        </button>
                        <p className="text-center text-xs text-slate-500 font-medium">
                            Apenas R$ 47,90 | Sem mensalidades
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
