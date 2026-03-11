import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Clock, Info, ShieldCheck, FileText } from 'lucide-react';
import { mockRecipes } from '../data/mockData';

export default function RecipeDetails() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const recipe = mockRecipes.find((r) => r.id === id);

    if (!recipe) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-4">
                <h2 className="text-xl font-bold text-slate-800 mb-4">Receita não encontrada</h2>
                <button
                    onClick={() => navigate('/')}
                    className="bg-nature-500 text-white px-6 py-2 rounded-full font-medium"
                >
                    Voltar para Home
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-brand-beige font-sans pb-10">
            {/* Imagem de Fundo & Overlay */}
            <div className="relative h-80 md:h-[28rem] w-full shrink-0 shadow-[0_10px_30px_rgba(0,0,0,0.15)] rounded-b-[3rem] overflow-hidden">
                <img
                    src={recipe.imageUrl}
                    alt={recipe.title}
                    className="w-full h-full object-cover animate-[kenburns_20s_ease-out_infinite_alternate]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nature-900 via-nature-900/40 to-black/20 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>

                {/* Botões do topo */}
                <div className="absolute top-safe pt-6 left-5 right-5 flex justify-between items-center z-20">
                    <button
                        onClick={() => navigate('/')}
                        className="p-3 bg-white/20 backdrop-blur-md rounded-2xl text-white hover:bg-white/30 hover:scale-105 active:scale-95 transition-all shadow-sm border border-white/30"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <a
                        href="/receitas.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-warm-500/90 backdrop-blur-md text-white px-5 py-3 rounded-2xl text-sm font-bold flex items-center gap-2 shadow-[0_4px_15px_rgba(232,134,25,0.4)] border border-warm-400/50 hover:bg-warm-500 hover:scale-105 transition-all active:scale-95 group"
                    >
                        <FileText className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                        Ver PDF
                    </a>
                </div>

                <div className="absolute bottom-8 left-6 right-6 z-20">
                    <span className="bg-brand-yellow text-brand-green text-xs uppercase font-extrabold px-4 py-2 rounded-[0.8rem] mb-3 inline-block shadow-md tracking-wider border border-brand-yellow/80">
                        {recipe.category}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-white leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] pr-4">
                        {recipe.title}
                    </h1>
                </div>
            </div>

            {/* Conteúdo flutuante */}
            <div className="px-5 -mt-6 relative z-30 max-w-3xl mx-auto w-full">
                {/* Cartão Principal */}
                <div className="bg-white rounded-[2.5rem] p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] mb-6 border border-slate-100">
                    {/* Tags Informações */}
                    <div className="flex gap-3 mb-8 pb-8 border-b-2 border-dashed border-brand-yellow/30">
                        <div className="flex flex-col items-center gap-2 text-brand-green bg-brand-yellow border-2 border-brand-yellow/80 p-4 rounded-[1.5rem] flex-1 justify-center shadow-sm transform transition hover:-translate-y-1 hover:shadow-md">
                            <Clock className="w-7 h-7 text-brand-green" />
                            <span className="text-lg font-black text-brand-green leading-none mt-1">{recipe.prepTimeMinutes}<span className="text-sm">m</span></span>
                            <span className="text-[10px] font-bold text-brand-green/80 uppercase tracking-widest">Tempo</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 text-brand-green bg-brand-yellow border-2 border-brand-yellow/80 p-4 rounded-[1.5rem] flex-1 justify-center shadow-sm transform transition hover:-translate-y-1 hover:shadow-md">
                            <ShieldCheck className="w-7 h-7 text-brand-green" />
                            <span className="text-lg font-black text-brand-green leading-none mt-1">{recipe.difficulty}</span>
                            <span className="text-[10px] font-bold text-brand-green/80 uppercase tracking-widest">Nível</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 text-brand-green bg-brand-yellow border-2 border-brand-yellow/80 p-4 rounded-[1.5rem] flex-1 justify-center shadow-sm transform transition hover:-translate-y-1 hover:shadow-md">
                            <Info className="w-7 h-7 text-brand-green" />
                            <span className="text-sm font-black text-brand-green truncate w-full text-center leading-none mt-1">{recipe.audience}</span>
                            <span className="text-[10px] font-bold text-brand-green/80 uppercase tracking-widest">Para</span>
                        </div>
                    </div>

                    <div className="mb-2">
                        <h2 className="text-2xl font-black text-brand-green mb-5 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-brand-yellow/40 flex items-center justify-center text-brand-orange font-bold text-lg">
                                I
                            </div>
                            Ingredientes
                            <span className="ml-auto text-sm font-bold text-brand-orange bg-brand-beige px-4 py-1.5 rounded-full border border-brand-yellow/30 shadow-sm">
                                {recipe.ingredients.length} itens
                            </span>
                        </h2>

                        <div className="space-y-4">
                            {recipe.ingredients.map((ing) => (
                                <label
                                    key={ing.id}
                                    className="flex items-center gap-5 p-4 rounded-[1.5rem] bg-slate-50/50 border-2 border-slate-100 shadow-sm hover:border-warm-300 hover:bg-white hover:shadow-md transition-all cursor-pointer group active:scale-[0.98] select-none"
                                >
                                    <div className="relative flex flex-col items-center justify-center w-8 h-8 border-2 border-slate-300 rounded-xl group-hover:border-warm-500 transition-colors bg-white group-has-[:checked]:bg-warm-500 group-has-[:checked]:border-warm-500 shrink-0 overflow-hidden">
                                        <input type="checkbox" className="opacity-0 absolute w-full h-full cursor-pointer peer z-10" />
                                        <div className="hidden peer-checked:flex items-center justify-center text-white scale-0 peer-checked:scale-100 transition-transform duration-300">
                                            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center">
                                        <span className="text-slate-900 font-extrabold text-base leading-tight group-has-[:checked]:line-through group-has-[:checked]:text-slate-400 group-has-[:checked]:font-medium transition-all">{ing.name}</span>
                                        <span className="text-nature-700 text-sm font-bold mt-1 opacity-95 group-has-[:checked]:text-slate-400 transition-colors">{ing.amount}</span>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-[2.5rem] p-6 pb-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] mb-10 border border-slate-100">
                    <h2 className="text-2xl font-black text-brand-green mb-8 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-yellow/40 flex items-center justify-center text-brand-orange font-bold text-lg">
                            M
                        </div>
                        Modo de Preparo
                    </h2>

                    <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-[1.65rem] before:w-[3px] before:bg-brand-beige before:-z-10">
                        {recipe.instructions.map((inst, idx) => (
                            <div key={inst.step} className="flex gap-6 group">
                                <div className="flex-shrink-0 w-14 h-14 bg-brand-beige border-[5px] border-white text-brand-green font-black rounded-full flex items-center justify-center shadow-sm group-hover:border-brand-yellow group-hover:bg-brand-yellow/30 group-hover:text-brand-orange transition-all duration-300 z-10 text-xl transform group-hover:scale-110">
                                    {inst.step}
                                </div>
                                <div className={`flex flex-col gap-2 pt-3 w-full ${idx === recipe.instructions.length - 1 ? '' : 'pb-8 border-b-2 border-dashed border-brand-beige'}`}>
                                    <h3 className="font-bold text-brand-green/60 text-sm uppercase tracking-widest group-hover:text-brand-orange transition-colors">
                                        Passo {inst.step}
                                    </h3>
                                    <p className="text-slate-800 text-lg leading-relaxed font-medium group-hover:text-slate-900 transition-colors">
                                        {inst.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
