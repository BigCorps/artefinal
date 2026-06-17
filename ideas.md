# ArteFinal Landing Page - Brainstorming de Design

## Três Abordagens Estilísticas

### 1. **Modernismo Técnico Elegante**
Introdução breve: Design minimalista com tipografia bold e gradientes CMYK sutis. Foco em clareza, profissionalismo e confiança através de linhas limpas e espaçamento generoso.
Probabilidade: 0.08

### 2. **Expressionismo Gráfico Vibrante**
Introdução breve: Paleta CMYK em destaque com composições ousadas, formas geométricas dinâmicas e animações fluidas. Transmite criatividade, energia e inovação.
Probabilidade: 0.06

### 3. **Minimalismo Corporativo Sofisticado**
Introdução breve: Abordagem clean com tipografia elegante, muito whitespace e ênfase em funcionalidades através de ícones e micro-interações sutis.
Probabilidade: 0.04

---

## Abordagem Escolhida: **Modernismo Técnico Elegante**

### Design Movement
Modernismo Digital com influências de Design Suíço — ordem, hierarquia clara, tipografia precisa e uso estratégico da paleta CMYK como elemento de identidade.

### Core Principles
1. **Clareza Funcional**: Cada elemento comunica um propósito específico; sem decoração desnecessária
2. **Hierarquia Tipográfica Forte**: Contraste marcante entre headlines (bold, CMYK) e body text (regular, neutro)
3. **Espaçamento Generoso**: Whitespace como elemento de design, não como vazio
4. **Paleta CMYK Estratégica**: Cores primárias (Cyan, Magenta, Yellow) usadas como acentos e gradientes, nunca todas juntas caoticamente

### Color Philosophy
- **Cyan (#00AEEF)**: Confiança, tecnologia, inovação
- **Magenta (#EC008C)**: Criatividade, energia, diferenciação
- **Yellow (#FFD500)**: Otimismo, clareza, destaque
- **Key/Preto (#1A1A1A)**: Autoridade, profissionalismo, legibilidade
- **Neutros**: Branco, cinza claro (para whitespace) e cinza escuro (para texto secundário)

Gradientes CMYK são usados em CTAs e seções de destaque, criando movimento visual sem caos.

### Layout Paradigm
- **Hero assimétrico**: Imagem/elemento visual à direita, texto à esquerda (ou vice-versa em mobile)
- **Seções alternadas**: Conteúdo + imagem alternam de lado para criar ritmo visual
- **Grid flexível**: Máximo de 3 colunas em desktop, 1 coluna em mobile, com transições suaves
- **Navegação fixa**: Header minimalista com logo, nav links e CTA principal

### Signature Elements
1. **Gradiente CMYK Dinâmico**: Usado em botões, headers de seção e elementos de destaque
2. **Ícones Geométricos Customizados**: Representam cada funcionalidade (conversão, SVG, 3D, etc.)
3. **Linhas Divisórias Sutis**: Separadores em CMYK que conectam seções visualmente

### Interaction Philosophy
- **Hover Effects Sutis**: Botões escalam levemente (1.05x), mudança de cor em gradiente
- **Transições Suaves**: 200-300ms ease-out para todas as animações
- **Feedback Imediato**: Cliques em CTAs mostram feedback visual (ripple effect ou scale)
- **Scroll Reveal**: Elementos entram suavemente conforme o usuário faz scroll

### Animation Guidelines
- **Entrada de Seções**: Fade-in + slide-up (100-200ms) quando visível no viewport
- **Hover em Cards**: Elevação sutil (shadow aumenta), cor de fundo muda levemente
- **Botões CTA**: Scale(0.97) on active, transição suave de cor em hover
- **Scroll Parallax**: Imagens de fundo se movem levemente diferente do conteúdo (subtle, não exagerado)
- **Respeitar `prefers-reduced-motion`**: Desabilitar animações para usuários que preferem

### Typography System
- **Display Font**: `Poppins` (700/600 weight) — Headlines, títulos de seção, CTAs
- **Body Font**: `Inter` (400/500 weight) — Corpo de texto, descrições
- **Hierarchy**:
  - H1: 48px (desktop), 32px (mobile) | Poppins 700 | Cor: Key (#1A1A1A)
  - H2: 36px (desktop), 24px (mobile) | Poppins 600 | Cor: Key ou Cyan
  - H3: 24px | Poppins 600 | Cor: Key
  - Body: 16px | Inter 400 | Cor: #4B5563 (cinza escuro)
  - Small: 14px | Inter 400 | Cor: #9CA3B8 (cinza médio)

### Brand Essence
**One-liner**: ArteFinal é a plataforma de edição inteligente para profissionais gráficos que precisam converter, editar e preparar arquivos para produção em segundos, não horas.

**Personality Adjectives**: Confiável, Inovador, Prático

### Brand Voice
- **Headlines**: Diretos, ousados, focados em benefício ("Converta Qualquer Arquivo em Segundos", "De Ideia para Produção em Um Clique")
- **CTAs**: Ação clara e urgência leve ("Começar Grátis Agora", "Teste Sem Cartão de Crédito")
- **Descrições**: Profissionais mas acessíveis, sem jargão desnecessário

**Exemplos**:
- ❌ "Welcome to our website" → ✅ "Sua gráfica, turbinada com IA"
- ❌ "Get started today" → ✅ "Comece a converter agora"

### Wordmark & Logo
- **Conceito**: Símbolo gráfico abstrato representando conversão/transformação — setas circulares ou forma geométrica que evoca movimento
- **Marca**: Sem texto, apenas símbolo, em preto (#1A1A1A) ou com gradiente CMYK
- **Uso**: Header (32px), favicon (16px), footer (24px)

### Signature Brand Color
**Cyan (#00AEEF)** — Cor primária que aparece em gradientes, botões primários e elementos de destaque. Representa tecnologia, confiança e inovação.

---

## Decisões de Implementação

1. **Fonte**: Poppins (headlines) + Inter (body) via Google Fonts
2. **Componentes**: Cards com shadow sutil, botões com gradiente CMYK, ícones Lucide React
3. **Responsividade**: Mobile-first, breakpoints em 640px (tablet) e 1024px (desktop)
4. **Animações**: Framer Motion para scroll reveals, CSS transitions para hover/active states
5. **Acessibilidade**: ARIA labels, focus rings visíveis, suporte a keyboard navigation
