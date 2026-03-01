import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
  MessageCircle, ArrowRight, Home, Gift, Briefcase, Users, 
  Shield, Zap, Search, Heart, Star, MapPin, ChevronRight
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { LINKS, STATS, TESTIMONIALS, DEMO_LOGEMENTS, DEMO_DONS, DEMO_OFFRES } from '../config/constants';

// Hero Section
const HeroSection = () => {
  return (
    <section 
      id="hero" 
      data-testid="hero-section"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-animated" />
      <div className="blob-1 top-20 right-0" />
      <div className="blob-2 bottom-20 left-0" />
      <div className="absolute inset-0 pattern-dots" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge className="bg-gradient-to-r from-[#1E5AA8]/20 to-[#4CAF50]/20 text-[#1E5AA8] px-4 py-2 text-sm font-semibold mb-6 border border-[#1E5AA8]/20">
                <Users className="w-4 h-4 mr-2" />
                +6000 étudiants nous font confiance
              </Badge>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#0B1B2B] mb-6 leading-[1.1]">
              La communauté qui{' '}
              <span className="gradient-text-vivid">simplifie</span>{' '}
              ta vie étudiante
            </h1>
            
            <p className="text-lg md:text-xl text-[#0B1B2B]/70 mb-8 max-w-xl leading-relaxed">
              Logements, dons, entraide et opportunités professionnelles — 
              tout ce dont tu as besoin, <strong className="text-[#1E5AA8]">au même endroit</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
                <Button 
                  data-testid="hero-whatsapp-btn"
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-[#4CAF50] to-[#6BC66F] hover:from-[#3D8B40] hover:to-[#4CAF50] text-white rounded-full px-8 py-6 text-lg font-bold shadow-xl shadow-green-500/30 btn-vivid"
                >
                  <MessageCircle className="w-6 h-6 mr-2" />
                  Rejoindre le WhatsApp
                </Button>
              </a>
              <a href={LINKS.PUBLIER} target="_blank" rel="noopener noreferrer">
                <Button 
                  data-testid="hero-publish-btn"
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-[#1E5AA8] text-[#1E5AA8] hover:bg-[#1E5AA8] hover:text-white rounded-full px-8 py-6 text-lg font-bold transition-all duration-300"
                >
                  Publier une annonce
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1E5AA8] to-[#4CAF50] border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-[#0B1B2B]/60">
                  Recommandé par +1000 étudiants
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right visual - Cards preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80"
                  alt="Étudiants heureux"
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2B]/60 via-transparent to-transparent" />
              </div>
              
              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-20 glass-vivid rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E5AA8] to-[#3B82F6] flex items-center justify-center">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0B1B2B]">500+ logements</p>
                    <p className="text-sm text-[#0B1B2B]/60">disponibles</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
                className="absolute -right-4 top-40 glass-vivid rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4CAF50] to-[#6BC66F] flex items-center justify-center">
                    <Gift className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0B1B2B]">Dons gratuits</p>
                    <p className="text-sm text-[#0B1B2B]/60">chaque jour</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1, ease: "easeInOut" }}
                className="absolute -left-4 bottom-20 glass-vivid rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0B1B2B]">Opportunités</p>
                    <p className="text-sm text-[#0B1B2B]/60">stages & jobs</p>
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

// Stats Section
const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section 
      ref={ref}
      data-testid="stats-section" 
      className="py-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E5AA8] via-[#2563EB] to-[#4CAF50]" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_white_1px,_transparent_1px)] bg-[size:20px_20px]" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              className="text-center"
              data-testid={`stat-${index}`}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2">
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

// Counter component
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

