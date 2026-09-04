import { motion } from 'motion/react';
import { Award, FolderKanban, Globe, ShieldClose } from 'lucide-react';

export default function StatsMarquee() {
  const stats = [
    { icon: <Award className="w-4 h-4 text-[#D4AF37]" />, text: '20+ ANOS DE ATUAÇÃO E PRESTÍGIO JURÍDICO' },
    { icon: <FolderKanban className="w-4 h-4 text-[#D4AF37]" />, text: '98.5% DE SUCESSO EM ACORDOS DE ALTA TESES' },
    { icon: <Globe className="w-4 h-4 text-[#D4AF37]" />, text: 'ATENDIMENTO EM 26 ESTADOS JURÍDICOS INTEGRADOS' },
    { icon: <ShieldClose className="w-4 h-4 text-[#D4AF37]" />, text: 'MAIS DE 1.500 CASOS RESOLVIDOS SOB SIGILO' },
    { icon: <Award className="w-4 h-4 text-[#D4AF37]" />, text: 'PRIVACIDADE CRIPTOGRAFADA E HOMOLOGADA OAB' },
  ];

  return (
    <section className="bg-[#0b0b0a] border-y border-[#D4AF37]/20 py-8 overflow-hidden relative z-20">
      {/* Light gradient shadows to fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0b0b0a] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0b0b0a] to-transparent z-10"></div>

      <div className="flex whitespace-nowrap">
        {/* We output twice to simulate smooth continuous infinite scroll loop */}
        <motion.div
          animate={{ x: [0, -1035] }}
          transition={{
            ease: 'linear',
            duration: 25,
            repeat: Infinity,
          }}
          className="flex items-center gap-16 shrink-0"
        >
          {stats.map((stat, idx) => (
            <div key={`stat-group-1-${idx}`} className="flex items-center gap-3 shrink-0">
               {stat.icon}
              <span className="font-mono text-[9px] tracking-[0.25em] text-[#F3E5D0] font-bold">
                {stat.text}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/30 ml-4"></span>
            </div>
          ))}
        </motion.div>

        <motion.div
          animate={{ x: [0, -1035] }}
          transition={{
            ease: 'linear',
            duration: 25,
            repeat: Infinity,
          }}
          className="flex items-center gap-16 shrink-0"
        >
          {stats.map((stat, idx) => (
            <div key={`stat-group-2-${idx}`} className="flex items-center gap-3 shrink-0">
               {stat.icon}
              <span className="font-mono text-[9px] tracking-[0.25em] text-[#F3E5D0] font-bold">
                {stat.text}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/30 ml-4"></span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
