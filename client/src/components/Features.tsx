import {
  FileText, Box, ImageIcon, Trash2, Copy, Scissors,
  QrCode, BarChart2, FileOutput, StickerIcon, Camera,
  SplitSquareHorizontal, Wand2, Receipt,
} from 'lucide-react';

const features = [
  {
    id: 'editar',
    title: 'Editar Imagem',
    description: '2 modos de edição de imagem: 1 profissional de edição completa de PSD, outro mais simples com recorte com aspect ratio livre, rotação, espelhamento e ajuste de brilho, contraste e saturação.',
    icon: ImageIcon,
    credits: 'Grátis',
  },
  {
    id: 'sangria',
    title: 'Margem e Sangria',
    description: 'Adiciona sangria e marcas de corte ao PDF, converte cores para CMYK e gera o arquivo pronto para a gráfica. Frente e verso. Saída X-1a.',
    icon: FileText,
    credits: '5 créditos',
  },
  {
    id: 'adesivo',
    title: 'Adesivo com Recorte',
    description: 'Cria adesivos com linha de corte die-cut em curvas Bézier reais. Exporta em PDF (2 páginas: arte + corte) ou EPS. Formas automáticas, circulares, quadradas ou arredondadas.',
    icon: Scissors,
    credits: '5 créditos',
  },
  {
    id: 'folha',
    title: 'Folha de Recorte',
    description: 'Multiplica o adesivo em uma folha A4, A3 ou tamanho personalizado, com espaçamento e grade calculados automaticamente. PDF com arte e corte separados.',
    icon: StickerIcon,
    credits: '10 créditos',
  },
  {
    id: 'background',
    title: 'Remover Fundo',
    description: 'Remove o fundo de qualquer imagem automaticamente. Preview livre em resolução reduzida. Download em alta resolução (PNG transparente).',
    icon: Trash2,
    credits: '2 créditos',
  },
  {
    id: 'vetorizar',
    title: 'Vetorizar Imagem',
    description: 'Converte PNG ou JPEG em SVG ou PDF vetorial via traçado de contorno. Ideal para gravação a laser, plotagem e ampliação sem perda de qualidade.',
    icon: Wand2,
    credits: '1 crédito',
  },
  {
    id: '3d',
    title: 'Imagem para 3D',
    description: 'Transforma logos (extrusão) ou fotos (relevo / lithophane) em modelos 3D prontos para impressora 3D. Exporta em .STL e .3MF. Preview 3D interativo gratuito.',
    icon: Box,
    credits: '2 créditos',
  },
  {
    id: 'duplicar',
    title: 'Duplicar Imagem',
    description: 'Monta grids de cópias da mesma arte em folha A4. Ideal para etiquetas, cartões e materiais repetidos que serão cortados manualmente.',
    icon: Copy,
    credits: '2 créditos',
  },
  {
    id: 'foto-doc',
    title: 'Fotos para Documentos',
    description: 'Gera folha de fotos 3×4, 5×7 ou 2×2 com remoção de fundo automática, layout configurável e PDF pronto para imprimir. Gratuito.',
    icon: Camera,
    credits: 'Grátis',
  },
  {
    id: 'polaroid',
    title: 'Polaroids para Impressão',
    description: 'Monta grid de fotos no estilo polaroid em A4 ou A3. Arraste para reposicionar cada foto dentro do quadro antes de gerar o PDF. Gratuito.',
    icon: StickerIcon,
    credits: 'Grátis',
  },
  {
    id: 'pdf',
    title: 'Juntar / Dividir PDFs',
    description: 'Junta múltiplos PDFs em um só (na ordem que você escolher) ou divide um PDF em páginas separadas entregues em .zip. Gratuito.',
    icon: SplitSquareHorizontal,
    credits: 'Grátis',
  },
  {
    id: 'converter',
    title: 'Converter Arquivos',
    description: 'Converte imagens entre JPG, PNG, WebP e PDF. Sem perda de qualidade perceptível. Gratuito.',
    icon: FileOutput,
    credits: 'Grátis',
  },
  {
    id: 'qr',
    title: 'Gerar QR Code',
    description: 'Cria QR codes personalizados com cor, tamanho e logo embutido. Download em PNG de alta resolução pronto para produção.',
    icon: QrCode,
    credits: '1 crédito',
  },
  {
    id: 'barras',
    title: 'Código de Barras',
    description: 'Gera códigos EAN-13, EAN-8, Code 128 e outros padrões. Configuração de cor e tamanho. PNG pronto para inserção em embalagens.',
    icon: BarChart2,
    credits: '1 crédito',
  },
  {
    id: 'orcamento',
    title: 'Orçamento em PDF',
    description: 'Monta orçamentos profissionais com logo, itens, totais e cor personalizada. Exporta em PDF pronto para enviar ao cliente.',
    icon: Receipt,
    credits: '2 créditos',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-white">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
            15 ferramentas. Um só lugar.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tudo que uma gráfica, papelaria ou estúdio de design precisa para preparar, converter e finalizar arquivos para produção — sem sair do navegador.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            const isFree = feature.credits === 'Grátis';
            return (
              <div
                key={feature.id}
                className="group relative p-6 rounded-xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center md:items-start text-center md:text-left"
              >
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-5 bg-gradient-to-br from-[#00AEEF] to-[#EC008C] transition-opacity" />
                <div className="relative mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-[#00AEEF] to-[#EC008C] flex items-center justify-center text-white">
                  <Icon size={24} />
                </div>
                <div className="relative space-y-2 flex-1">
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <h3 className="font-display font-bold text-gray-900 text-lg">
                      {feature.title}
                    </h3>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isFree
                        ? 'bg-green-100 text-green-700'
                        : 'bg-cyan-50 text-cyan-700'
                    }`}>
                      {feature.credits}
                    </span>
                  </div>
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

        <p className="text-center text-sm text-gray-400 mt-10">
          Novas funções adicionadas regularmente. Todos os processamentos acontecem no seu navegador — seus arquivos nunca são armazenados em nossos servidores.
        </p>
      </div>
    </section>
  );
}
