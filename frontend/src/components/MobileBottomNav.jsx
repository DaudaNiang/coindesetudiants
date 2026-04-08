import { Link, useLocation } from 'react-router-dom';
import { Home, Building2, Gift, Briefcase, ShoppingBag, Users, Phone, MoreHorizontal } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOTTOM_NAV = [
  { label: 'Accueil', href: '/', icon: Home },
  { label: 'Logements', href: '/logements', icon: Building2 },
  { label: 'Dons', href: '/dons', icon: Gift },
  { label: 'Offres', href: '/offres', icon: Briefcase },
  { label: 'Plus', href: null, icon: MoreHorizontal },
];

const MORE_ITEMS = [
  { label: 'Achat & Vente', href: '/achat-vente', icon: ShoppingBag },
  { label: 'Notre équipe', href: '/equipe', icon: Users },
  { label: 'Contact', href: '/contact', icon: Phone },
];

export const MobileBottomNav = () => {
  const location = useLocation();
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {/* Overlay "Plus" */}
      <AnimatePresence>
        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 z-40 lg:hidden"
              onClick={() => setShowMore(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-20 left-4 right-4 z-50 lg:hidden rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.97)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 -4px 30px rgba(0,0,0,0.15)',
                border: '1px solid rgba(255,255,255,0.6)',
              }}
            >
              {MORE_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setShowMore(false)}
                  className={`flex items-center gap-4 px-5 py-4 transition-all ${
                    location.pathname === item.href
                      ? 'bg-[#1E5AA8]/10 text-[#1E5AA8]'
                      : 'text-[#0B1B2B] hover:bg-[#F5F7FA]'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    location.pathname === item.href ? 'bg-[#1E5AA8]' : 'bg-[#F5F7FA]'
                  }`}>
                    <item.icon className={`w-5 h-5 ${location.pathname === item.href ? 'text-white' : 'text-[#64748B]'}`} />
                  </div>
                  <span className="font-semibold text-sm">{item.label}</span>
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Barre de nav inférieure */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
        style={{
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(30,90,168,0.1)',
          boxShadow: '0 -4px 24px rgba(0,0,0,0.08)',
          paddingBottom: 'env(safe-area-inset-bottom)',
        }}
      >
        <div className="flex items-center justify-around h-16 px-2">
          {BOTTOM_NAV.map((item) => {
            const isActive = item.href ? location.pathname === item.href : showMore;
            const Icon = item.icon;

            if (!item.href) {
              return (
                <button
                  key="plus"
                  onClick={() => setShowMore(!showMore)}
                  className="flex flex-col items-center gap-0.5 flex-1 py-1"
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                    showMore ? 'bg-[#1E5AA8]' : 'bg-transparent'
                  }`}>
                    <Icon className={`w-5 h-5 transition-colors ${showMore ? 'text-white' : 'text-[#94A3B8]'}`} />
                  </div>
                  <span className={`text-[10px] font-medium transition-colors ${showMore ? 'text-[#1E5AA8]' : 'text-[#94A3B8]'}`}>
                    {item.label}
                  </span>
                </button>
              );
            }

            return (
              <Link
                key={item.href}
                to={item.href}
                className="flex flex-col items-center gap-0.5 flex-1 py-1"
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                  isActive ? 'bg-[#1E5AA8]' : 'bg-transparent'
                }`}>
                  <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-white' : 'text-[#94A3B8]'}`} />
                </div>
                <span className={`text-[10px] font-medium transition-colors ${isActive ? 'text-[#1E5AA8]' : 'text-[#94A3B8]'}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Spacer pour éviter que le contenu soit caché derrière la nav */}
      <div className="h-16 lg:hidden" />
    </>
  );
};

export default MobileBottomNav;
