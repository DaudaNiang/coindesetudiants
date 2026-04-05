import { motion } from 'framer-motion';
import { ShoppingBag, MessageCircle, ArrowRight, Shield, Zap, Heart, CheckCircle, Smartphone, Shirt, Sofa, BookOpen, Bike, Package } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ReassuranceBar } from '../components/ReassuranceBar';
import { LINKS } from '../config/constants';

const categories = [
  { name: "High-Tech", icon: Smartphone, desc: "Téléphones, PC, tablettes, accessoires..." },
  { name: "Vêtements", icon: Shirt, desc: "Mode, chaussures, manteaux, accessoires..." },
  { name: "Meubles", icon: Sofa, desc: "Bureau, chaise, lit, étagères..." },
  { name: "Livres & Cours", icon: BookOpen, desc: "Manuels, romans, supports de cours..." },
  { name: "Sport & Loisirs", icon: Bike, desc: "Vélo, équipement fitness, jeux..." },
  { name: "Divers", icon: Package, desc: "Tout ce qui ne rentre pas ailleurs..." },
];

export const AchatVentePage = () => {
  return (
    <div data-testid="achat-vente-page" className="pt-20">
      {/* Hero */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#0B1B2B] mb-6">
                Achat & Vente{' '}
                <span className="gradient-text">entre étudiants</span>
              </h1>
              <p className="text-lg text-[#64748B] mb-6">
                Vends ce dont tu n'as plus besoin, trouve des bons plans à petits prix. Entre étudiants, c'est plus simple et plus sûr.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <Badge className="badge badge-primary">Prix étudiants</Badge>
                <Badge className="badge badge-accent"><Shield className="w-3 h-3 mr-1" />Transactions sécurisées</Badge>
                <Badge className="badge badge-primary">100% gratuit</Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full sm:w-auto bg-[#4CAF50] hover:bg-[#3D8B40] text-white rounded-full px-6 font-semibold">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Voir les annonces
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
              <img
                src="https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Achat et vente entre étudiants"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-10 bg-[#F5F7FA]">
        <div className="container-custom">
          <h2 className="text-xl font-bold text-[#0B1B2B] mb-6 text-center">Catégories disponibles</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="card p-4 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br from-[#1E5AA8] to-[#3B82F6] flex items-center justify-center">
                  <cat.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-[#0B1B2B] text-sm">{cat.name}</h4>
                <p className="text-xs text-[#64748B] mt-1 hidden sm:block">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Redirect */}
      <section className="section-spacing bg-white">
        <div className="container-custom max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-premium p-10 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#1E5AA8] to-[#3B82F6] flex items-center justify-center shadow-lg">
              <ShoppingBag className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#0B1B2B] mb-4">
              Les annonces d'achat & vente sont publiées dans notre groupe WhatsApp
            </h2>
            <p className="text-[#64748B] mb-8">
              Rejoins le groupe pour accéder à toutes les annonces en temps réel et poster les tiennes directement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-[#4CAF50] to-[#3D8B40] hover:from-[#3D8B40] hover:to-[#2E7D32] text-white rounded-full px-8 font-semibold shadow-lg shadow-green-500/25">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Rejoindre le groupe
                </Button>
              </a>
              <a href={LINKS.PUBLIER} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full sm:w-auto border-2 border-[#1E5AA8] text-[#1E5AA8] hover:bg-[#1E5AA8] hover:text-white rounded-full px-8 font-semibold">
                  Publier une annonce
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pourquoi acheter/vendre ici */}
      <section className="section-spacing bg-[#F5F7FA]">
        <div className="container-custom max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0B1B2B] mb-4">
              Pourquoi acheter & vendre sur Coin des Étudiants ?
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: Shield, title: "Communauté de confiance", desc: "+6000 étudiants vérifiés, modération active" },
              { icon: Zap, title: "Transactions rapides", desc: "WhatsApp pour contacter directement le vendeur" },
              { icon: Heart, title: "Prix étudiants", desc: "Des tarifs adaptés aux budgets serrés" },
              { icon: CheckCircle, title: "Zéro commission", desc: "100% gratuit, aucun frais sur les transactions" },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card p-4 flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E5AA8] to-[#3B82F6] flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0B1B2B]">{item.title}</h4>
                  <p className="text-sm text-[#64748B]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Règles */}
          <div className="card p-6">
            <h4 className="font-semibold text-[#0B1B2B] mb-4">Règles pour publier une annonce</h4>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                "Prix clair et honnête",
                "Photos réelles de l'objet",
                "Description précise de l'état",
                "Disponibilité et lieu de remise",
                "Pas d'arnaques ni de contrefaçons",
                "Respect des autres membres",
              ].map((rule) => (
                <div key={rule} className="flex items-center gap-2 text-sm text-[#64748B]">
                  <CheckCircle className="w-4 h-4 text-[#4CAF50] flex-shrink-0" />
                  {rule}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AchatVentePage;
