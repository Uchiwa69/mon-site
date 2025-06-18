import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pourriez intégrer un service d'envoi d'email
    console.log('Form submitted:', formData);
    alert('Message envoyé ! Je vous répondrai dans les plus brefs délais.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Contact</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour discuter d'opportunités professionnelles, 
            de projets techniques ou simplement pour échanger sur les technologies SISR.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Restons en contact</h3>
              <p className="text-slate-600 mb-8">
                Je suis actuellement à la recherche d'opportunités dans le domaine de 
                l'infrastructure réseau et de la cybersécurité. Contactez-moi pour 
                discuter de vos projets ou pour toute question technique.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Email</h4>
                  <p className="text-slate-600">mohanebbache69@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                <div className="bg-green-600 p-3 rounded-lg">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Téléphone</h4>
                  <p className="text-slate-600">06 15 23 28 90</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Localisation</h4>
                  <p className="text-slate-600">Lyon, Auvergne Rhône-Alpes</p>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h4 className="font-semibold text-slate-800 mb-4">Suivez-moi</h4>
              <div className="flex gap-4">
                <a href="#" className="bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-lg transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg transition-colors">
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-slate-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Envoyez-moi un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                  Sujet *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-vertical"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Envoyer le message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-600">
            © 2024 Mohamed Nebbache - Portfolio BTS SIO SISR. Tous droits réservés.
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Site réalisé dans le cadre de l'épreuve E5 - BTS SIO Option SISR
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;