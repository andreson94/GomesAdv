import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Search, Landmark } from 'lucide-react';

export default function ComoFunciona() {
  const steps = [
    {
      num: '1',
      title: 'Entre em contato',
      desc: 'WhatsApp ou formulário rápido do site.',
      icon: <MessageSquare className="w-5 h-5 text-[#AA7C11]" />,
    },
    {
      num: '2',
      title: 'Análise inicial do caso',
      desc: 'Nossa equipe estuda os fatos e a situação emergencial.',
      icon: <Search className="w-5 h-5 text-[#AA7C11]" />,
    },
    {
      num: '3',
      title: 'Orientação especializada',
      desc: 'Definição estratégica e aplicação imediata de teses vencedoras.',
      icon: <Landmark className="w-5 h-5 text-[#AA7C11]" />,
    }
  ];

  return (
    <section id="como-funciona" className="bg-[#faf9f6] py-24 border-b border-black/5 relative z-10 scroll-mt-12">
      <div className="absolute inset-0 glow-grid-light opacity-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#AA7C11] font-bold uppercase block mb-3">
            Fluxo de Resolução
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#161513] font-normal tracking-tight mb-4">
            Atendimento Jurídico <span className="italic text-gold-gradient-dark font-medium">Simples e Eficiente</span>
          </h2>
          <p className="font-sans text-gray-500 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Nossa estrutura foi desenhada para eliminar ruídos burocráticos e iniciar sua representação com o máximo de rapidez e efetividade.
          </p>
        </div>

        {/* Steps Grid with custom connector lines */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-stretch relative">
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center">
              
              {/* Step Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white border border-[#D4AF37]/15 rounded-3xl p-8 shadow-xl shadow-black/2 relative w-full h-full group hover:border-[#D4AF37]/50 hover:scale-[1.01] transition-all duration-300"
              >
                {/* Floating Big Number badge in bg */}
                <div className="absolute top-4 right-6 font-serif text-6xl text-gray-50 group-hover:text-[#D4AF37]/5 transition-colors font-extrabold select-none">
                  0{step.num}
                </div>

                {/* Styled icon box */}
                <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/5 border border-[#D4AF37]/15 flex items-center justify-center mb-6 text-[#AA7C11]">
                  {step.icon}
                </div>

                {/* Step Subtitle & Title */}
                <span className="font-mono text-[9px] tracking-widest text-[#AA7C11] font-bold uppercase block mb-1">
                  ETAPA 0{step.num}
                </span>
                <h3 className="font-serif text-lg text-[#161513] font-bold mb-3 group-hover:text-[#AA7C11] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="font-sans text-xs text-gray-500 leading-normal max-w-xs mx-auto">
                  {step.desc}
                </p>
              </motion.div>

              {/* Connecting Icon arrow on desktop between cards */}
              {idx < 2 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-25 text-[#D4AF37]">
                  <ArrowRight className="w-6 h-6 animate-pulse" />
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
