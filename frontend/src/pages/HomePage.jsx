import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
  MessageCircle, ArrowRight, Home, Gift, Briefcase, Users, 
  Shield, Heart, Star, MapPin, ChevronRight, CheckCircle, Euro
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { ReassuranceBar } from '../components/ReassuranceBar';
import { LINKS, STATS, TESTIMONIALS, DEMO_LOGEMENTS, DEMO_DONS, DEMO_OFFRES, FAQ_SECURITE } from '../config/constants';

// Hero Section
const HeroSection = () => {
  return (
    <section data-testid="hero-section" className="relative pt-28 pb-20 gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/50 to-green-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-green-100/50 to-blue-100/50 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1B2B] mb-6 leading-tight">
              La communauté qui{' '}
              <span className="gradient-text">simplifie</span>{' '}
              ta vie étudiante
            </h1>
            
            <p className="text-lg text-[#64748B] mb-8 max-w-lg leading-relaxed">
              Logements, dons, entraide et opportunités (stages/jobs/alternances) — au même endroit, pour les étudiants.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
                <Button 
                  data-testid="hero-whatsapp-btn"
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-[#4CAF50] to-[#3D8B40] hover:from-[#3D8B40] hover:to-[#2E7D32] text-white rounded-full px-8 font-semibold shadow-lg shadow-green-500/25"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Rejoindre le WhatsApp
                </Button>
              </a>
              <a href={LINKS.PUBLIER} target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-[#1E5AA8] text-[#1E5AA8] hover:bg-[#1E5AA8] hover:text-white rounded-full px-8 font-semibold"
                >
                  Publier une annonce
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <Badge className="badge badge-primary">
                <Users className="w-4 h-4 mr-2" />
                +6000 étudiants
              </Badge>
              <Badge className="badge badge-accent">
                <Shield className="w-4 h-4 mr-2" />
                Communauté modérée
              </Badge>
              <Badge className="badge badge-primary">
                <Heart className="w-4 h-4 mr-2" />
                100% gratuit
              </Badge>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Étudiants"
                className="rounded-3xl shadow-2xl"
              />
              {/* Floating card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -left-6 bottom-20 card-premium p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4CAF50] to-[#3D8B40] flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0B1B2B] text-sm">Rejoins maintenant</p>
                    <p className="text-xs text-[#64748B]">C'est 100% gratuit</p>
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

// Categories Section
const CategoriesSection = () => {
  const categories = [
    { title: "Logements", desc: "Studios, colocations, chambres...", icon: Home, href: "/logements", count: "500+", gradient: "from-[#1E5AA8] to-[#3B82F6]" },
    { title: "Dons", desc: "Meubles, livres, électroménager...", icon: Gift, href: "/dons", count: "150+", gradient: "from-[#4CAF50] to-[#6BC66F]" },
    { title: "Opportunités", desc: "Stages, jobs, alternances...", icon: Briefcase, href: "/offres", count: "200+", gradient: "from-[#F59E0B] to-[#FBBF24]" },
  ];

  return (
    <section data-testid="categories-section" className="section-spacing gradient-section-2">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1B2B] mb-4">
            Tout ce dont tu as besoin
          </h2>
          <p className="text-[#64748B] text-lg">Au même endroit, pour les étudiants.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Link to={cat.href}>
                <div className="card-premium p-8 h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                    <cat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-[#0B1B2B]">{cat.title}</h3>
                    <Badge className="badge-primary text-xs">{cat.count}</Badge>
                  </div>
                  <p className="text-[#64748B] mb-5">{cat.desc}</p>
                  <span className="text-[#1E5AA8] font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                    Découvrir <ChevronRight className="w-5 h-5 ml-1" />
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
    <section data-testid="community-preview-section" className="section-spacing gradient-section-3">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1B2B] mb-4">
            Aperçu de notre communauté
          </h2>
          <p className="text-[#64748B] text-lg">Des annonces réelles partagées par nos membres.</p>
        </motion.div>

        <Tabs defaultValue="logements" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-10 bg-white p-1.5 rounded-full shadow-md">
            <TabsTrigger value="logements" className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1E5AA8] data-[state=active]:to-[#3B82F6] data-[state=active]:text-white data-[state=active]:shadow-lg font-semibold">
              Logements
            </TabsTrigger>
            <TabsTrigger value="dons" className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#4CAF50] data-[state=active]:to-[#6BC66F] data-[state=active]:text-white data-[state=active]:shadow-lg font-semibold">
              Dons
            </TabsTrigger>
            <TabsTrigger value="offres" className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#F59E0B] data-[state=active]:to-[#FBBF24] data-[state=active]:text-white data-[state=active]:shadow-lg font-semibold">
              Opportunités
            </TabsTrigger>
          </TabsList>

          <TabsContent value="logements">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {DEMO_LOGEMENTS.slice(0, 6).map((item, i) => (
                <PreviewCard key={item.id} item={item} type="logement" index={i} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="dons">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {DEMO_DONS.slice(0, 6).map((item, i) => (
                <PreviewCard key={item.id} item={item} type="don" index={i} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="offres">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {DEMO_OFFRES.slice(0, 6).map((item, i) => (
                <PreviewCard key={item.id} item={item} type="offre" index={i} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-10">
          <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-[#4CAF50] to-[#3D8B40] text-white rounded-full px-8 font-semibold shadow-lg shadow-green-500/25">
              <MessageCircle className="w-5 h-5 mr-2" />
              Voir tout sur WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

const PreviewCard = ({ item, type, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="card-premium overflow-hidden"
  >
    <img src={item.image} alt="" className="w-full h-40 object-cover" />
    <div className="p-5">
      <Badge className={`mb-3 ${type === 'logement' ? 'badge-primary' : type === 'don' ? 'badge-accent' : 'bg-amber-100 text-amber-700 border border-amber-200'}`}>
        {item.type || item.categorie}
      </Badge>
      {item.titre && <p className="font-semibold text-[#0B1B2B] mb-2">{item.titre}</p>}
      <div className="flex items-center gap-2 text-sm text-[#64748B] mb-1">
        <MapPin className="w-4 h-4" />
        {item.ville}
      </div>
      {item.prix && (
        <div className="flex items-center gap-2 text-sm mb-3">
          <Euro className="w-4 h-4 text-[#64748B]" />
          <span className="font-bold text-[#1E5AA8]">{item.prix}</span>
        </div>
      )}
      <a href={LINKS.WHATSAPP_CHANNEL} target="_blank" rel="noopener noreferrer">
        <Button size="sm" className="w-full bg-gradient-to-r from-[#4CAF50] to-[#3D8B40] text-white rounded-full text-sm font-semibold">
          En savoir plus
        </Button>
      </a>
    </div>
  </motion.div>
);

// Stats Section - Now lower in the page
const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} data-testid="stats-section" className="py-20 gradient-stats relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl" />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Une communauté qui grandit chaque jour
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              className="stat-card"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {isInView && <CountUp target={stat.value} suffix={stat.suffix} />}
              </div>
              <p className="text-white/80 font-medium">{stat.label}</p>
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

// Security Section
const SecuritySection = () => {
  return (
    <section data-testid="security-section" className="section-spacing gradient-section-2">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#4CAF50] to-[#3D8B40] flex items-center justify-center shadow-lg">
              <Shield className="w-10 h-10 text-white" />
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
              <motion.div 
                key={item.title} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#4CAF50]/20 to-[#4CAF50]/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-[#4CAF50]" />
                </div>
                <h4 className="font-bold text-[#0B1B2B] mb-1">{item.title}</h4>
                <p className="text-sm text-[#64748B]">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <Accordion type="single" collapsible className="card-premium p-6">
            {FAQ_SECURITE.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-[#0B1B2B]">
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
    <section data-testid="testimonials-section" className="section-spacing gradient-section-3">
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

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="card-premium p-8"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-[#0B1B2B] mb-6 text-lg italic leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1E5AA8] to-[#4CAF50] flex items-center justify-center text-white font-bold text-lg">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-[#0B1B2B]">{t.name}</p>
                  <p className="text-sm text-[#64748B]">{t.context} — {t.ville}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <ReassuranceBar />
        </div>
      </div>
    </section>
  );
};

// Final CTA
const FinalCTASection = () => {
  return (
    <section data-testid="final-cta-section" className="py-24 gradient-cta relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-60 h-60 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl" />
      </div>
      
      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Rejoins +6000 étudiants qui s'entraident
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Une communauté active, solidaire et bienveillante t'attend. C'est 100% gratuit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                className="bg-white text-[#1E5AA8] hover:bg-gray-100 rounded-full px-10 font-bold shadow-xl"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Rejoindre le WhatsApp
              </Button>
            </a>
            <a href={LINKS.PUBLIER} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#1E5AA8] rounded-full px-10 font-bold"
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

// Main HomePage
export const HomePage = () => {
  return (
    <div data-testid="home-page">
      <HeroSection />
      <CategoriesSection />
      <CommunityPreviewSection />
      <StatsSection />
      <SecuritySection />
      <TestimonialsSection />
      <FinalCTASection />
    </div>
  );
};

export default HomePage;
