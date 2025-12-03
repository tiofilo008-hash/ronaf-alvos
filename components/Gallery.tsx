import React from 'react';
import { motion } from 'framer-motion';
import { Camera, ZoomIn } from 'lucide-react';

const images = [
  {
    src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Ambientes Corporativos",
    title: "Escritórios Organizados"
  },
  {
    src: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Limpeza Profissional",
    title: "Higienização Completa"
  },
  {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Consultoria",
    title: "Planeamento Estratégico"
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Gestão",
    title: "Edifícios Comerciais"
  },
  {
    src: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Atendimento",
    title: "Equipa Focada"
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Legalização",
    title: "Processos e Alvarás"
  }
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-2 block">Nosso Portfólio</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Galeria de Excelência</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Visualize o padrão de qualidade que trazemos para cada projeto, seja na manutenção de espaços ou na organização corporativa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-72"
            >
              <img 
                src={img.src} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/60 transition-colors duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.category}
                </span>
                <h3 className="text-white text-xl font-bold mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {img.title}
                </h3>
                <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  <ZoomIn className="text-white" size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:text-emerald-800 transition-colors border-b-2 border-emerald-200 hover:border-emerald-600 pb-1">
            <Camera size={18} />
            Ver mais no nosso Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;