// Categories Section
const CategoriesSection = () => {
  const categories = [
    { 
      title: "Logements", 
      desc: "Studios, colocations, chambres...", 
      icon: Home, 
      color: "from-[#1E5AA8] to-[#3B82F6]",
      href: "/logements",
      count: "500+"
    },
    { 
      title: "Dons", 
      desc: "Meubles, livres, électroménager...", 
      icon: Gift, 
      color: "from-[#4CAF50] to-[#6BC66F]",
      href: "/dons",
      count: "150+"
    },
    { 
      title: "Opportunités", 
      desc: "Stages, jobs, alternances...", 
      icon: Briefcase, 
      color: "from-amber-500 to-orange-500",
      href: "/offres",
      count: "200+"
    },
  ];

  return (
    <section data-testid="categories-section" className="section-spacing">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1B2B] mb-4">
            Tout ce dont tu as besoin,{' '}
            <span className="gradient-text-vivid">au même endroit</span>
          </h2>
          <p className="text-lg text-[#0B1B2B]/70 max-w-2xl mx-auto">
            Explore notre communauté et découvre les annonces partagées par des milliers d'étudiants.
          </p>
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
                <div className="card-vivid p-8 h-full relative overflow-hidden group cursor-pointer">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cat.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
                  
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <cat.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-[#0B1B2B]">{cat.title}</h3>
                    <Badge className={`bg-gradient-to-r ${cat.color} text-white text-xs`}>
                      {cat.count}
                    </Badge>
                  </div>
                  <p className="text-[#0B1B2B]/60 mb-4">{cat.desc}</p>
                  
                  <div className="flex items-center text-[#1E5AA8] font-semibold group-hover:translate-x-2 transition-transform">
                    Découvrir <ChevronRight className="w-5 h-5 ml-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Preview Section - Shows sample listings
const PreviewSection = () => {
  return (
    <section data-testid="preview-section" className="section-spacing bg-white relative">
      <div className="absolute inset-0 pattern-dots opacity-50" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1B2B] mb-4">
            Aperçu de notre <span className="gradient-text-vivid">communauté</span>
          </h2>
          <p className="text-lg text-[#0B1B2B]/70">
            Voici quelques exemples d'annonces partagées sur notre canal WhatsApp.
          </p>
        </motion.div>

        {/* Logements preview */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-[#0B1B2B] flex items-center gap-2">
              <Home className="w-6 h-6 text-[#1E5AA8]" />
              Logements récents
            </h3>
            <Link to="/logements" className="text-[#1E5AA8] font-semibold flex items-center hover:underline">
              Voir tout <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {DEMO_LOGEMENTS.slice(0, 4).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-vivid p-4"
              >
                <Badge className="bg-[#1E5AA8]/10 text-[#1E5AA8] mb-2">{item.type}</Badge>
                <div className="flex items-center gap-1 text-[#0B1B2B]/70 text-sm mb-3">
                  <MapPin className="w-4 h-4" />
                  {item.ville}
                </div>
                <a href={LINKS.WHATSAPP_CHANNEL} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="w-full bg-gradient-to-r from-[#4CAF50] to-[#6BC66F] text-white rounded-full text-xs">
                    En savoir plus
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dons preview */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-[#0B1B2B] flex items-center gap-2">
              <Gift className="w-6 h-6 text-[#4CAF50]" />
              Dons récents
            </h3>
            <Link to="/dons" className="text-[#1E5AA8] font-semibold flex items-center hover:underline">
              Voir tout <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {DEMO_DONS.slice(0, 4).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-vivid p-4"
              >
                <Badge className="bg-[#4CAF50]/10 text-[#4CAF50] mb-2">{item.categorie}</Badge>
                <div className="flex items-center gap-1 text-[#0B1B2B]/70 text-sm mb-3">
                  <MapPin className="w-4 h-4" />
                  {item.ville}
                </div>
                <a href={LINKS.WHATSAPP_CHANNEL} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="w-full bg-gradient-to-r from-[#4CAF50] to-[#6BC66F] text-white rounded-full text-xs">
                    En savoir plus
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Offres preview */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-[#0B1B2B] flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-amber-500" />
              Opportunités récentes
            </h3>
            <Link to="/offres" className="text-[#1E5AA8] font-semibold flex items-center hover:underline">
              Voir tout <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {DEMO_OFFRES.slice(0, 4).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-vivid p-4"
              >
                <div className="flex gap-2 mb-2">
                  <Badge className="bg-amber-100 text-amber-700">{item.type}</Badge>
                </div>
                <p className="text-sm font-medium text-[#0B1B2B] mb-1">{item.domaine}</p>
                <div className="flex items-center gap-1 text-[#0B1B2B]/70 text-sm mb-3">
                  <MapPin className="w-4 h-4" />
                  {item.ville}
                </div>
                <a href={LINKS.WHATSAPP_CHANNEL} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="w-full bg-gradient-to-r from-[#4CAF50] to-[#6BC66F] text-white rounded-full text-xs">
                    En savoir plus
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// How it Works
const HowItWorksSection = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Rejoins le WhatsApp",
      description: "Intègre notre communauté de +6000 étudiants actifs en un clic.",
      color: "from-[#1E5AA8] to-[#3B82F6]"
    },
    {
      icon: Search,
      title: "Explore les annonces",
      description: "Logements, dons, jobs — trouve ce dont tu as besoin.",
      color: "from-[#4CAF50] to-[#6BC66F]"
    },
    {
      icon: Zap,
      title: "Avance rapidement",
      description: "Échange directement et saisis les opportunités.",
      color: "from-amber-500 to-orange-500"
    },
  ];

  return (
    <section data-testid="how-it-works-section" className="section-spacing">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1B2B] mb-4">
            Comment <span className="gradient-text-vivid">ça marche</span> ?
          </h2>
          <p className="text-lg text-[#0B1B2B]/70">
            3 étapes simples pour rejoindre l'aventure
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-1 bg-gradient-to-r from-[#1E5AA8] via-[#4CAF50] to-amber-500 rounded-full" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative text-center"
              data-testid={`step-${index + 1}`}
            >
              <div className="relative z-10">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl animate-pulse-glow`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
              </div>
              <span className="inline-block px-4 py-1.5 bg-[#0B1B2B] text-white text-sm font-bold rounded-full mb-4">
                Étape {index + 1}
              </span>
              <h3 className="text-xl font-bold text-[#0B1B2B] mb-2">{step.title}</h3>
              <p className="text-[#0B1B2B]/70">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Safety notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-vivid rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6"
          data-testid="safety-notice"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4CAF50] to-[#6BC66F] flex items-center justify-center flex-shrink-0">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-bold text-xl text-[#0B1B2B] mb-2">
              Communauté sécurisée & modérée
            </h4>
            <p className="text-[#0B1B2B]/70">
              Règles strictes, modération active et système de signalement pour des échanges sûrs et bienveillants.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Testimonials
const TestimonialsSection = () => {
  return (
    <section data-testid="testimonials-section" className="section-spacing bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1B2B] mb-4">
            Ce qu'ils <span className="gradient-text-vivid">disent de nous</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="card-vivid p-8"
              data-testid={`testimonial-${index}`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-[#0B1B2B]/80 mb-6 italic text-lg">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1E5AA8] to-[#4CAF50] flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-[#0B1B2B]">{testimonial.name}</p>
                  <p className="text-sm text-[#0B1B2B]/60">{testimonial.context}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Final CTA
const FinalCTASection = () => {
  return (
    <section data-testid="final-cta-section" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E5AA8] via-[#2563EB] to-[#4CAF50]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.08\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div 
                  key={i} 
                  className="w-10 h-10 rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-white text-sm font-bold"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Rejoins plus de 6000 étudiants<br />
            qui s'entraident chaque jour
          </h2>
          
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Une communauté active, solidaire et bienveillante t'attend.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
              <Button 
                data-testid="final-cta-whatsapp-btn"
                size="lg"
                className="bg-white text-[#1E5AA8] hover:bg-white/90 rounded-full px-8 py-6 text-lg font-bold shadow-xl btn-vivid"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Rejoindre le WhatsApp
              </Button>
            </a>
            <a href={LINKS.PUBLIER} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#1E5AA8] rounded-full px-8 py-6 text-lg font-bold"
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

// Main Home Page
export const HomePage = () => {
  return (
    <div data-testid="home-page">
      <HeroSection />
      <StatsSection />
      <CategoriesSection />
      <PreviewSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FinalCTASection />
    </div>
  );
};

export default HomePage;
