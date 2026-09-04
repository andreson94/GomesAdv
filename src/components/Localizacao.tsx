import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';

export default function Localizacao() {
  const [activeUnit, setActiveUnit] = useState<'paulista' | 'farialima'>('paulista');

  const units = {
    paulista: {
      id: 'paulista',
      tag: 'SEDE CENTRAL',
      name: 'Sede Central Paulista',
      address: 'Avenida Paulista, 2000 • Conjuntos 201/202 • Cerqueira César, São Paulo - SP, CEP 01310-200',
      phone: '(11) 99999-9999 (Plantão 24h WhatsApp)',
      email: 'contato@gomesadvogadoresolvedores.com.br',
      hours: 'Segunda a Sexta, das 09h às 18h (Demais horários em plantão criminal 24h restrito).',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197576508316!2d-46.660167523719085!3d-23.5613496671846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59ce459bd5ad%3A0x86cc3d41029c488!2sAv.%20Paulista%2C%202000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-200!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr',
      imgUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
      roomName: 'Sala de Reuniões Master'
    },
    farialima: {
      id: 'farialima',
      tag: 'EXPANSÃO CORPORATIVA',
      name: 'Unidade Corporate Faria Lima',
      address: 'Avenida Brigadeiro Faria Lima, 1485 • Torre Sul, 12º andar • Pinheiros, São Paulo - SP, CEP 01452-002',
      phone: '(11) 99999-9998 (Atendimento Executivo Faria Lima)',
      email: 'farialima@gomesadvogadoresolvedores.com.br',
      hours: 'Segunda a Sexta, das 09h às 18h (Atendimento planejado para assessoria corporativa e preventiva).',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0754388656754!2d-46.6896264!3d-23.5662137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce570ad2ba0ca9%3A0xffa5509e530dc7e4!2sAv.%20Brigadeiro%20Faria%20Lima%2C%201485%20-%20Jardim%20Paulistano%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001452-002!5e0!3m2!1spt-BR!2sbr!4v1717370000000!5m2!1spt-BR!2sbr',
      imgUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80',
      roomName: 'Sala Consultiva Faria Lima'
    }
  };

  const current = units[activeUnit];

  return (
    <section id="localizacao" className="bg-[#faf9f6]/95 py-24 border-b border-black/5 relative z-10 scroll-mt-12">
      <div className="absolute inset-0 glow-grid-light opacity-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#AA7C11] font-bold uppercase block mb-3">
            Nossos Escritórios Físicos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#161513] font-normal tracking-tight mb-4">
            Duas Unidades de <span className="italic text-gold-gradient-dark font-medium">Estrita Confiança</span>
          </h2>
          <p className="font-sans text-gray-500 text-xs sm:text-sm leading-relaxed">
            Oferecemos total sigilo e discrição para audiências de conciliação ou planejamento de alta complexidade em duas das principais avenidas corporativas de São Paulo.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveUnit('paulista')}
            className={`px-6 py-3 rounded-full text-xs font-serif tracking-wider font-semibold uppercase transition-all duration-300 border cursor-pointer ${
              activeUnit === 'paulista'
                ? 'bg-[#161513] text-white border-black shadow-md'
                : 'bg-white text-gray-600 border-gray-200/60 hover:border-[#D4AF37]/50 hover:text-black'
            }`}
          >
            Sede Av. Paulista
          </button>
          <button
            onClick={() => setActiveUnit('farialima')}
            className={`px-6 py-3 rounded-full text-xs font-serif tracking-wider font-semibold uppercase transition-all duration-300 border cursor-pointer ${
              activeUnit === 'farialima'
                ? 'bg-[#161513] text-white border-black shadow-md'
                : 'bg-white text-gray-600 border-gray-200/60 hover:border-[#D4AF37]/50 hover:text-black'
            }`}
          >
            Unidade Faria Lima
          </button>
        </div>

        {/* 2-Columns layout to highlight Office Photo + Iframe Map */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeUnit}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch"
          >
            
            {/* Card left: Address info and office photo with more visual space */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-gray-200/60 rounded-3xl p-8 shadow-xl shadow-black/2">
              <div>
                <span className="font-mono text-[9px] tracking-widest text-[#AA7C11] font-extrabold uppercase block mb-3">
                  {current.tag}
                </span>
                <h3 className="font-serif text-xl text-[#161513] font-bold mb-4">
                  {current.name}
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex gap-3">
                    <MapPin className="w-4 h-4 text-[#AA7C11] mt-0.5 shrink-0" />
                    <p className="font-sans text-xs text-gray-600 leading-normal">
                      {current.address}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Phone className="w-4 h-4 text-[#AA7C11] mt-0.5 shrink-0" />
                    <p className="font-sans text-xs text-gray-600 leading-none font-semibold">
                      {current.phone}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Mail className="w-4 h-4 text-[#AA7C11] mt-0.5 shrink-0" />
                    <p className="font-sans text-xs text-gray-600 leading-none">
                      {current.email}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Clock className="w-4 h-4 text-[#AA7C11] mt-0.5 shrink-0" />
                    <p className="font-sans text-xs text-gray-500 leading-normal">
                      {current.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* High end meeting room photo representation */}
              <div className="rounded-2xl overflow-hidden aspect-[16/9] border border-[#D4AF37]/20 bg-[#0d0d0c] relative group shadow-lg">
                <img
                  src={current.imgUrl}
                  alt={`Nossa ${current.roomName} Gomes Advogados`}
                  className="w-full h-full object-cover group-hover:scale-105 duration-700 transition-transform"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050505]/90 to-transparent p-4 flex justify-between items-center">
                  <span className="font-serif text-xs text-white font-bold">{current.roomName}</span>
                  <span className="font-mono text-[9px] text-[#D4AF37] border border-[#D4AF37]/35 px-2.5 py-0.5 rounded uppercase">Privativo</span>
                </div>
              </div>
            </div>

            {/* Card right: Google Maps Iframe embedded inside a clean layout */}
            <div className="lg:col-span-7 bg-white border border-gray-200/60 rounded-3xl overflow-hidden min-h-[350px] lg:min-h-0 shadow-xl shadow-black/2 relative">
              <iframe
                src={current.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${current.name} Location Map`}
              />
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
