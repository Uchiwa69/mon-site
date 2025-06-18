import React from 'react';
import { Download, FileText, CheckCircle, Star } from 'lucide-react';

const Synthesis: React.FC = () => {
  const competencyAreas = [
    {
      code: 'A1',
      title: 'Support et mise à disposition de services informatiques',
      description: 'Gestion des services informatiques et support aux utilisateurs',
      level: 'Maîtrisé',
      levelColor: 'bg-green-500',
      evidence: ['Projet infrastructure réseau', 'Support utilisateur TechCorp', 'Documentation technique']
    },
    {
      code: 'A2', 
      title: 'Administration des systèmes et des réseaux',
      description: 'Configuration, administration et maintenance des infrastructures',
      level: 'Maîtrisé',
      levelColor: 'bg-green-500',
      evidence: ['Serveur VMware vSphere', 'Configuration Cisco', 'Active Directory']
    },
    {
      code: 'A3',
      title: 'Protection, sauvegarde et archivage',
      description: 'Mise en place de solutions de protection et sauvegarde des données',
      level: 'En cours',
      levelColor: 'bg-yellow-500',
      evidence: ['Politique sécurité informatique', 'Solutions de sauvegarde', 'Audit sécurité']
    },
    {
      code: 'A4',
      title: 'Supervision et incident',
      description: 'Surveillance des infrastructures et gestion des incidents',
      level: 'Maîtrisé',
      levelColor: 'bg-green-500',
      evidence: ['Système monitoring Nagios', 'Gestion incidents niveau 2', 'Alertes temps réel']
    },
    {
      code: 'A5',
      title: 'Services et processus',
      description: 'Optimisation des services et processus informatiques',
      level: 'En progression',
      levelColor: 'bg-blue-500',
      evidence: ['Procédures ITIL', 'Amélioration processus', 'Documentation qualité']
    }
  ];

  const skills = [
    { name: 'Installation et configuration d\'équipements réseau', level: 95 },
    { name: 'Administration systèmes (Windows/Linux)', level: 90 },
    { name: 'Virtualisation (VMware)', level: 85 },
    { name: 'Sécurité informatique', level: 80 },
    { name: 'Scripting et automatisation', level: 75 },
    { name: 'Supervision et monitoring', level: 88 }
  ];

  return (
    <section id="synthesis" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Tableau de synthèse des compétences</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Évaluation détaillée de mes compétences selon le référentiel BTS SIO – Option SISR, 
            avec les preuves et réalisations associées pour l'épreuve E4.
          </p>
        </div>

        {/* Bouton de téléchargement */}
        <div className="text-center mb-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3 mx-auto">
            <Download size={24} />
            Télécharger le tableau complet (PDF)
          </button>
        </div>

        {/* Compétences par activité */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Activités professionnelles</h3>
          <div className="space-y-6">
            {competencyAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <div className="lg:w-20 flex-shrink-0">
                    <div className="bg-blue-100 text-blue-800 font-bold px-3 py-2 rounded-lg text-center">
                      {area.code}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-lg font-semibold text-slate-800">{area.title}</h4>
                      <span className={`${area.levelColor} text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mt-2 sm:mt-0`}>
                        {area.level}
                      </span>
                    </div>
                    
                    <p className="text-slate-600 mb-4">{area.description}</p>
                    
                    <div>
                      <h5 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                        <FileText size={16} />
                        Preuves et réalisations
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {area.evidence.map((evidence, evidenceIndex) => (
                          <span key={evidenceIndex} className="bg-slate-100 text-slate-700 text-sm px-3 py-1 rounded-full flex items-center gap-1">
                            <CheckCircle size={12} className="text-green-500" />
                            {evidence}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Niveau de maîtrise détaillé */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Niveau de maîtrise technique</h3>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-slate-800">{skill.name}</span>
                    <span className="text-blue-600 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Évolution et objectifs */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-8 rounded-xl text-white">
          <div className="text-center mb-8">
            <Star size={32} className="text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Évolution et objectifs futurs</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-slate-200">Points forts identifiés</h4>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  Maîtrise technique des infrastructures réseau
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  Capacité d'adaptation aux nouvelles technologies
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  Autonomie dans la résolution de problèmes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  Communication efficace avec les utilisateurs
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-slate-200">Axes d'amélioration</h4>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <Star size={16} className="text-yellow-400" />
                  Approfondissement de la cybersécurité avancée
                </li>
                <li className="flex items-center gap-2">
                  <Star size={16} className="text-yellow-400" />
                  Certification cloud (AWS, Azure)
                </li>
                <li className="flex items-center gap-2">
                  <Star size={16} className="text-yellow-400" />
                  Développement des compétences DevOps
                </li>
                <li className="flex items-center gap-2">
                  <Star size={16} className="text-yellow-400" />
                  Management d'équipe technique
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Synthesis;