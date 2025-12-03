import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Quanto tempo demora a constituição de uma empresa?",
    answer: "O tempo pode variar consoante a complexidade e o tipo de sociedade, mas com a nossa assessoria, conseguimos agilizar o processo junto do Guiché Único, reduzindo significativamente os prazos habituais."
  },
  {
    question: "Fornecem materiais de limpeza ou o cliente deve providenciar?",
    answer: "A RONAF-ALVOS fornece todos os materiais e equipamentos profissionais necessários para a limpeza. Utilizamos produtos de alta qualidade e adequados para cada tipo de superfície, garantindo um serviço completo sem preocupações para o cliente."
  },
  {
    question: "Como funciona o serviço de tratamento de Alvarás?",
    answer: "Nós tratamos de todo o processo burocrático. Recolhemos a documentação necessária, submetemos junto das administrações municipais ou órgãos competentes e fazemos o acompanhamento até a emissão final do documento."
  },
  {
    question: "Atendem apenas no Lubango?",
    answer: "A nossa sede é no Bairro Comercial do Lubango, focando principalmente na província da Huíla. No entanto, para certos serviços de consultoria e constituição, podemos analisar solicitações de outras regiões."
  },
  {
    question: "É possível contratar um plano mensal de limpeza?",
    answer: "Sim! Temos planos flexíveis (diário, semanal, quinzenal ou mensal) adaptados às necessidades da sua empresa ou residência. Entre em contacto para um orçamento personalizado."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Header Column */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
                <HelpCircle size={14} />
                <span>Dúvidas Comuns</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                Perguntas Frequentes
              </h2>
              <p className="text-slate-600 mb-8">
                Reunimos as dúvidas mais comuns dos nossos clientes para o ajudar a entender melhor como podemos facilitar o seu dia-a-dia.
              </p>
              <a 
                href="#contact"
                className="inline-block bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200"
              >
                Fazer outra pergunta
              </a>
            </div>
          </div>

          {/* Accordion Column */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`border rounded-xl transition-colors duration-300 ${
                    openIndex === index ? 'border-emerald-500 bg-emerald-50/30' : 'border-slate-200 bg-white hover:border-emerald-200'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex items-center justify-between w-full p-6 text-left"
                  >
                    <span className={`font-bold text-lg ${openIndex === index ? 'text-emerald-800' : 'text-slate-700'}`}>
                      {faq.question}
                    </span>
                    <span className={`ml-4 p-1 rounded-full ${openIndex === index ? 'bg-emerald-200 text-emerald-800' : 'bg-slate-100 text-slate-500'}`}>
                      {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                    </span>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;