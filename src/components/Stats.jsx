import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const duration = 2000;
    const start = performance.now();
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, target]);

  return (
    <div className="stats__item" ref={ref}>
      <motion.span
        className="stats__number"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {count.toLocaleString('pt-BR')}
      </motion.span>
      {suffix && <span className="stats__suffix">{suffix}</span>}
    </div>
  );
}

const stats = [
  { target: 3, label: 'Anos de atuação' },
  { target: 92, suffix: '+', label: 'Casos concluídos' },
  { target: 94, suffix: '%', label: 'Êxito processual' },
  { target: 1, label: 'Advogada especialista' },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats__inner">
        {stats.map((s, i) => (
          <div key={i} style={{ display: 'contents' }}>
            <div>
              <Counter target={s.target} suffix={s.suffix} />
              <span className="stats__label">{s.label}</span>
            </div>
            {i < stats.length - 1 && <div className="stats__divider" />}
          </div>
        ))}
      </div>
    </section>
  );
}
