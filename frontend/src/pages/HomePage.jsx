import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  MessageCircle, ArrowRight, Home, Gift, Briefcase, Users,
  Shield, Heart, Star, ChevronRight, CheckCircle, ShoppingBag
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { ReassuranceBar } from '../components/ReassuranceBar';
import { Footer } from '../components/Footer';
import { WhatsAppProofSection } from '../components/WhatsAppProofSection';
import { LINKS, STATS, TESTIMONIALS, FAQ_SECURITE } from '../config/constants';

// Hero Section
const HeroSection = () => {
  // Floating icons data
  const floatingIcons = [
    { icon: Home, label: "Logements", color: "from-[#1E5AA8] to-[#3B82F6]", position: "top-8 -right-4", delay: 0, animation: "float-slow" },
    { icon: Gift, label: "Dons", color: "from-[#4CAF50] to-[#7ed957]", position: "top-1/3 -right-8", delay: 0.5, animation: "float-medium" },
    { icon: Briefcase, label: "Offres", color: "from-[#F59E0B] to-[#FBBF24]", position: "bottom-1/3 -right-6", delay: 1, animation: "float-fast" },
    { icon: Shield, label: "Modération", color: "from-[#0097b2] to-[#7ed957]", position: "bottom-16 -right-2", delay: 1.5, animation: "float-medium" },
  ];

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
            className="order-2 lg:order-1"
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
                +10 000 étudiants
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

          {/* Right side - Image with premium elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block lg:order-2"
          >
            <div className="relative">
              {/* Premium Halo */}
              <div className="hero-premium-halo" />
              
              {/* Main Image */}
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Étudiants"
                className="rounded-3xl shadow-2xl relative z-10"
              />
              
              {/* Floating Icons - Desktop */}
              <div className="hero-floating-icons-desktop">
                {floatingIcons.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + item.delay }}
                    className={`hero-floating-icon ${item.position} ${item.animation}`}
                  >
                    <div className={`icon-wrapper bg-gradient-to-br ${item.color}`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="icon-label">{item.label}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* Premium Floating Card - Rejoins maintenant */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -left-8 bottom-16 z-20"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="hero-premium-card"
                >
                  <div className="flex items-center gap-3">
                    <div className="card-check">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-[#0B1B2B] text-sm">Rejoins maintenant</p>
                      <p className="text-xs text-[#64748B]">C'est 100% gratuit</p>
                      <p className="text-[10px] text-[#0097b2] font-medium mt-0.5">Réponse rapide via WhatsApp</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Photo + Icônes - Mobile only, en premier */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:hidden order-1 lg:order-2 mb-8"
          >
            <img
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Étudiants"
              className="rounded-2xl shadow-xl w-full object-cover max-h-72"
            />
            {/* Icônes en grille 2×2 sous la photo */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              {floatingIcons.map((item, index) => (
                <motion.div
                  key={item.label}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2.5 + index * 0.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                  className="hero-floating-icon"
                  style={{ position: 'relative' }}
                >
                  <div className={`icon-wrapper bg-gradient-to-br ${item.color} shadow-lg`}>
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="icon-label text-xs">{item.label}</span>
                </motion.div>
              ))}
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
    { title: "Achat & Vente", desc: "High-tech, vêtements, meubles...", icon: ShoppingBag, href: "/achat-vente", count: "100+", gradient: "from-[#8B5CF6] to-[#A78BFA]" },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

// Icônes par stat
const STAT_ICONS = [Users, Home, Gift, Briefcase, ShoppingBag];

// Stats Section - Premium dark
const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} data-testid="stats-section" className="py-24 gradient-stats relative overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #1E5AA8, transparent)' }} />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #4CAF50, transparent)' }} />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0097b2] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse" />
            Communauté active
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1B2B]">
            Une communauté qui{' '}
            <span className="gradient-text">grandit chaque jour</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {STATS.map((stat, index) => {
            const Icon = STAT_ICONS[index] || Users;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.12, ease: 'easeOut' }}
                className="stat-card"
              >
                <div className="stat-icon-wrap">
                  <Icon className="w-5 h-5 text-[#1E5AA8]" />
                </div>
                <div className="stat-number">
                  {isInView && <CountUp target={stat.value} suffix={stat.suffix} />}
                </div>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            );
          })}
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

