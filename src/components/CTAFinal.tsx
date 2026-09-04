import { motion } from 'motion/react';
import { ShieldCheck, CalendarRange, ArrowRight } from 'lucide-react';

export default function CTAFinal() {
  return (
    <section id="cta-final" className="py-24 bg-gradient-to-br from-[#fdfbf7] via-[#f9f3dd] to-[#f4eab4] border-y border-[#D4AF37]/20 relative z-10 select-none">
      {/* Background elegant glows */}
      <div className="absolute inset-x-0 bottom-0 top-0 bg-transparent opacity-45 pointer-events-none" />
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#D4AF37]/5 blur-2xl rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        
        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37]/30 px-3.5 py-1.5 rounded-full mb-6 text-[#81600F] font-bold"
        >
          <ShieldCheck className="w-4 h-4 text-[#AA7C11]" />
          <span className="font-mono text-[9px] tracking-widest uppercase font-bold text-[#81600F]">
            Resposta Imediata de Advogado
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#161513] font-medium tracking-tight mb-4 leading-tight"
        >
          Seu problema jurídico <span className="italic text-gold-gradient-dark font-medium">não precisa</span> esperar.
        </motion.h2>

        {/* Desc */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sans text-gray-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Fale agora com nossa equipe e receba orientação especializada. Garantimos acompanhamento profissional humanitário prático e absoluto sigilo.
        </motion.p>

        {/* Emerald green action button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-4 justify-center"
        >
          <a
            id="cta-final-submit"
            href="https://wa.me/5511999999999?text=URGENTE:%20Gostaria%20de%20receber%20atendimento%20jurídico%20de%20um%20advogado%20agora."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] hover:from-[#cFA32A] hover:to-[#8E650C] text-white font-sans text-xs sm:text-sm font-bold tracking-widest uppercase py-4.5 px-10 rounded-full inline-flex items-center justify-center gap-2.5 transition-all duration-300 transform hover:scale-[1.02] shadow-xl shadow-[#D4AF37]/20 cursor-pointer"
          >
            <svg className="w-4 h-4 fill-current text-white shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.013-5.11-2.861-6.963C16.828 1.942 14.354 1.93 11.723 1.93 6.286 1.93 1.86 6.35 1.856 11.788c-.001 1.637.433 3.237 1.272 4.678l-.997 3.64 3.73-.978l.496.294-.31-.132zm10.974-6.84c-.31-.155-1.83-.902-2.112-1.005-.282-.103-.488-.155-.693.155-.205.31-.795.981-.974 1.186-.18.205-.359.231-.669.075-.31-.155-1.309-.482-2.493-1.538-.92-.82-1.54-1.834-1.72-2.143-.18-.31-.019-.477.136-.632.14-.139.31-.361.464-.542.155-.18.206-.31.31-.515.103-.205.051-.387-.026-.542-.077-.155-.693-1.67-.95-2.285-.25-.602-.503-.52-.693-.53l-.591-.01c-.205 0-.538.077-.82.387-.282.31-1.077 1.051-1.077 2.562 0 1.511 1.097 2.969 1.246 3.17.15.201 2.16 3.299 5.23 4.625.73.315 1.3.504 1.743.645.734.233 1.401.2 1.928.121.588-.088 1.831-.749 2.088-1.474.256-.725.256-1.346.18-1.474-.078-.129-.282-.205-.591-.361z" />
            </svg>
            <span>FALAR COM UM ADVOGADO AGORA</span>
          </a>

          {/* Subtitle assurance */}
          <span className="font-mono text-[9px] text-[#81600F] uppercase tracking-wider font-extrabold flex items-center gap-1">
            <CalendarRange className="w-3.5 h-3.5" />
            <span>Foco e Prontidão 24 Horas Ativa em Todo o Território Nacional</span>
          </span>
        </motion.div>

      </div>
    </section>
  );
}
