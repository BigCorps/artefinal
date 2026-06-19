import { FileText, Box, ImageIcon as ImageIconLucide, Trash2, Copy, Plus } from 'lucide-react';

const features = [
  {
    id: 'conversion',
    title: 'Conversão de Arquivos',
    description: 'Converta entre qualquer formato de arquivo. PDF, PNG, JPG, SVG, DXF e muito mais.',
    icon: FileText,
    color: 'from-[#00AEEF] to-[#EC008C]',
  },
  {
    id: '3d',
    title: 'Imagem em 3D',
    description: 'Converta imagens em modelos 3D (STL e 3MF) prontos para impressão.',
    icon: Box,
    color: 'from-[#00AEEF] to-[#EC008C]',
  },
  {
    id: 'resize',
    title: 'Redimensionar Imagens',
    description: 'Ajuste dimensões mantendo qualidade. Suporte a lotes para múltiplas imagens.',
    icon: ImageIconLucide,
    color: 'from-[#00AEEF] to-[#EC008C]',
  },
  {
    id: 'background',
    title: 'Remover Fundo',
    description: 'Remova fundos automaticamente com IA. Resultado limpo e profissional.',
    icon: Trash2,
    color: 'from-[#00AEEF] to-[#EC008C]',
  },
  {
    id: 'duplicate',
    title: 'Duplicar para Impressão',
    description: 'Crie múltiplas cópias em uma página: 3x4, polaroid, fotos de documento.',
    icon: Copy,
    color: 'from-[#00AEEF] to-[#EC008C]',
  },
  {
    id: 'more',
    title: 'E muito mais',
    description: 'Novos recursos adicionados regularmente. Tudo que você precisa em um só lugar.',
    icon: Plus,
    color: 'from-[#00AEEF] to-[#EC008C]',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-white">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
            Tudo que você precisa para editar arquivos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uma plataforma completa com todas as ferramentas essenciais para gráficas, papelarias e estúdios de design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative p-6 rounded-xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center md:items-start text-center md:text-left"
              >
                <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-5 bg-gradient-to-br ${feature.color} transition-opacity`} />
                <div className={`relative mb-4 w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center text-white`}>
                  <Icon size={24} />
                </div>
                <div className="relative space-y-2">
                  <h3 className="font-display font-bold text-gray-900 text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00AEEF] to-[#EC008C]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
