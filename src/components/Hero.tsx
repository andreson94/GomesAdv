import { motion } from 'motion/react';
import { Phone, Calendar, Check, Award, Layers, Users, Globe } from 'lucide-react';

export default function Hero() {
  const highlights = [
    'Atendimento Nacional',
    'Consulta Online',
    'Plantão Criminal 24h',
    'Equipe Especializada'
  ];

  const credentials = [
    {
      value: '+7 Anos',
      label: 'de experiência jurídica',
      icon: <Award className="w-5 h-5 text-[#D4AF37]" />
    },
    {
      value: '+500 Casos',
      label: 'atendidos de alta complexidade',
      icon: <Layers className="w-5 h-5 text-[#D4AF37]" />
    },
    {
      value: 'Atendimento',
      label: 'em todo Brasil de forma digital',
      icon: <Globe className="w-5 h-5 text-[#D4AF37]" />
    },
    {
      value: 'Especialistas',
      label: 'em múltiplas áreas jurídicas',
      icon: <Users className="w-5 h-5 text-[#D4AF37]" />
    }
  ];

  return (
    <div className="relative bg-[#0d0d0c] text-white overflow-hidden select-none">
      {/* Cinematic Golden Glossy Overlays & Radial Gradients */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0d0d0c] to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-l from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[180px] rounded-full pointer-events-none" />

      {/* Hero Section Container */}
      <section id="home" className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-20 sm:pb-28 border-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left: Strategic copy */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Tagline / Subtitle Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex self-start items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-3 py-1.5 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[9px] tracking-[0.2em] text-[#D4AF37] font-black uppercase">
                Plantão Custódia & Soluções Premium 24H
              </span>
            </motion.div>
 
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6 font-medium text-white"
            >
              Advocacia Estratégica e <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#f3e5d0] to-[#AA7C11] font-semibold">Plantão Criminal 24 Horas</span>
            </motion.h1>
 
            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-sans text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-8"
            >
              Atuação especializada em Direito Criminal, Previdenciário, Trabalhista e Civil com atendimento em todo território nacional.
            </motion.p>
 
            {/* Premium CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-8"
            >
              {/* WhatsApp Action (🏆 Gold) */}
              <a
                id="hero-wa-btn"
                href="https://wa.me/5511999999999?text=Olá,%20preciso%20de%20atendimento%20jurídico%20de%20urgência."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] hover:from-[#cFA32A] hover:to-[#8E650C] text-white text-xs sm:text-sm font-bold tracking-widest uppercase px-8 py-4 rounded-full flex items-center justify-center gap-2.5 transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-[#D4AF37]/20 border border-transparent"
              >
                <svg className="w-4 h-4 fill-current text-white shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.013-5.11-2.861-6.963C16.828 1.942 14.354 1.93 11.723 1.93 6.286 1.93 1.86 6.35 1.856 11.788c-.001 1.637.433 3.237 1.272 4.678l-.997 3.64 3.73-.978l.496.294-.31-.132zm10.974-6.84c-.31-.155-1.83-.902-2.112-1.005-.282-.103-.488-.155-.693.155-.205.31-.795.981-.974 1.186-.18.205-.359.231-.669.075-.31-.155-1.309-.482-2.493-1.538-.92-.82-1.54-1.834-1.72-2.143-.18-.31-.019-.477.136-.632.14-.139.31-.361.464-.542.155-.18.206-.31.31-.515.103-.205.051-.387-.026-.542-.077-.155-.693-1.67-.95-2.285-.25-.602-.503-.52-.693-.53l-.591-.01c-.205 0-.538.077-.82.387-.282.31-1.077 1.051-1.077 2.562 0 1.511 1.097 2.969 1.246 3.17.15.201 2.16 3.299 5.23 4.625.73.315 1.3.504 1.743.645.734.233 1.401.2 1.928.121.588-.088 1.831-.749 2.088-1.474.256-.725.256-1.346.18-1.474-.078-.129-.282-.205-.591-.361z" />
                </svg>
                <span>Falar no WhatsApp</span>
              </a>

              {/* Consultation Booking (⚫ Black/Dark Outline) */}
              <a
                id="hero-meet-btn"
                href="#contato"
                className="w-full sm:w-auto bg-[#161513] hover:bg-black text-white border border-[#D4AF37]/30 hover:border-[#D4AF37] text-xs sm:text-sm font-bold tracking-widest uppercase px-8 py-4 rounded-full flex items-center justify-center gap-2.5 transition-all duration-300 transform hover:scale-[1.02]"
              >
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                <span>⚫ Agendar Consulta</span>
              </a>
            </motion.div>

            {/* Highlights checklist row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/5"
            >
              {highlights.map((item, id) => (
                <div key={id} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shrink-0">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <span className="font-sans text-xs text-gray-300 tracking-wide font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Right: Transparent female lawyer portrait */}
          <div className="lg:col-span-5 flex justify-center items-end relative h-[380px] sm:h-[480px] lg:h-[540px]">
            {/* Elegant lighting grid card backglow */}
            <div className="absolute bottom-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full filter blur-3xl opacity-80" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative w-full h-full flex justify-center items-end"
            >
              <img
                src="/input_file_0.png"
                alt="Dra. Amanda Gomes"
                className="w-full h-full object-contain object-bottom max-h-[100%] drop-shadow-[0_20px_50px_rgba(212,175,55,0.15)] filter saturate-[1.05] contrast-[1.03]"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay with subtle blur and gold banner matching our name */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#050505]/90 border border-[#D4AF37]/35 p-3.5 px-6 rounded-2xl shadow-xl backdrop-blur-md max-w-xs text-center w-[260px]">
                <h3 className="font-serif text-sm text-white font-bold tracking-wide">
                  Dra. Amanda Gomes
                </h3>
                <p className="font-mono text-[8px] tracking-[0.2em] text-[#D4AF37] font-bold uppercase mt-0.5">
                  OAB/SP 123.456
                </p>
                <p className="font-sans text-[10px] text-gray-400 mt-1 leading-tight">
                  Especialista Criminal de Alta Complexidade
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 2. Barra de Credibilidade (Horizontal Strip right below the content) */}
      <div className="bg-[#050505] border-t border-[#D4AF37]/20 relative z-20 py-8 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-stretch divide-y md:divide-y-0 md:divide-x divide-[#D4AF37]/15">
            {credentials.map((cred, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col items-center md:items-start text-center md:text-left justify-center px-4 ${
                  idx > 0 ? 'pt-6 md:pt-0' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#D4AF37]/5 border border-[#D4AF37]/15">
                    {cred.icon}
                  </div>
                  <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white">
                    {cred.value}
                  </span>
                </div>
                <p className="font-sans text-xs text-gray-400 tracking-wide">
                  {cred.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
