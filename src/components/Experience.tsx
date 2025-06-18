import React from 'react';
import { Building, Calendar, MapPin, Trophy, AlertCircle } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Framatome',
      position: 'Alternant – Pilote Opérationnel d\'Application (POA)',
      duration: 'Septembre 2024 – Septembre 2026',
      location: 'Lyon, France',
      type: 'Alternance – 24 mois dans le cadre du BTS SIO SISR',
      missions: [
        'Maintien en condition opérationnelle (MCO) d\'applications métiers critiques',
        'Gestion des incidents, problèmes et demandes d\'évolution (corrections & améliorations)',
        'Validation des spécifications fonctionnelles et techniques des applications',
        'Suivi de la qualité, du budget et des délais dans les phases de déploiement',
        'Supervision des contrats de maintenance externalisée',
        'Mise à jour et sécurisation des applications (gestion de l\'obsolescence, conformité aux normes IS/IT)',
        'Suivi des licences, conformité éditeur, relation fournisseurs',
        'Gestion du cycle de vie applicatif, packaging, déploiement sur postes de travail'
      ],
      skills: [
        'Pilotage opérationnel d\'applications et coordination interéquipes',
        'Connaissance approfondie du MCO, de la sécurité applicative et de la gestion des SLA',
        'Maîtrise de la documentation technique et fonctionnelle',
        'Travail en environnement critique avec respect strict des procédures',
        'Gestion de projet (planification, suivi qualité et coûts)'
      ],
      challenges: [
        'Coordination avec des interlocuteurs multiples (équipes techniques, métier, éditeurs)',
        'Résolution d\'incidents urgents avec maintien de la continuité de service',
        'Montée en compétence sur des outils propriétaires et des environnements complexes'
      ],
      color: 'bg-blue-600'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Expériences professionnelles</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Mon parcours professionnel en alternance chez Framatome, illustrant ma progression 
            et l'acquisition de compétences techniques et humaines dans un environnement industriel critique.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="md:flex">
                <div className={`${exp.color} p-6 md:w-80 text-white`}>
                  <div className="flex items-center gap-3 mb-4">
                    <Building size={24} />
                    <div>
                      <h3 className="text-xl font-bold">{exp.company}</h3>
                      <p className="text-blue-100">{exp.position}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="bg-white/20 px-3 py-2 rounded-lg text-xs font-semibold">
                      {exp.type}
                    </div>
                  </div>
                </div>

                <div className="flex-1 p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                        <Building size={18} className="text-blue-600" />
                        Missions effectuées
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        {exp.missions.map((mission, missionIndex) => (
                          <li key={missionIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                            {mission}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                          <Trophy size={18} className="text-green-600" />
                          Compétences acquises
                        </h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                          {exp.skills.map((skill, skillIndex) => (
                            <li key={skillIndex} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0"></div>
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                          <AlertCircle size={18} className="text-orange-600" />
                          Difficultés rencontrées
                        </h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                          {exp.challenges.map((challenge, challengeIndex) => (
                            <li key={challengeIndex} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 flex-shrink-0"></div>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;