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

  // Ferme le menu au changement de page
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Bloque le scroll quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        data-testid="header"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: isScrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.08)' : '0 1px 0 rgba(30,90,168,0.07)',
        }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3" data-testid="logo">
              <img
                src="/images/logo.jpg"
                alt="Coin des Étudiants"
                className="h-12 w-12 rounded-2xl object-cover shadow-md"
              />
              <span className="font-bold text-base text-[#0B1B2B]">Coin des Étudiants</span>
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

            {/* Droite : WhatsApp + hamburger */}
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

              {/* Hamburger — mobile uniquement */}
              <button
                data-testid="mobile-menu-btn"
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-colors"
                style={{
                  background: isMobileMenuOpen ? '#1E5AA8' : 'rgba(30,90,168,0.08)',
                }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMobileMenuOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X className="w-5 h-5 text-white" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="open"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu className="w-5 h-5 text-[#1E5AA8]" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu mobile — overlay plein écran */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Fond sombre */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 lg:hidden"
              style={{ background: 'rgba(11,27,43,0.5)', backdropFilter: 'blur(4px)' }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Panel menu */}
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed top-16 left-4 right-4 z-50 lg:hidden rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.98)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
                border: '1px solid rgba(30,90,168,0.1)',
              }}
            >
              <nav className="p-3 flex flex-col gap-1">
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <Link
                      to={item.href}
                      className={`flex items-center px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                        location.pathname === item.href
                          ? 'bg-[#1E5AA8] text-white shadow-md shadow-blue-500/20'
                          : 'text-[#0B1B2B] hover:bg-[#F5F7FA]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Bouton WhatsApp dans le menu */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: NAV_ITEMS.length * 0.04 }}
                  className="mt-2 pt-2 border-t border-gray-100"
                >
                  <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-[#4CAF50] hover:bg-[#3D8B40] text-white rounded-xl py-3 font-semibold">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Rejoindre WhatsApp
                    </Button>
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
