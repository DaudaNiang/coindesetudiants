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
    subtitle: "Vision & Produit | Développement | Partenariats",
    description: "Co-architecte visionnaire du projet, il pilote le développement produit et les partenariats stratégiques pour optimiser les opérations quotidiennes.",
    bullets: [
      "Co-architecte visionnaire du projet",
      "Développement produit & partenariats stratégiques",
      "Optimisation des opérations quotidiennes"
    ],
    image: "https://customer-assets.emergentagent.com/job_coin-demo/artifacts/luec5ro9_image.png",
  },
  {
    name: "Cheikh IBRA NDIAYE",
    role: "Fondateur — CEO",
    subtitle: "Direction Générale | Développement & Contenu",
    description: "Il pilote la vision et l'exécution globale de Coin des Étudiants, de la construction technique à la création de contenu et la croissance communauté.",
    bullets: [
      "Pilote la vision et l'exécution globale",
      "Construction technique (web/app, cadrage produit)",
      "Création de contenu et croissance communauté"
    ],
    image: "https://customer-assets.emergentagent.com/job_coin-demo/artifacts/p63q9lvo_image.png",
    isFounder: true,
  },
  {
    name: "Bassine NIANG",
    role: "Co-fondatrice",
    subtitle: "Organisation | Communauté & Relations Terrain",
    description: "Moteur de la structuration communautaire, elle assure la modération, l'animation et les relations terrain avec les étudiants et associations.",
    bullets: [
      "Moteur de la structuration communautaire",
      "Modération, animation et qualité des échanges",
      "Relations terrain (étudiants, associations)"
    ],
    image: "https://customer-assets.emergentagent.com/job_coin-demo/artifacts/m6z11kp6_image.png",
  },
];

// Histoire structurée
export const COMPANY_STORY = {
  problem: "Être étudiant en France, c'est faire face à de nombreux défis : logement, équipement, services abordables, solidarité. Chaque euro compte.",
  observation: "Tous les services utiles aux étudiants sont dispersés. Aucune plateforme ne rassemble tous ces besoins au même endroit, spécifiquement pour les étudiants.",
  solution: "Les plateformes généralistes (Leboncoin) restent inaccessibles aux budgets étudiants : prix élevés, offres inadaptées, arnaques, frais abusifs.",
  vision: "Créer une alternative étudiante, simple, fiable et solidaire.",
  timeline: [
    { year: "2024", event: "Création de la communauté WhatsApp" },
    { year: "2025", event: "Lancement officiel + 6000 membres" },
  ]
};

// Statistiques harmonisées
export const STATS = [
  { label: "Étudiants actifs", value: 6000, suffix: "+" },
  { label: "Logements proposés", value: 500, suffix: "+" },
  { label: "Dons réalisés", value: 150, suffix: "+" },
  { label: "Opportunités partagées", value: 200, suffix: "+" },
];

// Logements avec photos réalistes
export const DEMO_LOGEMENTS = [
  { id: 1, type: "Studio meublé", ville: "Paris 13e", prix: "650€/mois", surface: "22m²", dispo: "Disponible", image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 2, type: "Chambre colocation", ville: "Lyon 7e", prix: "420€/mois", surface: "14m²", dispo: "Disponible", image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 3, type: "T2 meublé", ville: "Bordeaux", prix: "580€/mois", surface: "35m²", dispo: "Dispo 1er mars", image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 4, type: "Studio étudiant", ville: "Toulouse", prix: "480€/mois", surface: "20m²", dispo: "Disponible", image: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 5, type: "Chambre chez l'habitant", ville: "Nantes", prix: "350€/mois", surface: "12m²", dispo: "Disponible", image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 6, type: "T1 bis", ville: "Lille", prix: "520€/mois", surface: "28m²", dispo: "Dispo 15 mars", image: "https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 7, type: "Colocation 3 chambres", ville: "Marseille", prix: "380€/mois", surface: "15m²", dispo: "Disponible", image: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=400" },
];

