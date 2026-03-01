import { motion } from 'framer-motion';
import { Briefcase, MapPin, MessageCircle, ArrowRight, Users, Target, Zap, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { LINKS, DEMO_OFFRES } from '../config/constants';

export const OffresPage = () => {
  const stages = DEMO_OFFRES.filter(o => o.type === 'Stage');
  const alternances = DEMO_OFFRES.filter(o => o.type === 'Alternance');
  const jobs = DEMO_OFFRES.filter(o => o.type === 'Job étudiant');

  const OffreCard = ({ item, index }) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="card-vivid p-6"
      data-testid={`offre-card-${item.id}`}
    >
      <div className="flex gap-2 mb-3">
        <Badge className={`${
          item.type === 'Stage' ? 'bg-amber-100 text-amber-700' :
          item.type === 'Alternance' ? 'bg-blue-100 text-blue-700' :
          'bg-green-100 text-green-700'
        }`}>
          {item.type}
        </Badge>
        <Badge variant="outline">{item.domaine}</Badge>
      </div>
      
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
  );

  return (
    <div data-testid="offres-page" className="pt-24">
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
              <Badge className="bg-amber-100 text-amber-700 px-4 py-2 mb-6">
                <Briefcase className="w-4 h-4 mr-2" />
                Opportunités professionnelles
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B1B2B] mb-6 leading-tight">
                Stages, jobs & alternances :{' '}
                <span className="gradient-text-vivid">avance dans ta carrière</span>
              </h1>
              
              <p className="text-lg text-[#0B1B2B]/70 mb-8 leading-relaxed">
                Des opportunités partagées par la communauté, adaptées aux étudiants. 
                Stage, alternance ou job étudiant — trouve ce qui te correspond.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-[#4CAF50] to-[#6BC66F] text-white rounded-full px-8 font-bold shadow-xl btn-vivid"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Voir les offres
                  </Button>
                </a>
                <a href={LINKS.PUBLIER_OFFRE} target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white rounded-full px-8 font-bold"
                  >
                    Publier une offre
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
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80"
                alt="Travail en équipe"
                className="rounded-3xl shadow-2xl"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Listings with Tabs */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1B2B] mb-4">
              Aperçu des <span className="gradient-text-vivid">opportunités</span>
            </h2>
            <p className="text-lg text-[#0B1B2B]/70">
              Ces offres sont partagées sur notre canal WhatsApp. Rejoins-nous pour postuler !
            </p>
          </motion.div>

          <Tabs defaultValue="all" className="mb-12" data-testid="offres-tabs">
            <TabsList className="grid w-full max-w-lg mx-auto grid-cols-4 mb-8 bg-[#F5F7FA] p-1 rounded-full">
              <TabsTrigger value="all" className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1E5AA8] data-[state=active]:to-[#3B82F6] data-[state=active]:text-white">
                Tout
              </TabsTrigger>
              <TabsTrigger value="stage" className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white">
                Stages
              </TabsTrigger>
              <TabsTrigger value="alternance" className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white">
                Alternances
              </TabsTrigger>
              <TabsTrigger value="job" className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-green-600 data-[state=active]:text-white">
                Jobs
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {DEMO_OFFRES.map((item, index) => (
                  <OffreCard key={item.id} item={item} index={index} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="stage">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stages.map((item, index) => (
                  <OffreCard key={item.id} item={item} index={index} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="alternance">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {alternances.map((item, index) => (
                  <OffreCard key={item.id} item={item} index={index} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="job">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {jobs.map((item, index) => (
                  <OffreCard key={item.id} item={item} index={index} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center">
            <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full px-8 font-bold shadow-xl btn-vivid"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Voir toutes les offres sur WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Recruteurs Section */}
      <section className="section-spacing bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge className="bg-amber-600 text-white px-4 py-2 mb-6">Recruteurs</Badge>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B1B2B] mb-4">
                Publiez une offre et touchez des{' '}
                <span className="text-amber-600">profils motivés</span>
              </h2>
              <p className="text-lg text-[#0B1B2B]/70">
                Accédez directement à notre communauté de +6000 étudiants actifs et motivés.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Users, title: "Accès direct", desc: "Communauté étudiante active" },
                { icon: Zap, title: "Publication simple", desc: "Formulaire rapide et efficace" },
                { icon: Target, title: "Ciblage précis", desc: "Par ville et domaine" },
                { icon: Award, title: "Image positive", desc: "Engagement étudiant" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-vivid p-6 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-[#0B1B2B] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#0B1B2B]/70">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <a href={LINKS.PUBLIER_OFFRE} target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full px-8 font-bold shadow-xl btn-vivid"
                >
                  Publier une offre
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

export default OffresPage;
