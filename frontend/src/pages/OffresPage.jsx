import { motion } from 'framer-motion';
import { Briefcase, MessageCircle, ArrowRight, Users, Target, Zap, Award, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ReassuranceBar } from '../components/ReassuranceBar';
import { WhatsAppProofSection } from '../components/WhatsAppProofSection';
import { LINKS } from '../config/constants';

export const OffresPage = () => {
  return (
    <div data-testid="offres-page" className="pt-20">
      {/* Hero */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#0B1B2B] mb-6">
                Stages, jobs &{' '}
                <span className="gradient-text">alternances</span>
              </h1>
              <p className="text-lg text-[#64748B] mb-6">
                Des opportunités partagées par la communauté, adaptées aux étudiants.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full sm:w-auto bg-[#4CAF50] hover:bg-[#3D8B40] text-white rounded-full px-6 font-semibold">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Voir les offres
                  </Button>
                </a>
                <a href={LINKS.PUBLIER_OFFRE} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full sm:w-auto border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white rounded-full px-6 font-semibold">
                    Devenir partenaire
                  </Button>
                </a>
              </div>
              <ReassuranceBar />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="order-first lg:order-last">
              <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80" alt="Travail" className="rounded-2xl shadow-xl w-full max-h-64 lg:max-h-none object-cover" />
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
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#F59E0B] to-[#FBBF24] flex items-center justify-center shadow-lg">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#0B1B2B] mb-4">
              Les offres sont publiées directement dans notre groupe WhatsApp
            </h2>
            <p className="text-[#64748B] mb-8">
              Stages, alternances, jobs étudiants... Rejoins le groupe pour accéder aux opportunités partagées par la communauté.
            </p>
            <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#D97706] hover:to-[#B45309] text-white rounded-full px-8 font-semibold shadow-lg shadow-amber-500/25">
                <MessageCircle className="w-5 h-5 mr-2" />
                Voir les offres
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Recruteurs */}
      <section className="section-spacing bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <Badge className="bg-amber-500 text-white mb-4">Recruteurs</Badge>
            <h2 className="text-3xl font-bold text-[#0B1B2B] mb-4">
              Publiez une offre et touchez des profils motivés
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Users, title: "Accès direct", desc: "+10 000 étudiants actifs" },
              { icon: Zap, title: "Publication simple", desc: "Formulaire rapide" },
              { icon: Target, title: "Ciblage précis", desc: "Par ville et domaine" },
              { icon: Award, title: "Image positive", desc: "Engagement étudiant" },
            ].map((item) => (
              <div key={item.title} className="card p-4 text-center">
                <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-amber-500 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-[#0B1B2B] text-sm">{item.title}</h4>
                <p className="text-xs text-[#64748B]">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Format attendu */}
          <div className="card p-6 mb-8">
            <h4 className="font-semibold text-[#0B1B2B] mb-4">Format attendu d'une offre</h4>
            <div className="grid sm:grid-cols-2 gap-2">
              {["Intitulé du poste clair", "Type de contrat", "Ville / lieu", "Durée", "Missions principales", "Contact"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-[#64748B]">
                  <CheckCircle className="w-4 h-4 text-[#4CAF50]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a href={LINKS.PUBLIER_OFFRE} target="_blank" rel="noopener noreferrer">
              <Button className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white rounded-full px-6 font-semibold">
                Devenir partenaire <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full sm:w-auto border-2 border-[#1E5AA8] text-[#1E5AA8] hover:bg-[#1E5AA8] hover:text-white rounded-full px-6 font-semibold">
                <MessageCircle className="w-4 h-4 mr-2" />
                Contacter via WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      <WhatsAppProofSection
        title="Des opportunités"
        titleAccent="partagées en direct"
        subtitle="Stages, jobs, alternances — des offres relayées par la communauté pour les étudiants."
        items={[
          { src: '/images/proof/services-1.png', label: 'Opportunité partagée dans le groupe' },
        ]}
        legal="Les captures sont des retours authentiques. Aucun résultat n'est garanti."
      />
    </div>
  );
};

export default OffresPage;
