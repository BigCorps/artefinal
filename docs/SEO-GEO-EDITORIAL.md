# SEO/GEO ArteFinal

Domínio canônico público: https://artefinal.app. A aplicação https://ia.artefinal.app continua noindex; não duplicar conteúdo editorial no app. Esta landing usa Vite SPA, mas artigos são HTML estático dentro de client/public/artigos com URLs limpas, rewrites explícitos antes do fallback e BlogPosting JSON-LD. Isso oferece HTML completo aos crawlers sem executar React.

Para publicar: criar novo HTML, atualizar índice (client/public/artigos/index.html), sitemap (client/public/sitemap.xml) e llms.txt, revisar links internos e executar build Vite. Não copiar textos existentes de terceiros. Validar canonical, sitemap, robots, resposta HTTP 200 e que /arte e o aplicativo permanecem intactos. O deploy por novo artigo é necessário nesta stack; não confundir com biblioteca Supabase de minhAi.

Inspecionar cada URL publicada no Google Search Console. Pautas futuras: adesivo die-cut e faca de recorte, PDF para gráfica, etiqueta com sangria e montagem de cartão frente e verso.
