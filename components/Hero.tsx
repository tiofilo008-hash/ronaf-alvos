import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Office Environment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-primary-dark/80 to-slate-900/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-8 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded bg-emerald-500/20 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-6 border border-emerald-500/30">
              Excelência Profissional
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
              Soluções Estratégicas para o <span className="text-emerald-400">Seu Negócio.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Da constituição rápida de empresas aos serviços de alvarás e limpeza. 
              A RONAF-ALVOS é a parceira certa para simplificar a burocracia e cuidar do seu ambiente corporativo no Lubango.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#services"
                className="group inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:bg-emerald-500 hover:-translate-y-1 shadow-lg shadow-emerald-900/20"
              >
                Nossos Serviços
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-white border border-white/30 hover:bg-white/10 transition-all"
              >
                Fale Conosco
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;