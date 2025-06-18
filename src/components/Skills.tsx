import React from 'react';
import { Server, Shield, Code, Users, Award, CheckCircle } from 'lucide-react';

const Skills: React.FC = () => {
  const technicalSkills = [
    { 
      category: 'Systèmes d\'exploitation',
      icon: <Server size={24} />,
      skills: ['Linux (Ubuntu, CentOS)', 'Windows Server 2019/2022', 'VMware vSphere', 'Hyper-V']
    },
    {
      category: 'Réseaux et Infrastructure',
      icon: <Shield size={24} />,
      skills: ['Cisco CCNA', 'Configuration switches/routeurs', 'VLAN, VPN', 'Firewall (pfSense)']
    },
    {
      category: 'Scripting et Automatisation',
      icon: <Code size={24} />,
      skills: ['Bash/Shell scripting', 'PowerShell', 'Python (bases)', 'Ansible (initiation)']
    }
  ];

  const softSkills = [
    'Curiosité',
    'Gestion de projet',
    'Travail en équipe',
    'Autonomie et initiative',
    'Résolution de problèmes',
    'Veille technologique'
  ];

  const certifications = [
    { name: 'PIX - Niveau Expert', date: '2025', verified: false },
    { name: 'Cisco CCNA R&S', date: '2025', verified: false },
    { name: 'ANSSI - Sensibilisation', date: '2025', verified: false },
    { name: 'VMware vSphere (en cours)', date: '2025', verified: false }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Compétences</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Compétences techniques</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {technicalSkills.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4 text-blue-600">
                  {category.icon}
                  <h4 className="font-semibold text-slate-800">{category.category}</h4>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-2 text-slate-600">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Compétences transversales</h3>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Users size={24} className="text-blue-600" />
              <h4 className="text-xl font-semibold text-slate-800">Savoir-être professionnel</h4>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                  <CheckCircle size={16} className="text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Certifications</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <Award size={20} className={cert.verified ? 'text-green-500' : 'text-orange-500'} />
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    cert.verified ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {cert.verified ? 'Certifié' : 'En cours'}
                  </span>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">{cert.name}</h4>
                <p className="text-slate-600 text-sm">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;