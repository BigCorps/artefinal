# ArteFinal landing — GTM / GA4

- Landing: `artefinal.app`
- Ferramenta: `ia.artefinal.app`
- GTM compartilhado: `GTM-MWC4F9RN`
- GA4 compartilhado: `G-VG5BRD5626`

A landing passa a usar GTM em vez do `gtag.js` direto que existia em `client/index.html`, evitando page_view duplicado quando o container for configurado.

## Eventos da landing

- `artefinal_app_click` — saída da landing para a ferramenta/login
- `start_free` — clique em "Começar Grátis"

A ferramenta, no repo minhAi, envia `begin_checkout` e `purchase` para compra de créditos.

**Regra comercial correta:** o cadastro dá **20 créditos grátis. Não existe trial do ArteFinal.**

## GTM

1. Criar Google Tag `G-VG5BRD5626` em Initialization / All Pages.
2. Usar o mesmo container nos dois hosts.
3. Criar GA4 Event para `artefinal_app_click`, `start_free`, `begin_checkout` e `purchase`.
4. Marcar `purchase` como conversão principal. `start_free` pode ser secundária no início.
5. Validar navegação `artefinal.app -> ia.artefinal.app` no DebugView/Tag Assistant.
