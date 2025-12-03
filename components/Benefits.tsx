import React from 'react';
import { motion } from 'framer-motion';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-primary-dark text-white relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500 opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Porquê Escolher a RONAF-ALVOS?</h2>
            <p className="text-slate-300 mb-8 text-lg">
              Não somos apenas prestadores de serviços; somos parceiros comprometidos com o crescimento sustentável do seu negócio na Huíla.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { number: "01", title: "Rapidez", text: "Processos burocráticos tratados com máxima celeridade." },
                { number: "02", title: "Confiança", text: "Transparência total em todas as etapas do serviço." },
                { number: "03", title: "Qualidade", text: "Padrões elevados na limpeza e gestão administrativa." },
                { number: "04", title: "Localização", text: "Estrategicamente situados no Bairro Comercial." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border-l border-emerald-500/30 pl-6"
                >
                  <span className="text-4xl font-serif text-emerald-500/50 font-bold mb-2 block">{item.number}</span>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
             <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Parceria de Sucesso</h4>
                    <p className="text-xs text-slate-400">Junte-se a centenas de clientes satisfeitos</p>
                  </div>
                </div>
                <blockquote className="text-slate-300 italic mb-6">
                  "A RONAF-ALVOS transformou a forma como lidamos com a burocracia. O serviço de limpeza é impecável e a equipa é extremamente profissional. Recomendo vivamente!"
                </blockquote>
                <div className="flex items-center gap-2">
                   <div className="h-px w-8 bg-emerald-500"></div>
                   <span className="text-emerald-500 font-bold text-sm">Cliente Corporativo</span>
                </div>
             </div>
             {/* Decorative element behind */}
             <div className="absolute top-4 -right-4 w-full h-full border-2 border-emerald-500/30 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;