import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const areas = [
  { num: '01', title: 'Direito do Trabalho', desc: 'Atuação na defesa dos direitos do trabalhador, reclamações trabalhistas, rescisões, horas extras, insalubridade e acidentes de trabalho. Consultoria preventiva para adequação de normas laborais.', tags: ['Reclamações', 'Direitos', 'Preventivo'] },
  { num: '02', title: 'Direito Previdenciário', desc: 'Assessoria completa em aposentadorias (por tempo de contribuição, idade, especial), auxílio-doença, BPC/LOAS, pensão por morte e revisões de benefícios junto ao INSS.', tags: ['Aposentadorias', 'INSS', 'Benefícios'] },
  { num: '03', title: 'Consultoria Jurídica', desc: 'Orientação legal estratégica para pessoas físicas e jurídicas, auxiliando na tomada de decisões seguras e prevenindo litígios futuros nas áreas trabalhista e previdenciária.', tags: ['Orientação', 'Prevenção', 'Estratégia'] },
  { num: '04', title: 'Assistência Jurídica', desc: 'Acompanhamento dedicado em todas as etapas processuais e administrativas, garantindo que você tenha suporte contínuo e transparente do início ao fim da sua demanda.', tags: ['Acompanhamento', 'Suporte', 'Transparência'] },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] } }),
};

export default function Areas() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="areas" id="areas" ref={ref}>
      <div className="areas__inner">
        <motion.span className="section-tag" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>Atuação</motion.span>
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
          Áreas de <em>especialidade</em>
        </motion.h2>
        <div className="areas__grid">
          {areas.map((a, i) => (
            <motion.article className="area-card" key={i} custom={i} variants={cardVariant} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <span className="area-card__number">{a.num}</span>
              <h3 className="area-card__title">{a.title}</h3>
              <p className="area-card__desc">{a.desc}</p>
              <ul className="area-card__tags">
                {a.tags.map((t, j) => <li key={j}>{t}</li>)}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
