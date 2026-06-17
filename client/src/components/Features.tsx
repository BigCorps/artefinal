import { FileText, Zap, Box, ImageIcon as ImageIconLucide, Trash2, Copy, Plus } from 'lucide-react';

/**
 * Features Section
 * Modernismo Técnico Elegante - Grid layout with feature cards
 * Features: 7 key capabilities with icons and descriptions
 */

const features = [
  {
    id: 'conversion',
    title: 'Conversão de Arquivos',
    description: 'Converta entre qualquer formato de arquivo. PDF, PNG, JPG, SVG, DXF e muito mais.',
    icon: FileText,
    color: 'from-cyan-500 to-magenta-600',
  },
  {
    id: 'svg',
    title: 'Logo em SVG',
    description: 'Transforme logos rasterizados em vetores escaláveis sem perda de qualidade.',
    icon: Zap,
    color: 'from-magenta-500 to-magenta-600',
  },
  {
    id: '3d',
    title: 'Imagem em 3D',
    description: 'Converta imagens em modelos 3D (STL e 3MF) prontos para impressão.',
    icon: Box,
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    id: 'resize',
    title: 'Redimensionar Imagens',
    description: 'Ajuste dimensões mantendo qualidade. Suporte a lotes para múltiplas imagens.',
    icon: ImageIconLucide,
    color: 'from-cyan-500 to-magenta-600',
  },
  {
    id: 'background',
    title: 'Remover Fundo',
    description: 'Remova fundos automaticamente com IA. Resultado limpo e profissional.',
    icon: Trash2,
    color: 'from-magenta-500 to-yellow-600',
  },
  {
    id: 'duplicate',
    title: 'Duplicar para Impressão',
    description: 'Crie múltiplas cópias em uma página: 3x4, polaroid, fotos de documento.',
    icon: Copy,
    color: 'from-yellow-500 to-magenta-600',
  },
  {
    id: 'more',
    title: 'E muito mais',
    description: 'Novos recursos adicionados regularmente. Tudo que você precisa em um só lugar.',
    icon: Plus,
    color: 'from-cyan-500 to-magenta-600',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
            Tudo que você precisa para editar arquivos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uma plataforma completa com todas as ferramentas essenciais para gráficas, papelarias e estúdios de design.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative p-6 rounded-xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-5 bg-gradient-to-br ${feature.color} transition-opacity`} />

                {/* Icon */}
                <div className={`relative mb-4 w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center text-white`}>
                  <Icon size={24} />
                </div>

                {/* Content */}
                <div className="relative space-y-2">
                  <h3 className="font-display font-bold text-gray-900 text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-magenta-600" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
