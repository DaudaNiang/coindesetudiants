import { motion } from 'framer-motion';
import { Home, MapPin, MessageCircle, ArrowRight, Shield, Zap, Target, Heart, Euro, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { ReassuranceBar } from '../components/ReassuranceBar';
import { LINKS, DEMO_LOGEMENTS, FAQ_BAILLEURS } from '../config/constants';

export const LogementsPage = () => {
  return (
    <div data-testid="logements-page" className="pt-20">
      {/* Hero */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#0B1B2B] mb-6">
                Trouve un logement étudiant{' '}
                <span className="gradient-text">rapidement</span>
              </h1>
              <p className="text-lg text-[#64748B] mb-6">
                Studios, colocations, chambres chez l'habitant... Des annonces vérifiées par notre communauté.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge className="badge badge-primary">+500 annonces</Badge>
                <Badge className="badge badge-accent"><Shield className="w-3 h-3 mr-1" />Communauté modérée</Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full sm:w-auto bg-[#4CAF50] hover:bg-[#3D8B40] text-white rounded-full px-6 font-semibold">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Voir les logements
                  </Button>
                </a>
                <a href={LINKS.PUBLIER} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full sm:w-auto border-2 border-[#1E5AA8] text-[#1E5AA8] hover:bg-[#1E5AA8] hover:text-white rounded-full px-6 font-semibold">
                    Publier une annonce
                  </Button>
                </a>
              </div>
              <ReassuranceBar />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="hidden lg:block">
              <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80" alt="Appartement" className="rounded-2xl shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mock Filters */}
      <section className="py-8 bg-[#F5F7FA]">
        <div className="container-custom">
          <div className="card p-4 flex flex-wrap gap-4 items-center justify-center">
            <Select>
              <SelectTrigger className="w-40 rounded-xl"><SelectValue placeholder="Ville" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="paris">Paris</SelectItem>
                <SelectItem value="lyon">Lyon</SelectItem>
                <SelectItem value="bordeaux">Bordeaux</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-40 rounded-xl"><SelectValue placeholder="Type" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="studio">Studio</SelectItem>
                <SelectItem value="colocation">Colocation</SelectItem>
                <SelectItem value="chambre">Chambre</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="Budget max" className="w-32 rounded-xl" />
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-[#0B1B2B] mb-8 text-center">
            Aperçu des logements
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
            {DEMO_LOGEMENTS.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card overflow-hidden"
              >
                <img src={item.image} alt={item.type} className="w-full h-36 object-cover" />
                <div className="p-4">
                  <Badge className="badge-primary mb-2 text-xs">{item.type}</Badge>
                  <div className="flex items-center gap-2 text-sm text-[#64748B] mb-1">
                    <MapPin className="w-4 h-4" />
                    {item.ville}
                  </div>
                  <div className="flex items-center gap-2 text-sm mb-1">
                    <Euro className="w-4 h-4 text-[#64748B]" />
                    <span className="font-semibold text-[#1E5AA8]">{item.prix}</span>
                  </div>
                  <p className="text-xs text-[#64748B] mb-3">{item.surface} • {item.dispo}</p>
                  <a href={LINKS.WHATSAPP_CHANNEL} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="w-full bg-[#4CAF50] hover:bg-[#3D8B40] text-white rounded-full text-xs">
                      <MessageCircle className="w-3 h-3 mr-1" />
                      Contact WhatsApp
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#1E5AA8] hover:bg-[#164785] text-white rounded-full px-8 font-semibold">
                <MessageCircle className="w-5 h-5 mr-2" />
                Voir toutes les annonces
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Bailleurs */}
      <section className="section-spacing bg-[#F5F7FA]">
        <div className="container-custom max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <Badge className="bg-[#1E5AA8] text-white mb-4">Propriétaires & Bailleurs</Badge>
            <h2 className="text-3xl font-bold text-[#0B1B2B] mb-4">
              Pourquoi proposer votre logement ici ?
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: Target, title: "Visibilité ciblée", desc: "+6000 étudiants actifs" },
              { icon: Zap, title: "Gain de temps", desc: "Demandes qualifiées" },
              { icon: Shield, title: "Confiance", desc: "Communauté modérée" },
              { icon: Heart, title: "Impact positif", desc: "Aidez des étudiants" },
            ].map((item) => (
              <div key={item.title} className="card p-4 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1E5AA8] flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0B1B2B]">{item.title}</h4>
                  <p className="text-sm text-[#64748B]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Ce que nous attendons */}
          <div className="card p-6 mb-6">
            <h4 className="font-semibold text-[#0B1B2B] mb-4">Ce que nous attendons des bailleurs</h4>
            <div className="grid sm:grid-cols-2 gap-2">
              {["Prix clair et transparent", "Photos de qualité", "Localisation précise", "Respect des règles anti-abus"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-[#64748B]">
                  <CheckCircle className="w-4 h-4 text-[#4CAF50]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <Accordion type="single" collapsible className="card p-4 mb-8">
            {FAQ_BAILLEURS.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-[#0B1B2B] text-sm">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-[#64748B] text-sm">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a href={LINKS.PROPOSER_LOGEMENT} target="_blank" rel="noopener noreferrer">
              <Button className="w-full sm:w-auto bg-[#4CAF50] hover:bg-[#3D8B40] text-white rounded-full px-6 font-semibold">
                Proposer un logement <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full sm:w-auto border-2 border-[#1E5AA8] text-[#1E5AA8] hover:bg-[#1E5AA8] hover:text-white rounded-full px-6 font-semibold">
                <MessageCircle className="w-4 h-4 mr-2" />
                Discuter sur WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogementsPage;
