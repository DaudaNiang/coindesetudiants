// Configuration des liens
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

// Équipe - Ordre : Dauda (gauche), Cheikh (centre), Bassine (droite)
export const TEAM = [
  {
    name: "Dauda NIANG",
    role: "Co-fondateur",
    subtitle: "Vision & Produit | Développement | Partenariats & Opérations",
    bio: "Dauda est le co-architecte visionnaire du projet : il anticipe les besoins, structure l'évolution produit et transforme une ambition en plan concret. Il contribue activement au développement (produit, fonctionnalités, amélioration continue) tout en développant les partenariats stratégiques et en optimisant les opérations pour maximiser l'impact réel de Coin des Étudiants au quotidien.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    position: "left",
  },
  {
    name: "Cheikh IBRA NDIAYE",
    role: "Fondateur",
    subtitle: "CEO (Direction Générale) | Développement & Contenu",
    bio: "Cheikh pilote la vision et l'exécution globale de Coin des Étudiants : stratégie, priorités, coordination des pôles et suivi de la performance. Il est aussi directement impliqué dans la construction technique (développement web/app, cadrage produit) et dans la création de contenu pour porter le message de la marque, renforcer l'engagement et accélérer la croissance de la communauté.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    position: "center",
    isFounder: true,
  },
  {
    name: "Bassine NIANG",
    role: "Co-fondatrice",
    subtitle: "Organisation | Communauté & Relations Terrain",
    bio: "Bassine est le moteur de la structuration communautaire : elle organise les actions terrain, construit un cadre clair pour les échanges et veille à la qualité de l'expérience utilisateur au sein de la communauté. Elle supervise la modération, l'animation et la structuration des annonces (dons, logements, services) pour garantir des interactions fluides, sûres et utiles. Elle développe aussi les relations terrain (étudiants, relais locaux, associations) afin d'ancrer Coin des Étudiants dans le réel et faire grandir une communauté solide, active et durable.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    position: "right",
  },
];

// Histoire de Coin des Étudiants
export const COMPANY_STORY = {
  title: "L'histoire de Coin des Étudiants",
  content: `Être étudiant en France, c'est souvent devoir faire face à de nombreux défis : trouver un logement, s'équiper à petit prix, accéder à des services abordables ou simplement bénéficier d'un peu de solidarité. Nous avons tous connu ces moments où chaque euro compte, où il faut improviser pour s'en sortir.

En observant notre quotidien, nous avons remarqué que tous les services utiles aux étudiants étaient dispersés : ici une plateforme de dons, là une pour la colocation, ailleurs une autre pour les bons plans. Aucune ne rassemblait tous ces besoins essentiels au même endroit, spécifiquement pour les étudiants.

Les plateformes généralistes comme Leboncoin offrent des solutions, mais elles restent souvent inaccessibles aux budgets étudiants : prix trop élevés, offres inadaptées, risques d'arnaques ou frais d'agence abusifs pour les logements.

Nous voulions créer une alternative étudiante, simple, fiable et solidaire.`,
};

// Données des annonces (exemples avec localisation uniquement)
export const DEMO_LOGEMENTS = [
  { id: 1, type: "Studio", ville: "Paris 13e" },
  { id: 2, type: "Chambre colocation", ville: "Lyon 7e" },
  { id: 3, type: "T2 meublé", ville: "Bordeaux" },
  { id: 4, type: "Studio étudiant", ville: "Toulouse" },
  { id: 5, type: "Chambre chez l'habitant", ville: "Nantes" },
  { id: 6, type: "T1 bis", ville: "Lille" },
  { id: 7, type: "Colocation 3 chambres", ville: "Marseille" },
  { id: 8, type: "Studio neuf", ville: "Montpellier" },
];

export const DEMO_DONS = [
  { id: 1, categorie: "Meubles", ville: "Paris" },
  { id: 2, categorie: "Livres", ville: "Lyon" },
  { id: 3, categorie: "Électroménager", ville: "Bordeaux" },
  { id: 4, categorie: "Vêtements", ville: "Toulouse" },
  { id: 5, categorie: "Fournitures", ville: "Nantes" },
  { id: 6, categorie: "High-Tech", ville: "Lille" },
  { id: 7, categorie: "Déco", ville: "Marseille" },
  { id: 8, categorie: "Sport", ville: "Strasbourg" },
];

export const DEMO_OFFRES = [
  { id: 1, type: "Stage", domaine: "Marketing", ville: "Paris" },
  { id: 2, type: "Alternance", domaine: "Tech", ville: "Lyon" },
  { id: 3, type: "Job étudiant", domaine: "Commerce", ville: "Bordeaux" },
  { id: 4, type: "Stage", domaine: "Finance", ville: "Paris" },
  { id: 5, type: "Alternance", domaine: "RH", ville: "Toulouse" },
  { id: 6, type: "Job étudiant", domaine: "Restauration", ville: "Nantes" },
  { id: 7, type: "Stage", domaine: "Communication", ville: "Lille" },
  { id: 8, type: "Alternance", domaine: "Data", ville: "Marseille" },
];

// Statistiques
export const STATS = [
  { label: "Étudiants actifs", value: 6000, suffix: "+" },
  { label: "Logements proposés", value: 500, suffix: "+" },
  { label: "Dons réalisés", value: 150, suffix: "+" },
  { label: "Opportunités partagées", value: 200, suffix: "+" },
];

// Catégories de dons
export const DON_CATEGORIES = [
  { name: "Meubles", icon: "Sofa", color: "from-blue-500 to-blue-600" },
  { name: "Livres", icon: "BookOpen", color: "from-emerald-500 to-emerald-600" },
  { name: "Électroménager", icon: "Tv", color: "from-purple-500 to-purple-600" },
  { name: "Vêtements", icon: "Shirt", color: "from-pink-500 to-pink-600" },
  { name: "Fournitures", icon: "Pencil", color: "from-amber-500 to-amber-600" },
];

// Témoignages
export const TESTIMONIALS = [
  {
    name: "Marie L.",
    context: "Étudiante en droit — Paris",
    text: "J'ai trouvé mon studio en 3 jours grâce à la communauté ! Les membres sont réactifs et bienveillants.",
    rating: 5,
  },
  {
    name: "Amadou K.",
    context: "Étudiant en médecine — Lyon",
    text: "J'ai récupéré tous mes livres de L2 gratuitement. Une vraie solidarité entre étudiants.",
    rating: 5,
  },
  {
    name: "Sophie M.",
    context: "Étudiante en commerce — Bordeaux",
    text: "Mon alternance actuelle, je l'ai trouvée via une offre partagée dans le groupe. Merci !",
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
    answer: "Nous avons une équipe de modération active et des règles communautaires strictes. Les signalements sont traités rapidement.",
  },
];

// Navigation
export const NAV_ITEMS = [
  { label: "Accueil", href: "/" },
  { label: "Logements", href: "/logements" },
  { label: "Dons", href: "/dons" },
  { label: "Offres", href: "/offres" },
  { label: "Notre équipe", href: "/equipe" },
  { label: "Contact", href: "/contact" },
];
