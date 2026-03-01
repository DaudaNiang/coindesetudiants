import { motion } from 'framer-motion';
import { Gift, MapPin, MessageCircle, ArrowRight, Sofa, BookOpen, Tv, Shirt, Pencil, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { LINKS, DEMO_DONS, DON_CATEGORIES } from '../config/constants';

const iconMap = {
  Sofa: Sofa,
  BookOpen: BookOpen,
  Tv: Tv,
  Shirt: Shirt,
  Pencil: Pencil,
};

export const DonsPage = () => {
  return (
    <div data-testid="dons-page" className="pt-24">
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
              <Badge className="bg-[#4CAF50]/10 text-[#4CAF50] px-4 py-2 mb-6">
                <Gift className="w-4 h-4 mr-2" />
                Solidarité étudiante
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B1B2B] mb-6 leading-tight">
                Donner & recevoir :{' '}
                <span className="gradient-text-vivid">le réflexe solidaire</span>
              </h1>
              
              <p className="text-lg text-[#0B1B2B]/70 mb-8 leading-relaxed">
                Meubles, livres, électroménager, vêtements... La solidarité étudiante en action. 
                Donne ce dont tu n'as plus besoin, récupère ce qu'il te faut.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-[#4CAF50] to-[#6BC66F] text-white rounded-full px-8 font-bold shadow-xl btn-vivid"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Voir les dons
                  </Button>
                </a>
                <a href={LINKS.PUBLIER} target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white rounded-full px-8 font-bold"
                  >
                    Je donne / je récupère
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
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80"
                alt="Don solidaire"
                className="rounded-3xl shadow-2xl"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B1B2B] mb-4">
              Catégories de dons
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {DON_CATEGORIES.map((cat, index) => {
              const IconComponent = iconMap[cat.icon];
              return (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-vivid p-6 text-center cursor-pointer"
                  data-testid={`don-category-${cat.name.toLowerCase()}`}
                >
                  <div className={`w-14 h-14 mx-auto mb-3 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center`}>
                    {IconComponent && <IconComponent className="w-7 h-7 text-white" />}
                  </div>
                  <span className="font-semibold text-[#0B1B2B]">{cat.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="section-spacing bg-gradient-to-br from-[#F0FDF4] to-[#DCFCE7]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1B2B] mb-4">
              Aperçu des <span className="gradient-text-vivid">dons disponibles</span>
            </h2>
            <p className="text-lg text-[#0B1B2B]/70">
              Ces dons sont partagés sur notre canal WhatsApp. Rejoins-nous pour les récupérer !
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {DEMO_DONS.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-vivid p-6"
                data-testid={`don-card-${item.id}`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4CAF50] to-[#6BC66F] flex items-center justify-center mb-4">
                  <Gift className="w-6 h-6 text-white" />
                </div>

                <Badge className="bg-[#4CAF50]/10 text-[#4CAF50] mb-3">{item.categorie}</Badge>
                <Badge className="bg-green-100 text-green-700 ml-2 mb-3">Gratuit</Badge>
                
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
                className="bg-gradient-to-r from-[#4CAF50] to-[#6BC66F] text-white rounded-full px-8 font-bold shadow-xl btn-vivid"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Voir tous les dons sur WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#4CAF50] to-[#6BC66F] flex items-center justify-center">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B1B2B] mb-4">
                +150 dons réalisés
              </h2>
              <p className="text-lg text-[#0B1B2B]/70 mb-8">
                Chaque don compte. Ensemble, nous créons une communauté plus solidaire 
                où chaque étudiant peut s'équiper sans se ruiner.
              </p>
              <a href={LINKS.PUBLIER} target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[#1E5AA8] to-[#3B82F6] text-white rounded-full px-8 font-bold shadow-xl btn-vivid"
                >
                  Je veux donner
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonsPage;
