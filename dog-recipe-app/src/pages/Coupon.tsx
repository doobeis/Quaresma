import { Copy, ExternalLink, Check, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export default function Coupon() {
  const [copied, setCopied] = useState(false);
  const couponCode = "CAOLINARIA";

  const handleCopy = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)] bg-slate-50 pb-20">
      <main className="flex-1 px-4 py-6 max-w-md mx-auto w-full">
        {/* Banner Section */}
        <div className="bg-[#005faa] rounded-3xl text-white shadow-xl relative overflow-hidden mb-8 h-40 flex items-center mb-6">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Petz_logo.svg/1024px-Petz_logo.svg.png" 
            alt="Petz bg" 
            className="absolute right-0 h-[150%] opacity-20 translate-x-1/4"
          />
          <div className="relative z-10 p-6 w-full pb-8">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Parceria Exclusiva</span>
            </div>
            
            <h1 className="text-3xl font-black mb-1 leading-tight text-white drop-shadow-md">
              10% OFF
            </h1>
            <p className="text-[#fceabb] text-sm font-black flex items-center drop-shadow-sm uppercase">
              <ShoppingBag className="w-4 h-4 mr-1.5" />
              na Petz
            </p>
          </div>
        </div>

        {/* Coupon Code Section */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 mb-6">
          <h2 className="text-lg font-bold text-slate-800 mb-1">Seu Cupom de Desconto</h2>
          <p className="text-slate-500 text-sm mb-4">Use o código abaixo no carrinho de compras para garantir seu desconto exclusvio.</p>
          
          <div className="flex items-center p-1 bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl">
            <div className="flex-1 text-center py-3 px-4">
              <span className="text-2xl font-black tracking-widest text-brand-orange">{couponCode}</span>
            </div>
            <button
              onClick={handleCopy}
              className={cn(
                "flex items-center justify-center w-14 h-14 rounded-xl transition-all",
                copied 
                  ? "bg-green-500 text-white" 
                  : "bg-brand-yellow text-brand-orange hover:bg-brand-yellow/80"
              )}
            >
              {copied ? <Check className="w-6 h-6" /> : <Copy className="w-6 h-6" />}
            </button>
          </div>
          {copied && (
            <p className="text-green-600 text-xs font-bold text-center mt-3 animate-fade-in">
              Cupom copiado com sucesso!
            </p>
          )}
        </div>

        {/* Actions */}
        <a 
          href="https://www.petz.com.br/parceiro/caolinaria" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full bg-brand-orange text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-brand-orange/30 hover:bg-brand-orange/90 transition-transform active:scale-95 mb-8"
        >
          Acessar a Petz
          <ExternalLink className="w-5 h-5 ml-2" />
        </a>

        {/* Recommended Products */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="text-lg font-black text-slate-800">Mais comprados na Petz</h2>
            <div className="text-xs font-bold text-brand-orange bg-brand-orange/10 px-2 py-1 rounded-lg">
              10% OFF c/ cupom
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Product 1 - Tapete */}
            <a 
              href="https://www.petz.com.br/parceiro/caolinaria" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center active:scale-[0.98] transition-transform hover:border-brand-yellow/50 group"
            >
              <div className="w-24 h-24 mb-3 relative">
                <img src="/tapete-higienico.png" alt="Tapete Higiênico" className="w-full h-full object-contain p-1" />
                <div className="absolute -top-2 -right-2 bg-rose-500 text-white text-[10px] font-black px-1.5 py-0.5 rounded-lg shadow-sm">TOP 1</div>
              </div>
              <h3 className="text-xs font-bold text-slate-700 leading-tight mb-2 group-hover:text-brand-orange transition-colors">Tapete Higiênico Petz Definitivo 30un</h3>
              <div className="mt-auto w-full">
              </div>
            </a>
            
            {/* Product 2 - Simparic */}
            <a 
              href="https://www.petz.com.br/parceiro/caolinaria" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center active:scale-[0.98] transition-transform hover:border-brand-yellow/50 group"
            >
              <div className="w-24 h-24 mb-3 relative">
                <img src="/simparic.png" alt="Simparic" className="w-full h-full object-contain p-1" />
                <div className="absolute -top-2 -left-2 bg-brand-yellow text-brand-orange text-[10px] font-black px-1.5 py-0.5 rounded-lg shadow-sm z-10">-20%</div>
              </div>
              <h3 className="text-xs font-bold text-slate-700 leading-tight mb-2 group-hover:text-brand-orange transition-colors">Antipulgas Simparic Zoetis 20 mg</h3>
              <div className="mt-auto w-full">
              </div>
            </a>
            
            {/* Product 3 - Bravecto */}
            <a 
              href="https://www.petz.com.br/parceiro/caolinaria" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center active:scale-[0.98] transition-transform hover:border-brand-yellow/50 group"
            >
              <div className="w-24 h-24 mb-3 relative">
                <img src="/bravecto.png" alt="Bravecto" className="w-full h-full object-contain p-1" />
                <div className="absolute -top-2 -left-2 bg-brand-yellow text-brand-orange text-[10px] font-black px-1.5 py-0.5 rounded-lg shadow-sm z-10">-25%</div>
              </div>
              <h3 className="text-xs font-bold text-slate-700 leading-tight mb-2 group-hover:text-brand-orange transition-colors">Antipulgas Bravecto Cães 4,5 a 10kg</h3>
              <div className="mt-auto w-full">
              </div>
            </a>
            
            {/* Product 4 - Probiótico */}
            <a 
              href="https://www.petz.com.br/parceiro/caolinaria" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center active:scale-[0.98] transition-transform hover:border-brand-yellow/50 group"
            >
              <div className="w-24 h-24 mb-3">
                <img src="/probiotico.png" alt="Probiótico" className="w-full h-full object-contain py-4" />
              </div>
              <h3 className="text-xs font-bold text-slate-700 leading-tight mb-2 group-hover:text-brand-orange transition-colors">Aditivo Probiótico Pet Avert para Cães</h3>
              <div className="mt-auto w-full">
              </div>
            </a>
          </div>
        </div>

        {/* Rules/Info */}
        <div className="mt-8 px-2">
          <h3 className="text-sm font-bold text-slate-700 mb-2">Regras do Cupom</h3>
          <ul className="text-xs text-slate-500 space-y-2 list-disc pl-4">
            <li>Cupom válido para compras no site e aplicativo Petz.</li>
            <li>O desconto de 10% é aplicado diretamente no fechamento do pedido usando o código <strong className="text-slate-700">{couponCode}</strong>.</li>
            <li>Acumule +5% de desconto ao escolher a opção de retirada na loja para pedidos acima de R$ 100.</li>
            <li>Consulte os termos e condições completos no site oficial da Petz.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
