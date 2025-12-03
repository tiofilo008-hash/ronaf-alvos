import React from 'react';
import { ShieldCheck, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-white">
              <ShieldCheck size={24} className="text-emerald-500" />
              <span className="font-serif text-xl font-bold">RONAF-ALVOS</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm mb-6">
              A sua parceira estratégica no Lubango. Oferecemos soluções completas em constituição de empresas, tratamento de alvarás e serviços de limpeza com o mais alto padrão de qualidade.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-emerald-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Constituição de Empresas</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Tratamento de Alvarás</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Limpeza Comercial</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Limpeza Residencial</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Gestão Administrativa</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-emerald-400 transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contactos</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} RONAF-ALVOS. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Desenvolvido com excelência.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;