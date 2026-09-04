import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, ArrowRight, Gavel, FileText, UserCheck, Briefcase, ChevronLeft, Scale, ArrowUpRight, Lock, Eye, CheckCircle } from 'lucide-react';

interface PracticePageProps {
  id: string;
  name: string;
  heroTitle: string;
  heroSub: string;
  services: string[];
  features?: { title: string; desc: string }[]; // for Criminal "Diferenciais" or Previdenciário "Benefícios"
  featureType?: 'Diferenciais' | 'Benefícios';
  ctaText: string;
  whatsappMessage: string;
  onBack: () => void;
}

function PracticeSubPage({
  id,
  name,
  heroTitle,
  heroSub,
  services,
  features,
  featureType,
  ctaText,
  whatsappMessage,
  onBack,
}: PracticePageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="bg-white border border-[#D4AF37]/25 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
    >
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#25D366]/3 blur-3xl rounded-full pointer-events-none" />

      {/* Top action bar */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#AA7C11] hover:text-black uppercase mb-8 font-bold transition-colors cursor-pointer group"
      >
        <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span>Voltar para as Especialidades</span>
      </button>

      {/* Hero Específico */}
      <div className="border-b border-[#D4AF37]/15 pb-8 mb-8">
        <span className="font-mono text-[10.5px] tracking-[0.25em] text-[#AA7C11] font-black uppercase block mb-3">
          Página Interna • {name}
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#161513] font-medium tracking-tight mb-4 leading-tight">
          {heroTitle}
        </h2>
        <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed max-w-3xl">
          {heroSub}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Serviços List */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <h3 className="font-mono text-[10px] tracking-widest text-black uppercase font-black block mb-4">
              SERVIÇOS DE ELITE DISPONÍVEIS:
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {services.map((srv, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-100 rounded-2xl hover:border-[#D4AF37]/30 hover:bg-white transition-all duration-300"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center shrink-0 border border-[#D4AF37]/20 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#AA7C11]" />
                  </div>
                  <div>
                    <p className="font-sans text-xs sm:text-sm text-gray-800 font-semibold leading-relaxed">
                      {srv}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features side block (Diferenciais / Benefícios) */}
        <div className="lg:col-span-5 space-y-6">
          {features && features.length > 0 && (
            <div className="bg-gray-50 border border-[#D4AF37]/15 p-6 rounded-2xl relative overflow-hidden">
              <span className="font-mono text-[9px] tracking-widest text-[#AA7C11] font-extrabold uppercase block mb-4">
                {featureType === 'Benefícios' ? '★ BENEFÍCIOS JURÍDICOS DA ÁREA' : '◆ DIFERENCIAIS DE DEFESA DA ÁREA'}
              </span>
              <div className="space-y-4">
                {features.map((feat, fidx) => (
                  <div key={fidx} className="space-y-1">
                    <h4 className="font-serif text-sm text-[#161513] font-bold">
                      {feat.title}
                    </h4>
                    <p className="font-sans text-xs text-gray-500 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Consultation Fast CTA inside subpage */}
          <div className="bg-[#161513] text-white p-6 rounded-2xl relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#25D366]/10 rounded-full blur-xl" />
            <h4 className="font-serif text-lg text-white font-medium mb-2">
              Inicie sua defesa agora
            </h4>
            <p className="font-sans text-xs text-gray-400 mb-6 leading-relaxed">
              Clique abaixo para agendar sua consulta preliminar sigilosa diretamente com nosso especialista encarregado.
            </p>
            <a
              href={`https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-4/5 mx-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5b] text-white font-sans text-[10px] font-bold tracking-widest uppercase py-2 px-4 rounded-full transition-transform transform hover:scale-[1.01]"
            >
              <svg className="w-4 h-4 fill-current text-white shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.013-5.11-2.861-6.963C16.828 1.942 14.354 1.93 11.723 1.93 6.286 1.93 1.86 6.35 1.856 11.788c-.001 1.637.433 3.237 1.272 4.678l-.997 3.64 3.73-.978l.496.294-.31-.132zm10.974-6.84c-.31-.155-1.83-.902-2.112-1.005-.282-.103-.488-.155-.693.155-.205.31-.795.981-.974 1.186-.18.205-.359.231-.669.075-.31-.155-1.309-.482-2.493-1.538-.92-.82-1.54-1.834-1.72-2.143-.18-.31-.019-.477.136-.632.14-.139.31-.361.464-.542.155-.18.206-.31.31-.515.103-.205.051-.387-.026-.542-.077-.155-.693-1.67-.95-2.285-.25-.602-.503-.52-.693-.53l-.591-.01c-.205 0-.538.077-.82.387-.282.31-1.077 1.051-1.077 2.562 0 1.511 1.097 2.969 1.246 3.17.15.201 2.16 3.299 5.23 4.625.73.315 1.3.504 1.743.645.734.233 1.401.2 1.928.121.588-.088 1.831-.749 2.088-1.474.256-.725.256-1.346.18-1.474-.078-.129-.282-.205-.591-.361z" />
              </svg>
              <span>Falar com especialista agora</span>
            </a >
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PracticeAreas() {
  const [activeInnerPage, setActiveInnerPage] = useState<string | null>(null);

  const mainAreasList = [
    {
      id: 'criminal',
      name: 'Direito Criminal',
      icon: <Gavel className="w-5 h-5 text-[#902929]" />,
      shortDesc: 'A principal especialidade do escritório. Atuamos de forma imediata perante prisões em flagrante, audiência de custódia e Habeas Corpus de urgência 24h.',
      colorClass: 'hover:border-red-500/30'
    },
    {
      id: 'previdenciario',
      name: 'Direito Previdenciário',
      icon: <UserCheck className="w-5 h-5 text-emerald-600" />,
      shortDesc: 'Aposentadoria de alto padrão, concessão de BPC/LOAS e recursos administrativos complexos contra o indeferimento irregular do INSS.',
      colorClass: 'hover:border-emerald-500/30'
    },
    {
      id: 'trabalhista',
      name: 'Direito Trabalhista',
      icon: <Briefcase className="w-5 h-5 text-sky-600" />,
      shortDesc: 'Iniciais técnicas robustas para reouvir rescisões retidas, horas extras, reparação de assédio moral e proteção do trabalhador acidentado.',
      colorClass: 'hover:border-sky-500/30'
    },
    {
      id: 'civil',
      name: 'Direito Civil / Família',
      icon: <FileText className="w-5 h-5 text-[#AA7C11]" />,
      shortDesc: 'Resolva litígios civis de alta complexidade com assessoria técnica analítica focado em contratos, divórcios, inventários preventivos e reparações cíveis.',
      colorClass: 'hover:border-[#D4AF37]/30'
    }
  ];

  // Detailed inner pages structured data
  const pageDetails: Record<string, Omit<PracticePageProps, 'onBack'>> = {
    criminal: {
      id: 'criminal',
      name: 'Direito Criminal / Penal',
      heroTitle: 'Departamento de Defesa Criminal e Prerrogativas de Custódia',
      heroSub: 'Atuação intransigente nas primeiras horas de flagrantes, acompanhamento em delegacia, representação defensiva no Tribunal do Júri e sustentações urgentes em tribunais superiores.',
      services: [
        'Diligências imediatas em Delegacias de Polícia (Plantão Custódia 24h)',
        'Sustentação jurídica e soltura em Audiência de Custódia (inclusive feriados)',
        'Impetração prioritária de Habeas Corpus com pedido de liminar expressa',
        'Defesa Plenária altamente persuasiva perante o Tribunal do Júri',
        'Defesa em Inquéritos Policiais Federais, Civis e Operações Especiais',
        'Atuação estratégica em crimes fiscais, tributários ou contra a ordem financeira'
      ],
      featureType: 'Diferenciais',
      features: [
        {
          title: 'Plantão Imediato 24 Horas',
          desc: 'Monitoramos novos indiciamentos e prisões ininterruptamente para responder em até 15 minutos.'
        },
        {
          title: 'Investigação Defensiva Autônoma',
          desc: 'Não dependemos apenas do inquérito policial; produzimos provas técnicas sob as regras da OAB.'
        },
        {
          title: 'Total Confidencialidade',
          desc: 'Canais de comunicação seguros e criptografia total para sua tranquilidade moral.'
        }
      ],
      ctaText: 'FALAR COM ESPECIALISTA EM DIREITO CRIMINAL',
      whatsappMessage: 'Olá, preciso de atendimento urgente de um plantonista da área criminal.'
    },
    previdenciario: {
      id: 'previdenciario',
      name: 'Direito Previdenciário',
      heroTitle: 'Divisão Previdenciária de Alto Padrão e Seguridade Social',
      heroSub: 'Garantimos aposentadorias robustas, benefícios de LOAS e reversão profissional de indeferimentos irregulares aplicados pelo INSS com base em auditoria estrita do CNIS.',
      services: [
        'Planejamento de Aposentadoria Meticuloso (Análise exaustiva de CNIS)',
        'Revisão da Vida Toda e outras correções de recolhimento de impostos',
        'Concessão e Recursos do Benefício Assistencial BPC / LOAS',
        'Aposentadorias Especiais de alta periculosidade ou por agentes nocivos',
        'Reestabelecimento imediato de Auxílio-Incapacidade / Auxílio-Doença retidos',
        'Pensão por morte e outros fluxos administrativos complexos do INSS'
      ],
      featureType: 'Benefícios',
      features: [
        {
          title: 'Maximização de Valor Mensal',
          desc: 'Auditoria fiscal prévia para assegurar o maior teto de pagamento das regras de transição.'
        },
        {
          title: 'Redução na Fila de Espera',
          desc: 'Instrução do requerimento com robustez técnica incontestável para pular gargalos burocráticos.'
        },
        {
          title: 'Foco e Acolhimento Humano',
          desc: 'Acompanhamento do segurado com presteza e atualizações claras durante todo o processo judiciário.'
        }
      ],
      ctaText: 'FALAR COM ESPECIALISTA PREVIDENCIÁRIO',
      whatsappMessage: 'Olá, gostaria de esclarecer dúvidas sobre minha aposentadoria ou benefício INSS/BPC.'
    },
    trabalhista: {
      id: 'trabalhista',
      name: 'Direito Trabalhista',
      heroTitle: 'Defesa e Blindagem dos Direitos do Trabalhador Premium',
      heroSub: 'Atuação assertiva para reaver rescisões não pagas, executar cálculos completos de horas adicionais, processar abusos éticos graves e garantir indenizações cabíveis por infortúnios corporativos.',
      services: [
        'Rescisão Indireta do Contrato de Trabalho devido a abusos graves do empregador',
        'Ações indenizatórias decorrentes de Acidentes de Trabalho graves ou doenças laborais',
        'Cálculo minucioso e cobrança judicial de Horas Extras e Descanso Semanal Remunerado',
        'Processo de reparação financeira por Assédio Moral, Sexual ou discriminação velada',
        'Defesa de estabilidade provisória (gestantes, acidentados ou dirigentes sindicais)',
        'Anulação técnica de Demissões por Justa Causa arbitrárias ou retaliatórias'
      ],
      ctaText: 'FALAR COM ESPECIALISTA TRABALHISTA',
      whatsappMessage: 'Olá, gostaria de conversar sobre acerto de rescisão contratual ou direitos trabalhistas.'
    },
    civil: {
      id: 'civil',
      name: 'Direito Civil / Família',
      heroTitle: 'Cível, Contratos e Família Estratégico',
      heroSub: 'Solucionamos disputas patrimoniais de alta envergadura, partilha judicial, inventários preventivos e reparações contratuais críticas com máxima eficiência processual.',
      services: [
        'Inventários judiciais e extrajudiciais (Sucessões e Divisão de Bens)',
        'Divórcio Litigioso ou consensual com blindagem e divisão de patrimônio do casal',
        'Elaboração e execução de contratos comerciais e civis personalizados de alto padrão',
        'Ações Indenizatórias por Danos Materiais, Morais e lucros cessantes',
        'Disputas de Posse e Propriedade de Imóveis urbanos ou rurais'
      ],
      ctaText: 'FALAR COM ESPECIALISTA CÍVEL',
      whatsappMessage: 'Olá, gostaria de agendar uma reunião sobre um assunto cível ou inventário familiar.'
    }
  };

  return (
    <section id="especialidades" className="bg-[#faf9f6] py-24 border-b border-black/5 relative z-10 scroll-mt-12">
      <div className="absolute inset-0 glow-grid-light opacity-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Dynamic header toggler depending on subpage state */}
        <AnimatePresence mode="wait">
          {!activeInnerPage ? (
            <motion.div
              key="main-grid-header"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <span className="font-mono text-[10px] tracking-[0.3em] text-[#AA7C11] font-bold uppercase block mb-3">
                Nossas Áreas de Atuação
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#161513] font-normal tracking-tight mb-4">
                Especialidades de <span className="italic text-gold-gradient-dark font-medium">Estrita Confiança</span>
              </h2>
              <p className="font-sans text-gray-600 text-xs sm:text-sm leading-relaxed">
                Nossa banca opera com alto nível de dedicação técnica em cada uma das maiores frentes jurídicas do país. Clique em um departamento para acessar sua página interna de serviços e benefícios específicos.
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>

        {/* Dynamic subpage router / Main Grid content toggler */}
        <AnimatePresence mode="wait">
          {!activeInnerPage ? (
            <motion.div
              key="main-grid-view"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
            >
              {mainAreasList.map((area, idx) => (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`bg-white border border-[#D4AF37]/15 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-[#D4AF37]/45 cursor-pointer group ${area.colorClass}`}
                >
                  <div>
                    {/* Header: Icon & Decorator */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/5 border border-[#D4AF37]/20 flex items-center justify-center text-[#AA7C11]">
                        {area.icon}
                      </div>
                      <span className="text-gray-300 group-hover:text-[#AA7C11] transition-colors">
                        <ArrowUpRight className="w-5 h-5" />
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl text-[#161513] font-bold mb-3 group-hover:text-[#AA7C11] duration-300">
                      {area.name}
                    </h3>

                    {/* Short Description */}
                    <p className="font-sans text-xs text-gray-500 leading-relaxed max-w-sm mb-6">
                      {area.shortDesc}
                    </p>
                  </div>

                  {/* Button Action */}
                  <button
                    onClick={() => setActiveInnerPage(area.id)}
                    className="w-full bg-[#161513] hover:bg-black text-white py-3.5 rounded-full text-center text-xs tracking-wider font-bold font-sans uppercase shrink-0 transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Acessar Página Interna</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              ))}

              {/* Extra Card Card Extra requested: Outras áreas do Direito */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white border-2 border-dashed border-[#D4AF37]/25 rounded-3xl p-6 flex flex-col justify-between hover:border-[#D4AF37]/60 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/5 border border-[#D4AF37]/15 flex items-center justify-center text-[#AA7C11]">
                      <Scale className="w-5 h-5 text-[#AA7C11]" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl text-[#161513] font-bold mb-3">
                    Outras áreas do Direito
                  </h3>

                  <p className="font-sans text-xs text-gray-500 leading-relaxed max-w-sm mb-6">
                    Atendimento jurídico completo conforme sua necessidade. Caso sua dúvida jurídica envolva contratos específicos, holdings familiares ou consultoria empresarial especializada, conte com nossa capacidade consultiva integral.
                  </p>
                </div>

                <a
                  href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20tirar%20dúvidas%20sobre%20outras%20áreas%2520do%20direito."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/25 text-[#AA7C11] py-3.5 rounded-full text-center text-xs tracking-wider font-bold font-sans uppercase shrink-0 transition-all flex items-center justify-center gap-2"
                >
                  <span>Consultar Solução Completa</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="sub-page-view"
              className="scroll-mt-24"
            >
              <PracticeSubPage
                {...pageDetails[activeInnerPage]}
                onBack={() => {
                  setActiveInnerPage(null);
                  setTimeout(() => {
                    document.getElementById('especialidades')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
