import { motion } from 'motion/react';
import { ShieldCheck, Mail, PhoneCall } from 'lucide-react';

export default function Equipe() {
  const members = [
    {
      id: 'eq-amanda',
      name: 'Dra. Amanda Gomes',
      oab: 'OAB/SP 123.456',
      specialty: 'Direito Criminal e Tribunal do Júri',
      desc: 'Especialista em Direito Criminal e Tribunal do Júri. Atuação altamente estratégica em investigações complexas, audiências de custódia e tribunal do júri.',
      image: '/input_file_0.png',
      isLead: true,
    },
    {
      id: 'eq-andreson',
      name: 'Dr. Andreson Cruz',
      oab: 'OAB/SP 234.567',
      specialty: 'Direito Previdenciário e Benefícios',
      desc: 'Sócio co-fundador da banca corporativa, com doutorado acadêmico focado em planejamento previdenciário complexo, benefícios de LOAS e recursos do INSS.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=500&q=80',
      isLead: false,
    },
    {
      id: 'eq-clara',
      name: 'Dra. Clara Salles',
      oab: 'OAB/SP 345.678',
      specialty: 'Direito Civil e Contratos',
      desc: 'Especialista em contencioso civil avançado, dissoluções societárias estruturadas, planejamento sucessório e elaboração de contratos comerciais.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=500&q=80',
      isLead: false,
    }
  ];

  return (
    <section id="equipe" className="bg-[#faf9f6]/95 py-24 border-b border-black/5 relative z-10 scroll-mt-12">
      <div className="absolute inset-0 glow-grid-light opacity-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#AA7C11] font-bold uppercase block mb-3">
            Banca de Advogados
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#161513] font-normal tracking-tight mb-4">
            Nossa <span className="italic text-gold-gradient-dark font-medium">Equipe Jurídica</span>
          </h2>
          <p className="font-sans text-gray-500 text-xs sm:text-sm leading-relaxed">
            Profissionais comprometidos, com ampla atuação acadêmica e vasta experiência prática perante os principais tribunais brasileiros.
          </p>
        </div>

        {/* Members Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {members.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`bg-white border rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-[#D4AF37]/50 transition-all duration-500 flex flex-col justify-between w-full max-w-sm group relative ${
                member.isLead ? 'border-[#D4AF37]/35 ring-1 ring-[#D4AF37]/15' : 'border-gray-200/60'
              }`}
            >
              {/* Highlight Label for Lead head */}
              {member.isLead && (
                <div className="absolute top-4 left-4 z-20 bg-[#D4AF37] text-[#050505] text-[8px] font-mono tracking-widest font-black uppercase px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  <span>SÓCIA DIRETORA</span>
                </div>
              )}

              {/* Photo Area */}
              <div className="h-80 w-full relative overflow-hidden bg-gray-50 flex items-end">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="font-mono text-[9px] tracking-widest text-[#D4AF37] font-extrabold uppercase bg-black/40 px-2 py-1 rounded backdrop-blur-sm">
                    {member.oab}
                  </span>
                </div>
              </div>

              {/* Text Description Box */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg text-[#161513] font-bold mb-1 group-hover:text-[#AA7C11] transition-colors">
                    {member.name}
                  </h3>
                  <p className="font-mono text-[9.5px] tracking-widest uppercase text-gray-500 font-bold mb-4">
                    {member.specialty}
                  </p>
                  <p className="font-sans text-xs text-gray-600 leading-relaxed">
                    {member.desc}
                  </p>
                </div>

                {/* Micro Action Button */}
                <div className="pt-6 border-t border-gray-100 mt-6 flex justify-between items-center gap-4">
                  <a
                    href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20falar%20diretamente%20com%20a%20equipe%20da%20Dra.%20Amanda%20Gomes."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-mono tracking-widest text-[#AA7C11] group-hover:text-black font-extrabold uppercase hover:underline inline-flex items-center gap-1"
                  >
                    <span>Falar no Canal Seguro</span>
                    <PhoneCall className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
