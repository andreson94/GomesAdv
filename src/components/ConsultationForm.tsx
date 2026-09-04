import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, CheckCircle2, ShieldCheck, Clock2, ExternalLink } from 'lucide-react';
import { ContactData } from '../types';

export default function ConsultationForm() {
  const [formData, setFormData] = useState<ContactData>({
    name: '',
    email: '',
    phone: '',
    area: 'Criminal',
    description: '',
    whatsappConsent: true,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission to lawyer plantão pipeline
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const areasList = [
    { value: 'Criminal', label: 'Direito Criminal / Plantão Custódia (Urgência)' },
    { value: 'Civil', label: 'Direito Civil / Família / Danos Contratuais' },
    { value: 'Previdenciário', label: 'Direito Previdenciário / Benefícios / Aposentadoria' },
    { value: 'Trabalhista', label: 'Direito Trabalhista / CLT / Rescisão Indireta' },
    { value: 'Outro', label: 'Outras Questões Jurídicas de Alta Complexidade' },
  ];

  return (
    <section id="contato" className="bg-[#050505] py-24 border-b border-white/5 relative z-10 scroll-mt-12">
      <div className="absolute inset-0 glow-grid-dark opacity-30 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#D4AF37] font-bold uppercase block mb-3">
            Atendimento Exclusivo
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium tracking-tight mb-4 font-normal">
            Inicie Seu Alinhamento <span className="italic text-gold-gradient font-medium">Estratégico</span>
          </h2>
          <p className="font-sans text-gray-400 text-xs sm:text-sm leading-relaxed">
            Seja para defesas penais críticas em flagrante ou planejamento financeiro patronal/previdenciário, nossa banca responderá com máxima prontidão e absoluto sigilo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Block: Core Contact Channels & Info */}
          <div className="lg:col-span-4 flex flex-col justify-between py-2">
            <div className="space-y-10">
              
              {/* Channel 1 */}
              <div className="flex gap-5">
                <div className="w-12 h-12 border border-[#D4AF37]/20 bg-[#D4AF37]/5 flex items-center justify-center text-[#D4AF37] shrink-0 rounded-2xl">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] tracking-widest text-[#D4AF37] uppercase font-bold block mb-1">PLANTÃO DOIS CANAIS 24H</span>
                  <p className="font-sans text-sm text-white font-bold leading-none mb-1">(11) 99999-9999</p>
                  <p className="font-sans text-xs text-gray-500">Ligações ou mensagens criptografadas whatsapp.</p>
                </div>
              </div>

              {/* Channel 2 */}
              <div className="flex gap-5">
                <div className="w-12 h-12 border border-[#D4AF37]/20 bg-[#D4AF37]/5 flex items-center justify-center text-[#D4AF37] shrink-0 rounded-2xl">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] tracking-widest text-[#D4AF37] uppercase font-bold block mb-1">COMUNICAÇÃO INSTITUCIONAL</span>
                  <p className="font-sans text-sm text-white font-bold leading-none mb-1">contato@cruzadvocaciapremium.com.br</p>
                  <p className="font-sans text-xs text-gray-500">Respostas analíticas formais em até 1 hora comercial.</p>
                </div>
              </div>

              {/* Channel 3 */}
              <div className="flex gap-5">
                <div className="w-12 h-12 border border-[#D4AF37]/20 bg-[#D4AF37]/5 flex items-center justify-center text-[#D4AF37] shrink-0 rounded-2xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] tracking-widest text-[#D4AF37] uppercase font-bold block mb-1">CENTROS DE CONSULTA FÍSICA</span>
                  <p className="font-sans text-sm text-white font-bold leading-none mb-1">Av. Paulista, 2000 • São Paulo, SP</p>
                  <p className="font-sans text-xs text-gray-500">Atendimento presencial reservado com agendamento prévio.</p>
                </div>
              </div>

            </div>

            {/* Availability Widget */}
            <div className="mt-12 p-6 bg-[#0b0b0a] border border-[#D4AF37]/15 rounded-2xl relative overflow-hidden hidden lg:block">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/3 blur-xl rounded-full"></div>
              <div className="flex items-center gap-3 text-[#D4AF37] mb-3">
                <Clock2 className="w-4 h-4" />
                <span className="font-mono text-[10px] tracking-widest uppercase font-bold">TEMPO DE RESPOSTA MÉDIO</span>
              </div>
              <p className="font-sans text-xs text-gray-300 leading-normal mb-1 pb-1">
                Demandas <strong className="text-red-400 font-semibold">Criminais</strong> em andamento: atendimento em <strong className="text-white font-semibold">até 15 minutos</strong>.
              </p>
              <p className="font-sans text-xs text-gray-400 leading-normal">
                Demandas Previdenciárias, Cíveis e Trabalhistas: retorno em <strong className="text-white">até 1 hora útil</strong>.
              </p>
            </div>
          </div>

          {/* Right Block: Dynamic Intake Form */}
          <div className="lg:col-span-8 bg-[#0b0b0a] border border-[#D4AF37]/15 p-8 relative rounded-2xl shadow-xl">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Input 1: Name */}
                    <div className="space-y-2">
                      <label htmlFor="form-name" className="font-mono text-[9px] text-gray-400 uppercase tracking-widest font-bold">NOME COMPLETO:</label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Dr. Roberto Salles"
                        className="w-full bg-[#050505] border border-white/10 text-xs text-gray-300 p-4 focus:border-[#D4AF37] focus:ring-0 focus:outline-none rounded-xl duration-300 placeholder-gray-700"
                      />
                    </div>

                    {/* Input 2: WhatsApp Phone */}
                    <div className="space-y-2">
                      <label htmlFor="form-phone" className="font-mono text-[9px] text-gray-400 uppercase tracking-widest font-bold">WHATSAPP / TELEFONE SEGURO:</label>
                      <input
                        id="form-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Ex: (11) 99999-9999"
                        className="w-full bg-[#050505] border border-white/10 text-xs text-gray-300 p-4 focus:border-[#D4AF37] focus:ring-0 focus:outline-none rounded-xl duration-300 placeholder-gray-700"
                      />
                    </div>
                  </div>

                  {/* Input 3: Email */}
                  <div className="space-y-2">
                    <label htmlFor="form-email" className="font-mono text-[9px] text-gray-400 uppercase tracking-widest font-bold">E-MAIL INSTITUCIONAL PARA PARECERES:</label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Ex: roberto.salles@corporativo.com"
                      className="w-full bg-[#050505] border border-white/10 text-xs text-gray-300 p-4 focus:border-[#D4AF37] focus:ring-0 focus:outline-none rounded-xl duration-300 placeholder-gray-700"
                    />
                  </div>

                  {/* Input 4: Practice Area Selector */}
                  <div className="space-y-2">
                    <label htmlFor="form-area" className="font-mono text-[9px] text-[#D4AF37] uppercase tracking-widest font-bold block">ESPECIALIDADE JURÍDICA:</label>
                    <div className="relative">
                      <select
                        id="form-area"
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                        className="w-full bg-[#050505] border border-white/10 text-xs text-gray-300 p-4 focus:border-[#D4AF37] focus:ring-0 focus:outline-none rounded-xl duration-300 cursor-pointer"
                      >
                        {areasList.map((itm) => (
                          <option key={itm.value} value={itm.value} className="bg-[#0b0b0a]">
                            {itm.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Input 5: Description */}
                  <div className="space-y-2">
                    <label htmlFor="form-desc" className="font-mono text-[9px] text-gray-400 uppercase tracking-widest font-bold">DESCRIÇÃO SUCINTA DA SITUAÇÃO:</label>
                    <textarea
                      id="form-desc"
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Favor resumir as datas relevantes e fatos principais para que nossa tese extrajudicial seja rascunhada com prioridade."
                      className="w-full bg-[#050505] border border-white/10 text-xs text-gray-300 p-4 focus:border-[#D4AF37] focus:ring-0 focus:outline-none rounded-xl resize-none placeholder-gray-700 font-sans"
                    />
                  </div>

                  {/* Input 6: Consent checkbox */}
                  <div className="flex items-start gap-3 pt-2">
                    <input
                      id="whatsappConsent"
                      type="checkbox"
                      checked={formData.whatsappConsent}
                      onChange={(e) => setFormData({ ...formData, whatsappConsent: e.target.checked })}
                      className="w-4 h-4 rounded-sm bg-[#050505] border-white/15 text-[#D4AF37] focus:ring-0 focus:ring-offset-0 mt-1 accent-[#D4AF37] cursor-pointer"
                    />
                    <label htmlFor="whatsappConsent" className="font-sans text-gray-400 text-[11px] leading-snug cursor-pointer select-none">
                      Autorizo o envio instantâneo de comunicações seguras e agendamentos de videoconferência via WhatsApp oficial corporativo da Cruz & Associados.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      id="contact-btn-submit"
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#D4AF37] hover:bg-[#B38F2D] text-[#050505] font-sans text-xs font-bold tracking-widest uppercase py-4 rounded-full transition-all duration-300 shrink-0 inline-flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-[1.01]"
                    >
                      {loading ? 'ENVIANDO PROTOCOLO...' : 'ENVIAR PARA AVALIAÇÃO DE PARCEIRO'}
                    </button>
                  </div>

                </motion.form>
              ) : (
                /* Success screen display */
                <motion.div
                  key="success-form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 px-6 h-full"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 animate-pulse">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-emerald-400 uppercase font-bold mb-2">Protocolo Registrado em Segurança</span>
                  <h3 className="font-serif text-2xl text-white font-medium mb-4">
                    Alinhamento Solicitado com Sucesso
                  </h3>
                  <p className="font-sans text-gray-400 text-xs leading-relaxed max-w-md mb-8">
                    Olá, <strong className="text-white font-bold">{formData.name}</strong>. Nosso Sócio Diretor, <strong>Dr. Andreson Cruz</strong> ou um dos líderes de prática jurídica em <strong>Direito {formData.area}</strong> recebeu o sumário reservadamente. Preparamos uma análise técnica prévia e faremos contato seguro em até <strong>15 minutos</strong> através do número fornecido.
                  </p>

                  <div className="p-5 bg-white/5 border border-[#D4AF37]/20 text-left rounded-2xl max-w-sm w-full space-y-2 mb-8">
                    <div className="flex justify-between font-mono text-[9px] text-gray-500 uppercase tracking-widest">
                      <span>Protocolo:</span>
                      <span className="text-white font-bold">#{Math.floor(100000 + Math.random() * 900000)}</span>
                    </div>
                    <div className="flex justify-between font-mono text-[9px] text-gray-500 uppercase tracking-widest">
                      <span>Canal:</span>
                      <span className="text-emerald-500 flex items-center gap-1 font-semibold">SMS / WhatsApp <ExternalLink className="w-2.5 h-2.5" /></span>
                    </div>
                    <div className="flex justify-between font-mono text-[9px] text-gray-500 uppercase tracking-widest">
                      <span>Status:</span>
                      <span className="text-[#D4AF37] animate-pulse font-semibold">Foco Prioritário ATIVO</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="font-mono text-[10px] tracking-widest text-[#D4AF37] hover:text-white uppercase transition-colors duration-300 cursor-pointer"
                  >
                    ← Enviar Outro Relato
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
