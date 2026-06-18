# ArteFinal Landing Page

## ✅ Minhas Ideias Futuras

* Claude ith.almeida e Manus qpreco

* Quando a função principal estiver com o ajuste de sangria, e o de corte estiver pronto, Criar 2 cards com todo o fluxo de exemplo e colocar na landing

* criar mais funções, algumas grátis e configurar bubblewrap do repositório artefinal para publicar na Playstore 

## 🎨 Design Philosophy

**Modernismo Técnico Elegante**: Minimalismo com tipografia bold, paleta CMYK estratégica e espaçamento generoso. Foco em clareza funcional e confiança através de linhas limpas e hierarquia visual forte.

### Paleta CMYK
- **Cyan**: #00AEEF (Confiança, tecnologia)
- **Magenta**: #EC008C (Criatividade, energia)
- **Yellow**: #FFD500 (Otimismo, destaque)
- **Key (Preto)**: #1A1A1A (Autoridade, profissionalismo)

### Tipografia
- **Display**: Poppins (Headlines, CTAs)
- **Body**: Inter (Corpo de texto)

## 📁 Estrutura do Projeto

```
client/
  public/
    manifest.json          # PWA manifest para Bubblewrap
  src/
    components/
      Header.tsx           # Navegação e logo
      Hero.tsx             # Seção hero com CTA
      Features.tsx         # Grid de recursos
      CTA.tsx              # Call-to-action com stats
      Footer.tsx           # Footer com links
    pages/
      Home.tsx             # Página principal
    index.css              # Estilos globais e design tokens
    main.tsx               # Entry point
    App.tsx                # Router
  index.html               # HTML template
```

## 🚀 Setup Local

### Pré-requisitos
- Node.js 22.13.0+
- pnpm 10.4.1+

### Instalação

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview de produção
pnpm preview
```

O servidor estará disponível em `http://localhost:3000`

## 📱 Configuração para Bubblewrap (Play Store)

### O que é Bubblewrap?

Bubblewrap é uma ferramenta que converte Progressive Web Apps (PWAs) em Android Apps para publicação na Google Play Store.

### Pré-requisitos para Bubblewrap

1. **Java Development Kit (JDK)** 8 ou superior
2. **Android SDK** instalado
3. **Node.js** 14 ou superior
4. **Conta Google Play Developer** ($25 de taxa única)

## 🌐 Deploy no Vercel

O projeto está configurado para deploy automático no Vercel.

### Configurações de Build recomendadas:
- **Framework Preset**: Vite
- **Build Command**: `pnpm build`
- **Output Directory**: `dist`
- **Install Command**: `pnpm install`

O arquivo `vercel.json` já inclui as regras de **rewrites** necessárias para que o roteamento SPA (Single Page Application) funcione corretamente.

### Passos para Publicar na Play Store
#### 1. Instalar Bubblewrap

```bash
npm install -g @bubblewrap/cli
```

#### 2. Preparar o Build

```bash
# Build da landing page
pnpm build

# O arquivo será gerado em dist/
```

#### 3. Inicializar Projeto Bubblewrap

```bash
cd dist
bubblewrap init --manifest=manifest.json
```

Responda às perguntas:
- **App name**: ArteFinal
- **Package name**: com.artefinal.app
- **App version**: 1.0.0
- **Launcher icon**: Use o logo gerado
- **Start URL**: / (raiz)

#### 4. Gerar Assinatura (Keystore)

```bash
bubblewrap keytool
```

Isso criará um arquivo `keystore.jks` - **guarde com segurança!**

#### 5. Build do APK

```bash
bubblewrap build
```

Isso gerará:
- `app-release.aab` (Android App Bundle - para Play Store)
- `app-release.apk` (APK - para testes)

#### 6. Publicar na Play Store

1. Acesse [Google Play Console](https://play.google.com/console)
2. Crie um novo app
3. Preencha as informações:
   - Nome: ArteFinal
   - Descrição: Sua gráfica turbinada com IA
   - Screenshots: Use as imagens geradas
   - Categoria: Produtividade
4. Faça upload do `app-release.aab`
5. Configure preço (gratuito)
6. Envie para revisão

### Configurações Importantes

#### manifest.json

O arquivo `client/public/manifest.json` já está configurado com:
- ✅ Nome e descrição do app
- ✅ Ícones (192x192 e 512x512)
- ✅ Tema de cores (Cyan)
- ✅ Display mode: standalone
- ✅ Orientação: portrait-primary
- ✅ Screenshots para Play Store

#### Variáveis de Ambiente

Se precisar de variáveis de ambiente, crie um arquivo `.env`:

```env
VITE_APP_URL=https://home.artefinal.app
VITE_API_URL=https://www.artefinal.app
```

### Testes Antes de Publicar

```bash
# Testar localmente
pnpm dev

# Testar build
pnpm build
pnpm preview

# Testar APK em dispositivo Android
# Conecte um dispositivo Android via USB
adb install app-release.apk
```

## 🔗 URLs

- **Landing Page**: https://home.artefinal.app
- **App Web**: https://www.artefinal.app
- **Play Store**: [Será preenchido após publicação]

## 📦 Dependências Principais

- **React 19**: Framework UI
- **Tailwind CSS 4**: Styling
- **Lucide React**: Ícones
- **shadcn/ui**: Componentes UI
- **Framer Motion**: Animações (opcional)
- **Wouter**: Roteamento

## 🎯 Features da Landing Page

- ✅ Header responsivo com navegação
- ✅ Hero section com CTA
- ✅ Grid de 7 recursos principais
- ✅ Seção de call-to-action com stats
- ✅ Footer com links e redes sociais
- ✅ Design responsivo (mobile-first)
- ✅ Paleta CMYK integrada
- ✅ PWA ready (manifest.json)
- ✅ Otimizado para Bubblewrap

## 🔐 Segurança

- Sem dados sensíveis no código
- HTTPS obrigatório em produção
- Manifest.json com configurações de segurança
- CSP headers recomendados

## 📝 Licença

Proprietary - ArteFinal

## 👨‍💻 Desenvolvimento

### Adicionar Novos Componentes

1. Crie o arquivo em `client/src/components/`
2. Use Tailwind CSS para styling
3. Importe em `Home.tsx` ou `App.tsx`
4. Teste responsividade em mobile

### Atualizar Cores CMYK

Edite `client/src/index.css`:

```css
:root {
  --cmyk-cyan: #00AEEF;
  --cmyk-magenta: #EC008C;
  --cmyk-yellow: #FFD500;
  --cmyk-key: #1A1A1A;
}
```

### Adicionar Novas Fontes

Edite `client/index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet" />
```

Depois atualize `client/src/index.css`:

```css
--font-display: 'YourFont', sans-serif;
```

## 🐛 Troubleshooting

### Bubblewrap não reconhece manifest.json

```bash
# Certifique-se de que o arquivo está em dist/manifest.json
# Após o build, copie manualmente se necessário
cp client/public/manifest.json dist/
```

### Erro de assinatura

```bash
# Regenerar keystore
rm keystore.jks
bubblewrap keytool
```

### App não abre no Android

1. Verifique se a URL está acessível
2. Teste em um navegador Android primeiro
3. Verifique os logs: `adb logcat`

## 📞 Suporte

Para dúvidas sobre Bubblewrap, consulte:
- [Bubblewrap Docs](https://github.com/GoogleChromeLabs/bubblewrap)
- [PWA Documentation](https://web.dev/progressive-web-apps/)
- [Google Play Console Help](https://support.google.com/googleplay/android-developer)

---

**Desenvolvido com ❤️ para profissionais gráficos**
