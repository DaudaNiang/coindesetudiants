import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { NAV_ITEMS, LINKS } from '../config/constants';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      data-testid="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-vivid shadow-xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-18 md:h-20 py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" data-testid="logo">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1E5AA8] to-[#4CAF50] rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
              <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1E5AA8] to-[#4CAF50] flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl font-poppins">C</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="font-poppins font-bold text-xl text-[#0B1B2B] block leading-tight">
                Coin des Étudiants
              </span>
              <span className="text-xs text-[#1E5AA8] font-medium">La communauté solidaire</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" data-testid="desktop-nav">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                  location.pathname === item.href
                    ? 'text-white bg-gradient-to-r from-[#1E5AA8] to-[#1E5AA8]/90 shadow-lg'
                    : 'text-[#0B1B2B]/80 hover:text-[#1E5AA8] hover:bg-[#1E5AA8]/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
              <Button 
                data-testid="header-whatsapp-btn"
                className="hidden sm:flex bg-gradient-to-r from-[#4CAF50] to-[#6BC66F] hover:from-[#3D8B40] hover:to-[#4CAF50] text-white rounded-full px-6 py-2.5 shadow-lg shadow-green-500/25 btn-vivid font-semibold"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Rejoindre WhatsApp
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <button
              data-testid="mobile-menu-btn"
              className="lg:hidden p-2.5 rounded-xl bg-[#1E5AA8]/10 hover:bg-[#1E5AA8]/20 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#1E5AA8]" />
              ) : (
                <Menu className="w-6 h-6 text-[#1E5AA8]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
              data-testid="mobile-menu"
            >
              <nav className="py-4 flex flex-col gap-2 border-t border-[#1E5AA8]/10">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`px-4 py-3 rounded-xl font-medium transition-all ${
                      location.pathname === item.href
                        ? 'text-white bg-gradient-to-r from-[#1E5AA8] to-[#1E5AA8]/90'
                        : 'text-[#0B1B2B] hover:bg-[#1E5AA8]/10'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <a 
                  href={LINKS.WHATSAPP_GROUP} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-2"
                >
                  <Button className="w-full bg-gradient-to-r from-[#4CAF50] to-[#6BC66F] text-white rounded-full py-3 font-semibold shadow-lg">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Rejoindre WhatsApp
                  </Button>
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
