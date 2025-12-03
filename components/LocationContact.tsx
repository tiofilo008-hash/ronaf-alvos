import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const LocationContact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Entre em Contato</h2>
          <p className="text-slate-600">Estamos prontos para atender a sua solicitação.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Localização</h3>
                <p className="text-slate-600 text-sm">Bairro Comercial<br />Lubango, Província da Huíla</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Telefone</h3>
                <p className="text-slate-600 text-sm">+244 941 901 806</p>
                <p className="text-slate-500 text-xs mt-1">Disponível no WhatsApp</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                <p className="text-slate-600 text-sm">geral@ronafalvos.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Horário</h3>
                <p className="text-slate-600 text-sm">Segunda a Sexta: 8h - 17h</p>
                <p className="text-slate-600 text-sm">Sábado: 8h - 13h</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-50 p-8 rounded-2xl shadow-sm">
            <form className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Nome Completo</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" placeholder="Seu nome" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Telefone</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" placeholder="+244 9XX XXX XXX" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Serviço de Interesse</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-white">
                  <option>Constituição de Empresa</option>
                  <option>Alvarás</option>
                  <option>Limpeza</option>
                  <option>Outros</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Mensagem</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" placeholder="Como podemos ajudar?"></textarea>
              </div>
              <button type="button" className="w-full bg-emerald-600 text-white font-bold py-4 rounded-lg hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 h-[400px] relative z-0">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.786967733221!2d13.4916!3d-14.9167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1bb631bd7d4905bf%3A0x6291612027599723!2sLubango%2C%20Angola!5e0!3m2!1sen!2sus!4v1647856789012!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Localização"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationContact;