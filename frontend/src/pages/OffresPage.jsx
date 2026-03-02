import { motion } from 'framer-motion';
import { Briefcase, MapPin, MessageCircle, ArrowRight, Users, Target, Zap, Award, Clock, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ReassuranceBar } from '../components/ReassuranceBar';
import { LINKS, DEMO_OFFRES } from '../config/constants';

export const OffresPage = () => {
  const stages = DEMO_OFFRES.filter(o => o.type === 'Stage');
  const alternances = DEMO_OFFRES.filter(o => o.type === 'Alternance');
  const jobs = DEMO_OFFRES.filter(o => o.type === 'Job étudiant');

  const OffreCard = ({ item }) => (
    <div className="card overflow-hidden">
      <img src={item.image} alt={item.titre} className="w-full h-32 object-cover" />
      <div className="p-4">
        <div className="flex gap-2 mb-2">
          <Badge className={`text-xs ${
            item.type === 'Stage' ? 'bg-amber-100 text-amber-700' :
            item.type === 'Alternance' ? 'bg-blue-100 text-blue-700' :
            'bg-green-100 text-green-700'
          }`}>{item.type}</Badge>
          <Badge variant="outline" className="text-xs">{item.domaine}</Badge>
        </div>
        <h3 className="font-semibold text-[#0B1B2B] text-sm mb-1">{item.titre}</h3>
        <div className="flex items-center gap-3 text-xs text-[#64748B] mb-3">
          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{item.ville}</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{item.duree}</span>
        </div>
        <a href={LINKS.WHATSAPP_CHANNEL} target="_blank" rel="noopener noreferrer">
          <Button size="sm" className="w-full bg-[#4CAF50] hover:bg-[#3D8B40] text-white rounded-full text-xs">
            <MessageCircle className="w-3 h-3 mr-1" />
            Postuler via WhatsApp
          </Button>
        </a>
      </div>
    </div>
  );

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
                    Publier une offre
                  </Button>
                </a>
              </div>
              <ReassuranceBar />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="hidden lg:block">
              <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80" alt="Travail" className="rounded-2xl shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="section-spacing bg-[#F5F7FA]">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-[#0B1B2B] mb-8 text-center">Aperçu des opportunités</h2>
          
          <Tabs defaultValue="all" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8 bg-white p-1 rounded-full">
              <TabsTrigger value="all" className="rounded-full data-[state=active]:bg-[#1E5AA8] data-[state=active]:text-white text-sm">Tout</TabsTrigger>
              <TabsTrigger value="stage" className="rounded-full data-[state=active]:bg-amber-500 data-[state=active]:text-white text-sm">Stages</TabsTrigger>
              <TabsTrigger value="alternance" className="rounded-full data-[state=active]:bg-blue-500 data-[state=active]:text-white text-sm">Alternances</TabsTrigger>
              <TabsTrigger value="job" className="rounded-full data-[state=active]:bg-green-500 data-[state=active]:text-white text-sm">Jobs</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {DEMO_OFFRES.map((item) => <OffreCard key={item.id} item={item} />)}
              </div>
            </TabsContent>
            <TabsContent value="stage">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {stages.map((item) => <OffreCard key={item.id} item={item} />)}
              </div>
            </TabsContent>
            <TabsContent value="alternance">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {alternances.map((item) => <OffreCard key={item.id} item={item} />)}
              </div>
            </TabsContent>
            <TabsContent value="job">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {jobs.map((item) => <OffreCard key={item.id} item={item} />)}
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-8">
            <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-8 font-semibold">
                <MessageCircle className="w-5 h-5 mr-2" />
                Voir toutes les offres
              </Button>
            </a>
          </div>
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
              { icon: Users, title: "Accès direct", desc: "+6000 étudiants actifs" },
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
                Publier une offre <ArrowRight className="w-4 h-4 ml-2" />
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
    </div>
  );
};

export default OffresPage;
