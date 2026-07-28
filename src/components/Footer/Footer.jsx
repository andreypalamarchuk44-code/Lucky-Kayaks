import './Footer.scss';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="container footer__inner">

        <div className="footer__left">

          <div className="footer__brand">
            <a href="#top" className="footer__logo">

              <svg
                width="30"
                height="30"
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

                <circle cx="14" cy="18" r="4.5" fill="currentColor" />
                <circle cx="50" cy="46" r="4.5" fill="currentColor" />
              </svg>

              <span>
                Lucky<em>Kayaks</em>
              </span>
            </a>

            <p>
              Активний відпочинок на Південному Бузі.
              Каяки, SUP-дошки, риболовля та прогулянки
              мальовничими затоками Ладижина.
            </p>
          </div>

          <div className="footer__links">

            <nav className="footer__col">
              <h4>Навігація</h4>

              <a href="#about">Про нас</a>
              <a href="#services">Послуги</a>
              <a href="#routes">Маршрути</a>
              <a href="#gallery">Галерея</a>
            </nav>

            <nav className="footer__col">
              <h4>Інформація</h4>

              <a href="#faq">Питання</a>
              <a href="#reviews">Відгуки</a>
              <a href="#contact">Бронювання</a>
            </nav>

            <div className="footer__col">
              <h4>Контакти</h4>

              <a href="tel:+380971234567">
                +380 97 123 45 67
              </a>

              <a href="mailto:hello@luckykayaks.ua">
                hello@luckykayaks.ua
              </a>
            </div>

          </div>

        </div>
<div className="footer__map">

  <div className="footer__map-head">

    <span>Локація старту</span>

    <h4>
      Lucky Kayaks SUP • Ладижин
    </h4>

    <p>
      Саме звідси починаються наші сплави Південним Бугом.
      Після бронювання ми надішлемо детальну інструкцію та місце зустрічі.
    </p>

  </div>

  <iframe
    title="Lucky Kayaks SUP"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1619.933204744892!2d29.22929517875122!3d48.70482558339387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cd71005c91b4d1%3A0x329ff4cf3d710f5!2slucky_kayaks_sup!5e1!3m2!1suk!2sua!4v1785246776542!5m2!1suk!2sua"
    loading="lazy"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
  />

  <a
    className="footer__route-btn"
    href="https://www.google.com/maps/place/lucky_kayaks_sup/@48.7048256,29.2292952,17z"
    target="_blank"
    rel="noopener noreferrer"
  >
    Прокласти маршрут
  </a>

</div>

      </div>

      <div className="container footer__bottom">

        <p>
          © {year} Lucky Kayaks. Усі права захищено.
        </p>

        <p>
          Сплави проводяться під наглядом інструкторів.
        </p>

      </div>

    </footer>
  );
}