import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
  MessageCircle, ArrowRight, Home, Gift, Briefcase, Users, 
  Shield, Search, Heart, Star, MapPin, ChevronRight, CheckCircle,
  Euro, Clock
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { ReassuranceBar } from '../components/ReassuranceBar';
import { LINKS, STATS, TESTIMONIALS, DEMO_LOGEMENTS, DEMO_DONS, DEMO_OFFRES, FAQ_SECURITE } from '../config/constants';

// Hero Section
const HeroSection = () => {
  return (
    <section data-testid="hero-section" className="relative pt-28 pb-16 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1B2B] mb-6 leading-tight">
              La communauté qui{' '}
              <span className="gradient-text">simplifie</span>{' '}
              ta vie étudiante
            </h1>
            
            <p className="text-lg text-[#64748B] mb-6 max-w-lg">
              Logements, dons, entraide et opportunités (stages/jobs/alternances) — au même endroit.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <Badge className="badge badge-primary">
                <Users className="w-4 h-4 mr-1" />
                +6000 étudiants
              </Badge>
              <Badge className="badge badge-accent">
                <Shield className="w-4 h-4 mr-1" />
                Communauté modérée
              </Badge>
              <Badge className="badge badge-primary">
                <Heart className="w-4 h-4 mr-1" />
                Partenaires & assos
              </Badge>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
                <Button 
                  data-testid="hero-whatsapp-btn"
                  size="lg"
                  className="w-full sm:w-auto bg-[#4CAF50] hover:bg-[#3D8B40] text-white rounded-full px-8 font-semibold shadow-lg shadow-green-500/20"
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
                  className="w-full sm:w-auto border-2 border-[#1E5AA8] text-[#1E5AA8] hover:bg-[#1E5AA8] hover:text-white rounded-full px-8 font-semibold"
                >
                  Publier une annonce
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>

            <ReassuranceBar />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80"
              alt="Étudiants"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Stats Section
const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} data-testid="stats-section" className="py-12 bg-gradient-to-r from-[#1E5AA8] to-[#4CAF50]">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {isInView && <CountUp target={stat.value} suffix={stat.suffix} />}
              </div>
              <p className="text-white/80 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

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

// Demo Search Section (Parcours démontrable)
const DemoSearchSection = () => {
  const [category, setCategory] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allItems = [...DEMO_LOGEMENTS.slice(0, 2), ...DEMO_DONS.slice(0, 2), ...DEMO_OFFRES.slice(0, 2)];

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <section data-testid="demo-search-section" className="section-spacing bg-[#F5F7FA]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1B2B] mb-4">
            Découvre ce qui t'attend
          </h2>
          <p className="text-[#64748B] max-w-xl mx-auto">
            Explore un aperçu de notre communauté avant de rejoindre le WhatsApp.
          </p>
        </motion.div>

        {/* Mock search */}
        <div className="card p-6 mb-8 max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-4">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder="Catégorie" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="logement">Logement</SelectItem>
                <SelectItem value="don">Don</SelectItem>
                <SelectItem value="offre">Opportunité</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="Ville" className="rounded-xl" />
            <Input placeholder="Budget (optionnel)" className="rounded-xl" />
          </div>
        </div>

        {/* Demo cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allItems.map((item, index) => (
            <motion.div
              key={`${item.type || item.categorie}-${item.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card overflow-hidden"
            >
              <img 
                src={item.image} 
                alt={item.titre || item.type}
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <Badge className={`mb-2 ${
                  item.prix ? 'badge-primary' : 
                  item.categorie ? 'badge-accent' : 'bg-amber-100 text-amber-700'
                }`}>
                  {item.type || item.categorie}
                </Badge>
                <h3 className="font-semibold text-[#0B1B2B] mb-2">
                  {item.titre || item.type}
                </h3>
                <div className="flex items-center gap-2 text-sm text-[#64748B] mb-4">
                  <MapPin className="w-4 h-4" />
                  {item.ville}
                  {item.prix && <span className="ml-2 font-semibold text-[#1E5AA8]">{item.prix}</span>}
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 rounded-xl"
                    onClick={() => openModal(item)}
                  >
                    Voir détails
                  </Button>
                  <a href={LINKS.WHATSAPP_CHANNEL} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button size="sm" className="w-full bg-[#4CAF50] hover:bg-[#3D8B40] text-white rounded-xl">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-md">
            {selectedItem && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedItem.titre || selectedItem.type}</DialogTitle>
                </DialogHeader>
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.titre || selectedItem.type}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-[#64748B]" />
                    <span>{selectedItem.ville}</span>
                  </div>
                  {selectedItem.prix && (
                    <div className="flex items-center gap-2 text-sm">
                      <Euro className="w-4 h-4 text-[#64748B]" />
                      <span className="font-semibold text-[#1E5AA8]">{selectedItem.prix}</span>
                    </div>
                  )}
                  {selectedItem.surface && (
                    <div className="flex items-center gap-2 text-sm">
                      <Home className="w-4 h-4 text-[#64748B]" />
                      <span>{selectedItem.surface}</span>
                    </div>
                  )}
                </div>
                <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-[#4CAF50] hover:bg-[#3D8B40] text-white rounded-full">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Contacter sur WhatsApp
                  </Button>
                </a>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

// Categories Section
const CategoriesSection = () => {
  const categories = [
    { title: "Logements", desc: "Studios, colocations, chambres...", icon: Home, href: "/logements", count: "500+", color: "bg-[#1E5AA8]" },
    { title: "Dons", desc: "Meubles, livres, électroménager...", icon: Gift, href: "/dons", count: "150+", color: "bg-[#4CAF50]" },
    { title: "Opportunités", desc: "Stages, jobs, alternances...", icon: Briefcase, href: "/offres", count: "200+", color: "bg-amber-500" },
  ];

  return (
    <section data-testid="categories-section" className="section-spacing bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1B2B] mb-4">
            Tout ce dont tu as besoin
          </h2>
          <p className="text-[#64748B]">Au même endroit, pour les étudiants.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={cat.href}>
                <div className="card p-6 h-full">
                  <div className={`w-12 h-12 rounded-xl ${cat.color} flex items-center justify-center mb-4`}>
                    <cat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-[#0B1B2B]">{cat.title}</h3>
                    <Badge className="badge-primary text-xs">{cat.count}</Badge>
                  </div>
                  <p className="text-[#64748B] text-sm mb-4">{cat.desc}</p>
                  <span className="text-[#1E5AA8] font-medium text-sm flex items-center">
                    Découvrir <ChevronRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Community Preview with Tabs
const CommunityPreviewSection = () => {
  return (
    <section data-testid="community-preview-section" className="section-spacing bg-[#F5F7FA]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1B2B] mb-4">
            Aperçu de notre communauté
          </h2>
        </motion.div>

        <Tabs defaultValue="logements" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white p-1 rounded-full">
            <TabsTrigger value="logements" className="rounded-full data-[state=active]:bg-[#1E5AA8] data-[state=active]:text-white">
              Logements
            </TabsTrigger>
            <TabsTrigger value="dons" className="rounded-full data-[state=active]:bg-[#4CAF50] data-[state=active]:text-white">
              Dons
            </TabsTrigger>
            <TabsTrigger value="offres" className="rounded-full data-[state=active]:bg-amber-500 data-[state=active]:text-white">
              Opportunités
            </TabsTrigger>
          </TabsList>

          <TabsContent value="logements">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {DEMO_LOGEMENTS.slice(0, 3).map((item) => (
                <PreviewCard key={item.id} item={item} type="logement" />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="dons">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {DEMO_DONS.slice(0, 3).map((item) => (
                <PreviewCard key={item.id} item={item} type="don" />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="offres">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {DEMO_OFFRES.slice(0, 3).map((item) => (
                <PreviewCard key={item.id} item={item} type="offre" />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-8">
          <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#4CAF50] hover:bg-[#3D8B40] text-white rounded-full px-8 font-semibold">
              <MessageCircle className="w-5 h-5 mr-2" />
              Voir tout sur WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

const PreviewCard = ({ item, type }) => (
  <div className="card p-4">
    <img src={item.image} alt="" className="w-full h-32 object-cover rounded-xl mb-3" />
    <Badge className={`mb-2 ${type === 'logement' ? 'badge-primary' : type === 'don' ? 'badge-accent' : 'bg-amber-100 text-amber-700'}`}>
      {item.type || item.categorie}
    </Badge>
    <p className="font-medium text-[#0B1B2B] text-sm mb-1">{item.titre || item.type}</p>
    <div className="flex items-center gap-1 text-xs text-[#64748B] mb-3">
      <MapPin className="w-3 h-3" />
      {item.ville}
      {item.prix && <span className="ml-2 text-[#1E5AA8] font-semibold">{item.prix}</span>}
    </div>
    <a href={LINKS.WHATSAPP_CHANNEL} target="_blank" rel="noopener noreferrer">
      <Button size="sm" className="w-full bg-[#4CAF50] hover:bg-[#3D8B40] text-white rounded-full text-xs">
        Voir sur WhatsApp
      </Button>
    </a>
  </div>
);

// Security Section
const SecuritySection = () => {
  return (
    <section data-testid="security-section" className="section-spacing bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#4CAF50] flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1B2B] mb-4">
              Communauté sécurisée & modérée
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              { icon: CheckCircle, title: "Règles claires", desc: "Charte de bonne conduite" },
              { icon: Shield, title: "Modération active", desc: "Équipe réactive 7j/7" },
              { icon: MessageCircle, title: "Signalement facile", desc: "Problème ? On agit vite" },
            ].map((item, index) => (
              <div key={item.title} className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#F5F7FA] flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-[#4CAF50]" />
                </div>
                <h4 className="font-semibold text-[#0B1B2B] mb-1">{item.title}</h4>
                <p className="text-sm text-[#64748B]">{item.desc}</p>
              </div>
            ))}
          </div>

          <Accordion type="single" collapsible className="card p-4">
            {FAQ_SECURITE.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-[#0B1B2B]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#64748B]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

// Testimonials
const TestimonialsSection = () => {
  return (
    <section data-testid="testimonials-section" className="section-spacing bg-[#F5F7FA]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1B2B] mb-4">
            Ce qu'ils disent de nous
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card p-6"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-[#0B1B2B] mb-4 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1E5AA8] to-[#4CAF50] flex items-center justify-center text-white font-semibold">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-[#0B1B2B] text-sm">{t.name}</p>
                  <p className="text-xs text-[#64748B]">{t.context} — {t.ville}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-[#64748B]">
            Tu peux rejoindre et quitter à tout moment — sans engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

// Final CTA
const FinalCTASection = () => {
  return (
    <section data-testid="final-cta-section" className="py-20 bg-gradient-to-br from-[#1E5AA8] to-[#164785]">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Rejoins +6000 étudiants qui s'entraident
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Une communauté active, solidaire et bienveillante t'attend.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                className="bg-[#4CAF50] hover:bg-[#3D8B40] text-white rounded-full px-8 font-semibold shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Rejoindre le WhatsApp
              </Button>
            </a>
            <a href={LINKS.PUBLIER} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#1E5AA8] rounded-full px-8 font-semibold"
              >
                Publier une annonce
              </Button>
            </a>
          </div>
          <ReassuranceBar />
        </motion.div>
      </div>
    </section>
  );
};

// Main HomePage
export const HomePage = () => {
  return (
    <div data-testid="home-page">
      <HeroSection />
      <StatsSection />
      <DemoSearchSection />
      <CategoriesSection />
      <CommunityPreviewSection />
      <SecuritySection />
      <TestimonialsSection />
      <FinalCTASection />
    </div>
  );
};

export default HomePage;
