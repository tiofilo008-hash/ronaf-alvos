import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Grid */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Business Meeting" 
                className="rounded-2xl shadow-xl w-full h-64 object-cover transform translate-y-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Clean Office" 
                className="rounded-2xl shadow-xl w-full h-64 object-cover"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-xl shadow-2xl max-w-[200px]">
              <p className="text-4xl font-serif font-bold text-emerald-400 mb-1">10+</p>
              <p className="text-sm text-slate-300 leading-tight">Anos de experiência combinada em gestão.</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-emerald-600 font-bold uppercase tracking-wider text-sm mb-2">Sobre a RONAF-ALVOS</h4>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
              Facilitamos o caminho para o sucesso da sua empresa.
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Localizados no coração do Bairro Comercial no Lubango, somos especialistas em desburocratizar processos empresariais e manter o seu ambiente de trabalho impecável.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              A nossa missão é permitir que você foque no que realmente importa: o crescimento do seu negócio. Cuidamos de toda a papelada legal e da manutenção do seu espaço com rigor e profissionalismo.
            </p>

            <ul className="space-y-4">
              {[
                "Atendimento personalizado e ágil",
                "Equipa qualificada e experiente",
                "Compromisso com prazos e excelência"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  <span className="text-slate-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;