import { motion } from 'framer-motion';
import { Gift, MapPin, MessageCircle, ArrowRight, Sofa, BookOpen, Tv, Shirt, Pencil, Heart, Recycle, PiggyBank } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ReassuranceBar } from '../components/ReassuranceBar';
import { LINKS, DEMO_DONS, DON_CATEGORIES } from '../config/constants';

const iconMap = { Sofa, BookOpen, Tv, Shirt, Pencil };

export const DonsPage = () => {
  return (
    <div data-testid="dons-page" className="pt-20">
      {/* Hero */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#0B1B2B] mb-6">
                Donner & récupérer{' '}
                <span className="gradient-text">gratuitement</span>
              </h1>
              <p className="text-lg text-[#64748B] mb-6">
                Meubles, livres, électroménager, vêtements... La solidarité étudiante en action.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full sm:w-auto bg-[#4CAF50] hover:bg-[#3D8B40] text-white rounded-full px-6 font-semibold">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Voir les dons
                  </Button>
                </a>
                <a href={LINKS.PUBLIER} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full sm:w-auto border-2 border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white rounded-full px-6 font-semibold">
                    Je donne / je récupère
                  </Button>
                </a>
              </div>
              <ReassuranceBar />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="hidden lg:block">
              <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80" alt="Don" className="rounded-2xl shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-10 bg-[#F5F7FA]">
        <div className="container-custom">
          <h2 className="text-xl font-bold text-[#0B1B2B] mb-6 text-center">Catégories de dons</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {DON_CATEGORIES.map((cat) => {
              const IconComponent = iconMap[cat.icon];
              return (
                <div key={cat.name} className="card p-4 text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-[#4CAF50] flex items-center justify-center">
                    {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
                  </div>
                  <h4 className="font-semibold text-[#0B1B2B] text-sm">{cat.name}</h4>
                  <p className="text-xs text-[#64748B]">{cat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-[#0B1B2B] mb-8 text-center">Aperçu des dons disponibles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
            {DEMO_DONS.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card overflow-hidden"
              >
                <img src={item.image} alt={item.titre} className="w-full h-36 object-cover" />
                <div className="p-4">
                  <div className="flex gap-2 mb-2">
                    <Badge className="badge-accent text-xs">{item.categorie}</Badge>
                    <Badge className="bg-green-100 text-green-700 text-xs">Gratuit</Badge>
                  </div>
                  <h3 className="font-semibold text-[#0B1B2B] text-sm mb-1">{item.titre}</h3>
                  <div className="flex items-center gap-2 text-xs text-[#64748B] mb-1">
                    <MapPin className="w-3 h-3" />
                    {item.ville}
                  </div>
                  <p className="text-xs text-[#64748B] mb-3">{item.etat}</p>
                  <a href={LINKS.WHATSAPP_CHANNEL} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="w-full bg-[#4CAF50] hover:bg-[#3D8B40] text-white rounded-full text-xs">
                      <MessageCircle className="w-3 h-3 mr-1" />
                      Réserver sur WhatsApp
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#4CAF50] hover:bg-[#3D8B40] text-white rounded-full px-8 font-semibold">
                <MessageCircle className="w-5 h-5 mr-2" />
                Voir tous les dons
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section-spacing bg-[#F5F7FA]">
        <div className="container-custom max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#4CAF50] flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-[#0B1B2B] mb-4">+150 dons réalisés</h2>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="card p-4">
                <PiggyBank className="w-8 h-8 text-[#4CAF50] mx-auto mb-2" />
                <p className="font-semibold text-[#0B1B2B]">Économies réalisées</p>
                <p className="text-sm text-[#64748B]">Des centaines d'euros économisés</p>
              </div>
              <div className="card p-4">
                <Recycle className="w-8 h-8 text-[#4CAF50] mx-auto mb-2" />
                <p className="font-semibold text-[#0B1B2B]">Objets réutilisés</p>
                <p className="text-sm text-[#64748B]">Moins de gaspillage</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a href={LINKS.PUBLIER} target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto bg-[#1E5AA8] hover:bg-[#164785] text-white rounded-full px-6 font-semibold">
                  Je veux donner <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full sm:w-auto border-2 border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white rounded-full px-6 font-semibold">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Rejoindre WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DonsPage;
