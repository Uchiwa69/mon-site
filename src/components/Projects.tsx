import React from 'react';
import { ExternalLink, Github, Server, Shield, Network, Users } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Infrastructure Active Directory pour la gestion des utilisateurs et des ressources',
      context: 'Projet de BTS SIO SISR réalisé à Nexa Digital School, visant à déployer un contrôleur de domaine pour une entreprise fictive dans un environnement virtualisé',
      role: 'Administrateur système – Installation et configuration d\'Active Directory sous Windows Server 2022',
      technologies: ['Windows Server 2022', 'Windows 11', 'Oracle VirtualBox', 'Active Directory (AD DS)', 'DNS, GPO', 'DACL'],
      results: 'Authentification centralisée opérationnelle, GPO déployées (fond d\'écran, partages), Poste client intégré au domaine, Ressources centralisées et sécurisées',
      icon: <Users size={24} />,
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400',
      difficulty: 'Intermédiaire',
      duration: '4 semaines'
    },
    {
      title: 'Mise en place d\'un réseau LAN pour la LAN-Party "Josslan"',
      context: 'Projet en équipe dans le cadre du BTS SIO SISR, visant à concevoir et déployer une infrastructure réseau temporaire pour une LAN-Party avec 10 postes clients, dans une salle dédiée et sécurisée',
      role: 'Administrateur réseau – Installation, configuration et supervision du réseau, des serveurs (GLPI & CS2) et des postes clients',
      technologies: ['Routeur Cisco (CLI)', 'Switchs administrables', 'VMware ESXi', 'Windows Server 2019', 'GLPI, XAMPP', 'Counter-Strike 2, Steam', 'Scripts .bat, server.cfg'],
      results: 'Réseau local fonctionnel avec adressage IP dynamique, Serveur GLPI opérationnel pour supervision du parc, Serveur de jeu CS2 accessible sur tous les postes, Scripts automatisés pour configuration rapide et monitoring, Documentation technique centralisée et partagée',
      icon: <Network size={24} />,
      image: '/josslan.png',
      difficulty: 'Avancé',
      duration: '1 semaine'
    },
    {
      title: 'Politique de sécurité informatique',
      context: 'Audit et renforcement de la sécurité de l\'infrastructure',
      role: 'Analyste sécurité junior',
      technologies: ['Nessus', 'Wireshark', 'OpenVAS', 'Fail2ban', 'IPTables'],
      results: 'Réduction de 80% des vulnérabilités critiques identifiées',
      icon: <Shield size={24} />,
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
      difficulty: 'Avancé',
      duration: '4 semaines'
    },
    {
      title: 'Infrastructure réseau d\'entreprise',
      context: 'Projet d\'alternance - Refonte complète du réseau informatique',
      role: 'Technicien réseau principal',
      technologies: ['Cisco Catalyst 2960', 'pfSense', 'VLAN', 'VPN Site-to-Site'],
      results: 'Amélioration de 40% des performances réseau et sécurisation des données',
      icon: <Network size={24} />,
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400',
      difficulty: 'Avancé',
      duration: '3 mois'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Débutant': return 'bg-green-500';
      case 'Intermédiaire': return 'bg-yellow-500';
      case 'Avancé': return 'bg-orange-500';
      case 'Expert': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Projets réalisés</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Découvrez les projets que j'ai menés dans le cadre de ma formation et de mon alternance,
            démontrant mes compétences techniques et ma capacité à gérer des infrastructures complexes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white p-2 rounded-lg">
                  {project.icon}
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className={`px-3 py-1 text-xs font-semibold text-white rounded-full ${getDifficultyColor(project.difficulty)}`}>
                    {project.difficulty}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
                  <span className="text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded">
                    {project.duration}
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-1">Contexte</h4>
                    <p className="text-slate-600 text-sm">{project.context}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-700 mb-1">Rôle joué</h4>
                    <p className="text-slate-600 text-sm">{project.role}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Technologies utilisées</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-700 mb-1">Résultats</h4>
                    <p className="text-slate-600 text-sm">{project.results}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                    <ExternalLink size={16} />
                    Voir détails
                  </button>
                  <button className="flex items-center gap-2 border border-slate-300 hover:border-slate-400 text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                    <Github size={16} />
                    Code source
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;