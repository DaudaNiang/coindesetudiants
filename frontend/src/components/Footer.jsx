import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, MessageCircle, Heart, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { LINKS, NAV_ITEMS } from '../config/constants';

// TikTok Icon component
const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export const Footer = ({ variant = 'default' }) => {
  // variant: 'default' = standalone with dark bg, 'embedded' = part of dark wrapper (no bg)
  const isEmbedded = variant === 'embedded';
  
  return (
    <footer 
      data-testid="footer" 
      className={isEmbedded ? 'text-white' : 'footer-dark-premium text-white'}
    >
      {/* Subtle top border */}
      <div className="border-t border-white/10" />
      
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Logo & Slogan */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/images/logo.jpg" 
                alt="Coin des Étudiants" 
                className="h-16 w-16 rounded-2xl object-cover shadow-lg"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Coin des Étudiants — la communauté solidaire qui simplifie ta vie étudiante.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Navigation</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link 
                    to={item.href} 
                    className="text-white/70 hover:text-[#7ed957] transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-2 mb-4">
              <a
                href={LINKS.EMAIL}
                className="flex items-center gap-2 text-white/70 hover:text-[#7ed957] transition-colors text-sm"
              >
                <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                {LINKS.EMAIL_DISPLAY}
              </a>
              <a
                href={LINKS.WHATSAPP_CONTACT}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-[#7ed957] transition-colors text-sm"
              >
                <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                {LINKS.PHONE}
              </a>
            </div>
            <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
              <Button
                data-testid="footer-whatsapp-btn"
                className="bg-gradient-to-r from-[#0097b2] to-[#7ed957] hover:from-[#0086a0] hover:to-[#6bc94a] text-white rounded-full px-5 py-2 font-semibold shadow-lg shadow-[#0097b2]/20"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Rejoindre le canal
              </Button>
            </a>
          </div>
        </div>

        {/* Social bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a 
              href={LINKS.INSTAGRAM} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-[#0097b2] hover:to-[#7ed957] flex items-center justify-center transition-all duration-300"
              aria-label="Instagram"
              data-testid="footer-instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href={LINKS.LINKEDIN} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-[#0097b2] hover:to-[#7ed957] flex items-center justify-center transition-all duration-300"
              aria-label="LinkedIn"
              data-testid="footer-linkedin"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href={LINKS.TIKTOK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-[#0097b2] hover:to-[#7ed957] flex items-center justify-center transition-all duration-300"
              aria-label="TikTok"
              data-testid="footer-tiktok"
            >
              <TikTokIcon className="w-5 h-5" />
            </a>
            <a 
              href={LINKS.EMAIL}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-[#0097b2] hover:to-[#7ed957] flex items-center justify-center transition-all duration-300"
              aria-label="Email"
              data-testid="footer-email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1">
              © 2025 Coin des Étudiants — Fait avec <Heart className="w-4 h-4 text-red-400 fill-red-400" /> pour les étudiants
            </span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">CGU</a>
              <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
