import { useState, useMemo } from 'react';
import { Search, Info, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { mockToxicityGuide, type ToxicityLevel } from '../data/mockData';

export default function ToxicityGuide() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredItems = useMemo(() => {
        return mockToxicityGuide.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    const getLevelStyles = (level: ToxicityLevel) => {
        switch (level) {
            case 'Seguro':
                return {
                    bg: 'bg-emerald-50',
                    border: 'border-emerald-200',
                    text: 'text-emerald-800',
                    badgeText: 'text-emerald-700',
                    badgeBg: 'bg-emerald-100',
                    icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                };
            case 'Atenção':
                return {
                    bg: 'bg-amber-50',
                    border: 'border-amber-200',
                    text: 'text-amber-900',
                    badgeText: 'text-amber-800',
                    badgeBg: 'bg-amber-100',
                    icon: <Info className="w-5 h-5 text-amber-500" />
                };
            case 'Proibido':
                return {
                    bg: 'bg-rose-50',
                    border: 'border-rose-200',
                    text: 'text-rose-900',
                    badgeText: 'text-rose-700',
                    badgeBg: 'bg-rose-100',
                    icon: <ShieldAlert className="w-5 h-5 text-rose-500" />
                };
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 pb-8 flex flex-col">
            {/* Header fixo no topo da página mas com scroll normal */}
            <div className="bg-white px-5 pt-8 pb-6 shadow-sm rounded-b-3xl">
                <h1 className="text-2xl font-bold text-slate-800 mb-2">Pode ou não pode?</h1>
                <p className="text-slate-600 font-medium mb-6 text-base">
                    Verifique instantaneamente se um alimento humano é seguro para o seu cachorro.
                </p>

                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-6 w-6 text-slate-500" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-12 pr-4 py-4 border-2 border-slate-200 bg-white rounded-2xl text-slate-900 text-base placeholder-slate-500 focus:outline-none focus:border-nature-500 focus:ring-0 transition-all font-medium"
                        placeholder="Ex: Maçã, Chocolate, Uva..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Resultados */}
            <div className="p-4 flex-1">
                {searchQuery === '' ? (
                    <div className="flex flex-col items-center justify-center text-center p-8 mt-4">
                        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                            <Search className="w-8 h-8 text-slate-300" />
                        </div>
                        <p className="text-slate-600 font-medium text-base">
                            Digite o nome de um alimento acima para saber se ele é seguro.
                        </p>
                    </div>
                ) : filteredItems.length === 0 ? (
                    <div className="text-center text-slate-600 font-medium text-base p-8 mt-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                        Nenhum resultado encontrado para "{searchQuery}". <br />
                        <span className="text-sm font-bold text-rose-600 mt-2 block">Na dúvida, não ofereça!</span>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {filteredItems.map(item => {
                            const styles = getLevelStyles(item.level);
                            return (
                                <div
                                    key={item.id}
                                    className={`border rounded-2xl p-4 shadow-sm transition-all ${styles.bg} ${styles.border}`}
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className={`font-bold text-lg ${styles.text}`}>
                                            {item.name}
                                        </h3>
                                        <div className={`px-3.5 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5 ${styles.badgeBg} ${styles.badgeText}`}>
                                            {styles.icon}
                                            {item.level.toUpperCase()}
                                        </div>
                                    </div>
                                    <p className={`text-base font-medium leading-relaxed ${styles.text}`}>
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

        </div>
    );
}
