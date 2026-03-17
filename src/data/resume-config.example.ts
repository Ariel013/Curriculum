import type { ResumeConfig } from './types'

/**
 * This is an example configuration file.
 * Copy this file to `resume-config.ts` and fill in your own information.
 *
 * All text fields that support multiple languages use the `LocalizedString` format:
 * { en: "English text", fr: "Texte français" }
 *
 * Add as many languages as you need — just make sure to list them in `languages.available`.
 */
export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'Ariel SODJINOU',
    photo: '/images/photo.jpg', // Place your photo in public/images/
    photoBackEmoji: '👩‍💻', // Shown when clicking the photo (3D flip)
    title: {
      en: 'Fullstack Developer',
      fr: 'Développeur Fullstack',
    },
    subtitle: {
      en: '2 years of experience',
      fr: '2 ans d\'expérience',
    },
    location: 'Abidjan, Côte-d\'Ivoire',
  },

  // ===== SEO (used in <head> meta tags) =====
  seo: {
    title: 'Ariel SODJINOU — Fullstack Developer',
    description: 'Interactive resume of Ariel SODJINOU, Fullstack Developer specializing in Backend and Project Management.',
  },

  // ===== LANGUAGES =====
  languages: {
    default: 'en',
    available: ['en', 'fr'],
    labels: {
      en: 'EN',
      fr: 'FR',
    },
  },

  // ===== CONTACT =====
  contact: [
    { type: 'github', label: 'janedoe', href: 'https://github.com/Ariel013' },
    { type: 'linkedin', label: 'Jane Doe', href: 'https://linkedin.com/in/ariel-kevin-sodjinou/' },
    { type: 'email', label: 'kevin.sodjinou@epitech.eu' },
    { type: 'phone', label: '+229 61566704' },
    { type: 'location', label: 'Abidjan, Côte-d\'Ivoire'},
  ],

  // ===== SKILLS =====
  skills: [
    {
      title: { en: 'Languages', fr: 'Langues' },
      type: 'languages',
      items: [
        { name: { en: 'French', fr: 'Français' }, level: { en: 'Native', fr: 'Natif' } },
        { name: { en: 'English', fr: 'Anglais' }, level: { en: 'Intermediate', fr: 'Intermediaire' } },
        // { name: { en: 'English', fr: 'Anglais' }, level: { en: 'Professional', fr: 'Professionnel' }, details: 'TOEIC 910' },
      ],
    },
    {
      title: { en: 'Frontend', fr: 'Frontend' },
      type: 'badges',
      items: [
        { name: 'Vue js' },
        { name: 'Javascript' },
        { name: 'React Js' },
      ],
    },
    {
      title: { en: 'Backend', fr: 'Backend' },
      type: 'badges',
      items: [
        { name: 'Node.js' },
        { name: 'Python' },
      ],
    },
    {
      title: { en: 'Database', fr: 'Base de données' },
      type: 'badges',
      items: [
        { name: 'PostgreSQL' },
        { name: 'MongoDB' },
      ],
    },
    {
      title: { en: 'DevOps', fr: 'DevOps' },
      type: 'badges',
      items: [
        // { name: 'Docker' },
        // { name: 'Kubernetes' },
        // { name: 'AWS' },
        // { name: 'GitHub Actions' },
      ],
    },
    {
      title: { en: 'Methodologies', fr: 'Méthodologies' },
      type: 'text',
      items: [
        { name: { en: 'Agile/Scrum, Code Review, CI/CD', fr: 'Agile/Scrum, Code Review, CI/CD' } },
        // { name: { en: 'Agile/Scrum, TDD, Code Review, CI/CD', fr: 'Agile/Scrum, TDD, Code Review, CI/CD' } },
      ],
    },
  ],

  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
    {
      id: 'company-a',
      company: { en: 'EPITECH Bénin', fr: 'EPITECH Bénin' },
      role: { en: 'Educationnal Coach', fr: 'Accompagnateur Pédagogique' },
      type: { en: 'Services Contrat', fr: 'Prestation de services' },
      period: { en: '2024 - Present', fr: '2024- Présent' },
      description: {
        en: 'Coached students in the field of web development and data development (Data/IA) through practical technical projects.',
        fr: 'Encadrement d\'étudiants dans les domaines du développement web et de la science de donnée (Data/IA) dans le cadre de projets techniques concrets.',
      },         
      techs: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
      isHighlighted: true,
      details: {
        context: {
          en: 'A teaching team composed of professionals with diverse backgrounds who work to help students acquire technical skills through project-based learning, code reviews, and adult education.',
          fr: 'Equipe pédagogique composée de divers profils qui oeuvrent pour l\'acquisition de compétences tech en se basant sur la pédagogie par projets, la revue de code et l\'andragogie.',
        },
        tasks: {
          en: [
            'Coached students in the field of web development and data (Data/IA) through practical technical projects.',
            'Trained over 79 students in Abidjan (Ivory Coast) and 9 students in Lomé (Togo) in Talents4Startup & We.Code programs.',
            'Conducted code reviews to ensure adherence to standards, readability, and maintainability',
            'Organized educational events, including hackathons and game jams, to encourage innovation and teamwork.',
            'Developed and implemented internal digital solutions aimed at optimizing academic processes.',
            'Collaborated on the development of a system to track student progress at EPITECH Benin.',
            'Developed a conversational chatbot to streamline and reduce HR processes'
          ],
          fr: [
            'J\'ai encadré des étudiants dans les domaines du développement web et des données (Data/IA) à travers des projets techniques pratiques.',
            'J\'ai formé plus de 79 étudiants à Abidjan (Côte d\'Ivoire) et 9 étudiants à Lomé (Togo) dans le cadre des programmes Talents4Startup et We.Code.',
            'Réalisé des revues de code pour garantir le respect des normes, la lisibilité et la maintenabilité',
            'Organisé des événements éducatifs, notamment des hackathons et des game jams, pour encourager l\'innovation et le travail d\'équipe.',
            'Développé et mis en œuvre des solutions numériques internes visant à optimiser les processus académiques.',
            ' A collaboré au développement d\'un système de suivi des progrès des étudiants à l\'EPITECH Bénin.',
            'A développé un chatbot conversationnel pour rationaliser et réduire les processus RH'
          ],
        },
        training: {
          en: [
            'Training about Project Management Professional (PMP) ',
            'Internal Training on Teaching Methods',
            'Training on Data Science and Tech Lead Roles'
          ],
          fr: [
            'Certificat de formation sur la gestion de projets (PMP)',
            'Formation interne sur la pédagogie',
            'Formation sur la data science et le tech lead'
          ],
        },
        env: {
          en: 'React / TypeScript / Node.js / PostgreSQL / Kafka / ETL /NLP / Machine Learning',
          fr: 'React / TypeScript / Node.js / PostgreSQL / Kafka / ETL /NLP / Machine Learning',
        },
      },
    },
    {
      id: 'company-b',
      company: { en: 'Agency for Information Systems and Digital Technology (ASIN)', fr: 'Agence des Systèmes d\'Information et du Numérique (ASIN)' },
      role: { en: 'Cybersecurity Analyst', fr: 'Analyste Cybersécurité' },
      type: { en: 'Internship', fr: 'Stage' },
      period: { en: '2022 - 2023', fr: '2022 - 2023' },
      description: {
        en: 'Analysis and monitoring of IT systems to detect and prevent security threats.',
        fr: 'Analyse et surveillance des systèmes informatiques afin de détecter et prévenir les menaces de sécurité.',
      },
      techs: ['Python', 'Bash', 'Linux'],
      details: {
        context: {
          en: 'Monitor and protect the security of information systems used by government agencies and operators of critical infrastructure (government agencies, critical infrastructure, etc.)',
          fr: 'Surveiller et protéger la sécurité des systèmes d’information des institutions de l’État et des opérateurs d’importance vitale (administrations, infrastructures critiques, etc.)',
        },
        tasks: {
          en: [
            'Performed web penetration tests to detect and resolve vulnerabilities.',
            'Delivered SOC reports and validated corrective actions to ensure system robustness.',
            'Participated in the monitoring of cyberspace surveillance tools in Benin.',
            'Provided actionable insights to strengthen security frameworks.',
            'Training and Awareness on Cybersecurity Threats'
          ],
          fr: [
            'Réalisation de tests d\'intrusion sur le Web afin de détecter et de corriger les vulnérabilités.',
            'Rédaction de rapports SOC et validation des mesures correctives pour garantir la robustesse des systèmes.',
            'Participation à la supervision des outils de surveillance du cyberespace au Bénin.',
            'Fourniture d\'informations exploitables pour renforcer les dispositifs de sécurité.',
            'Formation et sensabilisation aux menaces de cybersécurité'
          ],
        },
        training: {
          en: [
            'Learning OWASP Top 10',
            'Learning Pentesting and cybersecurity threat monitoring',
          ],
          fr: [
            'Découverte et apprentissage du OWASP Top 10',
            'Apprendre le pentesting et la surveillance des menaces de cybersécurité',
          ],
        },
        env: {
          en: 'Linux / Bash / Shell / Burpsuite / Fortinet',
          fr: 'Linux / Bash / Shell / Burpsuite / Fortinet',
        },
      },
    },
    {
      id: 'internship',
      company: { en: 'MA-INFO', fr: 'MA-INFO' },
      role: { en: 'Network Technician', fr: 'Technicien Réseau' },
      type: { en: 'Internship', fr: 'Stage' },
      period: { en: '2022', fr: '2022' },
      description: {
        en: 'Contribute to improving the company\'s network and performing maintenance. Develop skills in network administration.',
        fr: 'Contribution à l\'amélioration du réseau de l\'entreprise et maintenance. Acquisition de compétences en administration réseau.',
      },
      techs: ['Cisco', 'Routers', 'Packet Tracer'],
      details: {
        context: {
          en: 'The company offers IT maintenance, network engineering, electronic equipment, access control, video surveillance, videoconferencing, IP telephony, and web solutions (websites, domain names).',
          fr: 'L\'entreprise propose des services de maintenance informatique, d'ingénierie réseau, de matériel électronique, de contrôle d\'accès, de vidéosurveillance, de visioconférence, de téléphonie IP et de solutions web (sites web, noms de domaine).',
        },
        tasks: {
          en: [
            'Installation and configuration of Windows and Linux systems.',
            'Configuration and maintenance of network equipment (routers, switches, IP cameras).',
            'Deployment of a proxy server for user management and network optimization.',
          ],
          fr: [
            'Installation et configuration de systèmes Windows et Linux.',
            'Configuration et maintenance d\'équipements réseau (routeurs, switches, caméras IP).',
            'Déploiement d\'un serveur proxy pour la gestion des utilisateurs et l\'optimisation du réseau.',
          ],
        },
        env: {
          en: 'Cisco', 'Routers', 'Packet Tracer',
          fr: 'Cisco', 'Routers', 'Packet Tracer',
        },
      },
    },
  ],

  // ===== PROJECTS (optional) =====
  projects: [
    {
      id: 'project-a',
      title: { en: 'WeatherApp', fr: 'WeatherApp' },
      description: {
        en: 'A real-time weather dashboard built with React and OpenWeather API.',
        fr: 'Un tableau de bord météo en temps réel construit avec React et l\'API OpenWeather.',
      },
      techs: ['React', 'TypeScript'],
      url: 'https://weather-app.example.com',
      github: 'https://github.com/janedoe/weather-app',
    },
    {
      id: 'project-b',
      title: { en: 'TaskManager', fr: 'TaskManager' },
      description: {
        en: 'A Kanban-style task management tool with drag-and-drop.',
        fr: 'Un outil de gestion de tâches style Kanban avec glisser-déposer.',
      },
      techs: ['React', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/janedoe/task-manager',
    },
  ],

  // ===== EDUCATION =====
  education: [
    {
      school: { en: 'ESGIS', fr: 'École Supérieure de Gestion, d\'Informatique et des Sciences(ESGIS)' },
      degree: { en: 'Bachelor\'s Degree in Computer Science, Networking, and Telecommunications', fr: 'Licence en Informatique, Réseaux et Télécommunications' },
      specialty: { en: 'Systems, Networks, and Security', fr: 'Systèmes, Réseaux et Sécurité' },
      period: '2017 - 2019',
    },
    {
      school: { en: 'EPITECH', fr: 'École pour l\'informatique et les nouvelles technologies (EPITECH)' },
      degree: { en: 'Certificate in Web and Mobile design and developpement', fr: 'Certificat concepteur développeur Web et Mobile' },
      period: '2014 - 2017',
    },
  ],

  // ===== HOBBIES (optional) =====
  hobbies: [
    {
      title: { en: 'Photography', fr: 'Photographie' },
      details: [
        { en: 'Street photography', fr: 'Photo de rue' },
        { en: '5 years', fr: '5 ans' },
      ],
    },
    {
      title: { en: 'Hiking', fr: 'Randonnée' },
      details: [
        { en: 'Mountain trails', fr: 'Sentiers de montagne' },
      ],
    },
    {
      title: { en: 'Open Source', fr: 'Open Source' },
    },
    {
      title: { en: 'Guitar', fr: 'Guitare' },
      details: [
        { en: '3 years', fr: '3 ans' },
      ],
    },
  ],

  // ===== PDF (optional — place your PDF in public/cv/) =====
  // Use a string for the same PDF in all languages,
  // or a LocalizedString for one PDF per language (button is hidden if no PDF for the current language).
  pdf: {
    label: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    path: { en: '/cv/resume-en.pdf', fr: '/cv/resume-fr.pdf' },
  },

  // ===== THEME =====
  theme: {
    preset: 'warm', // 'minimal' | 'warm' | 'ocean' | 'forest' | 'slate' | 'lilac'
    // You can override individual colors:
    // colors: {
    //   primary: '#8B5A2B',
    //   primaryLight: '#D4A574',
    // },
  },

  // ===== UI LABELS =====
  labels: {
    sections: {
      contact: { en: 'CONTACT', fr: 'CONTACT' },
      skills: { en: 'SKILLS', fr: 'COMPÉTENCES' },
      experience: { en: 'PROFESSIONAL EXPERIENCE', fr: 'EXPÉRIENCES PROFESSIONNELLES' },
      education: { en: 'EDUCATION', fr: 'FORMATION' },
      projects: { en: 'PROJECTS', fr: 'PROJETS' },
      hobbies: { en: 'HOBBIES', fr: 'LOISIRS' },
    },
    experience: {
      mainTasks: { en: 'Main tasks:', fr: 'Tâches principales :' },
      moreTasks: { en: 'more tasks...', fr: 'autres tâches...' },
      training: { en: 'Training:', fr: 'Formations :' },
      techEnv: { en: 'Tech environment:', fr: 'Env. technique :' },
      technologies: { en: 'Technologies', fr: 'Technologies' },
    },
    actions: {
      clickHint: { en: 'Click on experiences to see more details', fr: 'Cliquez sur les expériences pour voir plus de détails' },
      switchTheme: { en: 'Toggle dark mode', fr: 'Changer le thème' },
      downloadPdf: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    },
  },
}
