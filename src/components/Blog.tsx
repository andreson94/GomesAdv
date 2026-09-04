import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Criminal' | 'Previdenciário' | 'Trabalhista' | 'Civil';
  date: string;
  readTime: string;
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [openArticle, setOpenArticle] = useState<Article | null>(null);

  const categories = ['Todos', 'Criminal', 'Previdenciário', 'Trabalhista', 'Civil'];

  const articles: Article[] = [
    {
      id: 'art-1',
      title: 'Habeas Corpus de Ofício e os Direitos Individuais em Flagrantes',
      excerpt: 'Entenda como atua a defesa técnica de urgência para coibir excessos de autoridade e restabelecer a liberdade plena.',
      content: 'A audiência de custódia representa uma das maiores garantias constitucionais herdadas do Pacto de San José da Costa Rica. Nele, qualquer cidadão preso sob acusação de flagrante delito tem o direito fundamental de ser ouvido por um magistrado em até 24 horas. Nossa banca atua de forma permanente nesse intervalo para impetrar pedidos libertários em caso de fundamentação frágil dos autos criminais civis ou federais.',
      category: 'Criminal',
      date: '02 de Junho, 2026',
      readTime: '4 min'
    },
    {
      id: 'art-2',
      title: 'Planejamento CNIS: Como evitar indeferimentos no INSS em 2026',
      excerpt: 'Guia de auditoria documental fiscal para segurados especiais e de alta renda que buscam aposentadoria planejada.',
      content: 'Para obter o benefício máximo de transição no INSS, realizar a conciliação analítica do Cadastro Nacional de Informações Sociais (CNIS) é fundamental. Muitas vezes há omissões de recolhimentos de empresas anteriores ou períodos rurais não reconhecidos administrativos que minam o valor real final do benefício. Recomendamos revisão contábil prévia de no mínimo 12 meses antes do pedido.',
      category: 'Previdenciário',
      date: '28 de Maio, 2026',
      readTime: '6 min'
    },
    {
      id: 'art-3',
      title: 'Rescisão Indireta: O guia para fustigar abusos do empregador',
      excerpt: 'Como o trabalhador submetido a pressões arbitrárias ou atraso de FGTS pode pedir a demissão forçada da empresa reavendo tudo.',
      content: 'A rescisão indireta representa a justa causa aplicada pelo trabalhador contra o empregador infrator. Falta de recolhimento contínuo de FGTS, atraso recorrente de salários e assédio moral continuado são fundamentos válidos perante a Justiça do Trabalho para rescindir unilateralmente o contrato de trabalho recebendo 100% de indenizações.',
      category: 'Trabalhista',
      date: '15 de Maio, 2026',
      readTime: '5 min'
    },
    {
      id: 'art-4',
      title: 'Partilha de Bens de Grande Porte: Inventário Judicial vs Extrajudicial',
      excerpt: 'Análise de celeridade e impostos (ITCMD) sobre planejamento sucessório e dissolução amigável em cartório.',
      content: 'Quando os herdeiros estão de comum acordo e não há menores de idade interessados, o divórcio ou inventário extrajudicial em cartório de tabelionato de notas constitui a ferramenta mais rápida do mercado. A representação jurídica adequada minimiza gastos burocráticos fiscais e encerra pendências hereditárias em semanas, enquanto na via judicial levaria anos.',
      category: 'Civil',
      date: '09 de Maio, 2026',
      readTime: '5 min'
    }
  ];

  const filteredArticles = selectedCategory === 'Todos'
    ? articles
    : articles.filter(art => art.category === selectedCategory);

  return (
    <section id="blog" className="bg-[#faf9f6]/95 py-24 border-b border-black/5 relative z-10 scroll-mt-12">
      <div className="absolute inset-0 glow-grid-light opacity-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#AA7C11] font-bold uppercase block mb-3">
            Informativos Semanais
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#161513] font-normal tracking-tight mb-4">
            Nosso <span className="italic text-gold-gradient-dark font-medium">Blog Jurídico</span>
          </h2>
          <p className="font-sans text-gray-500 text-xs sm:text-sm leading-relaxed">
            Pareceres técnicos simplificados e análise de novas jurisprudências para resguardar seus direitos constitucionais e garantir estabilidade de negócios.
          </p>
        </div>

        {/* Category switcher tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-serif font-medium tracking-wide transition-all duration-300 border cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#161513] text-white border-black shadow-md'
                  : 'bg-white text-gray-600 border-gray-200/60 hover:border-[#D4AF37]/50 hover:text-black font-medium'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((art) => (
              <motion.div
                key={art.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-[#D4AF37]/15 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#D4AF37]/45 hover:shadow-2xl duration-300 transition-all group"
              >
                <div>
                  {/* Category badge & meta */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-[9px] tracking-widest bg-[#D4AF37]/10 text-[#81600F] font-bold px-2.5 py-1 uppercase rounded-full border border-[#D4AF37]/20">
                      {art.category}
                    </span>
                    <div className="flex items-center gap-1.5 font-sans text-[10px] text-gray-400">
                      <Clock className="w-3 h-3 text-[#D4AF37]" />
                      <span>{art.readTime} de leitura</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg sm:text-xl text-[#161513] font-bold mb-3 group-hover:text-[#AA7C11] transition-colors leading-snug">
                    {art.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed mb-6">
                    {art.excerpt}
                  </p>
                </div>

                {/* Footer: Date & Read Actions */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="font-sans text-[10.5px] text-gray-400 font-semibold">{art.date}</span>
                  <button
                    onClick={() => setOpenArticle(art)}
                    className="font-mono text-[9.5px] tracking-widest text-[#AA7C11] group-hover:text-black font-extrabold uppercase inline-flex items-center gap-1.5 cursor-pointer hover:underline"
                  >
                    <span>Ler Artigo Completo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No articles fallbacks (fully structured skeleton state) */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12 bg-white rounded-3xl border border-dashed border-[#D4AF37]/20 max-w-sm mx-auto">
            <BookOpen className="w-8 h-8 text-gray-300 mx-auto mb-3" />
            <p className="font-serif text-sm text-gray-700">Nenhum artigo publicado ainda nesta categoria.</p>
            <p className="font-sans text-xs text-gray-400 mt-1">Aguarde nossas novas postagens jurídicas em breve.</p>
          </div>
        )}

      </div>

      {/* Reader Modal Overlay */}
      <AnimatePresence>
        {openArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border border-[#D4AF37]/30 max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl relative max-h-[85vh] flex flex-col"
            >
              {/* Head strip */}
              <div className="bg-[#161513] text-white p-6 relative flex justify-between items-center shrink-0">
                <div>
                  <span className="font-mono text-[9px] tracking-widest text-[#D4AF37] font-bold uppercase">ARTIGO • {openArticle.category}</span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white mt-1 leading-tight">{openArticle.title}</h3>
                </div>
                <button
                  onClick={() => setOpenArticle(null)}
                  className="text-gray-400 hover:text-white transition-colors text-2xl font-bold cursor-pointer inline-flex items-center justify-center w-8 h-8 border border-white/10 hover:border-white/30 rounded-full"
                >
                  &times;
                </button>
              </div>

              {/* Body Content */}
              <div className="p-8 overflow-y-auto space-y-4">
                <p className="font-sans text-xs sm:text-sm text-gray-700 leading-relaxed font-semibold italic border-l-2 border-[#D4AF37] pl-3">
                  "{openArticle.excerpt}"
                </p>
                <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed font-normal whitespace-pre-line">
                  {openArticle.content}
                </p>
                <div className="pt-6 border-t border-gray-100 flex justify-between items-center text-gray-400 text-[11px] font-sans">
                  <span>Autor: Gomes Advogados Consultivos</span>
                  <span>Publicado em {openArticle.date}</span>
                </div>
              </div>

              {/* Action feet */}
              <div className="bg-gray-50 p-6 border-t border-gray-100 flex items-center justify-end shrink-0 gap-4">
                <a
                  href={`https://wa.me/5511999999999?text=Gostaria%20de%20tirar%20uma%20dúvida%20sobre%20o%20artigo%20"${encodeURIComponent(openArticle.title)}"`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] hover:from-[#cFA32A] hover:to-[#8E650C] text-white font-sans text-xs font-bold tracking-widest uppercase py-3 px-6 rounded-full flex items-center gap-2 transition-all shadow-md shadow-[#D4AF37]/15"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-white shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.013-5.11-2.861-6.963C16.828 1.942 14.354 1.93 11.723 1.93 6.286 1.93 1.86 6.35 1.856 11.788c-.001 1.637.433 3.237 1.272 4.678l-.997 3.64 3.73-.978l.496.294-.31-.132zm10.974-6.84c-.31-.155-1.83-.902-2.112-1.005-.282-.103-.488-.155-.693.155-.205.31-.795.981-.974 1.186-.18.205-.359.231-.669.075-.31-.155-1.309-.482-2.493-1.538-.92-.82-1.54-1.834-1.72-2.143-.18-.31-.019-.477.136-.632.14-.139.31-.361.464-.542.155-.18.206-.31.31-.515.103-.205.051-.387-.026-.542-.077-.155-.693-1.67-.95-2.285-.25-.602-.503-.52-.693-.53l-.591-.01c-.205 0-.538.077-.82.387-.282.31-1.077 1.051-1.077 2.562 0 1.511 1.097 2.969 1.246 3.17.15.201 2.16 3.299 5.23 4.625.73.315 1.3.504 1.743.645.734.233 1.401.2 1.928.121.588-.088 1.831-.749 2.088-1.474.256-.725.256-1.346.18-1.474-.078-.129-.282-.205-.591-.361z" />
                  </svg>
                  <span>Consultar agora via WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
