import { motion } from 'framer-motion';
import { Users, Heart, Handshake, MessageCircle, Rocket, Calendar } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { TeamCard } from '../components/TeamCard';
import { TEAM, COMPANY_STORY, LINKS } from '../config/constants';

export const EquipePage = () => {
  // Ordre correct : Dauda, Cheikh, Bassine
  const orderedTeam = [
    TEAM.find(m => m.name === "Dauda NIANG"),
    TEAM.find(m => m.name === "Cheikh IBRA NDIAYE"),
    TEAM.find(m => m.name === "Bassine NIANG"),
  ].filter(Boolean);

  return (
    <div data-testid="equipe-page" className="pt-20">
      {/* Hero */}
      <section className="section-spacing bg-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge className="badge badge-primary mb-4">
              <Users className="w-4 h-4 mr-1" />
              Notre équipe
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#0B1B2B] mb-6">
              Les personnes derrière{' '}
              <span className="gradient-text">Coin des Étudiants</span>
            </h1>
            <p className="text-lg text-[#64748B]">
              Une équipe passionnée, engagée pour simplifier la vie étudiante en France.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story - Structured */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="container-custom max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-[#0B1B2B] mb-8 text-center">Notre histoire</h2>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="card p-6">
                <h3 className="font-semibold text-[#0B1B2B] mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#1E5AA8] text-white text-xs flex items-center justify-center">1</span>
                  Le problème
                </h3>
                <p className="text-sm text-[#64748B]">{COMPANY_STORY.problem}</p>
              </div>
              <div className="card p-6">
                <h3 className="font-semibold text-[#0B1B2B] mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#1E5AA8] text-white text-xs flex items-center justify-center">2</span>
                  L'observation
                </h3>
                <p className="text-sm text-[#64748B]">{COMPANY_STORY.observation}</p>
              </div>
              <div className="card p-6">
                <h3 className="font-semibold text-[#0B1B2B] mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#1E5AA8] text-white text-xs flex items-center justify-center">3</span>
                  Le constat
                </h3>
                <p className="text-sm text-[#64748B]">{COMPANY_STORY.solution}</p>
              </div>
              <div className="card p-6 bg-gradient-to-br from-[#1E5AA8] to-[#4CAF50]">
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Notre vision
                </h3>
                <p className="text-white/90 text-sm font-medium">{COMPANY_STORY.vision}</p>
              </div>
            </div>

            {/* Timeline */}
            <div className="card p-6">
              <h3 className="font-semibold text-[#0B1B2B] mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#1E5AA8]" />
                Notre parcours
              </h3>
              <div className="flex flex-wrap gap-4">
                {COMPANY_STORY.timeline.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="font-bold text-[#1E5AA8]">{item.year}</span>
                    <span className="text-sm text-[#64748B]">{item.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team - Premium Cards */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0B1B2B] mb-3">Rencontrez l'équipe</h2>
            <p className="text-[#64748B]">Les personnes qui font vivre la communauté</p>
          </motion.div>
          
          <div className="team-section-container">
            {orderedTeam.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-[#0B1B2B] mb-8 text-center">Nos valeurs</h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Heart, title: "Solidarité", desc: "L'entraide est au cœur de tout ce que nous faisons.", color: "bg-pink-500" },
              { icon: Users, title: "Communauté", desc: "Ensemble, nous sommes plus forts.", color: "bg-[#1E5AA8]" },
              { icon: Handshake, title: "Confiance", desc: "Transparence et honnêteté dans toutes nos interactions.", color: "bg-[#4CAF50]" },
            ].map((value) => (
              <div key={value.title} className="card p-6 text-center">
                <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl ${value.color} flex items-center justify-center`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-[#0B1B2B] mb-2">{value.title}</h3>
                <p className="text-sm text-[#64748B]">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#1E5AA8] to-[#164785]">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Rejoins notre communauté</h2>
          <p className="text-white/80 mb-6">+6000 étudiants t'attendent</p>
          <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#4CAF50] hover:bg-[#3D8B40] text-white rounded-full px-8 font-semibold">
              <MessageCircle className="w-5 h-5 mr-2" />
              Rejoindre le WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default EquipePage;
