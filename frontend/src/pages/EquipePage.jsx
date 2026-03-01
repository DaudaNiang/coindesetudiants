import { motion } from 'framer-motion';
import { Users, Heart, Quote, Linkedin, Mail } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { TEAM, COMPANY_STORY, LINKS } from '../config/constants';

export const EquipePage = () => {
  // Réorganiser l'équipe : Dauda (gauche), Cheikh (centre), Bassine (droite)
  const orderedTeam = [
    TEAM.find(m => m.name === "Dauda NIANG"),
    TEAM.find(m => m.name === "Cheikh IBRA NDIAYE"),
    TEAM.find(m => m.name === "Bassine NIANG"),
  ].filter(Boolean);

  return (
    <div data-testid="equipe-page" className="pt-24">
      {/* Hero */}
      <section className="section-spacing relative overflow-hidden">
        <div className="absolute inset-0 bg-animated" />
        <div className="blob-1 top-0 right-0" />
        <div className="blob-2 bottom-0 left-0" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge className="bg-[#1E5AA8]/10 text-[#1E5AA8] px-4 py-2 mb-6">
              <Users className="w-4 h-4 mr-2" />
              Notre équipe
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B1B2B] mb-6 leading-tight">
              Les personnes derrière{' '}
              <span className="gradient-text-vivid">Coin des Étudiants</span>
            </h1>
            
            <p className="text-lg text-[#0B1B2B]/70 leading-relaxed">
              Une équipe passionnée, engagée pour simplifier la vie étudiante en France.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="card-vivid p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#1E5AA8]/10 to-[#4CAF50]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-[#4CAF50]/10 to-[#1E5AA8]/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E5AA8] to-[#4CAF50] flex items-center justify-center">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#0B1B2B]">
                    {COMPANY_STORY.title}
                  </h2>
                </div>
                
                <div className="space-y-4 text-[#0B1B2B]/80 text-lg leading-relaxed">
                  {COMPANY_STORY.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-spacing bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1B2B] mb-4">
              Rencontrez <span className="gradient-text-vivid">l'équipe</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {orderedTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`${member.isFounder ? 'md:-mt-8' : ''}`}
                data-testid={`team-member-${index}`}
              >
                <div className={`card-vivid p-8 text-center ${member.isFounder ? 'border-2 border-[#1E5AA8]/30 shadow-2xl' : ''}`}>
                  {member.isFounder && (
                    <Badge className="bg-gradient-to-r from-[#1E5AA8] to-[#4CAF50] text-white mb-4">
                      Fondateur
                    </Badge>
                  )}
                  
                  <div className="relative inline-block mb-6">
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-[#1E5AA8] to-[#4CAF50] blur-lg opacity-30 ${member.isFounder ? 'scale-110' : ''}`} />
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`relative rounded-full object-cover border-4 ${
                        member.isFounder 
                          ? 'w-36 h-36 border-[#1E5AA8]' 
                          : 'w-28 h-28 border-white'
                      }`}
                      loading="lazy"
                    />
                  </div>
                  
                  <h3 className={`font-black text-[#0B1B2B] mb-1 ${member.isFounder ? 'text-2xl' : 'text-xl'}`}>
                    {member.name}
                  </h3>
                  <p className="text-[#1E5AA8] font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-[#0B1B2B]/60 font-medium mb-4">{member.subtitle}</p>
                  
                  <p className="text-[#0B1B2B]/70 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1B2B] mb-4">
              Nos <span className="gradient-text-vivid">valeurs</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { 
                icon: Heart, 
                title: "Solidarité", 
                desc: "L'entraide est au cœur de tout ce que nous faisons. Chaque étudiant compte.",
                color: "from-pink-500 to-rose-500"
              },
              { 
                icon: Users, 
                title: "Communauté", 
                desc: "Ensemble, nous sommes plus forts. Une vraie famille étudiante.",
                color: "from-[#1E5AA8] to-[#3B82F6]"
              },
              { 
                icon: Quote, 
                title: "Confiance", 
                desc: "Transparence et honnêteté dans toutes nos interactions.",
                color: "from-[#4CAF50] to-[#6BC66F]"
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="card-vivid p-8 text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-[#0B1B2B] mb-2">{value.title}</h3>
                <p className="text-[#0B1B2B]/70">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EquipePage;
