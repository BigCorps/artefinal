import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * CTA Section
 * Modernismo Técnico Elegante - Prominent call-to-action with benefits
 * Features: Gradient background, benefit list, primary CTA
 */

export default function CTA() {
  const benefits = [
    'Conversão instantânea de arquivos',
    'Sem limite de uploads',
    'Resultados em alta qualidade',
    'Suporte para todos os formatos',
    'Sem anúncios ou watermarks',
    'Dados seguros e privados',
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-magenta-600 opacity-95" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
                Comece a converter agora
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Junte-se a milhares de profissionais gráficos que já estão economizando tempo e aumentando produtividade com ArteFinal.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="text-white/90 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a href="https://www.artefinal.app" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold group w-full sm:w-auto"
              >
                Começar Grátis Agora
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>

            {/* Trust text */}
            <p className="text-sm text-white/70">
              ✓ Sem cartão de crédito • 20 créditos grátis • Cancelar a qualquer momento
            </p>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                50K+
              </div>
              <p className="text-white/80 text-sm">Usuários ativos</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                1M+
              </div>
              <p className="text-white/80 text-sm">Conversões realizadas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                99.9%
              </div>
              <p className="text-white/80 text-sm">Uptime garantido</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                24/7
              </div>
              <p className="text-white/80 text-sm">Suporte disponível</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
