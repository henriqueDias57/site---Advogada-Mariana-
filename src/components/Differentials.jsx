import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const diffs = [
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>, title: 'Excelência Estratégica', desc: 'Cada caso é meticulosamente analisado sob lentes jurídicas e econômicas, entregando soluções sofisticadas que vão muito além do convencional.' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>, title: 'Agilidade Implacável', desc: 'Sua urgência é nossa prioridade. Primeira resposta técnica em até 24 horas úteis, com plantão jurídico dedicado para medidas de emergência.' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>, title: 'Atendimento Exclusivo', desc: 'Seu caso tratado diretamente pela fundadora. Garantimos senioridade irrestrita, continuidade impecável e comprometimento pessoal com o resultado.' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>, title: 'Sigilo de Elite', desc: 'Infraestrutura de segurança da informação de última geração. Comunicações blindadas e confidencialidade absoluta em todas as etapas da sua demanda.' },
];

const itemVar = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] } }),
};

export default function Differentials() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="diff" id="diferenciais" ref={ref}>
      <div className="diff__inner">
        <motion.span className="section-tag" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>Por que nós</motion.span>
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
          O que nos <em>diferencia</em>
        </motion.h2>
        <div className="diff__grid">
          {diffs.map((d, i) => (
            <motion.div className="diff-item" key={i} custom={i} variants={itemVar} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <div className="diff-item__icon">{d.icon}</div>
              <h3 className="diff-item__title">{d.title}</h3>
              <p className="diff-item__desc">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
