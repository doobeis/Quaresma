export default function Footer() {
    return (
        <footer className="mt-auto bg-white border-t border-warm-100 py-8 px-5 rounded-t-[2.5rem] shadow-[0_-5px_20px_rgba(0,0,0,0.02)]">
            <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 bg-warm-50 rounded-2xl flex items-center justify-center mb-4 text-2xl shadow-inner border border-warm-100 font-bold text-warm-500">
                    C
                </div>
                <h3 className="font-extrabold text-slate-800 text-lg mb-1">
                    Cãolinaria
                </h3>
                <p className="text-slate-500 font-medium text-sm mb-4">
                    Receitas feitas com muito amor para o seu melhor amigo.
                </p>
                <div className="flex gap-4 mb-2">
                    <span className="text-xs font-bold text-slate-400 cursor-pointer hover:text-warm-500 transition-colors">Dicas</span>
                    <span className="text-xs font-bold text-slate-300">•</span>
                    <span className="text-xs font-bold text-slate-400 cursor-pointer hover:text-warm-500 transition-colors">Sobre Nós</span>
                    <span className="text-xs font-bold text-slate-300">•</span>
                    <span className="text-xs font-bold text-slate-400 cursor-pointer hover:text-warm-500 transition-colors">Contato</span>
                </div>
                <p className="text-slate-400 text-[10px] font-bold mt-2 opacity-60">
                    © {new Date().getFullYear()} Cãolinaria. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}
