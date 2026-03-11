import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Clock, Star, FileText } from 'lucide-react';
import { mockRecipes, CATEGORIES } from '../data/mockData';

export default function Home() {
    const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const filteredRecipes = mockRecipes.filter(recipe => {
        const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = recipe.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    const handleRecipeClick = (recipeId: string) => {
        navigate(`/receitas/${recipeId}`);
    };

    return (
        <div className="flex flex-col min-h-full pb-12 font-sans relative">
            {/* Header & Search */}
            <div className="bg-transparent mb-8 relative flex flex-col items-center">
                {/* Logo ocupando a área superior */}
                <div className="w-full relative z-10 rounded-b-[2.5rem] overflow-hidden shadow-sm border-b-4 border-brand-yellow/20">
                    <img
                        src="/logo.png"
                        alt="Cãolinaria"
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Barra de Pesquisa flutuando sobre a base da logo */}
                <div className="relative z-20 px-5 w-full max-w-lg -mt-6">
                    <div className="absolute inset-y-0 left-6 pl-1 flex items-center pointer-events-none">
                        <div className="w-8 h-8 rounded-full bg-brand-yellow/40 flex items-center justify-center">
                            <Search className="h-4 w-4 text-brand-orange" />
                        </div>
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-14 pr-4 py-4 md:py-5 bg-white shadow-lg rounded-[1.5rem] text-slate-800 text-base placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-yellow/40 transition-all font-bold border border-slate-100 focus:border-brand-yellow/60"
                        placeholder="Pesquisar refeições e petiscos..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Categories Carousel */}
            <div className="pl-5 mb-8 relative">
                <div className="flex justify-between items-end pr-5 mb-5 relative">
                    <div>
                        <h2 className="text-2xl font-black text-slate-800 tracking-wide">Categorias</h2>
                        <div className="w-10 h-1 bg-warm-500 rounded-full absolute -bottom-2 left-0"></div>
                    </div>
                    <a
                        href="/receitas.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 bg-brand-orange text-white px-4 py-2 rounded-full text-sm font-bold shadow-[0_4px_15px_rgba(230,138,25,0.4)] active:scale-95 transition-all hover:scale-105"
                    >
                        <FileText className="w-4 h-4 text-white" />
                        Ver PDF
                    </a>
                </div>

                <div className="flex flex-wrap gap-3 pb-2 pr-5">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`whitespace-nowrap px-6 py-3 rounded-full text-base font-bold transition-all duration-300 shadow-sm active:scale-95 ${activeCategory === cat
                                ? 'bg-brand-orange text-white shadow-[0_4px_15px_rgba(230,138,25,0.4)] ring-2 ring-brand-yellow ring-offset-2 ring-offset-brand-beige scale-105'
                                : 'bg-white text-brand-green hover:bg-brand-yellow/20 border-2 border-brand-yellow/30 hover:border-brand-yellow/60'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Promo Banner */}
            <div className="px-5 mt-2 mb-6 cursor-pointer active:scale-[0.98] transition-all" onClick={() => navigate('/cupom')}>
                <div className="bg-gradient-to-r from-brand-orange to-brand-yellow rounded-[1.5rem] p-4 text-white shadow-lg relative overflow-hidden flex items-center justify-between">
                    <div className="absolute -right-4 -top-4 w-20 h-20 bg-white opacity-20 rounded-full blur-xl"></div>
                    <div className="relative z-10">
                        <div className="text-xs font-bold uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded-full inline-block mb-1.5 backdrop-blur-sm">
                            Parceria Exclusiva
                        </div>
                        <h3 className="font-black text-lg leading-tight">10% OFF na Petz</h3>
                        <p className="text-white/90 text-xs font-bold mt-0.5">Clique e pegue seu cupom</p>
                    </div>
                    <div className="relative z-10 bg-white text-brand-orange font-black text-xs px-3 py-2 rounded-xl shadow-sm border border-brand-yellow/30 ml-2 text-center whitespace-nowrap">
                        VER<br/>CUPOM
                    </div>
                </div>
            </div>

            {/* Recipes Grid */}
            <div className="px-5 mt-4">
                <div className="flex justify-between items-end mb-6 relative">
                    <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2 tracking-wide">
                        <div className="bg-nature-100 p-1.5 rounded-xl">
                            <Star className="w-6 h-6 text-nature-600 fill-nature-600" />
                        </div>
                        Populares
                    </h2>
                    <div className="w-10 h-1 bg-nature-500 rounded-full absolute -bottom-2 left-0"></div>
                </div>

                {filteredRecipes.length === 0 ? (
                    <div className="text-center text-slate-500 my-10 bg-white p-6 rounded-3xl border border-slate-200 border-dashed">
                        <div className="text-5xl mb-3 opacity-50">?</div>
                        <p className="font-medium text-base">Nenhuma receita encontrada.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-5">
                        {filteredRecipes.map((recipe) => (
                            <div
                                key={recipe.id}
                                onClick={() => handleRecipeClick(recipe.id)}
                                className="bg-white rounded-[2rem] p-3.5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col md:flex-row cursor-pointer hover:shadow-[0_8px_30px_rgb(232,134,25,0.15)] transition-all duration-300 active:scale-[0.98] border border-warm-100/50 group overflow-hidden relative"
                            >
                                {/* Decorative blob */}
                                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-warm-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700 ease-out z-0"></div>

                                <div className="w-full md:w-32 h-40 md:h-32 relative rounded-[1.5rem] overflow-hidden shrink-0 z-10 shadow-sm">
                                    <img
                                        src={recipe.imageUrl}
                                        alt={recipe.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                <div className="pl-0 md:pl-5 pt-4 md:pt-1 flex flex-col justify-between flex-1 z-10">
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-[0.8rem] border shadow-sm ${recipe.difficulty === 'Fácil' ? 'bg-brand-yellow border-brand-yellow/50 text-brand-green' :
                                                recipe.difficulty === 'Médio' ? 'bg-brand-orange/20 border-brand-orange/30 text-brand-orange' :
                                                    'bg-red-100 border-red-200 text-red-700'
                                                }`}>
                                                {recipe.difficulty}
                                            </span>
                                        </div>
                                        <h3 className="font-black text-slate-800 text-xl leading-snug line-clamp-2 pr-2 group-hover:text-brand-orange transition-colors">
                                            {recipe.title}
                                        </h3>
                                    </div>

                                    <div className="flex items-center justify-between text-sm font-bold text-slate-600 mt-4">
                                        <div className="flex items-center gap-1.5 bg-brand-yellow/30 px-3.5 py-2 rounded-xl border border-brand-yellow/40">
                                            <Clock className="w-4 h-4 text-brand-green" />
                                            <span className="text-brand-green">{recipe.prepTimeMinutes} min</span>
                                        </div>
                                        <div className="text-brand-green text-xs truncate max-w-[100px] bg-brand-beige px-3 py-2 rounded-xl border border-brand-yellow/30 flex items-center justify-center font-bold">
                                            {recipe.audience}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
