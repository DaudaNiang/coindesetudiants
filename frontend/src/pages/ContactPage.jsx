import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, Check, MapPin, Phone, Instagram, Linkedin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { LINKS } from '../config/constants';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div data-testid="contact-page" className="pt-24">
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
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B1B2B] mb-6 leading-tight">
              Une question ?{' '}
              <span className="gradient-text-vivid">Écris-nous !</span>
            </h1>
            
            <p className="text-lg text-[#0B1B2B]/70 leading-relaxed">
              Notre équipe est là pour t'aider. Que ce soit pour un partenariat, 
              une suggestion ou une question, n'hésite pas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="card-vivid p-8">
                <h2 className="text-2xl font-bold text-[#0B1B2B] mb-6">Envoie-nous un message</h2>

                {submitted ? (
                  <div className="text-center py-12" data-testid="contact-success">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#4CAF50] to-[#6BC66F] flex items-center justify-center">
                      <Check className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0B1B2B] mb-2">Message envoyé !</h3>
                    <p className="text-[#0B1B2B]/70 mb-6">Nous te répondrons rapidement.</p>
                    <Button 
                      onClick={() => setSubmitted(false)} 
                      variant="outline" 
                      className="rounded-full border-2 border-[#1E5AA8] text-[#1E5AA8]"
                    >
                      Envoyer un autre message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#0B1B2B] mb-2">
                        Nom complet
                      </label>
                      <Input
                        id="name"
                        data-testid="contact-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ton nom"
                        required
                        className="rounded-xl border-2 border-gray-200 focus:border-[#1E5AA8]"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#0B1B2B] mb-2">
                        Email ou Téléphone
                      </label>
                      <Input
                        id="email"
                        data-testid="contact-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ton@email.com ou 06..."
                        required
                        className="rounded-xl border-2 border-gray-200 focus:border-[#1E5AA8]"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-[#0B1B2B] mb-2">
                        Sujet
                      </label>
                      <Select 
                        value={formData.subject} 
                        onValueChange={(value) => setFormData({ ...formData, subject: value })}
                      >
                        <SelectTrigger className="rounded-xl border-2 border-gray-200" data-testid="contact-subject">
                          <SelectValue placeholder="Choisis un sujet" />
                        </SelectTrigger>
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
                      <label htmlFor="message" className="block text-sm font-semibold text-[#0B1B2B] mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        data-testid="contact-message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Ton message..."
                        required
                        rows={5}
                        className="rounded-xl border-2 border-gray-200 focus:border-[#1E5AA8]"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      data-testid="contact-submit-btn"
                      className="w-full bg-gradient-to-r from-[#4CAF50] to-[#6BC66F] text-white rounded-full py-6 font-bold shadow-xl btn-vivid"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Envoi en cours...'
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Envoyer
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* WhatsApp shortcut */}
              <div className="card-vivid p-8 bg-gradient-to-br from-[#4CAF50]/10 to-[#6BC66F]/10 border-2 border-[#4CAF50]/30">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#4CAF50] to-[#6BC66F] flex items-center justify-center">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[#0B1B2B]">Réponse plus rapide ?</h3>
                    <p className="text-[#0B1B2B]/70">Contacte-nous sur WhatsApp</p>
                  </div>
                </div>
                <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-[#4CAF50] to-[#6BC66F] text-white rounded-full font-bold shadow-lg">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Ouvrir WhatsApp
                  </Button>
                </a>
              </div>

              {/* Contact details */}
              <div className="card-vivid p-8">
                <h3 className="font-bold text-xl text-[#0B1B2B] mb-6">Autres moyens de contact</h3>
                
                <div className="space-y-4">
                  <a 
                    href={LINKS.EMAIL}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#F5F7FA] hover:bg-[#1E5AA8]/10 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E5AA8] to-[#3B82F6] flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0B1B2B] group-hover:text-[#1E5AA8]">Email</p>
                      <p className="text-[#0B1B2B]/70 text-sm">coindesetudiants@gmail.com</p>
                    </div>
                  </a>

                  <a 
                    href={LINKS.INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#F5F7FA] hover:bg-pink-50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0B1B2B] group-hover:text-pink-500">Instagram</p>
                      <p className="text-[#0B1B2B]/70 text-sm">@coin_des_etudiants</p>
                    </div>
                  </a>

                  <a 
                    href={LINKS.LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#F5F7FA] hover:bg-blue-50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0B1B2B] group-hover:text-blue-600">LinkedIn</p>
                      <p className="text-[#0B1B2B]/70 text-sm">Coin des Étudiants</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Location info */}
              <div className="card-vivid p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E5AA8] to-[#4CAF50] flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B1B2B]">Présence nationale</h3>
                    <p className="text-[#0B1B2B]/70 text-sm">Active dans toute la France</p>
                  </div>
                </div>
                <p className="text-[#0B1B2B]/70">
                  Notre communauté rassemble des étudiants de Paris, Lyon, Bordeaux, Toulouse, 
                  Nantes, Lille, Marseille et bien d'autres villes universitaires.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
