import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WorkflowAnimation from './WorkflowAnimation';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-32 md:pt-32 md:pb-48">
      {/* Background gradient decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#00AEEF] to-[#EC008C] rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#00AEEF] to-[#EC008C] rounded-full blur-3xl opacity-15" />
      </div>

      <div className="container relative z-10">
        {/* Mobile Layout: Prioritize Animation */}
        <div className="md:hidden flex flex-col items-center text-center gap-8">
          {/* Title */}
          <div className="space-y-4 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full border border-cyan-200">
              <Sparkles size={16} className="text-cyan-600" />
              <span className="text-sm font-semibold text-cyan-700">powered by minhAi</span>
            </div>

            <h1 className="text-4xl font-display font-bold text-gray-900 leading-tight">
              Seu{' '}
              <span className="bg-gradient-to-r from-[#00AEEF] to-[#EC008C] bg-clip-text text-transparent">
                arte-finalista com IA!
              </span>
            </h1>
          </div>

          {/* Animation - Featured on Mobile */}
          <div className="w-full flex justify-center">
            <WorkflowAnimation />
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 w-full">
            <a href="https://artefinal.app" className="w-full">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#00AEEF] to-[#EC008C] hover:opacity-90 text-white font-semibold group w-full"
              >
                Começar Grátis
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="https://artefinal.app/arte/login" className="w-full">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold w-full"
              >
                Entrar
              </Button>
            </a>
          </div>

          {/* Text - Appears on scroll */}
          <div className="space-y-6 pt-4">
            <p className="text-base text-gray-600 leading-relaxed">
              Converta arquivos, crie sangrias, marcas de corte, transforme logos em SVG, crie modelos 3D, redimensione imagens, QR codes, código de barras, orçamentos e muito mais. Tudo que uma empresa gráfica, papelaria e estúdio de design precisa para editar arquivos rapidamente e enviar para produção. Interagindo com o assistente, você pode descobrir como ele pode ajudar a sua produção gráfica a ser mais ágil e prática.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-col items-center gap-3 text-sm text-gray-600">
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
        </div>

        {/* Desktop Layout: Side by Side */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8 flex flex-col items-start text-left">
            <div className="space-y-4 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full border border-cyan-200">
                <Sparkles size={16} className="text-cyan-600" />
                <span className="text-sm font-semibold text-cyan-700">powered by minhAi</span>
              </div>

              <h1 className="text-5xl font-display font-bold text-gray-900 leading-tight">
                Seu{' '}
                <span className="bg-gradient-to-r from-[#00AEEF] to-[#EC008C] bg-clip-text text-transparent">
                  arte-finalista com IA!
                </span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                Converta arquivos, crie sangrias, marcas de corte, transforme logos em SVG, crie modelos 3D, redimensione imagens, QR codes, código de barras, orçamentos e muito mais. Tudo que uma empresa gráfica, papelaria e estúdio de design precisa para editar arquivos rapidamente e enviar para produção. Interagindo com o assistente, você pode descobrir como ele pode ajudar a sua produção gráfica a ser mais ágil e prática.
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
            <div className="flex flex-col items-start gap-3 pt-4 text-sm text-gray-600">
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

          {/* Right: Visual Animation */}
          <div className="flex items-center justify-center">
            <WorkflowAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
