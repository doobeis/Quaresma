"use client";

import { X, ShoppingCart, Copy, Check, RotateCcw } from "lucide-react";
import { useShoppingList } from "@/hooks/useShoppingList";
import { DayMenu } from "@/hooks/useMenu";
import { useState } from "react";

interface ShoppingListModalProps {
    menu: DayMenu[];
    onClose: () => void;
}

export default function ShoppingListModal({
    menu,
    onClose,
}: ShoppingListModalProps) {
    const { items, toggleItem, copyToWhatsApp, resetChecked, totalChecked } =
        useShoppingList(menu);
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        const ok = await copyToWhatsApp();
        if (ok) {
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex flex-col bg-white"
            role="dialog"
            aria-modal="true"
            aria-label="Lista de compras"
        >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-slate-100 px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                    <ShoppingCart className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                    <p className="font-bold text-slate-800 text-sm">Lista de Supermercado</p>
                    <p className="text-xs text-slate-400">
                        {totalChecked} de {items.length} itens marcados
                    </p>
                </div>
                <button
                    onClick={onClose}
                    className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
                    aria-label="Fechar"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>

            {/* Progress bar */}
            <div className="h-1 bg-slate-100">
                <div
                    className="h-full bg-teal-500 transition-all duration-300"
                    style={{
                        width: items.length > 0 ? `${(totalChecked / items.length) * 100}%` : "0%",
                    }}
                />
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto px-4 py-3">
                <div className="space-y-1">
                    {items.map((item) => {
                        const key = item.name.toLowerCase().trim();
                        return (
                            <button
                                key={key}
                                onClick={() => toggleItem(key)}
                                className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-colors ${item.checked
                                        ? "bg-teal-50 opacity-60"
                                        : "bg-slate-50 hover:bg-slate-100"
                                    }`}
                            >
                                {/* Checkbox */}
                                <div
                                    className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors ${item.checked
                                            ? "bg-teal-500 border-teal-500"
                                            : "border-slate-300"
                                        }`}
                                >
                                    {item.checked && (
                                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                    )}
                                </div>

                                {/* Name */}
                                <span
                                    className={`flex-1 text-sm font-medium ${item.checked
                                            ? "line-through text-slate-400"
                                            : "text-slate-800"
                                        }`}
                                >
                                    {item.name}
                                </span>

                                {/* Quantity */}
                                <span className="text-xs text-slate-400 shrink-0">
                                    {item.qtys.join(" / ")}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Footer actions */}
            <div className="sticky bottom-0 bg-white border-t border-slate-100 p-4 space-y-2">
                <button
                    onClick={handleCopy}
                    className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3.5 rounded-xl transition-colors text-sm"
                >
                    {copied ? (
                        <>
                            <Check className="w-4 h-4" />
                            Copiado para o WhatsApp!
                        </>
                    ) : (
                        <>
                            <Copy className="w-4 h-4" />
                            Copiar Lista para WhatsApp
                        </>
                    )}
                </button>

                {totalChecked > 0 && (
                    <button
                        onClick={resetChecked}
                        className="w-full flex items-center justify-center gap-2 text-slate-500 hover:text-slate-700 text-sm py-2 transition-colors"
                    >
                        <RotateCcw className="w-3.5 h-3.5" />
                        Desmarcar todos
                    </button>
                )}
            </div>
        </div>
    );
}