// Dons avec photos réalistes
export const DEMO_DONS = [
  { id: 1, categorie: "Meubles", titre: "Bureau + chaise", ville: "Paris", etat: "Bon état", image: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 2, categorie: "Livres", titre: "Manuels médecine L1-L2", ville: "Lyon", etat: "Correct", image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 3, categorie: "Électroménager", titre: "Micro-ondes Samsung", ville: "Bordeaux", etat: "Très bon état", image: "https://images.pexels.com/photos/6996091/pexels-photo-6996091.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 4, categorie: "Vêtements", titre: "Lot vêtements hiver", ville: "Toulouse", etat: "Bon état", image: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 5, categorie: "Fournitures", titre: "Kit fournitures bureau", ville: "Nantes", etat: "Neuf", image: "https://images.pexels.com/photos/159752/pencil-office-design-creative-159752.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 6, categorie: "High-Tech", titre: "Écran 24 pouces", ville: "Lille", etat: "Bon état", image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 7, categorie: "Déco", titre: "Lampe de bureau LED", ville: "Marseille", etat: "Neuf", image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=400" },
];

// Offres avec photos réalistes
export const DEMO_OFFRES = [
  { id: 1, type: "Stage", titre: "Stage Marketing Digital", domaine: "Marketing", ville: "Paris", duree: "6 mois", image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 2, type: "Alternance", titre: "Alternance Dev Web", domaine: "Tech", ville: "Lyon", duree: "12 mois", image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 3, type: "Job étudiant", titre: "Vendeur week-end", domaine: "Commerce", ville: "Bordeaux", duree: "CDI temps partiel", image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 4, type: "Stage", titre: "Stage Finance", domaine: "Finance", ville: "Paris", duree: "4 mois", image: "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 5, type: "Alternance", titre: "Alternance RH", domaine: "RH", ville: "Toulouse", duree: "24 mois", image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 6, type: "Job étudiant", titre: "Serveur restaurant", domaine: "Restauration", ville: "Nantes", duree: "Week-ends", image: "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 7, type: "Stage", titre: "Stage Communication", domaine: "Communication", ville: "Lille", duree: "5 mois", image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400" },
];

// Catégories de dons
export const DON_CATEGORIES = [
  { name: "Meubles", icon: "Sofa", desc: "Bureau, chaise, lit, rangement..." },
  { name: "Livres", icon: "BookOpen", desc: "Manuels, romans, cours..." },
  { name: "Électroménager", icon: "Tv", desc: "Micro-ondes, frigo, cafetière..." },
  { name: "Vêtements", icon: "Shirt", desc: "Été, hiver, accessoires..." },
  { name: "Fournitures", icon: "Pencil", desc: "Stylos, cahiers, classeurs..." },
];

// Témoignages améliorés
export const TESTIMONIALS = [
  {
    name: "Marie L.",
    avatar: "M",
    ville: "Paris",
    context: "Étudiante en droit",
    text: "J'ai trouvé mon studio en 3 jours grâce à la communauté ! Les membres sont réactifs et bienveillants.",
    rating: 5,
  },
  {
    name: "Amadou K.",
    avatar: "A",
    ville: "Lyon",
    context: "Étudiant en médecine",
    text: "J'ai récupéré tous mes livres de L2 gratuitement. Une vraie solidarité entre étudiants.",
    rating: 5,
  },
  {
    name: "Sophie M.",
    avatar: "S",
    ville: "Bordeaux",
    context: "Étudiante en commerce",
    text: "Mon alternance actuelle, je l'ai trouvée via une offre partagée dans le groupe. Merci !",
    rating: 5,
  },
];

// FAQ Sécurité
export const FAQ_SECURITE = [
  {
    question: "Comment la communauté est-elle modérée ?",
    answer: "Notre équipe vérifie les annonces et applique des règles strictes. Les comportements inappropriés sont sanctionnés.",
  },
  {
    question: "Que faire si je rencontre un problème ?",
    answer: "Tu peux signaler tout comportement suspect directement dans le groupe. Notre équipe intervient rapidement.",
  },
  {
    question: "Puis-je quitter le groupe à tout moment ?",
    answer: "Oui, tu es libre de rejoindre et quitter la communauté quand tu le souhaites, sans engagement.",
  },
];

// FAQ Bailleurs
export const FAQ_BAILLEURS = [
  {
    question: "Quels types de logements puis-je proposer ?",
    answer: "Tous types : studios, chambres en colocation, appartements, résidences étudiantes.",
  },
  {
    question: "Comment publier mon annonce ?",
    answer: "Remplissez le formulaire avec les détails de votre bien. Votre annonce sera diffusée à +6000 étudiants.",
  },
  {
    question: "Est-ce payant ?",
    answer: "Non, la publication est entièrement gratuite. Notre mission est de faciliter l'accès au logement.",
  },
  {
    question: "Comment limitez-vous les abus ?",
    answer: "Modération active, règles strictes et signalements traités rapidement.",
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

// Reassurance
export const REASSURANCE_TEXT = "Réponse rapide via WhatsApp • Communauté modérée • Tu peux quitter à tout moment";
