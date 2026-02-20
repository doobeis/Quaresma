import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dashboard da Quaresma 2026",
  description:
    "Monitore seu jejum e a economia financeira gerada pelo seu sacrifício durante os 40 dias da Quaresma.",
  keywords: ["quaresma", "jejum", "economia", "páscoa", "2026"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
