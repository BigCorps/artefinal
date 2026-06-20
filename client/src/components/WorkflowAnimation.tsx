import { useState, useEffect } from 'react';
import {
  Upload,
  Settings,
  CheckCircle,
  Download,
  FileText,
  MousePointer2,
  Move,
  Scissors,
  LayoutGrid,
} from 'lucide-react';

const CMYK = { cyan: '#00AEEF', magenta: '#EC008C' };

export default function WorkflowAnimation() {
  const [step, setStep] = useState(0);

  const steps = [
    // ── Cena 1: ArteFinal (peça única — modal "Margem e Sangria") ──
    {
      scene: 1,
      kind: 'content',
      duration: 4200,
      title: 'Enviando a Arte',
      icon: <Upload className="text-cyan-500 animate-bounce" size={48} />,
      content: (
        <div className="w-full h-40 border-2 border-dashed border-cyan-200 rounded-xl flex flex-col items-center justify-center bg-cyan-50/50">
          <FileText className="text-cyan-300 mb-2" size={32} />
          <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="w-2/3 h-full bg-cyan-500 animate-[loading_2s_infinite]" />
          </div>
          <p className="text-[11px] text-cyan-500/70 mt-3 font-medium">PNG, JPEG ou PDF</p>
        </div>
      ),
    },
    {
      scene: 1,
      kind: 'content',
      duration: 4200,
      title: 'Posicionando no Corte',
      icon: <Move className="text-cyan-500" size={48} />,
      content: (
        <div className="w-full h-40 bg-gray-50 rounded-xl border border-gray-100 flex flex-col items-center justify-center gap-3">
          <div className="relative w-28 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-sm overflow-hidden">
            <div className="absolute inset-0 border-2" style={{ borderColor: '#dc2626' }} />
            <div className="absolute inset-1.5 border border-dashed" style={{ borderColor: '#10b981' }} />
            <MousePointer2
              className="absolute text-cyan-600 animate-pulse"
              size={16}
              style={{ top: '52%', left: '48%' }}
            />
          </div>
          <p className="text-[11px] text-gray-400 font-medium">90×50mm · sangria 3mm</p>
        </div>
      ),
    },
    {
      scene: 1,
      kind: 'content',
      duration: 4200,
      title: 'Gerando PDF de Produção',
      icon: <Settings className="text-cyan-500 animate-spin-slow" size={48} />,
      content: (
        <div className="w-full h-40 bg-white rounded-xl shadow-inner p-4 flex flex-col justify-center gap-3">
          <div className="flex items-center gap-2 text-xs font-medium text-green-600 bg-green-50 p-2 rounded border border-green-100">
            <CheckCircle size={14} /> Marcas de corte adicionadas
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-cyan-600 bg-cyan-50 p-2 rounded border border-cyan-100">
            <CheckCircle size={14} /> Sangria de 3mm aplicada
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-magenta-600 bg-magenta-50 p-2 rounded border border-magenta-100">
            <CheckCircle size={14} /> Cores convertidas para CMYK
          </div>
        </div>
      ),
    },
    {
      scene: 1,
      kind: 'content',
      duration: 4200,
      title: 'PDF Pronto!',
      icon: <Download className="text-cyan-600" size={48} />,
      content: (
        <div className="w-full h-40 flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 text-xs font-semibold">
            <CheckCircle size={14} /> 312 KB · 90×50mm
          </div>
          <div className="px-5 py-3 bg-cyan-600 text-white rounded-lg text-sm font-bold flex items-center gap-2 animate-pulse">
            <Download size={16} /> Baixar PDF de Produção
          </div>
        </div>
      ),
    },
    {
      scene: 1,
      kind: 'logo',
      duration: 2000,
      content: (
        <div className="w-full h-40 flex flex-col items-center justify-center gap-4">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00AEEF] to-[#EC008C] rounded-lg blur opacity-40" />
            <div className="relative px-7 py-4 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-center justify-center">
              <img src="/arte.png" alt="ArteFinal" className="w-16 h-16 object-contain" />
            </div>
          </div>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">ArteFinal.app</span>
        </div>
      ),
    },
    // ── Cena 2: Folha de Recorte (modal "Folha de Recorte") ──
    {
      scene: 2,
      kind: 'content',
      duration: 4200,
      title: 'Enviando a Arte',
      icon: <Upload className="text-magenta-500 animate-bounce" size={48} />,
      content: (
        <div className="w-full h-40 border-2 border-dashed border-magenta-100 rounded-xl flex flex-col items-center justify-center bg-magenta-50/50">
          <FileText className="text-magenta-500/50 mb-2" size={32} />
          <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="w-2/3 h-full bg-magenta-500 animate-[loading_2s_infinite]" />
          </div>
          <p className="text-[11px] text-magenta-500/70 mt-3 font-medium">Será repetida na folha</p>
        </div>
      ),
    },
    {
      scene: 2,
      kind: 'content',
      duration: 4200,
      title: 'Configurando o Corte',
      icon: <Scissors className="text-magenta-500" size={48} />,
      content: (
        <div className="w-full h-40 bg-gray-50 rounded-xl border border-gray-100 p-3 flex flex-col gap-3">
          <div className="flex gap-1.5 justify-center">
            {['Quadrado', 'Arred.', 'Redondo', 'Auto'].map((s, i) => (
              <span
                key={s}
                className={`text-[9px] px-2 py-1 rounded-md border font-semibold whitespace-nowrap ${
                  i === 2 ? 'border-magenta-500 bg-magenta-50 text-magenta-600' : 'border-gray-200 text-gray-400'
                }`}
              >
                {s}
              </span>
            ))}
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 rounded-full bg-gray-100" />
              <div className="absolute inset-0 rounded-full border-2" style={{ borderColor: CMYK.magenta }} />
              <div className="absolute inset-2 rounded-full border border-dashed border-emerald-400" />
            </div>
          </div>
        </div>
      ),
    },
    {
      scene: 2,
      kind: 'content',
      duration: 4200,
      title: 'Montando a Folha',
      icon: <LayoutGrid className="text-magenta-500" size={48} />,
      content: (
        <div className="w-full h-40 flex flex-col items-center justify-center gap-2 bg-gray-50 rounded-xl border border-gray-100 p-3">
          <div
            className="bg-white border border-gray-200 shadow-inner grid grid-cols-3 grid-rows-3 gap-1 p-2"
            style={{ width: 92, height: 104 }}
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="rounded-full bg-gradient-to-br from-cyan-50 to-magenta-50"
                style={{ border: `1px solid ${CMYK.magenta}` }}
              />
            ))}
          </div>
          <p className="text-[11px] text-gray-400 font-medium">9 peças · Grade 3×3 · Folha A4</p>
        </div>
      ),
    },
    {
      scene: 2,
      kind: 'content',
      duration: 4200,
      title: 'Folha Pronta!',
      icon: <Download className="text-magenta-600" size={48} />,
      content: (
        <div className="w-full h-40 flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 text-xs font-semibold">
            <CheckCircle size={14} /> Pág 1: arte · Pág 2: corte
          </div>
          <div className="px-5 py-3 bg-magenta-600 text-white rounded-lg text-sm font-bold flex items-center gap-2 animate-pulse">
            <Download size={16} /> Baixar Folha
          </div>
        </div>
      ),
    },
    {
      scene: 2,
      kind: 'logo',
      duration: 2000,
      content: (
        <div className="w-full h-40 flex flex-col items-center justify-center gap-4">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00AEEF] to-[#EC008C] rounded-lg blur opacity-40" />
            <div className="relative px-7 py-4 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-center justify-center">
              <img src="/arte.png" alt="ArteFinal" className="w-16 h-16 object-contain" />
            </div>
          </div>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">ArteFinal.app</span>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const t = setTimeout(() => setStep((p) => (p + 1) % steps.length), steps[step].duration);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const cur = steps[step];

  return (
    <div className="relative w-full max-w-md mx-auto aspect-square bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col">
      <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">ArteFinal.app</span>
      </div>

      <div className="flex-1 p-8 flex flex-col items-center justify-center gap-8">
        {cur.kind === 'logo' ? (
          cur.content
        ) : (
          <>
            <div className="transition-all duration-500 transform scale-110">{cur.icon}</div>
            <div className="w-full transition-all duration-500 opacity-100">
              <h3 className="text-xl font-display font-bold text-gray-900 text-center mb-6">{cur.title}</h3>
              {cur.content}
            </div>
          </>
        )}
      </div>

      <div className="p-6 flex justify-center gap-2">
        {steps.map((s, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === step
                ? s.kind === 'logo'
                  ? 'w-8 bg-gradient-to-r from-cyan-400 to-magenta-400'
                  : s.scene === 1
                  ? 'w-8 bg-cyan-500'
                  : 'w-8 bg-magenta-500'
                : 'w-2 bg-gray-200'
            }`}
          />
        ))}
      </div>

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}