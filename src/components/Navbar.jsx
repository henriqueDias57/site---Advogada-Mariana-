import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#areas', label: 'Áreas de Atuação' },
  { href: '#equipe', label: 'Equipe' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#depoimentos', label: 'Depoimentos' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="nav__inner">
        <a href="#hero" className="nav__logo" onClick={(e) => scrollTo(e, '#hero')}>
          <span className="nav__logo-icon">§</span>
          <span className="nav__logo-text">MF<span className="gold">.</span></span>
        </a>
        <button className="nav__toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
          <span /><span /><span />
        </button>
        <ul className={`nav__links${menuOpen ? ' open' : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => scrollTo(e, l.href)}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#contato" className="nav__cta" onClick={(e) => scrollTo(e, '#contato')}>Consulta</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
