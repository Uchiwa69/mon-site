import React from 'react';
import { Rss, Search, Bell, ExternalLink, Calendar, TrendingUp } from 'lucide-react';

const TechWatch: React.FC = () => {
  const watchTools = [
    { name: 'Google Alerts', description: 'Alertes automatiques sur les mots-clés Hardware et cybersécurité', icon: <Bell size={20} /> },
    { name: 'Feedly', description: 'Agrégateur de flux RSS spécialisés', icon: <Rss size={20} /> },
    { name: 'Twitter/X', description: 'Suivi des experts et entreprises du secteur', icon: <Search size={20} /> },
    { name: 'LinkedIn', description: 'Articles et publications professionnelles', icon: <TrendingUp size={20} /> }
  ];

  const watchTopics = [
    {
      title: 'Hausse des cyber‑attaques ciblées (breaches & ransomwares)',
      category: 'Cybersécurité',
      date: 'Décembre 2024',
      summary: 'En décembre 2024, on a observé une hausse significative des attaques par ransomware et violations de données, notamment dans les secteurs technologique et financier.',
      analysis: 'Ces tendances mettent en évidence l\'importance de renforcer les dispositifs de surveillance et de réponse rapide. En tant que futur technicien SISR, je m\'engage à intégrer des outils de détection avancée et des procédures de réponse aux incidents dans les environnements critiques que je gère.',
      source: 'Foresiet – December 2024 Global Cybersecurity Trends',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Ransomware', 'Cyberattaque', 'Surveillance', 'IncidentResponse']
    },
    {
      title: 'Windows Server 2025 – nouvelle version LTSC embarquée',
      category: 'Infrastructure/Serveurs',
      date: 'Décembre 2024',
      summary: 'Microsoft a annoncé Windows Server 2025 (LTSC) avec cinq ans de support principal, suivi de cinq ans de support étendu, garantissant des corrections de sécurité jusqu\'en 2034.',
      analysis: 'Cette nouvelle version garantit une stabilité à long terme pour les datacenters et serveurs en production. Cela permet de planifier les mises à jour et la migration de services de manière sécurisée, sans risques fréquents de rupture.',
      source: 'Archimago blog – Home Server Update',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['WindowsServer', 'LTSC', 'SupportLongTerme', 'Datacenter']
    },
    {
      title: 'Nouvelle campagne de ransomware LockBit 4.0',
      category: 'Cybersécurité',
      date: '22 Janvier 2024',
      summary: 'Découverte d\'une variante évoluée du ransomware LockBit ciblant spécifiquement les infrastructures VMware vSphere.',
      analysis: 'Cette menace nous concerne directement car notre infrastructure repose sur VMware. J\'ai proposé la mise en place de signatures spécifiques et le renforcement du monitoring des environnements virtualisés.',
      source: 'ANSSI',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Ransomware', 'VMware', 'Sécurité', 'ANSSI']
    },
    {
      title: 'AMD lance ses processeurs EPYC Genoa-X',
      category: 'Hardware',
      date: '08 Février 2024',
      summary: 'AMD présente ses nouveaux processeurs serveur avec cache 3D V-Cache, offrant des performances exceptionnelles pour les charges de travail intensives.',
      analysis: 'Ces processeurs révolutionnent le marché serveur avec des gains jusqu\'à 40% sur certaines applications. Pour notre projet de refonte datacenter, cette technologie pourrait réduire significativement le nombre de serveurs nécessaires.',
      source: 'AnandTech',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['AMD', 'EPYC', 'Serveurs', 'Performance', 'Datacenter']
    }
  ];

  return (
    <section id="veille" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Veille technologique</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Ma veille technologique se concentre sur le hardware et la cybersécurité, 
            secteurs clés pour un professionnel SISR. Voici mes sources et analyses récentes.
          </p>
        </div>

        {/* Outils de veille */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Outils de veille utilisés</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {watchTools.map((tool, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-xl hover:bg-slate-100 transition-colors duration-200">
                <div className="flex items-center gap-3 mb-3 text-blue-600">
                  {tool.icon}
                  <h4 className="font-semibold text-slate-800">{tool.name}</h4>
                </div>
                <p className="text-slate-600 text-sm">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sujets de veille */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Analyses récentes</h3>
          <div className="space-y-8">
            {watchTopics.map((topic, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-80">
                    <img 
                      src={topic.image} 
                      alt={topic.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        topic.category === 'Hardware' ? 'bg-blue-100 text-blue-800' : 
                        topic.category === 'Infrastructure/Serveurs' ? 'bg-green-100 text-green-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {topic.category}
                      </span>
                      <div className="flex items-center gap-1 text-slate-500 text-sm">
                        <Calendar size={14} />
                        {topic.date}
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-slate-800 mb-3">{topic.title}</h4>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h5 className="font-semibold text-slate-700 mb-2">Résumé</h5>
                        <p className="text-slate-600 text-sm">{topic.summary}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-slate-700 mb-2">Analyse personnelle</h5>
                        <p className="text-slate-600 text-sm">{topic.analysis}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {topic.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 text-sm">Source: {topic.source}</span>
                      <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm">
                        <ExternalLink size={16} />
                        Lire l'article
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA pour plus d'analyses */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-xl text-white">
            <h3 className="text-xl font-bold mb-4">Envie d'en savoir plus sur ma veille ?</h3>
            <p className="mb-6 text-blue-100">
              Je maintiens une veille active et documente régulièrement mes analyses. 
              N'hésitez pas à me contacter pour discuter des dernières tendances technologiques.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Discuter de ma veille
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechWatch;