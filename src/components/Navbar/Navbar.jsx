import { useEffect, useState } from 'react';
import './Navbar.scss';

const LINKS = [
  { href: '#about', label: 'Про нас' },
  { href: '#services', label: 'Послуги' },
  { href: '#routes', label: 'Маршрути' },
  { href: '#gallery', label: 'Галерея' },
  { href: '#reviews', label: 'Відгуки' },
  { href: '#faq', label: 'Питання' },
  { href: '#contact', label: 'Контакти' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${open ? 'navbar--open' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand" onClick={handleLinkClick}>
          <svg width="34" height="34" viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <path d="M8 42 Q20 30 32 42 Q44 54 56 42" stroke="#E2802F" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
            <path d="M14 18 L50 46" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round"/>
            <circle cx="14" cy="18" r="4.5" fill="currentColor"/>
            <circle cx="50" cy="46" r="4.5" fill="currentColor"/>
          </svg>
          <span>Lucky<em>Kayaks</em></span>
        </a>

        <nav className="navbar__links" aria-label="Основна навігація">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={handleLinkClick}>{l.label}</a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a href="tel:+380971234567" className="navbar__phone">+380 97 123 45 67</a>
          <a href="#contact" className="btn-amber navbar__cta">Забронювати</a>
        </div>

        <button
          className="navbar__burger"
          aria-label={open ? 'Закрити меню' : 'Відкрити меню'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="navbar__mobile" role="dialog" aria-modal="true" aria-hidden={!open}>
        <nav aria-label="Мобільна навігація">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={handleLinkClick}>{l.label}</a>
          ))}
        </nav>
        <a href="#contact" className="btn-amber" onClick={handleLinkClick}>Забронювати сплав</a>
        <a href="tel:+380971234567" className="navbar__mobile-phone">+380 97 123 45 67</a>
      </div>
    </header>
  );
}
