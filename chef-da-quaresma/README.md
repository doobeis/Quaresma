# 🐟 Quaresma Prática

Cardápio semanal sem carne para a Quaresma — receitas econômicas do dia a dia brasileiro com lista de compras automática.

## ✨ Funcionalidades

- 🗓 Gera cardápio de 7 dias (almoço + jantar) automaticamente
- 🔄 Troca pratos individuais com 1 clique
- 📋 Lista de compras por receita (com checkboxes)
- 📲 Compartilhamento via WhatsApp
- 💾 Cardápio salvo automaticamente no navegador
- 🐟 +18 receitas econômicas (peixe, massas, ovos, vegetariano)

## 🚀 Deploy rápido na Vercel (recomendado)

**Opção 1 — Arrastar pasta:**
1. Acesse [vercel.com/new](https://vercel.com/new)
2. Selecione "Deploy from local" e arraste a pasta `chef-da-quaresma`
3. Clique em Deploy — pronto!

**Opção 2 — Via GitHub:**
1. Suba a pasta `chef-da-quaresma` para um repositório no GitHub
2. No [vercel.com/new](https://vercel.com/new), importe o repositório
3. Clique em Deploy — sem configurações adicionais necessárias

## 🛠 Desenvolvimento local

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar produção local
npm start
```

Acesse: **http://localhost:3000**

## 📁 Estrutura

chef-da-quaresma/
├── app/
│   ├── page.tsx          # Página principal
│   ├── layout.tsx        # Layout raiz + SEO
│   └── globals.css       # Tailwind v4
├── components/
│   ├── Header.tsx        # Header sticky com logo e countdown
│   ├── WeekCard.tsx      # Card de cada dia
│   ├── RecipeDetailModal.tsx  # Modal com lista de compras
│   ├── ShoppingListModal.tsx  # Lista geral consolidada
│   ├── QuaresmaBanner.tsx     # Frase diária da Quaresma
│   └── Logo.tsx          # Logo SVG inline
├── data/
│   └── recipes.ts        # 18+ receitas com ingredientes e preparo
├── hooks/
│   ├── useMenu.ts        # Estado do cardápio + localStorage
│   └── useShoppingList.ts # Consolidação de ingredientes
└── public/
    └── images/           # Fotos das categorias
```

## 🌐 Variáveis de ambiente

Nenhuma variável necessária — o app é 100% client-side com localStorage.

## 📦 Stack

- **Next.js 16** (App Router, Static Export)
- **Tailwind CSS v4**
- **TypeScript**
- **Lucide React** (ícones)
