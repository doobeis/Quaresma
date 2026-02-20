import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quaresma Prática 🐟 — Cardápio Semanal Sem Carne",
  description:
    "Gere cardápios semanais criativos e econômicos para a Quaresma. Receitas de peixes, vegetarianos e massas. Lista de compras automática!",
  keywords: ["quaresma", "receitas", "cardápio", "peixe", "vegetariano", "páscoa"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans antialiased bg-slate-50 text-slate-800">
        {children}
      </body>
    </html>
  );
}
