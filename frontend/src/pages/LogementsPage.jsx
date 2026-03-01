import { motion } from 'framer-motion';
import { Home, MapPin, MessageCircle, ArrowRight, Shield, Zap, Target, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { LINKS, DEMO_LOGEMENTS, FAQ_BAILLEURS } from '../config/constants';

export const LogementsPage = () => {
  return (
    <div data-testid="logements-page" className="pt-24">
      {/* Hero */}
      <section className="section-spacing relative overflow-hidden">
        <div className="absolute inset-0 bg-animated" />
        <div className="blob-1 top-0 right-0" />
        <div className="blob-2 bottom-0 left-0" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-[#1E5AA8]/10 text-[#1E5AA8] px-4 py-2 mb-6">
                <Home className="w-4 h-4 mr-2" />
                500+ logements disponibles
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B1B2B] mb-6 leading-tight">
                Trouve ton logement{' '}
                <span className="gradient-text-vivid">étudiant</span>
              </h1>
              
              <p className="text-lg text-[#0B1B2B]/70 mb-8 leading-relaxed">
                Studios, colocations, chambres chez l'habitant... Des annonces vérifiées par notre communauté, 
                adaptées aux budgets étudiants.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-[#4CAF50] to-[#6BC66F] text-white rounded-full px-8 font-bold shadow-xl btn-vivid"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Voir les logements
                  </Button>
                </a>
                <a href={LINKS.PUBLIER} target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-[#1E5AA8] text-[#1E5AA8] hover:bg-[#1E5AA8] hover:text-white rounded-full px-8 font-bold"
                  >
                    Publier une annonce
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <img
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80"
                alt="Appartement moderne"
                className="rounded-3xl shadow-2xl"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1B2B] mb-4">
              Aperçu des <span className="gradient-text-vivid">logements</span>
            </h2>
            <p className="text-lg text-[#0B1B2B]/70">
              Ces annonces sont partagées sur notre canal WhatsApp. Rejoins-nous pour voir les détails !
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {DEMO_LOGEMENTS.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-vivid p-6"
                data-testid={`logement-card-${item.id}`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E5AA8] to-[#3B82F6] flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-white" />
                </div>
                
                <Badge className="bg-[#1E5AA8]/10 text-[#1E5AA8] mb-3">{item.type}</Badge>
                
                <div className="flex items-center gap-2 text-[#0B1B2B]/70 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium">{item.ville}</span>
                </div>

                <a href={LINKS.WHATSAPP_CHANNEL} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-[#4CAF50] to-[#6BC66F] text-white rounded-full font-semibold">
                    En savoir plus
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#1E5AA8] to-[#3B82F6] text-white rounded-full px-8 font-bold shadow-xl btn-vivid"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Voir toutes les annonces sur WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Bailleurs Section */}
      <section className="section-spacing bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge className="bg-[#1E5AA8] text-white px-4 py-2 mb-6">Propriétaires & Bailleurs</Badge>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B1B2B] mb-4">
                Pourquoi proposer votre logement sur{' '}
                <span className="gradient-text-vivid">Coin des Étudiants</span> ?
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {[
                { icon: Target, title: "Visibilité ciblée", desc: "Touchez directement +6000 étudiants actifs" },
                { icon: Zap, title: "Gain de temps", desc: "Demandes qualifiées et sérieuses" },
                { icon: Shield, title: "Confiance", desc: "Communauté modérée et vérifiée" },
                { icon: Heart, title: "Impact positif", desc: "Aidez des étudiants motivés" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-vivid p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E5AA8] to-[#4CAF50] flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-[#0B1B2B] mb-2">{item.title}</h3>
                  <p className="text-[#0B1B2B]/70">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* FAQ */}
            <div className="card-vivid p-8 mb-8">
              <h3 className="font-bold text-xl text-[#0B1B2B] mb-6">Questions fréquentes</h3>
              <Accordion type="single" collapsible>
                {FAQ_BAILLEURS.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold text-[#0B1B2B]">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#0B1B2B]/70">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="text-center">
              <a href={LINKS.PROPOSER_LOGEMENT} target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[#4CAF50] to-[#6BC66F] text-white rounded-full px-8 font-bold shadow-xl btn-vivid"
                >
                  Proposer un logement
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogementsPage;
