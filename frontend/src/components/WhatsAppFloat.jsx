import { MessageCircle } from 'lucide-react';
import { LINKS } from '../config/constants';

export const WhatsAppFloat = () => {
  return (
    <a
      href={LINKS.WHATSAPP_GROUP}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Rejoindre WhatsApp"
      data-testid="whatsapp-float"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
};

export default WhatsAppFloat;
