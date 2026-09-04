import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsMarquee from './components/StatsMarquee';
import ComoFunciona from './components/ComoFunciona';
import PracticeAreas from './components/PracticeAreas';
import Equipe from './components/Equipe';
import Localizacao from './components/Localizacao';
import Blog from './components/Blog';
import Mentorias from './components/Mentorias';
import ConsultationForm from './components/ConsultationForm';
import Testimonials from './components/Testimonials';
import CTAFinal from './components/CTAFinal';
import Footer from './components/Footer';
import { ShieldAlert, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [showScrollBtns, setShowScrollBtns] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollBtns(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#faf9f6]/95 text-[#161513] selection:bg-[#D4AF37] selection:text-[#050505]">
      {/* Premium ambient light backdrop grid */}
      <div className="fixed inset-0 glow-grid-light pointer-events-none z-0 opacity-55"></div>

      {/* Floating Header */}
      <Navbar />

      {/* Main Structural Assembly */}
      <main className="relative z-10">
        <Hero />
        
        {/* Infinite credentials marquee auto ticker */}
        <StatsMarquee />
        
        {/* 4. Como funciona (Atendimento Jurídico Simples e Eficiente) */}
        <ComoFunciona />
        
        {/* 6. Equipe Jurídica (Dra. Amanda Gomes OAB lead & partners) */}
        <Equipe />
        
        {/* 3. Áreas de Atuação (Elegant Grid & Dynamic Internal Detail Pages) */}
        <PracticeAreas />
        
        {/* 7. Localizacao (Map Iframe + Paulistas/Meeting room photos) */}
        <Localizacao />
        
        {/* 8. Blog Jurídico (Categories, mockup articles read modal) */}
        <Blog />
        
        {/* 10. Mentorias (Categories and live reservation schedules) */}
        <Mentorias />
        
        {/* Interactive Consultation Form */}
        <ConsultationForm />
        
        {/* Client Social Proof */}
        <Testimonials />
        
        {/* 11. CTA Final (Dourado suave + green WhatsApp action) */}
        <CTAFinal />
      </main>

      {/* Absolute Legal Footer */}
      <Footer />

      {/* Floaters Widgets for Urgency Conversions and Scroll Back */}
      <AnimatePresence>
        {showScrollBtns && (
          <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
            
            {/* Urgent Plantão Callout button */}
            <motion.a
              id="sticky-plantao-wa"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              href="https://wa.me/5511999999999?text=URGENTE:%20Preciso%20de%20atendimento%20jur%C3%ADdico%20imediato.%20Vim%20pelo%20bot%C3%A3o%20de%20plant%C3%A3o%20r%C3%A1pido."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#902929] hover:bg-[#b03535] text-white border border-red-500/10 shadow-2xl duration-300 transition-all flex items-center justify-center gap-2 cursor-pointer group rounded-full relative emergency-btn-layout emergency-button-pulse opacity-80 sm:opacity-95 hover:opacity-100"
              title="Acompanhamento Criminal de Urgência"
            >
              {/* Pulsing indicator inside the button - visible on PC and horizontal mobile */}
              <div className="relative h-2.5 w-2.5 shrink-0 items-center justify-center emergency-indicator">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </div>
              <ShieldAlert className="w-5 h-5 text-red-100 group-hover:rotate-[15deg] duration-300 shrink-0" />
              <span className="font-mono text-[9px] tracking-widest uppercase font-bold text-white whitespace-nowrap emergency-btn-text">
                Plantão Custódia 24h
              </span>
            </motion.a>

            {/* Back to top scroll anchor */}
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={scrollToTop}
              className="bg-[#0b0b0a] hover:bg-[#D4AF37] text-gray-400 hover:text-[#0b0b0a] border border-white/10 hover:border-[#D4AF37] p-4 duration-300 transition-all cursor-pointer flex items-center justify-center rounded-full shadow-2xl"
              aria-label="Back to top"
            >
              <ChevronUp className="w-5 h-5" />
            </motion.button>

          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
