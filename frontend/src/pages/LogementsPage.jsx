import { motion } from 'framer-motion';
import { Home, MessageCircle, ArrowRight, Shield, Zap, Target, Heart, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { ReassuranceBar } from '../components/ReassuranceBar';
import { LINKS, FAQ_BAILLEURS } from '../config/constants';

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

      {/* WhatsApp Redirect */}
      <section className="section-spacing bg-[#F5F7FA]">
        <div className="container-custom max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-premium p-10 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#1E5AA8] to-[#3B82F6] flex items-center justify-center shadow-lg">
              <Home className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#0B1B2B] mb-4">
              Les annonces sont partagées directement dans notre groupe WhatsApp
            </h2>
            <p className="text-[#64748B] mb-8">
              Studios, colocations, chambres chez l'habitant... Rejoins le groupe pour accéder à toutes les annonces en temps réel.
            </p>
            <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-[#4CAF50] to-[#3D8B40] hover:from-[#3D8B40] hover:to-[#2E7D32] text-white rounded-full px-8 font-semibold shadow-lg shadow-green-500/25">
                <MessageCircle className="w-5 h-5 mr-2" />
                Rejoindre le groupe
              </Button>
            </a>
          </motion.div>
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
