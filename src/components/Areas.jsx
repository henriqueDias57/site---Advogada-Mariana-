import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const areas = [
  { num: '01', title: 'Direito do Trabalho Estratégico', desc: 'Atuação contenciosa e consultiva focada na máxima proteção dos direitos laborais e mitigação de riscos. Lidamos com rescisões complexas, assédio moral e reconhecimento de vínculo.', tags: ['Alta Complexidade', 'Estratégia', 'Consultivo'] },
  { num: '02', title: 'Direito Previdenciário de Elite', desc: 'Planejamento previdenciário meticuloso e atuação firme na concessão e revisão de benefícios. Garantimos que sua contribuição ao longo da vida seja integralmente recompensada.', tags: ['Planejamento', 'Revisão', 'Concessão'] },
  { num: '03', title: 'Consultoria Preventiva', desc: 'Diagnóstico jurídico avançado para indivíduos e empresas. Estruturamos ações preventivas que blindam seu patrimônio e evitam passivos trabalhistas e previdenciários.', tags: ['Blindagem', 'Diagnóstico', 'Prevenção'] },
  { num: '04', title: 'Contencioso Judicial', desc: 'Representação implacável em litígios. Desenhamos a arquitetura processual de cada caso com exclusividade, buscando sempre a resolução mais vantajosa e célere possível.', tags: ['Litígio', 'Representação', 'Arquitetura Processual'] },
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
