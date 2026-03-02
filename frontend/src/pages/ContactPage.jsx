import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, Check, MapPin, Instagram, Linkedin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { ReassuranceBar } from '../components/ReassuranceBar';
import { LINKS } from '../config/constants';

// TikTok Icon
const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Le nom est requis";
    if (!formData.email.trim()) newErrors.email = "L'email est requis";
    if (!formData.message.trim()) newErrors.message = "Le message est requis";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    // Construire le message WhatsApp avec les infos du formulaire
    const subjectLabels = {
      logement: 'Logement',
      don: 'Don',
      offre: "Offre d'emploi",
      partenariat: 'Partenariat',
      autre: 'Autre'
    };
    
    const whatsappMessage = `Bonjour Coin des Étudiants ! 👋

📝 *Nouveau message de contact*

👤 *Nom :* ${formData.name}
📧 *Contact :* ${formData.email}
📌 *Sujet :* ${formData.subject ? subjectLabels[formData.subject] : 'Non spécifié'}

💬 *Message :*
${formData.message}

---
_Envoyé depuis le formulaire de contact du site_`;

    // Encoder le message pour l'URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Numéro WhatsApp (format international sans +)
    const whatsappNumber = '33746444913';
    
    // Ouvrir WhatsApp avec le message pré-rempli
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    
    // Réinitialiser le formulaire
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div data-testid="contact-page" className="pt-20">
      {/* Hero */}
      <section className="section-spacing bg-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge className="badge badge-primary mb-4">
              <Mail className="w-4 h-4 mr-1" />
              Contact
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#0B1B2B] mb-6">
              Une question ?{' '}
              <span className="gradient-text">Écris-nous !</span>
            </h1>
            <p className="text-lg text-[#64748B]">
              Notre équipe est là pour t'aider.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-spacing bg-[#F5F7FA]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="card p-6">
                <h2 className="text-xl font-bold text-[#0B1B2B] mb-6">Envoie-nous un message</h2>

                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#4CAF50] flex items-center justify-center">
                      <Check className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0B1B2B] mb-2">Message envoyé !</h3>
                    <p className="text-[#64748B] mb-4">Nous te répondrons rapidement.</p>
                    <Button onClick={() => setSubmitted(false)} variant="outline" className="rounded-full">
                      Envoyer un autre message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" data-testid="contact-form">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#0B1B2B] mb-1">
                        Nom complet *
                      </label>
                      <Input
                        id="name"
                        data-testid="contact-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ton nom"
                        className={`rounded-xl ${errors.name ? 'border-red-500' : ''}`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#0B1B2B] mb-1">
                        Email ou Téléphone *
                      </label>
                      <Input
                        id="email"
                        data-testid="contact-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ton@email.com"
                        className={`rounded-xl ${errors.email ? 'border-red-500' : ''}`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-[#0B1B2B] mb-1">
                        Sujet
                      </label>
                      <Select value={formData.subject} onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                        <SelectTrigger data-testid="contact-subject" className="rounded-xl"><SelectValue placeholder="Choisis un sujet" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="logement">Logement</SelectItem>
                          <SelectItem value="don">Don</SelectItem>
                          <SelectItem value="offre">Offre d'emploi</SelectItem>
                          <SelectItem value="partenariat">Partenariat</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#0B1B2B] mb-1">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        data-testid="contact-message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Ton message..."
                        rows={4}
                        className={`rounded-xl ${errors.message ? 'border-red-500' : ''}`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-[#4CAF50] hover:bg-[#3D8B40] text-white rounded-full py-5 font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Envoi...' : <><Send className="w-4 h-4 mr-2" />Envoyer</>}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Right column */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              {/* WhatsApp priority */}
              <div className="card p-6 bg-gradient-to-br from-[#4CAF50]/10 to-[#4CAF50]/5 border-2 border-[#4CAF50]/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#4CAF50] flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B1B2B]">Réponse plus rapide ?</h3>
                    <p className="text-sm text-[#64748B]">WhatsApp est prioritaire</p>
                  </div>
                </div>
                <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-[#4CAF50] hover:bg-[#3D8B40] text-white rounded-full font-semibold">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Ouvrir WhatsApp
                  </Button>
                </a>
              </div>

              {/* Social links */}
              <div className="card p-6">
                <h3 className="font-bold text-[#0B1B2B] mb-4">Autres moyens de contact</h3>
                <div className="space-y-3">
                  <a href={LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-[#F5F7FA] hover:bg-pink-50 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                      <Instagram className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-[#0B1B2B] text-sm">Instagram</p>
                      <p className="text-xs text-[#64748B]">@coin_des_etudiants</p>
                    </div>
                  </a>
                  <a href={LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-[#F5F7FA] hover:bg-blue-50 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-[#0B1B2B] text-sm">LinkedIn</p>
                      <p className="text-xs text-[#64748B]">Coin des Étudiants</p>
                    </div>
                  </a>
                  <a href={LINKS.TIKTOK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-[#F5F7FA] hover:bg-gray-100 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                      <TikTokIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-[#0B1B2B] text-sm">TikTok</p>
                      <p className="text-xs text-[#64748B]">@coindesetudiants</p>
                    </div>
                  </a>
                  <a href={LINKS.EMAIL} className="flex items-center gap-3 p-3 rounded-xl bg-[#F5F7FA] hover:bg-[#1E5AA8]/10 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#1E5AA8] flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-[#0B1B2B] text-sm">Email</p>
                      <p className="text-xs text-[#64748B]">coindesetudiants@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Presence */}
              <div className="card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-[#1E5AA8]" />
                  <h3 className="font-bold text-[#0B1B2B]">Présence nationale</h3>
                </div>
                <p className="text-sm text-[#64748B]">
                  Paris, Lyon, Bordeaux, Toulouse, Nantes, Lille, Marseille, Montpellier, Strasbourg... et bien d'autres villes universitaires.
                </p>
              </div>

              <ReassuranceBar />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
