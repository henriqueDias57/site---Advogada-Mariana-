import { motion } from 'framer-motion';

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">§ MF<span className="gold">.</span></span>
            <p className="footer__brand-desc">Mariana Ferreira<br/>Advocacia e Consultoria</p>
          </div>
          <div className="footer__links-group">
            <h4>Navegação</h4>
            <ul>
              <li><a href="#sobre" onClick={(e) => scrollTo(e, '#sobre')}>O Escritório</a></li>
              <li><a href="#areas" onClick={(e) => scrollTo(e, '#areas')}>Áreas de Atuação</a></li>
              <li><a href="#equipe" onClick={(e) => scrollTo(e, '#equipe')}>Equipe</a></li>
              <li><a href="#contato" onClick={(e) => scrollTo(e, '#contato')}>Contato</a></li>
            </ul>
          </div>
          <div className="footer__links-group">
            <h4>Áreas</h4>
            <ul>
              <li><a href="#areas" onClick={(e) => scrollTo(e, '#areas')}>Trabalho</a></li>
              <li><a href="#areas" onClick={(e) => scrollTo(e, '#areas')}>Previdenciário</a></li>
              <li><a href="#areas" onClick={(e) => scrollTo(e, '#areas')}>Consultoria</a></li>
              <li><a href="#areas" onClick={(e) => scrollTo(e, '#areas')}>Assistência Jurídica</a></li>
            </ul>
          </div>
          <div className="footer__links-group">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Termos de Uso</a></li>
              <li><a href="#">Código de Ética</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Mariana Ferreira Advocacia. Todos os direitos reservados.</p>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <p>OAB/SP 534.173</p>
            <p className="footer__dev">
              Desenvolvido por <a href="https://www.instagram.com/henriqu3_dias/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: '500' }}>Henrique Dias</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
