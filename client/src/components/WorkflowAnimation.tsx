import { useState, useEffect } from 'react';
import { Upload, Settings, CheckCircle, Download, FileText, MousePointer2 } from 'lucide-react';

export default function WorkflowAnimation() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    {
      title: 'Carregando Arquivo',
      icon: <Upload className="text-cyan-500 animate-bounce" size={48} />,
      content: (
        <div className="w-full h-40 border-2 border-dashed border-cyan-200 rounded-xl flex flex-col items-center justify-center bg-cyan-50/50">
          <FileText className="text-cyan-300 mb-2" size={32} />
          <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="w-2/3 h-full bg-cyan-500 animate-[loading_2s_infinite]" />
          </div>
        </div>
      ),
    },
    {
      title: 'Ajustando Arte Final',
      icon: <Settings className="text-magenta-500 animate-spin-slow" size={48} />,
      content: (
        <div className="relative w-full h-40 bg-gray-50 rounded-xl p-4 overflow-hidden border border-gray-100">
          <div className="flex gap-2 mb-4">
            <div className="w-8 h-8 rounded bg-magenta-100" />
            <div className="w-8 h-8 rounded bg-cyan-100" />
            <div className="w-8 h-8 rounded bg-yellow-100" />
          </div>
          <div className="space-y-2">
            <div className="w-full h-2 bg-gray-200 rounded" />
            <div className="w-3/4 h-2 bg-gray-200 rounded" />
          </div>
          <MousePointer2 
            className="absolute text-magenta-600 animate-[cursor_3s_infinite]" 
            size={24} 
            style={{ top: '40%', left: '40%' }}
          />
        </div>
      ),
    },
    {
      title: 'Processando Funções',
      icon: <CheckCircle className="text-green-500" size={48} />,
      content: (
        <div className="w-full h-40 bg-white rounded-xl shadow-inner p-4 flex flex-col justify-center gap-3">
          <div className="flex items-center gap-2 text-xs font-medium text-green-600 bg-green-50 p-2 rounded border border-green-100">
            <CheckCircle size={14} /> Marcas de corte adicionadas
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-cyan-600 bg-cyan-50 p-2 rounded border border-cyan-100">
            <CheckCircle size={14} /> Sangria de 3mm configurada
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-magenta-600 bg-magenta-50 p-2 rounded border border-magenta-100">
            <CheckCircle size={14} /> Cores convertidas para CMYK
          </div>
        </div>
      ),
    },
    {
      title: 'Pronto para Download',
      icon: <Download className="text-cyan-600" size={48} />,
      content: (
        <div className="w-full h-40 flex flex-col items-center justify-center gap-4">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00AEEF] to-[#EC008C] rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative px-7 py-4 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-center justify-center space-x-6">
               <img src="/arte.png" alt="Logo" className="w-16 h-16 object-contain" />
            </div>
          </div>
          <div className="px-4 py-2 bg-cyan-600 text-white rounded-lg text-sm font-bold animate-pulse">
            Baixar PDF para Produção
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full max-w-md mx-auto aspect-square bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col">
      <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">ArteFinal.app Modal</span>
      </div>

      <div className="flex-1 p-8 flex flex-col items-center justify-center gap-8">
        <div className="transition-all duration-500 transform scale-110">
          {steps[step].icon}
        </div>
        
        <div className="w-full transition-all duration-500 opacity-100">
          <h3 className="text-xl font-display font-bold text-gray-900 text-center mb-6">
            {steps[step].title}
          </h3>
          {steps[step].content}
        </div>
      </div>

      <div className="p-6 flex justify-center gap-2">
        {steps.map((_, i) => (
          <div 
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === step ? 'w-8 bg-cyan-500' : 'w-2 bg-gray-200'
            }`}
          />
        ))}
      </div>

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes cursor {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(40px, 20px); }
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
