import { Landmark, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#050505] text-gray-500 pt-20 pb-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Col 1: Brand & Subtext */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <a href="#home" className="flex items-center gap-3">
              <div className="flex items-center justify-center">
                <img 
                  src="/input_file_1.png" 
                  alt="Gomes Advogados Logo" 
                  className="h-9 w-auto object-contain brightness-100"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-wider text-white font-medium uppercase leading-none">
                  Gomes Advogados
                </span>
                <span className="font-sans text-[8px] tracking-[0.25em] text-[#D4AF37] font-black uppercase mt-1">
                  Advocacia de Elite
                </span>
              </div>
            </a>
            <p className="font-sans text-xs text-gray-400 leading-relaxed max-w-sm">
              Escritório de advocacia boutique focado em soluções premium e estratégias de alta tese jurídica. Representamos nossos egrégios patrocinados em todo o território nacional.
            </p>
            <div className="flex items-center gap-3 text-emerald-400">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span className="font-mono text-[9px] tracking-widest uppercase font-bold text-[#D4AF37]">Incentivo OAB 205/2021 Contratual</span>
            </div>
          </div>

          {/* Col 2 & 3: Navigation Links */}
          <div className="lg:col-span-3 lg:col-start-6">
            <h4 className="font-mono text-[10px] tracking-[0.15em] text-[#D4AF37] font-bold uppercase mb-6">Atalhos Rápidos</h4>
            <ul className="space-y-3.5">
              <li>
                <a href="#especialidades" className="font-sans text-xs text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">
                  Especialidades Jurídicas
                </a>
              </li>
              <li>
                <a href="#equipe" className="font-sans text-xs text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">
                  Nossa Equipe
                </a>
              </li>
              <li>
                <a href="#blog" className="font-sans text-xs text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">
                  Artigos & Blog
                </a>
              </li>
              <li>
                <a href="#contato" className="font-sans text-xs text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">
                  Alinhamento de Consulta
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Operations & Standards */}
          <div className="lg:col-span-4">
            <h4 className="font-mono text-[10px] tracking-[0.15em] text-[#D4AF37] font-bold uppercase mb-6">Prontidão Técnica</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                <span className="font-sans text-xs text-gray-400 leading-normal">
                  Sede Central: Avenida Paulista, 2000 • Conjuntos 201/202 • Cerqueira César, São Paulo - SP, CEP 01310-200.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                <span className="font-sans text-xs text-gray-400 leading-normal">
                  Fatores Críticos / Delegacias: +55 (11) 99999-9999
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                <span className="font-sans text-xs text-gray-400 leading-normal">
                  Protetor de Dados: dpo@cruzadvocaciapremium.com
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Disclaimer & Copyrights */}
        <div className="pt-12 text-center md:text-left flex flex-col md:flex-row items-center md:items-start justify-between gap-8 animate-fadeIn">
          
          {/* Ethical disclaimer block */}
          <div className="max-w-2xl">
            <p className="font-sans text-[10px] text-gray-600 leading-relaxed text-center md:text-left">
              <strong>Compromisso Ético e Regulatório:</strong> O conteúdo intelectual veiculado neste portal digital é estritamente de caráter informativo e educativo, em estrita observância ao Código de Ética e Disciplina da Ordem dos Advogados do Brasil (OAB) e ao Provimento OAB nº 205/2021. Este portal não realiza captação mercantilista de clientes ativa ou captação em massa. Não constitui aconselhamento jurídico direto vinculante ou promessa de sucesso de causa contratual. Todas as comunicações digitais síncronas fornecidas pela Minerva AI representam mero mecanismo preliminar de auxílio organizador triado e confidencial sob tutela de sigilo.
            </p>
          </div>

          <div className="shrink-0 text-center md:text-right flex flex-col gap-1.5 justify-center">
            <span className="font-sans text-xs text-gray-500 font-medium">
              © {currentYear} Gomes Advogados | Advocacia Premium.
            </span>
            <span className="font-mono text-[9px] text-gray-600 block">
              Todos os direitos reservados. Advogados inscritos na OAB/SP.
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}
