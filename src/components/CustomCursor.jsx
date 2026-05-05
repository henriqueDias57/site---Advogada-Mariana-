import { useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useSpring(0, { stiffness: 800, damping: 30 });
  const cursorY = useSpring(0, { stiffness: 800, damping: 30 });
  const ringX = useSpring(0, { stiffness: 200, damping: 20 });
  const ringY = useSpring(0, { stiffness: 200, damping: 20 });
  const ringScale = useSpring(1, { stiffness: 300, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX - 4);
      cursorY.set(e.clientY - 4);
      ringX.set(e.clientX - 18);
      ringY.set(e.clientY - 18);
    };
    const grow = () => ringScale.set(1.8);
    const shrink = () => ringScale.set(1);

    window.addEventListener('mousemove', move);
    document.querySelectorAll('a, button, input, textarea, select, .area-card, .team-card, .diff-item').forEach(el => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });

    return () => {
      window.removeEventListener('mousemove', move);
    };
  }, []);

  return (
    <>
      <motion.div className="cursor" style={{ x: cursorX, y: cursorY }} />
      <motion.div className="cursor-ring" style={{ x: ringX, y: ringY, scale: ringScale }} />
    </>
  );
}
