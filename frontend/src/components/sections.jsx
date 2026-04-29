import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Menu, X, Home, Gift, Briefcase, Users, Mail, MessageCircle,
  Building, BookOpen, Tv, Shirt, Pencil, Sofa, MapPin, Euro,
  Clock, Star, ChevronRight, Instagram, Linkedin, ExternalLink,
  Search, Filter, Check, ArrowRight, Shield, Heart, Zap, Target
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { 
  LINKS, DEMO_LISTINGS, STATS, DON_CATEGORIES, TEAM, 
  TESTIMONIALS, FAQ_BAILLEURS, NAV_ITEMS 
} from '../config/constants';

// ============ HEADER COMPONENT ============
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      data-testid="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2" data-testid="logo">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-lg font-poppins">C</span>
            </div>
            <span className="font-poppins font-semibold text-lg text-[#0B1B2B] hidden sm:block">
              Coin des Étudiants
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" data-testid="desktop-nav">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#0B1B2B]/80 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
              <Button 
                data-testid="header-whatsapp-btn"
                className="hidden sm:flex bg-secondary hover:bg-secondary-600 text-white rounded-full px-6 btn-hover"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Rejoindre WhatsApp
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <button
              data-testid="mobile-menu-btn"
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden py-4 border-t border-muted"
            data-testid="mobile-menu"
          >
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-[#0B1B2B] hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href={LINKS.WHATSAPP_GROUP} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-2"
              >
                <Button className="w-full bg-secondary hover:bg-secondary-600 text-white rounded-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Rejoindre WhatsApp
                </Button>
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

// ============ HERO SECTION ============
export const HeroSection = () => {
  return (
    <section 
      id="hero" 
      data-testid="hero-section"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1B2B] mb-6 leading-tight">
              La communauté étudiante qui{' '}
              <span className="gradient-text">simplifie ton quotidien</span>
            </h1>
            
            <p className="text-lg text-[#0B1B2B]/70 mb-8 max-w-xl">
              Logements, dons, achats/ventes, entraide et opportunités (stages/jobs/alternances) — au même endroit.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
                <Button 
                  data-testid="hero-whatsapp-btn"
                  size="lg"
                  className="w-full sm:w-auto bg-secondary hover:bg-secondary-600 text-white rounded-full px-8 py-6 text-lg btn-hover"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Rejoindre le WhatsApp
                </Button>
              </a>
              <a href={LINKS.PUBLIER} target="_blank" rel="noopener noreferrer">
                <Button 
                  data-testid="hero-publish-btn"
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8 py-6 text-lg btn-hover"
                >
                  Publier une annonce
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary px-4 py-2 text-sm">
                <Users className="w-4 h-4 mr-2" />
                +10 000 étudiants
              </Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary px-4 py-2 text-sm">
                <Building className="w-4 h-4 mr-2" />
                Partenaires universitaires
              </Badge>
              <Badge variant="secondary" className="bg-secondary/10 text-secondary px-4 py-2 text-sm">
                <Heart className="w-4 h-4 mr-2" />
                Communauté solidaire
              </Badge>
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1758270705902-f50dde4add9f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHw0fHxoYXBweSUyMHVuaXZlcnNpdHklMjBzdHVkZW50c3xlbnwwfHx8fDE3NzIxNDg0ODV8MA&ixlib=rb-4.1.0&q=85&w=600"
                alt="Étudiants heureux"
                className="rounded-3xl shadow-2xl"
                loading="lazy"
              />
              
              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -left-8 top-20 glass rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Home className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">500+ logements</p>
                    <p className="text-xs text-muted-foreground">disponibles</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -right-4 bottom-20 glass rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Opportunités</p>
                    <p className="text-xs text-muted-foreground">stages & jobs</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============ SHOWCASE SECTION (Parcours démontrable) ============
export const ShowcaseSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedListing, setSelectedListing] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allListings = [
    ...DEMO_LISTINGS.logements,
    ...DEMO_LISTINGS.dons,
    ...DEMO_LISTINGS.offres,
  ];

  const filteredListings = selectedCategory === 'all' 
    ? allListings 
    : allListings.filter(l => l.type === selectedCategory);

  const openModal = (listing) => {
    setSelectedListing(listing);
    setIsModalOpen(true);
  };

  return (
    <section id="parcours" data-testid="showcase-section" className="section-spacing bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1B2B] mb-4">
            Découvre ce qui t'attend
          </h2>
          <p className="text-lg text-[#0B1B2B]/70 max-w-2xl mx-auto">
            Explore les annonces de notre communauté — logements, dons et opportunités.
          </p>
        </motion.div>

        {/* Search filters (visual demo) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 mb-10 shadow-lg"
          data-testid="showcase-filters"
        >
          <div className="grid sm:grid-cols-3 gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="rounded-xl" data-testid="category-filter">
                <SelectValue placeholder="Catégorie" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes catégories</SelectItem>
                <SelectItem value="logement">Logements</SelectItem>
                <SelectItem value="don">Dons</SelectItem>
                <SelectItem value="offre">Opportunités</SelectItem>
              </SelectContent>
            </Select>

            <Select disabled>
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder="Ville" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="paris">Paris</SelectItem>
                <SelectItem value="lyon">Lyon</SelectItem>
              </SelectContent>
            </Select>

            <Select disabled>
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder="Budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="300">Moins de 300€</SelectItem>
                <SelectItem value="500">Moins de 500€</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* Listing cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing, index) => (
            <motion.div
              key={listing.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              data-testid={`listing-card-${listing.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover border border-muted/50"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={listing.image} 
                  alt={listing.titre}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <Badge 
                  className={`absolute top-3 left-3 ${
                    listing.type === 'logement' ? 'bg-primary' :
                    listing.type === 'don' ? 'bg-secondary' : 'bg-amber-500'
                  } text-white`}
                >
                  {listing.type === 'logement' ? 'Logement' :
                   listing.type === 'don' ? 'Don gratuit' : listing.typeOffre}
                </Badge>
              </div>
              
              <div className="p-5">
                <h3 className="font-semibold text-lg text-[#0B1B2B] mb-2 line-clamp-1">
                  {listing.titre}
                </h3>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{listing.ville}</span>
                  {listing.prix && (
                    <>
                      <span className="mx-1">•</span>
                      <Euro className="w-4 h-4" />
                      <span className="font-semibold text-primary">{listing.prix}</span>
                    </>
                  )}
                  {listing.duree && (
                    <>
                      <span className="mx-1">•</span>
                      <Clock className="w-4 h-4" />
                      <span>{listing.duree}</span>
                    </>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="flex-1 rounded-xl"
                    onClick={() => openModal(listing)}
                    data-testid={`view-btn-${listing.id}`}
                  >
                    Voir
                  </Button>
                  <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="w-full bg-secondary hover:bg-secondary-600 text-white rounded-xl">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      Contact
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for listing details */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-lg" data-testid="listing-modal">
            {selectedListing && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-xl">{selectedListing.titre}</DialogTitle>
                  <DialogDescription className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {selectedListing.ville}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-4">
                  <img 
                    src={selectedListing.image} 
                    alt={selectedListing.titre}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  
                  <div className="flex flex-wrap gap-2">
                    {selectedListing.prix && (
                      <Badge className="bg-primary/10 text-primary">
                        {selectedListing.prix}
                      </Badge>
                    )}
                    {selectedListing.surface && (
                      <Badge variant="outline">{selectedListing.surface}</Badge>
                    )}
                    {selectedListing.categorie && (
                      <Badge className="bg-secondary/10 text-secondary">
                        {selectedListing.categorie}
                      </Badge>
                    )}
                    {selectedListing.domaine && (
                      <Badge variant="outline">{selectedListing.domaine}</Badge>
                    )}
                  </div>

                  <p className="text-[#0B1B2B]/70">{selectedListing.description}</p>

                  <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
                    <Button 
                      className="w-full bg-secondary hover:bg-secondary-600 text-white rounded-xl"
                      data-testid="modal-whatsapp-btn"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Contacter via WhatsApp
                    </Button>
                  </a>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

// ============ STATS SECTION ============
export const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section 
      ref={ref}
      data-testid="stats-section" 
      className="py-16 md:py-24 bg-accent"
    >
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="text-center"
              data-testid={`stat-${index}`}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {isInView && <CountUp target={stat.value} suffix={stat.suffix} />}
              </div>
              <p className="text-sm md:text-base text-[#0B1B2B]/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Counter animation component
const CountUp = ({ target, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <>{count.toLocaleString()}{suffix}</>;
};

// ============ HOW IT WORKS SECTION ============
export const HowItWorksSection = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Rejoins le WhatsApp",
      description: "Intègre notre communauté de +10 000 étudiants en un clic.",
    },
    {
      icon: Search,
      title: "Trouve ou publie",
      description: "Logement, don, achat/vente ou opportunité — tout est centralisé.",
    },
    {
      icon: Zap,
      title: "Échange et avance",
      description: "Entraide, partage et saisis les opportunités qui s'offrent à toi.",
    },
  ];

  return (
    <section data-testid="how-it-works-section" className="section-spacing bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1B2B] mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-lg text-[#0B1B2B]/70">
            3 étapes simples pour rejoindre la communauté
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative text-center"
              data-testid={`step-${index + 1}`}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center shadow-lg shadow-primary/20">
                <step.icon className="w-10 h-10 text-white" />
              </div>
              <div className="absolute top-10 left-1/2 w-full h-0.5 bg-muted -z-10 hidden md:block last:hidden" 
                style={{ display: index === 2 ? 'none' : undefined }} />
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-3">
                Étape {index + 1}
              </span>
              <h3 className="text-xl font-semibold text-[#0B1B2B] mb-2">{step.title}</h3>
              <p className="text-[#0B1B2B]/70">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Anti-arnaque notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
          data-testid="safety-notice"
        >
          <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
            <Shield className="w-7 h-7 text-secondary" />
          </div>
          <div>
            <h4 className="font-semibold text-[#0B1B2B] mb-1">
              Sécurité & modération
            </h4>
            <p className="text-sm text-[#0B1B2B]/70">
              Règles communautaires strictes, modération active et système de signalement pour garantir un environnement sûr.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ============ HOUSING SECTION ============
export const HousingSection = () => {
  const benefits = [
    "Annonces ciblées pour étudiants",
    "Mise en relation simple et rapide",
    "Communauté active + modération",
    "Partenariats universitaires",
  ];

  return (
    <section id="logements" data-testid="housing-section" className="section-spacing bg-accent">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1B2B] mb-6">
              Trouver un logement étudiant{' '}
              <span className="gradient-text">sans galère</span>
            </h2>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-[#0B1B2B]/80">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
                <Button 
                  data-testid="housing-whatsapp-btn"
                  className="w-full sm:w-auto bg-secondary hover:bg-secondary-600 text-white rounded-full px-6 btn-hover"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Rejoindre le WhatsApp
                </Button>
              </a>
              <a href={LINKS.PUBLIER} target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full px-6 btn-hover"
                >
                  Publier une annonce
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1666282167632-c613fbeb163c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwwfHx8fDE3NzIxNDg0ODZ8MA&ixlib=rb-4.1.0&q=85&w=600"
              alt="Appartement moderne"
              className="rounded-3xl shadow-2xl"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============ DONATIONS SECTION ============
export const DonationsSection = () => {
  const iconMap = {
    Sofa: Sofa,
    BookOpen: BookOpen,
    Tv: Tv,
    Shirt: Shirt,
    Pencil: Pencil,
  };

  return (
    <section id="dons" data-testid="donations-section" className="section-spacing bg-white">
      <div className="container-custom">
        {/* Donations for students */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1B2B] mb-4">
            Donner & recevoir :{' '}
            <span className="gradient-text">le réflexe solidaire</span>
          </h2>
          <p className="text-lg text-[#0B1B2B]/70 max-w-2xl mx-auto">
            Meubles, livres, électroménager... la solidarité étudiante en action.
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {DON_CATEGORIES.map((cat, index) => {
            const IconComponent = iconMap[cat.icon];
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 text-center card-hover cursor-pointer"
                data-testid={`don-category-${cat.name.toLowerCase()}`}
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-secondary/20 flex items-center justify-center">
                  {IconComponent && <IconComponent className="w-6 h-6 text-secondary" />}
                </div>
                <span className="font-medium text-[#0B1B2B]">{cat.name}</span>
              </motion.div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
          <a href={LINKS.PUBLIER} target="_blank" rel="noopener noreferrer">
            <Button className="w-full sm:w-auto bg-secondary hover:bg-secondary-600 text-white rounded-full px-6 btn-hover">
              Je donne / je récupère
            </Button>
          </a>
          <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full px-6 btn-hover">
              <MessageCircle className="w-4 h-4 mr-2" />
              Rejoindre le WhatsApp
            </Button>
          </a>
        </div>

        {/* Landlords section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl border border-muted p-8 md:p-12 shadow-lg"
          data-testid="landlords-section"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1B2B] mb-6 text-center">
            Bailleurs : pourquoi proposer votre logement sur{' '}
            <span className="text-primary">Coin des Étudiants</span> ?
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { icon: Target, title: "Visibilité ciblée", desc: "Touchez directement +10 000 étudiants" },
              { icon: Zap, title: "Gain de temps", desc: "Demandes plus claires et qualifiées" },
              { icon: Shield, title: "Confiance", desc: "Communauté modérée + partenaires" },
              { icon: Heart, title: "Impact positif", desc: "Aidez des étudiants sérieux" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-accent"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-semibold text-[#0B1B2B] mb-2">{item.title}</h4>
                <p className="text-sm text-[#0B1B2B]/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="mb-8" data-testid="landlords-faq">
            {FAQ_BAILLEURS.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#0B1B2B]/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center">
            <a href={LINKS.PROPOSER_LOGEMENT} target="_blank" rel="noopener noreferrer">
              <Button 
                data-testid="landlords-cta-btn"
                size="lg"
                className="bg-secondary hover:bg-secondary-600 text-white rounded-full px-8 btn-hover"
              >
                Proposer un logement
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ============ JOBS SECTION ============
export const JobsSection = () => {
  const demoOffers = [
    { id: 1, titre: "Stage Marketing Digital", ville: "Paris", type: "Stage", duree: "6 mois" },
    { id: 2, titre: "Alternance Data Analyst", ville: "Lyon", type: "Alternance", duree: "12 mois" },
    { id: 3, titre: "Job étudiant Retail", ville: "Bordeaux", type: "Job", duree: "Temps partiel" },
    { id: 4, titre: "Stage Communication", ville: "Lille", type: "Stage", duree: "4 mois" },
    { id: 5, titre: "Alternance RH", ville: "Toulouse", type: "Alternance", duree: "24 mois" },
    { id: 6, titre: "Job serveur weekend", ville: "Nantes", type: "Job", duree: "Week-ends" },
  ];

  return (
    <section id="offres" data-testid="jobs-section" className="section-spacing bg-accent">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1B2B] mb-4">
            Stages, jobs & alternances :{' '}
            <span className="gradient-text">des opportunités pour avancer</span>
          </h2>
          <p className="text-lg text-[#0B1B2B]/70 max-w-2xl mx-auto">
            Des offres pensées pour les étudiants, simples à trouver et à partager.
          </p>
        </motion.div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="mb-10" data-testid="jobs-tabs">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
            <TabsTrigger value="all">Tout</TabsTrigger>
            <TabsTrigger value="stage">Stages</TabsTrigger>
            <TabsTrigger value="alternance">Alternances</TabsTrigger>
            <TabsTrigger value="job">Jobs</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {demoOffers.map((offer, index) => (
                <JobCard key={offer.id} offer={offer} index={index} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="stage">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {demoOffers.filter(o => o.type === 'Stage').map((offer, index) => (
                <JobCard key={offer.id} offer={offer} index={index} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="alternance">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {demoOffers.filter(o => o.type === 'Alternance').map((offer, index) => (
                <JobCard key={offer.id} offer={offer} index={index} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="job">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {demoOffers.filter(o => o.type === 'Job').map((offer, index) => (
                <JobCard key={offer.id} offer={offer} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mb-20">
          <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
            <Button 
              data-testid="jobs-whatsapp-btn"
              size="lg"
              className="bg-secondary hover:bg-secondary-600 text-white rounded-full px-8 btn-hover"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Recevoir les offres sur WhatsApp
            </Button>
          </a>
        </div>

        {/* Recruiters section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
          data-testid="recruiters-section"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1B2B] mb-6 text-center">
            Recruteurs : publiez une offre et touchez des{' '}
            <span className="text-primary">profils motivés</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { title: "Accès direct", desc: "Communauté étudiante active de +10 000 membres" },
              { title: "Publication simple", desc: "Formulaire rapide, diffusion immédiate" },
              { title: "Ciblage précis", desc: "Par ville, domaine et type de contrat" },
              { title: "Image employeur", desc: "Montrez votre engagement envers les étudiants" },
            ].map((item, index) => (
              <div key={item.title} className="p-5 rounded-xl bg-accent">
                <h4 className="font-semibold text-[#0B1B2B] mb-2">{item.title}</h4>
                <p className="text-sm text-[#0B1B2B]/70">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href={LINKS.PUBLIER_OFFRE} target="_blank" rel="noopener noreferrer">
              <Button 
                data-testid="recruiters-cta-btn"
                size="lg"
                className="bg-secondary hover:bg-secondary-600 text-white rounded-full px-8 btn-hover"
              >
                Devenir partenaire
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const JobCard = ({ offer, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-white rounded-2xl p-6 shadow-lg card-hover border border-muted/50"
    data-testid={`job-card-${offer.id}`}
  >
    <Badge 
      className={`mb-4 ${
        offer.type === 'Stage' ? 'bg-amber-100 text-amber-700' :
        offer.type === 'Alternance' ? 'bg-blue-100 text-blue-700' :
        'bg-green-100 text-green-700'
      }`}
    >
      {offer.type}
    </Badge>
    <h4 className="font-semibold text-[#0B1B2B] mb-2">{offer.titre}</h4>
    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
      <span className="flex items-center gap-1">
        <MapPin className="w-4 h-4" />
        {offer.ville}
      </span>
      <span className="flex items-center gap-1">
        <Clock className="w-4 h-4" />
        {offer.duree}
      </span>
    </div>
    <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
      <Button className="w-full bg-primary hover:bg-primary-600 text-white rounded-xl">
        En savoir plus
      </Button>
    </a>
  </motion.div>
);

// ============ PARTNERS SECTION ============
export const PartnersSection = () => {
  const partnerLogos = [
    { name: "Université Paris", placeholder: "Université Paris" },
    { name: "École Commerce", placeholder: "École de Commerce" },
    { name: "BDE Central", placeholder: "BDE Central" },
    { name: "Association Étudiante", placeholder: "Association" },
    { name: "Campus France", placeholder: "Campus France" },
    { name: "CROUS", placeholder: "CROUS" },
  ];

  return (
    <section id="partenariats" data-testid="partners-section" className="section-spacing bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1B2B] mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-lg text-[#0B1B2B]/70 max-w-2xl mx-auto">
            Partenaires universitaires et associatifs pour renforcer l'impact étudiant.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-10">
          {partnerLogos.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6 flex items-center justify-center h-24 card-hover"
              data-testid={`partner-${index}`}
            >
              <span className="text-sm font-medium text-[#0B1B2B]/60 text-center">
                {partner.placeholder}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a href="#contact">
            <Button 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full px-6 btn-hover"
            >
              Devenir partenaire
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

// ============ TEAM SECTION ============
export const TeamSection = () => {
  return (
    <section id="equipe" data-testid="team-section" className="section-spacing bg-accent">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1B2B] mb-4">
            Notre équipe
          </h2>
          <p className="text-lg text-[#0B1B2B]/70">
            Les personnes derrière Coin des Étudiants
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {TEAM.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-3xl p-6 text-center shadow-lg card-hover"
              data-testid={`team-member-${index}`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
                loading="lazy"
              />
              <h3 className="font-semibold text-lg text-[#0B1B2B]">{member.name}</h3>
              <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
              <p className="text-sm text-[#0B1B2B]/70">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ TESTIMONIALS SECTION ============
export const TestimonialsSection = () => {
  return (
    <section data-testid="testimonials-section" className="section-spacing bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1B2B] mb-4">
            Ce qu'ils disent de nous
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass rounded-3xl p-8 shadow-lg"
              data-testid={`testimonial-${index}`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-[#0B1B2B]/80 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-[#0B1B2B]">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.context}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ CONTACT SECTION ============
export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" data-testid="contact-section" className="section-spacing bg-accent">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1B2B] mb-4">
              Contactez-nous
            </h2>
            <p className="text-lg text-[#0B1B2B]/70">
              Une question ? Une suggestion ? Écrivez-nous !
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            {submitted ? (
              <div className="text-center py-8" data-testid="contact-success">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Check className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-[#0B1B2B] mb-2">Message envoyé !</h3>
                <p className="text-[#0B1B2B]/70 mb-4">Nous vous répondrons rapidement.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline" className="rounded-full">
                  Envoyer un autre message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#0B1B2B] mb-2">
                    Nom
                  </label>
                  <Input
                    id="name"
                    data-testid="contact-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Votre nom"
                    required
                    className="rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#0B1B2B] mb-2">
                    Email ou Téléphone
                  </label>
                  <Input
                    id="email"
                    data-testid="contact-email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="votre@email.com ou 06..."
                    required
                    className="rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#0B1B2B] mb-2">
                    Sujet
                  </label>
                  <Select 
                    value={formData.subject} 
                    onValueChange={(value) => setFormData({ ...formData, subject: value })}
                  >
                    <SelectTrigger className="rounded-xl" data-testid="contact-subject">
                      <SelectValue placeholder="Choisir un sujet" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="logement">Logement</SelectItem>
                      <SelectItem value="don">Don</SelectItem>
                      <SelectItem value="offre">Offre d'emploi</SelectItem>
                      <SelectItem value="partenariat">Partenariat</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#0B1B2B] mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    data-testid="contact-message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Votre message..."
                    required
                    rows={5}
                    className="rounded-xl"
                  />
                </div>

                <Button 
                  type="submit" 
                  data-testid="contact-submit-btn"
                  className="w-full bg-secondary hover:bg-secondary-600 text-white rounded-full py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                </Button>
              </form>
            )}

            {/* WhatsApp shortcut */}
            <div className="mt-6 p-4 rounded-xl bg-accent flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-[#0B1B2B]/70 text-center sm:text-left">
                Réponse plus rapide via WhatsApp ?
              </p>
              <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
                <Button className="bg-secondary hover:bg-secondary-600 text-white rounded-full px-6">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Ouvrir WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============ FINAL CTA SECTION ============
export const FinalCTASection = () => {
  return (
    <section data-testid="final-cta-section" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-700" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Rejoins plus de 10 000 étudiants<br />
            qui s'entraident chaque jour
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
              <Button 
                data-testid="final-cta-whatsapp-btn"
                size="lg"
                className="bg-secondary hover:bg-secondary-600 text-white rounded-full px-8 py-6 text-lg btn-hover"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Rejoindre le WhatsApp
              </Button>
            </a>
            <a href={LINKS.PUBLIER} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary rounded-full px-8 py-6 text-lg btn-hover"
              >
                Publier une annonce
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ============ FOOTER ============
export const Footer = () => {
  return (
    <footer data-testid="footer" className="bg-[#0B1B2B] text-white py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Logo & Slogan */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-lg font-poppins">C</span>
              </div>
              <span className="font-poppins font-semibold text-lg">
                Coin des Étudiants
              </span>
            </div>
            <p className="text-white/60 text-sm">
              La communauté étudiante qui simplifie ton quotidien.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More links */}
          <div>
            <h4 className="font-semibold mb-4">En savoir plus</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.slice(4).map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  CGU
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  Confidentialité
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <a href={LINKS.EMAIL} className="text-white/60 hover:text-white transition-colors text-sm block mb-4">
              coindetudiants@gmail.com
            </a>
            
            <div className="flex gap-3">
              <a 
                href={LINKS.INSTAGRAM} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
                data-testid="footer-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={LINKS.LINKEDIN} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
                data-testid="footer-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={LINKS.TIKTOK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="TikTok"
                data-testid="footer-tiktok"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
              <a 
                href={LINKS.EMAIL}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Email"
                data-testid="footer-email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2025 Coin des Étudiants. Tous droits réservés.
          </p>
          <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
            <Button 
              data-testid="footer-whatsapp-btn"
              className="bg-secondary hover:bg-secondary-600 text-white rounded-full px-6"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Rejoindre le WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </footer>
  );
};
