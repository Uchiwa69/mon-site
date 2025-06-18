import React from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Bienvenue sur mon portfolio
            <span className="block text-blue-400 mt-2">BTS SIO – Option SISR</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Étudiant passionné par l'infrastructure réseau et la cybersécurité, 
            je présente ici mes compétences et réalisations dans le cadre de mon BTS SIO.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Découvrir mon profil
            </button>
            
            <button className="flex items-center gap-2 border border-white/30 hover:border-white text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10">
              <Download size={20} />
              Télécharger mon CV
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="#" className="text-slate-300 hover:text-white transition-colors p-2">
              <Github size={24} />
            </a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors p-2">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors p-2">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;