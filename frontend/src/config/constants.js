// Configuration des liens - Modifiables facilement
export const LINKS = {
  WHATSAPP_GROUP: "https://chat.whatsapp.com/FmMwTvOaM2aJI98FShbLnC?mode=ac_t",
  WHATSAPP_CHANNEL: "https://whatsapp.com/channel/0029VbAwDzD8fewrz5ocLE03",
  PUBLIER: "https://forms.gle/2pWASyBzMzGDAZKYA",
  PROPOSER_LOGEMENT: "https://forms.gle/2pWASyBzMzGDAZKYA",
  PUBLIER_OFFRE: "https://forms.gle/2pWASyBzMzGDAZKYA",
  INSTAGRAM: "https://www.instagram.com/coin_des_etudiants/",
  LINKEDIN: "https://www.linkedin.com/company/coin-des-etudiants/",
  TIKTOK: "https://www.tiktok.com/@coindesetudiants",
  EMAIL: "mailto:coindesetudiants@gmail.com",
};

// Données des annonces fictives pour le parcours démontrable
export const DEMO_LISTINGS = {
  logements: [
    {
      id: 1,
      type: "logement",
      titre: "Studio meublé proche campus",
      ville: "Paris 13e",
      prix: "650€/mois",
      surface: "22m²",
      disponible: true,
      description: "Studio entièrement meublé à 5 min du métro. Idéal pour étudiant. Cuisine équipée, salle de bain avec douche. Charges comprises.",
      image: "https://images.unsplash.com/photo-1666282167632-c613fbeb163c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwwfHx8fDE3NzIxNDg0ODZ8MA&ixlib=rb-4.1.0&q=85&w=400",
    },
    {
      id: 2,
      type: "logement",
      titre: "Chambre en colocation",
      ville: "Lyon 7e",
      prix: "420€/mois",
      surface: "14m²",
      disponible: true,
      description: "Chambre dans appartement partagé avec 2 autres étudiants. Ambiance conviviale, proche universités. Espaces communs spacieux.",
      image: "https://images.unsplash.com/photo-1662454419716-c4c504728811?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwwfHx8fDE3NzIxNDg0ODZ8MA&ixlib=rb-4.1.0&q=85&w=400",
    },
  ],
  dons: [
    {
      id: 3,
      type: "don",
      titre: "Bureau + chaise ergonomique",
      ville: "Bordeaux",
      categorie: "Meubles",
      gratuit: true,
      description: "Bureau en bon état avec chaise de bureau ergonomique. Parfait pour travailler confortablement. À récupérer sur place.",
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&q=80",
    },
    {
      id: 4,
      type: "don",
      titre: "Livres de médecine (L1-L2)",
      ville: "Toulouse",
      categorie: "Livres",
      gratuit: true,
      description: "Collection complète de manuels pour les 2 premières années de médecine. État correct, quelques annotations.",
      image: "https://images.unsplash.com/photo-1743319349863-8df2906d98bd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzl8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjBib29rfGVufDB8fHx8MTc3MjE0ODQ4N3ww&ixlib=rb-4.1.0&q=85&w=400",
    },
  ],
  offres: [
    {
      id: 5,
      type: "offre",
      titre: "Stage Marketing Digital",
      ville: "Paris",
      typeOffre: "Stage",
      domaine: "Marketing",
      duree: "6 mois",
      description: "Stage au sein d'une startup innovante. Missions variées : SEO, réseaux sociaux, création de contenu. Gratification légale.",
      image: "https://images.unsplash.com/photo-1760611656007-f767a8082758?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBtZWV0aW5nfGVufDB8fHx8MTc3MjE0ODQ4N3ww&ixlib=rb-4.1.0&q=85&w=400",
    },
    {
      id: 6,
      type: "offre",
      titre: "Alternance Développeur Web",
      ville: "Nantes",
      typeOffre: "Alternance",
      domaine: "Tech",
      duree: "12 mois",
      description: "Rejoins notre équipe tech en alternance. Formation React/Node.js. Environnement bienveillant et projets stimulants.",
      image: "https://images.pexels.com/photos/28506813/pexels-photo-28506813.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ],
};

// Statistiques
export const STATS = [
  { label: "Étudiants inscrits", value: 6000, suffix: "+" },
  { label: "Logements proposés", value: 500, suffix: "+" },
  { label: "Dons réalisés", value: 150, suffix: "+" },
  { label: "Achats & ventes", value: 70, suffix: "+" },
];

// Catégories de dons
export const DON_CATEGORIES = [
  { name: "Meubles", icon: "Sofa" },
  { name: "Livres", icon: "BookOpen" },
  { name: "Électroménager", icon: "Tv" },
  { name: "Vêtements", icon: "Shirt" },
  { name: "Fournitures", icon: "Pencil" },
];

// Équipe
export const TEAM = [
  {
    name: "Dauda Niang",
    role: "Fondateur",
    bio: "Passionné par l'entraide étudiante, Dauda a créé Coin des Étudiants pour simplifier le quotidien de milliers d'étudiants.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
  },
  {
    name: "Associé 1",
    role: "Co-fondateur",
    bio: "Expert en développement communautaire, il œuvre pour créer des connexions durables entre étudiants.",
    image: "https://images.unsplash.com/photo-1770223914240-c044d5cc3fbb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHwzfHxoYXBweSUyMHVuaXZlcnNpdHklMjBzdHVkZW50c3xlbnwwfHx8fDE3NzIxNDg0ODV8MA&ixlib=rb-4.1.0&q=85&w=300",
  },
  {
    name: "Associé 2",
    role: "Co-fondateur",
    bio: "Spécialiste de la communication digitale, elle amplifie l'impact de la communauté chaque jour.",
    image: "https://images.unsplash.com/photo-1594686900103-3c9698dbb31b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHwyfHxoYXBweSUyMHVuaXZlcnNpdHklMjBzdHVkZW50c3xlbnwwfHx8fDE3NzIxNDg0ODV8MA&ixlib=rb-4.1.0&q=85&w=300",
  },
];

// Témoignages
export const TESTIMONIALS = [
  {
    name: "Marie L.",
    context: "Étudiante en droit",
    text: "J'ai trouvé mon studio en 3 jours grâce à la communauté ! Les membres sont réactifs et bienveillants.",
    rating: 5,
  },
  {
    name: "Amadou K.",
    context: "Étudiant en médecine",
    text: "J'ai récupéré tous mes livres de L2 gratuitement. Une vraie solidarité entre étudiants.",
    rating: 5,
  },
  {
    name: "Sophie M.",
    context: "Étudiante en commerce",
    text: "Mon alternance actuelle, je l'ai trouvée via une offre partagée dans le groupe. Merci Coin des Étudiants !",
    rating: 5,
  },
];

// FAQ Bailleurs
export const FAQ_BAILLEURS = [
  {
    question: "Quels types de logements puis-je proposer ?",
    answer: "Tous types : studios, chambres en colocation, appartements, résidences étudiantes. L'essentiel est que le logement soit adapté aux étudiants.",
  },
  {
    question: "Comment publier mon annonce ?",
    answer: "Cliquez sur 'Proposer un logement', remplissez le formulaire avec les détails de votre bien, et votre annonce sera diffusée à notre communauté de +6000 étudiants.",
  },
  {
    question: "Est-ce payant ?",
    answer: "Non, la publication d'annonces est entièrement gratuite. Notre mission est de faciliter l'accès au logement pour les étudiants.",
  },
  {
    question: "Comment limitez-vous les abus ?",
    answer: "Nous avons une équipe de modération active et des règles communautaires strictes. Les signalements sont traités rapidement pour garantir un environnement sûr.",
  },
];

// Navigation
export const NAV_ITEMS = [
  { label: "Accueil", href: "#hero" },
  { label: "Logements", href: "#logements" },
  { label: "Dons", href: "#dons" },
  { label: "Offres", href: "#offres" },
  { label: "Partenariats", href: "#partenariats" },
  { label: "Équipe", href: "#equipe" },
  { label: "Contact", href: "#contact" },
];
