que# Quiz The Best Clean - Guia de Instalação

## 📦 Conteúdo da Pasta

```
the-best-clean/
├── quiz.html          (Arquivo principal do quiz - 49KB)
├── assets/
│   └── logo.png      (Logo da empresa - 38KB)
└── README.md         (Este arquivo)
```

## 🚀 Como Instalar no Seu Domínio

### Opção 1: Upload via FTP/cPanel

1. **Acesse seu painel de hospedagem** (cPanel, Plesk, etc.)
2. **Navegue até a pasta public_html** (ou www, htdocs)
3. **Crie uma pasta** chamada `quiz` (opcional, mas recomendado)
4. **Faça upload de todos os arquivos:**
   - `quiz.html`
   - Pasta `assets/` com o arquivo `logo.png`

### Opção 2: Upload via FTP (FileZilla, WinSCP)

1. **Conecte-se ao seu servidor** via FTP
2. **Navegue até public_html**
3. **Arraste e solte** toda a pasta `the-best-clean` ou seus conteúdos

### Opção 3: WordPress

1. **Crie uma nova página** no WordPress
2. **Adicione um bloco HTML personalizado**
3. **Copie todo o conteúdo** de `quiz.html`
4. **Cole no bloco HTML**
5. **Faça upload da logo:**
   - Vá em Mídia → Adicionar nova
   - Faça upload de `assets/logo.png`
   - Copie a URL da imagem
   - No código HTML, substitua `assets/logo.png` pela URL completa

## 🔗 Acessando o Quiz

Após o upload, acesse:

- **Se instalou na raiz:** `https://seudominio.com.br/quiz.html`
- **Se criou uma pasta quiz:** `https://seudominio.com.br/quiz/quiz.html`
- **WordPress:** A URL da página que você criou

## ⚙️ Configurações Importantes

### 1. Número do WhatsApp

**Já configurado:** `5543996429261`

Se precisar alterar, edite `quiz.html` e procure por:
```html
https://wa.me/5543996429261
```

Substitua pelo novo número (formato: código do país + DDD + número, sem espaços)

### 2. Renomear Arquivo (Opcional)

Para facilitar o acesso, você pode renomear:
- `quiz.html` → `index.html`

Assim o acesso fica: `https://seudominio.com.br/quiz/`

### 3. Logo

A logo está em `assets/logo.png`. Se precisar substituir:
1. Mantenha o mesmo nome (`logo.png`)
2. Substitua o arquivo na pasta `assets/`
3. Ou atualize o caminho no HTML (linha ~822)

## 📱 Funcionalidades Implementadas

✅ **Conversão Otimizada:**
- Timer de urgência (24h countdown)
- Badge de escassez (3 vagas)
- Notificações de prova social
- Trust badges (10 anos, 5.000 clientes, 100% garantia)
- Botão WhatsApp flutuante

✅ **Design Responsivo:**
- Funciona perfeitamente em mobile, tablet e desktop
- Fontes otimizadas para cada dispositivo
- Touch-friendly (botões grandes para toque)

✅ **UX Otimizada:**
- Avanço automático ao clicar na resposta
- Mensagens motivacionais em cada pergunta
- 3 níveis de resultado personalizados
- Animações suaves

## 🎨 Personalização Rápida

### Alterar Cores da Marca

Procure no arquivo `quiz.html` por:
```css
#B8935E  /* Dourado principal */
#D4AF6A  /* Dourado claro */
#1a1a1a  /* Preto */
```

### Alterar Textos

- **Título principal:** Linha ~827
- **Perguntas:** Linhas ~870-1050
- **Resultados:** Linhas ~1260-1300
- **Mensagens de urgência:** Linha ~830

### Alterar Trust Badges

Linha ~838:
```html
<div class="trust-badge-text">+10 Anos</div>
<div class="trust-badge-text">+5.000</div>
<div class="trust-badge-text">100%</div>
```

## 🔍 Testando Localmente

Antes de fazer upload, você pode testar:
1. Abra `quiz.html` diretamente no navegador
2. Teste todas as perguntas
3. Verifique se o WhatsApp abre corretamente
4. Teste em diferentes tamanhos de tela (F12 → modo responsivo)

## 📊 Rastreamento (Opcional)

Para adicionar Google Analytics:
1. Abra `quiz.html`
2. Adicione seu código de rastreamento antes de `</head>`
3. Adicione eventos personalizados nos botões importantes

## 🆘 Suporte

### Problemas Comuns

**Logo não aparece:**
- Verifique se a pasta `assets/` foi enviada
- Confirme o caminho da imagem no código
- Limpe o cache do navegador (Ctrl+F5)

**WhatsApp não abre:**
- Verifique se o número está correto
- Teste em um dispositivo mobile
- Confirme que não há espaços no número

**Layout quebrado:**
- Certifique-se de que enviou o arquivo completo
- Verifique se não há erros de codificação (use UTF-8)

## 📄 Licença

Este quiz foi desenvolvido exclusivamente para **The Best Clean**.
Todos os direitos reservados.

---

**Desenvolvido com ❤️ para The Best Clean**
**Data:** Fevereiro 2026
**Versão:** 1.0
