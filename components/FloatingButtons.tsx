import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingButtons: React.FC = () => {
  // Número: 941901806
  // Código do país: +244 (Angola)
  
  // Formato para link de telefone (padrão universal tel:)
  const telLink = "tel:+244941901806";
  
  // Formato para WhatsApp API (apenas números, sem + ou traços)
  // Referência: https://wa.me/244941901806
  const whatsappLink = "https://wa.me/244941901806";

  return (
    <>
      {/* WhatsApp Button - Canto Inferior Esquerdo */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="fixed bottom-6 left-6 z-[9999] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl shadow-green-900/20 cursor-pointer hover:shadow-green-900/40 border-2 border-white/20"
        aria-label="Falar no WhatsApp"
        title="Falar no WhatsApp"
      >
        <MessageCircle size={28} fill="white" className="text-white relative z-10" />
        {/* Efeito de onda (ping) para chamar atenção */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
      </motion.a>

      {/* Phone Call Button - Canto Inferior Direito */}
      <motion.a
        href={telLink}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-14 h-14 bg-emerald-700 text-white rounded-full shadow-xl shadow-emerald-900/20 cursor-pointer hover:shadow-emerald-900/40 border-2 border-white/20 group"
        aria-label="Ligar agora"
        title="Ligar agora"
      >
        <Phone size={24} className="group-hover:animate-pulse relative z-10" />
        
        {/* Tooltip (apenas desktop para não atrapalhar no mobile) */}
        <span className="hidden md:block absolute right-full mr-4 bg-white text-slate-800 text-xs font-bold px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
          Ligue para nós
        </span>
      </motion.a>
    </>
  );
};

export default FloatingButtons;