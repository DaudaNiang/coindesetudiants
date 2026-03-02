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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md' 
          : 'bg-white'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" data-testid="logo">
            <img 
              src="/images/logo.jpg" 
              alt="Coin des Étudiants" 
              className="h-14 w-14 rounded-2xl object-cover shadow-md"
            />
            <span className="hidden sm:block font-bold text-lg text-[#0B1B2B]">Coin des Étudiants</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" data-testid="desktop-nav">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  location.pathname === item.href
                    ? 'bg-[#1E5AA8] text-white'
                    : 'text-[#0B1B2B] hover:bg-[#F5F7FA]'
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
                className="hidden sm:flex bg-[#4CAF50] hover:bg-[#3D8B40] text-white rounded-full px-5 py-2 font-semibold shadow-lg shadow-green-500/20"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Rejoindre WhatsApp
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <button
              data-testid="mobile-menu-btn"
              className="lg:hidden p-2 rounded-xl hover:bg-[#F5F7FA] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#0B1B2B]" />
              ) : (
                <Menu className="w-6 h-6 text-[#0B1B2B]" />
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
              className="lg:hidden overflow-hidden border-t border-gray-100"
              data-testid="mobile-menu"
            >
              <nav className="py-4 flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`px-4 py-3 rounded-xl font-medium transition-all ${
                      location.pathname === item.href
                        ? 'bg-[#1E5AA8] text-white'
                        : 'text-[#0B1B2B] hover:bg-[#F5F7FA]'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <a 
                  href={LINKS.WHATSAPP_GROUP} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-3"
                >
                  <Button className="w-full bg-[#4CAF50] hover:bg-[#3D8B40] text-white rounded-full py-3 font-semibold">
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
