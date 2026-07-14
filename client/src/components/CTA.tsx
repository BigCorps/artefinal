import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTA() {
  const benefits = [
    'Processamento no navegador — seus arquivos nunca sobem para nossas servidores',
    'Sem anúncios nem watermarks',
    'Saída CMYK pronta para gráfica (PDF X-1a)',
    'Funções gratuitas sem necessidade de cadastro',
    'Disponível no navegador e no Google Play',
    '20 créditos grátis ao criar sua conta',
  ];

  const highlights = [
    { value: '15', label: 'ferramentas de produção gráfica' },
    { value: 'PDF X-1a', label: 'padrão profissional de impressão' },
    { value: 'EPS + PDF', label: 'formatos aceitos pelas gráficas' },
    { value: 'Grátis', label: 'para editar, converter, e muito mais' },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#00AEEF] to-[#EC008C] opacity-95" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="space-y-4 flex flex-col items-center md:items-start">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
                Pronto para produção.<br />Direto do navegador.
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                ArteFinal reúne as ferramentas que designers, gráficas e papelarias usam no dia a dia — PSD, PDF, PNG, EPS, tudo sem instalar nada, sem depender de software caro, sem enviar arquivos para servidores de terceiros.
              </p>
            </div>

            <div className="space-y-3 flex flex-col items-center md:items-start">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-white" />
                  </div>
                  <span className="text-white/90 font-medium text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a href="https://ia.artefinal.app">
                <Button
                  size="lg"
                  className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold group w-full sm:w-auto"
                >
                  Começar Grátis
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="https://play.google.com/store/apps/details?id=app.artefinal.ia" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/10 font-semibold w-full sm:w-auto"
                >
                  Ver no Google Play
                </Button>
              </a>
            </div>

            <p className="text-sm text-white/70 text-center md:text-left">
              ✓ Sem cartão de crédito &nbsp;·&nbsp; 20 créditos grátis &nbsp;·&nbsp; Cancele quando quiser
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((h, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-2xl md:text-3xl font-display font-bold text-white mb-2 leading-tight">
                  {h.value}
                </div>
                <p className="text-white/80 text-sm leading-snug">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
