import React from 'react';
import { User, GraduationCap, Target, Download, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">À propos de moi</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-2xl text-white">
              <div className="flex items-center gap-3 mb-4">
                <User size={24} />
                <h3 className="text-xl font-semibold">Profil étudiant</h3>
              </div>
              <div className="space-y-3 text-blue-100">
                <p><strong>Nom :</strong> Nebbache Mohamed</p>
                <p><strong>Formation :</strong> BTS SIO – Option SISR</p>
                <p><strong>Établissement :</strong> Nexa Digital School, Lyon</p>
                <p><strong>Statut :</strong> Alternant chez Framatome</p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Target size={24} className="text-blue-600" />
                <h3 className="text-xl font-semibold text-slate-800">Objectifs professionnels</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Passionné par la cybersécurité et l'administration réseau, je souhaite 
                me spécialiser dans la protection des infrastructures informatiques. 
                Mon objectif à long terme est d'évoluer vers des fonctions de chef de projet IT, 
                afin de piloter des projets techniques tout en garantissant la sécurité et 
                la fiabilité des systèmes d'information.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl text-white">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap size={24} />
                <h3 className="text-xl font-semibold">Formation et parcours</h3>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-2 border-blue-400 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={16} className="text-blue-400" />
                    <span className="text-sm text-slate-300">Septembre 2024 - Présent</span>
                  </div>
                  <h4 className="font-semibold mb-1">Alternant Infrastructure</h4>
                  <p className="text-slate-300 text-sm">Framatome - Pilote Opérationnel</p>
                </div>
                
                <div className="border-l-2 border-slate-400 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={16} className="text-slate-400" />
                    <span className="text-sm text-slate-300">2018 - 2024</span>
                  </div>
                  <h4 className="font-semibold mb-1">Expérience Professionnelle</h4>
                  <p className="text-slate-300 text-sm">Secteur pharmaceutique - Laboratoire</p>
                </div>

                <div className="border-l-2 border-green-400 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={16} className="text-green-400" />
                    <span className="text-sm text-slate-300">Juin 2018</span>
                  </div>
                  <h4 className="font-semibold mb-1">Baccalauréat Scientifique</h4>
                  <p className="text-slate-300 text-sm">Formation initiale - Bases scientifiques solides</p>
                </div>
              </div>
              
              <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
                <Download size={20} />
                Télécharger mon CV complet
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;