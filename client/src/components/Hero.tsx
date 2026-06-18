import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Hero Section
 * Modernismo Técnico Elegante - Asymmetric layout with CMYK gradient
 * Features: Bold headline, CTA buttons, visual background
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-32 md:pt-32 md:pb-48">
      {/* Background gradient decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#00AEEF] to-[#EC008C] rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#00AEEF] to-[#EC008C] rounded-full blur-3xl opacity-15" />
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full border border-cyan-200">
                <Sparkles size={16} className="text-cyan-600" />
                <span className="text-sm font-semibold text-cyan-700">powered by minhAi</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight">
                Seu{' '}
                <span className="bg-gradient-to-r from-[#00AEEF] to-[#EC008C] bg-clip-text text-transparent">
                  arte-finalista com IA!
                </span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                Converta qualquer arquivo, transforme logos em SVG, crie modelos 3D, redimensione imagens e muito mais. Tudo que uma empresa gráfica, papelaria e estúdio de design precisa para editar arquivos rapidamente e enviar para produção.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://artefinal.app">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#00AEEF] to-[#EC008C] hover:opacity-90 text-white font-semibold group w-full sm:w-auto"
                >
                  Começar Grátis
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="https://artefinal.app/arte/login">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold w-full sm:w-auto"
                >
                  Entrar
                </Button>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col gap-3 pt-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-700 font-bold">✓</span>
                </div>
                Sem cartão de crédito necessário
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-700 font-bold">✓</span>
                </div>
                20 créditos grátis para começar
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-700 font-bold">✓</span>
                </div>
                Conversão instantânea de arquivos
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Floating card effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF] to-[#EC008C] rounded-2xl blur-2xl opacity-20 animate-pulse" />
              <img
                src="/arte.png"
                alt="ArteFinal Hero"
                className="relative rounded-2xl shadow-2xl w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
