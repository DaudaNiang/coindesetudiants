// Configuration des liens
export const LINKS = {
  WHATSAPP_GROUP: "https://whatsapp.com/channel/0029VbAwDzD8fewrz5ocLE03",
  WHATSAPP_CONTACT: "https://wa.me/33746444913",
  PUBLIER: "https://docs.google.com/forms/d/e/1FAIpQLSf4XQk94t2n5fawvOB7JFMzKwZzsFoVEqibHngnTmk-hvGk8A/viewform",
  PROPOSER_LOGEMENT: "https://docs.google.com/forms/d/e/1FAIpQLSf4XQk94t2n5fawvOB7JFMzKwZzsFoVEqibHngnTmk-hvGk8A/viewform",
  PUBLIER_OFFRE: "https://docs.google.com/forms/d/e/1FAIpQLSfxFWhEgEM0nuMQ1LxaQ293BqxbW6cxz4bv4Nd62cu1i846mQ/viewform",
  INSTAGRAM: "https://www.instagram.com/coin_des_etudiants/",
  LINKEDIN: "https://www.linkedin.com/company/coin-des-etudiants/",
  TIKTOK: "https://www.tiktok.com/@coindesetudiants",
  EMAIL: "mailto:coindesetudiants@gmail.com",
  EMAIL_DISPLAY: "coindesetudiants@gmail.com",
  PHONE: "+33 7 46 44 49 13",
};

// Équipe - Ordre : Dauda (gauche), Cheikh (centre), Bassine (droite)
export const TEAM = [
  {
    name: "Dauda NIANG",
    badge: "CPTO",
    role: "Co-fondateur",
    subtitle: "Vision & Produit | Développement | Partenariats",
    description: "Co-architecte du projet, il pilote la conception produit et le développement technologique de Coin des Étudiants. Il conçoit des solutions scalables, optimise l'expérience utilisateur et met en place des systèmes performants pour soutenir la croissance et les opérations au quotidien.",
    bullets: [
      "Co-architecte visionnaire du projet",
      "Développement produit & partenariats stratégiques",
      "Optimisation des opérations quotidiennes"
    ],
    image: "https://customer-assets.emergentagent.com/job_coin-demo/artifacts/luec5ro9_image.png",
  },
  {
    name: "Cheikh IBRA NDIAYE",
    badge: "CEO",
    role: "Fondateur — CEO",
    subtitle: "Direction Générale | Développement & Contenu",
    description: "Il pilote la vision stratégique et la direction globale de Coin des Étudiants. Il définit les priorités, supervise l'exécution et veille à l'alignement entre produit, croissance et opérations afin de structurer un développement solide et durable.",
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
    badge: "Présidente",
    role: "Co-fondatrice",
    subtitle: "Organisation | Communauté & Relations Terrain",
    description: "Elle supervise l'organisation et le développement de la communauté de Coin des Étudiants. Elle structure les opérations terrain, renforce les relations utilisateurs et partenaires, et assure une dynamique active pour soutenir la croissance et l'engagement.",
    bullets: [
      "Moteur de la structuration communautaire",
      "Modération, animation et qualité des échanges",
      "Relations terrain (étudiants, associations)"
    ],
    image: "/images/bassine.png",
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
    { year: "2025", event: "Lancement officiel + 10 000 membres" },
  ]
};

