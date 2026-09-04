import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Shield, Menu, X, Landmark } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Nossa Equipe', href: '#equipe' },
    { name: 'Blog', href: '#blog' },
    { name: 'Mentoria', href: '#mentorias' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 ${
        scrolled
          ? 'bg-[#faf9f6]/90 border-b border-[#D4AF37]/20 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <img 
              src="/input_file_1.png" 
              alt="Gomes Advogados Logo" 
              className="h-10 w-auto object-contain brightness-100"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className={`font-serif text-lg tracking-wider font-semibold transition-colors duration-300 ${
              scrolled ? 'text-[#121211] group-hover:text-[#AA7C11]' : 'text-white group-hover:text-[#D4AF37]'
            }`}>
              GOMES ADVOGADOS
            </span>
            <span className={`font-sans text-[8px] tracking-[0.25em] font-bold uppercase ${
              scrolled ? 'text-[#AA7C11]' : 'text-[#D4AF37]'
            }`}>
              ADVOCACIA DE ELITE
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-sans text-xs tracking-widest uppercase font-medium transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 hover:after:w-full after:bg-[#D4AF37] after:transition-all after:duration-300 ${
                scrolled ? 'text-gray-700 hover:text-[#121211]' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button & Availability Indicator */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2 ml-[7px]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className={`font-mono text-[10px] tracking-widest font-semibold uppercase ${
              scrolled ? 'text-emerald-700' : 'text-[#D4AF37]'
            }`}>
              PLANTÃO 24H ONLINE
            </span>
          </div>

          <a
            id="nav-btn-whatsapp"
            href="https://wa.me/5511999999999?text=Ol%C3%A1.%20Preciso%20de%20atendimento%20jur%C3%ADdico%20especializado.%20Fui%20encaminhado%20pelo%20site."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#050505] text-[11px] tracking-widest uppercase font-semibold px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-[#D4AF37]/15 duration-300 transition-all border border-[#cba881] hover:scale-105"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>FALAR COM ADVOGADO</span>
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden duration-300 p-2 ${scrolled ? 'text-[#121211] hover:text-[#AA7C11]' : 'text-white hover:text-[#D4AF37]'}`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden border-b border-[#D4AF37]/15 backdrop-blur-lg ${
              scrolled ? 'bg-[#faf9f6]/95' : 'bg-[#0a0a09]/95'
            }`}
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-sans text-xs tracking-widest uppercase py-2 border-b font-medium transition-colors duration-300 ${
                    scrolled 
                    ? 'text-gray-700 hover:text-[#121211] border-black/5' 
                    : 'text-gray-300 hover:text-[#D4AF37] border-white/5'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-4 mt-2">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="font-mono text-[10px] tracking-widest text-[#D4AF37] font-semibold uppercase">
                    PLANTÃO CRIMINAL 24H ATIVO
                  </span>
                </div>
                <a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1.%20Preciso%20de%20atendimento%20jur%C3%ADdico%20especializado.%20Fui%20encaminhado%20pelo%20site."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#050505] text-[11px] tracking-widest uppercase font-semibold py-3 rounded-full inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>EMERGÊNCIA WHATSAPP</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
