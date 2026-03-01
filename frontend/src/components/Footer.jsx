import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, ExternalLink, MessageCircle, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { LINKS, NAV_ITEMS } from '../config/constants';

export const Footer = () => {
  return (
    <footer data-testid="footer" className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1B2B] via-[#122640] to-[#0B1B2B]" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#1E5AA8]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#4CAF50]/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Logo & Slogan */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1E5AA8] to-[#4CAF50] flex items-center justify-center">
                <span className="text-white font-bold text-xl font-poppins">C</span>
              </div>
              <span className="font-poppins font-bold text-xl text-white">
                Coin des Étudiants
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              La communauté étudiante solidaire qui simplifie ton quotidien en France.
            </p>
            <div className="flex gap-3">
              {[
                { href: LINKS.INSTAGRAM, icon: Instagram, label: 'Instagram' },
                { href: LINKS.LINKEDIN, icon: Linkedin, label: 'LinkedIn' },
                { href: LINKS.TIKTOK, icon: ExternalLink, label: 'TikTok' },
                { href: LINKS.EMAIL, icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a 
                  key={label}
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-gradient-to-r hover:from-[#1E5AA8] hover:to-[#4CAF50] flex items-center justify-center transition-all duration-300 group"
                  aria-label={label}
                  data-testid={`footer-${label.toLowerCase()}`}
                >
                  <Icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-poppins font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link 
                    to={item.href} 
                    className="text-white/60 hover:text-[#4CAF50] transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="font-poppins font-semibold text-white mb-4">En savoir plus</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.slice(4).map((item) => (
                <li key={item.href}>
                  <Link 
                    to={item.href} 
                    className="text-white/60 hover:text-[#4CAF50] transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="#" className="text-white/60 hover:text-[#4CAF50] transition-colors text-sm">
                  CGU
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#4CAF50] transition-colors text-sm">
                  Confidentialité
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-poppins font-semibold text-white mb-4">Rejoins-nous</h4>
            <p className="text-white/60 text-sm mb-4">
              +6000 étudiants s'entraident chaque jour sur notre communauté WhatsApp.
            </p>
            <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
              <Button 
                data-testid="footer-whatsapp-btn"
                className="w-full bg-gradient-to-r from-[#4CAF50] to-[#6BC66F] text-white rounded-full py-3 font-semibold shadow-lg shadow-green-500/25"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Rejoindre WhatsApp
              </Button>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm flex items-center gap-2">
            © 2025 Coin des Étudiants — Fait avec <Heart className="w-4 h-4 text-red-400 fill-red-400" /> pour les étudiants
          </p>
          <a href={LINKS.EMAIL} className="text-white/40 hover:text-white/60 text-sm transition-colors">
            coindesetudiants@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
