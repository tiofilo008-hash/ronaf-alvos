import React from 'react';
import { motion } from 'framer-motion';
import { Building2, FileText, Sparkles, Briefcase } from 'lucide-react';

const services = [
  {
    icon: <Building2 size={32} />,
    title: "Constituição de Empresas",
    description: "Assessoria completa para abertura da sua empresa. Tratamos de toda a documentação legal para que inicie o seu negócio sem complicações."
  },
  {
    icon: <FileText size={32} />,
    title: "Tratamento de Alvarás",
    description: "Gestão de alvarás comerciais com opções de processamento rápido e normal, garantindo a legalidade da sua atividade comercial."
  },
  {
    icon: <Sparkles size={32} />,
    title: "Serviços de Limpeza",
    description: "Limpeza profissional corporativa e residencial. Mantemos o seu ambiente higienizado, organizado e acolhedor."
  },
  {
    icon: <Briefcase size={32} />,
    title: "Serviços Administrativos",
    description: "Suporte administrativo abrangente para otimizar os processos internos da sua organização e aumentar a produtividade."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Nossos Serviços</h2>
          <p className="text-slate-600">
            Soluções integradas desenhadas para atender às necessidades específicas do mercado angolano com eficiência e qualidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;