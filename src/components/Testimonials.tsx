import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TestimonialItem } from '../types';

export default function Testimonials() {
  const reviews: TestimonialItem[] = [
    {
      id: 'rev-crim',
      name: 'Dr. Roberto Salles (Empresário)',
      role: 'Sócio-Fundador Salles Investimentos',
      initials: 'RS',
      text: 'Fui indiciado em uma investigação complexa sobre crimes tributários e societários. O Dr. Andreson Cruz organizou uma defesa técnica impecável, demonstrando domínio absoluto dos precedentes constitucionais. Em menos de 60 dias, conseguimos o trancamento do inquérito de forma totalmente silenciosa e ética.',
      area: 'Direito Criminal / Penal',
      rating: 5,
    },
    {
      id: 'rev-prev',
      name: 'Maria Amélia Vasconcellos',
      role: 'Professora de Enfermagem Aposentada',
      initials: 'MV',
      text: 'O INSS havia indeferido meu benefício de auxílio por incapacidade mesmo com laudos médicos extremamente claros. O escritório fez uma auditoria profunda do meu tempo de serviço e em pouquíssimos meses reverteu a decisão na via jurídica. Atendimento extremamente profissional e humanitário.',
      area: 'Direito Previdenciário',
      rating: 5,
    },
    {
      id: 'rev-civil',
      name: 'Dra. Amanda Cury (Anestesista)',
      role: 'Médica Cooperada Hospital Samaritano',
      initials: 'AC',
      text: 'Tive uma severa disputa contratual com uma operadora de plano de saúde privada. O contencioso cível do escritório atuou de forma enérgica e impetrou uma liminar extraordinária em 24 horas, assegurando o fornecimento de materiais e me blindando de perdas profissionais insubstituíveis.',
      area: 'Direito Civil',
      rating: 5,
    },
    {
      id: 'rev-trab',
      name: 'Henrique M. Prado',
      role: 'Ex-Diretor de Operações Logísticas',
      initials: 'HP',
      text: 'Fui submetido a uma demissão arbitrária e retiveram minhas verbas rescisórias justificando crise financeira. O time trabalhista de elite de Cruz & Associados realizou os cálculos técnicos fundamentados no acordo coletivo de trabalho e logrou êxito em uma conciliação extraordinária, liquidando tudo à vista.',
      area: 'Direito Trabalhista',
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="bg-[#faf9f6] py-24 border-b border-black/5 relative z-10">
      <div className="absolute inset-0 glow-grid-light opacity-65 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#AA7C11] font-bold uppercase block mb-3">
              Prova Social de Elite
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#161513] font-medium tracking-tight font-normal">
              A Opinião de Quem <span className="italic text-gold-gradient-dark font-medium">Confia</span> em Nossa Banca
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="font-sans text-gray-600 text-xs leading-relaxed">
              Casos resolvidos em segredo de justiça ou com homologação extrajudicial amigável rápida, priorizando integridade e resolutividade técnica.
            </p>
          </div>
        </div>

        {/* Testimonial Cards Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 bg-white border border-[#D4AF37]/15 hover:border-[#D4AF37]/50 hover:shadow-2xl hover:scale-[1.01] duration-500 transition-all flex flex-col justify-between relative group rounded-2xl shadow-xl shadow-black/2"
            >
              {/* Quote marks icon and Area Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[9px] tracking-widest bg-[#D4AF37]/10 text-[#81600F] px-3 py-1.5 uppercase rounded-full border border-[#D4AF37]/25 font-bold">
                  {rev.area}
                </span>
                <Quote className="w-8 h-8 text-[#D4AF37]/10 group-hover:text-[#D4AF37]/35 transition-colors duration-500 shrink-0" />
              </div>

              {/* Text */}
              <p className="font-sans text-gray-700 text-xs sm:text-sm leading-relaxed mb-8 italic">
                "{rev.text}"
              </p>

              {/* Reviewer identity info */}
              <div className="flex items-center gap-4 pt-6 border-t border-black/5">
                <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center font-serif text-xs font-bold text-[#AA7C11] bg-[#D4AF37]/5 shrink-0">
                  {rev.initials}
                </div>
                <div>
                  <h3 className="font-serif text-sm text-[#161513] font-bold leading-none mb-1 group-hover:text-[#AA7C11] duration-300">
                    {rev.name}
                  </h3>
                  <span className="font-sans text-[10px] text-gray-500 block mb-2">{rev.role}</span>
                  <div className="flex gap-1.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
