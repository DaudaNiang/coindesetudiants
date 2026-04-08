import { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { Image, MessageCircle, ChevronRight, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { LINKS } from '../config/constants';

const ProofCard = memo(({ item, index, hiddenOnMobile }) => {
  const baseClass = `proof-card${hiddenOnMobile ? ' proof-card--mobile-hidden' : ''}`;

  if (item.placeholder) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 }}
        className={`${baseClass} proof-card--placeholder`}
      >
        <div className="proof-card__placeholder-inner">
          <div className="proof-card__placeholder-icon">
            <Image className="w-8 h-8 text-[#0097b2]/60" />
          </div>
          <p className="proof-card__placeholder-text">{item.caption}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={baseClass}
    >
      <div className="proof-card__img-wrapper">
        <img
          src={item.src}
          alt={item.caption || 'Capture WhatsApp'}
          className="proof-card__img"
          loading="lazy"
          decoding="async"
        />
      </div>
    </motion.div>
  );
});

export const WhatsAppProofSection = ({
  title = "Ce que dit la communauté",
  titleAccent = null,
  subtitle = "Des échanges réels partagés par nos membres — captures authentiques du groupe.",
  items = [],
  showButton = true,
  legal = "Les captures sont des retours authentiques. Aucun résultat n'est garanti.",
}) => {
  const [expanded, setExpanded] = useState(false);
  const hiddenCount = items.length - 1;

  return (
    <section className="section-spacing" style={{ background: 'linear-gradient(160deg, #f0f7ff 0%, #ffffff 50%, #f0fff4 100%)' }}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1B2B] mb-4">
            {titleAccent ? (
              <>
                {title}{' '}
                <span className="gradient-text">{titleAccent}</span>
              </>
            ) : title}
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        {/* Grid — deux colonnes flex indépendantes (masonry) */}
        {(() => {
          const leftItems = items.filter((_, i) => i % 2 === 0);
          const rightItems = items.filter((_, i) => i % 2 === 1);
          // Si nombre impair > 1 : dernier item seul centré en bas
          const isOdd = items.length > 1 && items.length % 2 === 1;
          const soloItem = isOdd ? leftItems.pop() : null;
          const soloIndex = isOdd ? items.length - 1 : null;

          return (
            <>
              {/* Desktop : deux colonnes indépendantes */}
              <div className="proof-two-cols hidden md:flex">
                <div className="proof-col">
                  {leftItems.map((item, i) => (
                    <ProofCard key={i * 2} item={item} index={i * 2} hiddenOnMobile={false} />
                  ))}
                </div>
                {rightItems.length > 0 && (
                  <div className="proof-col">
                    {rightItems.map((item, i) => (
                      <ProofCard key={i * 2 + 1} item={item} index={i * 2 + 1} hiddenOnMobile={false} />
                    ))}
                  </div>
                )}
              </div>
              {soloItem && (
                <div className="hidden md:flex justify-center mt-5">
                  <div style={{ width: '100%', maxWidth: '420px' }}>
                    <ProofCard item={soloItem} index={soloIndex} hiddenOnMobile={false} />
                  </div>
                </div>
              )}

              {/* Mobile : colonne unique avec show/hide */}
              <div className="proof-grid md:hidden">
                {items.map((item, index) => (
                  <ProofCard
                    key={index}
                    item={item}
                    index={index}
                    hiddenOnMobile={!expanded && index > 0}
                  />
                ))}
              </div>
            </>
          );
        })()}

        {/* Bouton "Voir plus / Afficher moins" — mobile uniquement */}
        {hiddenCount > 0 && (
          <div className="proof-show-more-btn">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all border-2"
              style={{
                background: 'linear-gradient(135deg, #1E5AA8, #0097b2)',
                color: '#ffffff',
                borderColor: 'transparent',
                boxShadow: '0 4px 16px rgba(30,90,168,0.25)'
              }}
            >
              {expanded ? (
                <>
                  <ChevronDown className="w-4 h-4 rotate-180" />
                  Afficher moins
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  Voir d'autres partages
                </>
              )}
            </button>
          </div>
        )}

        {/* Bouton WhatsApp — desktop toujours, mobile quand expanded */}
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-10"
          >
            <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-[#1E5AA8] to-[#4CAF50] hover:from-[#164785] hover:to-[#3D8B40] text-white rounded-full px-8 py-3 font-semibold shadow-lg shadow-black/30 text-base">
                <MessageCircle className="w-5 h-5 mr-2" />
                Rejoindre le groupe WhatsApp
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
          </motion.div>
        )}

        {/* Legal */}
        {legal && (
          <p className="text-center text-xs text-[#94A3B8] mt-6">{legal}</p>
        )}
      </div>
    </section>
  );
};

export default WhatsAppProofSection;
