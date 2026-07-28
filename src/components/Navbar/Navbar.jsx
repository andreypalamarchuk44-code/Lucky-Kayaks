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
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1080) {
        setOpen(false);
      }
    };

    if (open) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      document.body.classList.remove('menu-open');
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header
      className={[
        'navbar',
        scrolled ? 'navbar--scrolled' : '',
        open ? 'navbar--open' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="container navbar__inner">
        <a
          href="#top"
          className="navbar__brand"
          onClick={closeMenu}
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 64 64"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M8 42 Q20 30 32 42 Q44 54 56 42"
              stroke="#E2802F"
              strokeWidth="4.5"
              fill="none"
              strokeLinecap="round"
            />

            <path
              d="M14 18 L50 46"
              stroke="currentColor"
              strokeWidth="4.5"
              strokeLinecap="round"
            />

            <circle
              cx="14"
              cy="18"
              r="4.5"
              fill="currentColor"
            />

            <circle
              cx="50"
              cy="46"
              r="4.5"
              fill="currentColor"
            />
          </svg>

          <span>
            Lucky<em>Kayaks</em>
          </span>
        </a>

        <nav
          className="navbar__links"
          aria-label="Основна навігація"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a
            href="tel:+380971234567"
            className="navbar__phone"
          >
            +380 97 123 45 67
          </a>

          <a
            href="#contact"
            className="btn-amber navbar__cta"
          >
            Забронювати
          </a>
        </div>

        <button
          type="button"
          className="navbar__burger"
          aria-label={open ? 'Закрити меню' : 'Відкрити меню'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-navigation"
        className="navbar__mobile"
        aria-hidden={!open}
      >
        <nav aria-label="Мобільна навігація">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              tabIndex={open ? 0 : -1}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__mobile-bottom">
          <a
            href="#contact"
            className="btn-amber navbar__mobile-cta"
            tabIndex={open ? 0 : -1}
            onClick={closeMenu}
          >
            Забронювати сплав
          </a>

          <a
            href="tel:+380971234567"
            className="navbar__mobile-phone"
            tabIndex={open ? 0 : -1}
          >
            +380 97 123 45 67
          </a>
        </div>
      </div>
    </header>
  );
}