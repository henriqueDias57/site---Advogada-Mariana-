import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappNumber = "5512997429299";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá, gostaria de falar sobre um caso.')}`;

  return (
    <motion.a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="floating-whatsapp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle size={28} color="#ffffff" strokeWidth={1.5} />
      <span className="floating-whatsapp__pulse"></span>
    </motion.a>
  );
}