// Statistiques harmonisées
export const STATS = [
  { label: "Membres actifs", value: 10000, suffix: "+" },
  { label: "Logements publiés", value: 1000, suffix: "+" },
  { label: "Dons réalisés", value: 200, suffix: "+" },
  { label: "Jobs & stages", value: 500, suffix: "+" },
  { label: "Achats & ventes", value: 100, suffix: "+" },
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
  { name: "Marie L.", avatar: "M", ville: "Paris", context: "Étudiante en droit", text: "J'ai trouvé mon studio en 3 jours grâce à la communauté ! Les membres sont réactifs et bienveillants.", rating: 5 },
  { name: "Amadou K.", avatar: "A", ville: "Lyon", context: "Étudiant en médecine", text: "J'ai récupéré tous mes livres de L2 gratuitement. Une vraie solidarité entre étudiants.", rating: 5 },
  { name: "Sophie M.", avatar: "S", ville: "Bordeaux", context: "Étudiante en commerce", text: "Mon alternance actuelle, je l'ai trouvée via une offre partagée dans le groupe. Merci !", rating: 5 },
  { name: "Lucas T.", avatar: "L", ville: "Toulouse", context: "Étudiant en informatique", text: "J'ai vendu mon vieux PC et trouvé un écran en parfait état pour presque rien. Vraiment utile !", rating: 5 },
  { name: "Fatou D.", avatar: "F", ville: "Lille", context: "Étudiante en psychologie", text: "Une coloc trouvée en moins d'une semaine. La communauté est top, tout le monde est solidaire.", rating: 5 },
  { name: "Théo R.", avatar: "T", ville: "Marseille", context: "Étudiant en architecture", text: "Super groupe ! J'ai trouvé un job étudiant le jour même où j'ai posté ma recherche.", rating: 5 },
  { name: "Inès B.", avatar: "I", ville: "Nantes", context: "Étudiante en sciences", text: "Des meubles gratuits pour mon premier appart. Je n'aurais pas pu m'en sortir sans Coin des Étudiants.", rating: 5 },
  { name: "Youssef A.", avatar: "Y", ville: "Strasbourg", context: "Étudiant en gestion", text: "Stage de 6 mois déniché directement dans le groupe. La communauté est une mine d'or.", rating: 5 },
  { name: "Camille P.", avatar: "C", ville: "Rennes", context: "Étudiante en lettres", text: "J'ai donné mes vieux manuels et reçu exactement ceux dont j'avais besoin. L'entraide à son meilleur !", rating: 5 },
  { name: "Omar S.", avatar: "O", ville: "Lyon", context: "Étudiant en droit", text: "Chambre chez l'habitant trouvée rapidement, prix raisonnable. La communauté fait vraiment la différence.", rating: 5 },
  { name: "Léa V.", avatar: "L", ville: "Paris", context: "Étudiante en médecine", text: "Tous mes livres de PACES récupérés gratuitement ! Des centaines d'euros économisés dès la première semaine.", rating: 5 },
  { name: "Kévin M.", avatar: "K", ville: "Bordeaux", context: "Étudiant en sport", text: "J'ai revendu mon équipement sportif facilement. Les transactions sont rapides et les gens fiables.", rating: 5 },
  { name: "Aïcha N.", avatar: "A", ville: "Nice", context: "Étudiante en tourisme", text: "Alternance trouvée en hôtellerie grâce au groupe. L'équipe modère très bien, aucun spam.", rating: 5 },
  { name: "Baptiste G.", avatar: "B", ville: "Montpellier", context: "Étudiant en biologie", text: "Studio meublé à 450€ à Montpellier, c'est rare ! Merci à la communauté pour ce bon plan.", rating: 5 },
  { name: "Naomi F.", avatar: "N", ville: "Grenoble", context: "Étudiante en ingénierie", text: "J'ai trouvé une machine à laver et un frigo gratuits pour mon appart. Incroyable solidarité !", rating: 5 },
  { name: "Rayan C.", avatar: "R", ville: "Toulouse", context: "Étudiant en marketing", text: "Groupe sérieux et bien modéré. J'ai trouvé mon stage de fin d'études en une semaine.", rating: 5 },
  { name: "Emma D.", avatar: "E", ville: "Nantes", context: "Étudiante en design", text: "Mon MacBook vendu rapidement à un prix juste. La communauté est honnête et réactive.", rating: 5 },
  { name: "Amine L.", avatar: "A", ville: "Paris", context: "Étudiant en finance", text: "Une alternance en banque trouvée via le groupe. Je recommande à tous les étudiants parisiens !", rating: 5 },
  { name: "Chloé B.", avatar: "C", ville: "Lille", context: "Étudiante en ressources humaines", text: "Colocation trouvée avec des étudiants dans ma filière. Le groupe crée de vraies opportunités.", rating: 5 },
  { name: "Samba T.", avatar: "S", ville: "Lyon", context: "Étudiant en économie", text: "J'ai récupéré un bureau et une chaise de bureau en excellent état. Parfait pour télétravailler !", rating: 5 },
  { name: "Julie M.", avatar: "J", ville: "Bordeaux", context: "Étudiante en pharmacie", text: "Grâce à la communauté j'ai économisé plus de 300€ sur mes livres de première année. Merci !", rating: 5 },
  { name: "Mehdi R.", avatar: "M", ville: "Strasbourg", context: "Étudiant en droit européen", text: "Job de serveur le week-end trouvé en 2 jours. La communauté est une vraie ressource étudiante.", rating: 5 },
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
    answer: "Remplissez le formulaire avec les détails de votre bien. Votre annonce sera diffusée à +10 000 étudiants.",
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
  { label: "Achat & Vente", href: "/achat-vente" },
  { label: "Notre équipe", href: "/equipe" },
  { label: "Contact", href: "/contact" },
];

// Reassurance
export const REASSURANCE_TEXT = "Réponse rapide via WhatsApp • Communauté modérée • Tu peux quitter à tout moment";