// Testimonials — horizontal infinite scroll carousel
const TestimonialsSection = () => {
  // Duplicate for seamless loop
  const items = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section data-testid="testimonials-section" className="section-spacing gradient-section-3 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 container-custom"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1B2B] mb-4">
          Ce qu'ils disent de nous
        </h2>
        <p className="text-[#64748B] text-lg">+10 000 étudiants nous font confiance</p>
      </motion.div>

      {/* Carousel track */}
      <div className="relative">
        {/* Gradient fades on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F5F7FA] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F5F7FA] to-transparent z-10 pointer-events-none" />

        <div className="testimonials-track">
          {items.map((t, index) => (
            <div key={index} className="testimonial-card-slide">
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-[#0B1B2B] mb-5 text-sm leading-relaxed italic flex-1">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1E5AA8] to-[#4CAF50] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-[#0B1B2B] text-sm">{t.name}</p>
                  <p className="text-xs text-[#64748B]">{t.context} — {t.ville}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-10 container-custom">
        <ReassuranceBar />
      </div>
    </section>
  );
};

// App Coming Soon Section
const AppComingSoonSection = () => {
  return (
    <section className="section-spacing overflow-hidden" style={{ background: 'linear-gradient(160deg, #f0f7ff 0%, #ffffff 50%, #f0fff4 100%)' }}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-6"
              style={{ background: 'linear-gradient(135deg, #1E5AA811, #4CAF5011)', border: '1.5px solid #1E5AA833', color: '#1E5AA8' }}>
              <span className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse" />
              Bientôt disponible
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1B2B] mb-5 leading-tight">
              L'application{' '}
              <span className="gradient-text">Coin des Étudiants</span>{' '}
              arrive bientôt
            </h2>

            <p className="text-[#64748B] text-lg mb-8 leading-relaxed">
              Toute la communauté dans ta poche — logements, dons, offres, entraide et bien plus encore, directement depuis ton téléphone.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* App Store */}
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl cursor-default select-none"
                style={{ background: '#0B1B2B', border: '1.5px solid #1E5AA833' }}>
                <svg className="w-7 h-7 text-white flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div>
                  <p className="text-white/60 text-[10px] uppercase tracking-wide">Bientôt sur</p>
                  <p className="text-white font-bold text-sm">App Store</p>
                </div>
              </div>

              {/* Google Play */}
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl cursor-default select-none"
                style={{ background: '#0B1B2B', border: '1.5px solid #1E5AA833' }}>
                <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 512 512" fill="none">
                  <path d="M48 59.49v393a4.33 4.33 0 007.37 3.07L274 256 55.37 56.42A4.33 4.33 0 0048 59.49z" fill="#4285F4"/>
                  <path d="M400.32 182.68l-78.06-44.86-97.52 97.56 97.52 97.55 78.06-44.86c22.23-12.79 22.23-43.23 0-56.39z" fill="#FBBC04"/>
                  <path d="M55.37 452.58L274 256 160.56 142.56 55.37 56.42" fill="none"/>
                  <path d="M274 256L55.37 56.42l-.08-.07a4.31 4.31 0 00-7.29 3.14v393a4.31 4.31 0 007.37 3.07z" fill="#4285F4"/>
                  <path d="M274 256l48.26-48.18-78.06-44.86L160.56 142.56 274 256z" fill="#34A853"/>
                  <path d="M322.26 374.18L274 256 160.56 369.44l83.64-48.12 78.06-44.86z" fill="#EA4335"/>
                  <path d="M48 452.51a4.31 4.31 0 007.37 3.07l.08-.06 112.08-112.08L55.37 452.58" fill="#34A853"/>
                  <path d="M322.26 137.82l78.06 44.86 33.77-19.4c22.23-12.79 22.23-43.23 0-56l-33.77-19.4-78.06 44.86L274 256z" fill="#FBBC04"/>
                </svg>
                <div>
                  <p className="text-white/60 text-[10px] uppercase tracking-wide">Bientôt sur</p>
                  <p className="text-white font-bold text-sm">Google Play</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Screenshot de l'app */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl blur-3xl opacity-20 -z-10"
                style={{ background: 'linear-gradient(135deg, #1E5AA8, #4CAF50)' }} />

              {/* Screenshot app */}
              <img
                src="/images/app-preview.png"
                alt="Application Coin des Étudiants"
                className="w-full h-auto block"
                style={{ maxWidth: '300px' }}
                loading="lazy"
                decoding="async"
              />

              {/* Badge "Bientôt" flottant */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -right-6 top-8 rounded-2xl px-3 py-2 shadow-lg text-center"
                style={{ background: 'white', border: '1.5px solid #4CAF5033', minWidth: '90px' }}
              >
                <p className="text-xs font-bold text-[#4CAF50]">🚀 Bientôt</p>
                <p className="text-[10px] text-[#64748B]">iOS & Android</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Final CTA - Dark Premium Theme
const FinalCTASection = () => {
  return (
    <section data-testid="final-cta-section" className="cta-dark-premium py-16 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="cta-card text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Rejoins{' '}
            <span className="bg-gradient-to-r from-[#0097b2] to-[#7ed957] bg-clip-text text-transparent">
              +10 000 étudiants
            </span>{' '}
            qui s'entraident
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Une communauté active, solidaire et bienveillante t'attend. C'est 100% gratuit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#0097b2] to-[#7ed957] hover:from-[#0086a0] hover:to-[#6bc94a] text-white rounded-full px-10 font-bold shadow-lg shadow-[#0097b2]/30"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Rejoindre le WhatsApp
              </Button>
            </a>
            <a href={LINKS.PUBLIER} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white/50 text-white hover:bg-white/10 hover:border-white rounded-full px-10 font-bold"
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
      <StatsSection />
      <SecuritySection />
      <TestimonialsSection />

      <WhatsAppProofSection
        title="Aperçu des échanges"
        titleAccent="de la communauté"
        subtitle="Quelques partages récents de nos membres : logements trouvés, entraide concrète, échanges utiles au quotidien."
        items={[
          { src: '/images/accueil-1.png', label: 'Retour bailleur / propriétaire' },
          { src: '/images/accueil-2.png', label: 'Retour bailleur / propriétaire' },
          { src: '/images/accueil-3.png', label: 'Retour étudiant satisfait' },
          { src: '/images/accueil-4.png', label: 'Retour bailleur / propriétaire' },
        ]}
        legal="Tous ces résultats ne sont pas des promesses de résultats."
      />

      {/* App Coming Soon */}
      <AppComingSoonSection />

      {/* Dark Premium Wrapper */}
      <div className="dark-premium-wrapper">
        <FinalCTASection />
        <Footer variant="embedded" />
      </div>
    </div>
  );
};

export default HomePage;
