import { useState } from 'react';
import { motion } from 'motion/react';
import { Gavel, UserCheck, Briefcase, FileText, ArrowRight, ShieldAlert, GraduationCap, ChevronRight } from 'lucide-react';

export default function Mentorias() {
  const mentoringCategories = [
    {
      id: 'ment-crim',
      name: 'Mentoria Criminal Prática no Flagrante',
      category: 'Criminal',
      icon: <Gavel className="w-5 h-5 text-red-500" />,
      desc: 'Formação tática exclusiva para jovens juristas em diligências policiais reais, confecção de Habeas Corpus relâmpago e prerrogativas constitucionais.',
      spots: '3 vagas restantes'
    },
    {
      id: 'ment-prev',
      name: 'Imersão em Planejamento CNIS de Alta Renda',
      category: 'Previdenciário',
      icon: <UserCheck className="w-5 h-5 text-emerald-500" />,
      desc: 'Aulas teóricas avançadas demonstrando auditoria completa de recolhimentos tributários no CNIS, tese previdenciária de cálculo e transição do teto.',
      spots: 'Vagas esgotadas'
    },
    {
      id: 'ment-trab',
      name: 'Prática de Execução Trabalhista Estratégica',
      category: 'Trabalhista',
      icon: <Briefcase className="w-5 h-5 text-sky-500" />,
      desc: 'Formação focada em cálculos indutivos judiciais, instrução de rescisão indireta em audiência e estruturação de petições sob regras rigorosas da CLT.',
      spots: 'Nova turma em breve'
    },
    {
      id: 'ment-civil',
      name: 'Prática de Inventários e Divórcios Extrajudiciais',
      category: 'Civil',
      icon: <FileText className="w-5 h-5 text-[#AA7C11]" />,
      desc: 'Estratégias de velocidade em cartório e blindagem fiscal (ITCMD) para holding de famílias de grande porte na via consensual e extrajudicial.',
      spots: '2 vagas restantes'
    }
  ];

  return (
    <section id="mentorias" className="bg-[#faf9f6]/95 py-24 border-b border-black/5 relative z-10 scroll-mt-12">
      <div className="absolute inset-0 glow-grid-light opacity-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#AA7C11] font-bold uppercase block mb-3">
            Gargalo Educacional Jurídico
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#161513] font-normal tracking-tight mb-4">
            Mentorias Jurídicas <span className="italic text-gold-gradient-dark font-medium">de Alto Nível</span>
          </h2>
          <p className="font-sans text-gray-500 text-xs sm:text-sm leading-relaxed">
            Compartilhamos a experiência vencedora de nossa banca com advogados que buscam acelerar o faturamento e dominar a prática jurídica em casos de alta complexidade.
          </p>
        </div>

        {/* Structured Grid ready to fill */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
          {mentoringCategories.map((ment, idx) => (
            <motion.div
              key={ment.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white border border-[#D4AF37]/15 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#D4AF37]/40 hover:shadow-2xl duration-300 transition-all group"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/5 border border-[#D4AF37]/25 flex items-center justify-center text-[#AA7C11]">
                      {ment.icon}
                    </div>
                    <span className="font-mono text-[10px] tracking-widest text-[#D4AF37] font-black uppercase">
                      MENTORIA • {ment.category}
                    </span>
                  </div>
                  
                  {/* Spots indicator */}
                  <span className={`font-sans text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border ${
                    ment.spots.includes('restantes')
                      ? 'bg-amber-500/5 border-amber-500/20 text-amber-600'
                      : ment.spots.includes('esgotadas')
                      ? 'bg-red-500/5 border-red-500/20 text-red-500'
                      : 'bg-gray-500/5 border-gray-500/20 text-gray-500'
                  }`}>
                    {ment.spots}
                  </span>
                </div>

                {/* Name & desc */}
                <h3 className="font-serif text-lg text-[#161513] font-bold mb-3 group-hover:text-[#AA7C11] duration-300">
                  {ment.name}
                </h3>
                <p className="font-sans text-xs text-gray-500 leading-relaxed mb-6">
                  {ment.desc}
                </p>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="font-sans text-[10px] text-gray-400 font-semibold uppercase flex items-center gap-1">
                  <GraduationCap className="w-4 h-4 text-[#AA7C11]" />
                  <span>Aulas Individuais ao Vivo</span>
                </span>
                <a
                  href={`https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20receber%20informações%20sobre%20a%20"${encodeURIComponent(ment.name)}"`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[9px] tracking-widest text-[#AA7C11] font-black uppercase inline-flex items-center gap-1 group-hover:text-black hover:underline"
                >
                  <span>Ver Cronograma</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Informative advice banner */}
        <div className="p-6 bg-[#161513] text-white rounded-3xl border border-[#D4AF37]/35 flex flex-col sm:flex-row items-center sm:justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 blur-3xl rounded-full" />
          <div className="text-center sm:text-left space-y-1 relative z-10 max-w-lg">
            <h4 className="font-serif text-base font-bold text-white leading-tight">Quer agendar uma mentoria sob demanda para sua equipe jurídica?</h4>
            <p className="font-sans text-xs text-gray-400 leading-normal">
              Oferecemos pacotes integrados in-company focados em prerrogativas penais e táticas corporativas previdenciárias coletivas.
            </p>
          </div>
          <a
            href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20valores%20para%20mentorias%20in-company%20de%20advocacia%20de%20elite."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] hover:from-[#cFA32A] hover:to-[#8E650C] text-white font-sans text-xs font-bold tracking-widest uppercase py-3.5 px-6 rounded-full flex items-center justify-center gap-2 shrink-0 border-none relative z-10 hover:scale-[1.01] transition-all shadow-lg shadow-[#D4AF37]/20"
          >
            <svg className="w-4 h-4 fill-current text-white shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.013-5.11-2.861-6.963C16.828 1.942 14.354 1.93 11.723 1.93 6.286 1.93 1.86 6.35 1.856 11.788c-.001 1.637.433 3.237 1.272 4.678l-.997 3.64 3.73-.978l.496.294-.31-.132zm10.974-6.84c-.31-.155-1.83-.902-2.112-1.005-.282-.103-.488-.155-.693.155-.205.31-.795.981-.974 1.186-.18.205-.359.231-.669.075-.31-.155-1.309-.482-2.493-1.538-.92-.82-1.54-1.834-1.72-2.143-.18-.31-.019-.477.136-.632.14-.139.31-.361.464-.542.155-.18.206-.31.31-.515.103-.205.051-.387-.026-.542-.077-.155-.693-1.67-.95-2.285-.25-.602-.503-.52-.693-.53l-.591-.01c-.205 0-.538.077-.82.387-.282.31-1.077 1.051-1.077 2.562 0 1.511 1.097 2.969 1.246 3.17.15.201 2.16 3.299 5.23 4.625.73.315 1.3.504 1.743.645.734.233 1.401.2 1.928.121.588-.088 1.831-.749 2.088-1.474.256-.725.256-1.346.18-1.474-.078-.129-.282-.205-.591-.361z" />
            </svg>
            <span>Falar com nosso coordenador</span>
          </a>
        </div>

      </div>
    </section>
  );
}
