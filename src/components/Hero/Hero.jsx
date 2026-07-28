import heroVideo from '../../assets/videos/hero.mp4';
import './Hero.scss';

export default function Hero() {
  return (
    <section className="hero" id="top">

      {/* Background Video */}
      <video
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="hero__overlay" />

      {/* Topographic lines */}
      <div className="hero__contours" aria-hidden="true">
        <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <path d="M-50,120 C250,60 450,180 750,120 S1150,60 1300,140" className="c c1"/>
          <path d="M-50,260 C250,190 470,320 760,260 S1150,190 1300,280" className="c c2"/>
          <path d="M-50,400 C260,330 480,460 770,400 S1150,330 1300,420" className="c c3"/>
          <path d="M-50,540 C250,470 470,600 760,540 S1150,470 1300,560" className="c c4"/>
          <path d="M-50,680 C250,610 470,740 760,680 S1150,610 1300,700" className="c c5"/>
        </svg>
      </div>

      <div className="container hero__layout">

        {/* LEFT */}
        <div className="hero__inner">

          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Південний Буг • Сезон 2026
          </div>

         <h1 className="hero__title">
  №1
  <br />
  серед каяків
  <br />
  Вінниччини.
</h1>
  <p className="hero__lede">
  Досліджуйте дику красу Південного Бугу з Lucky Kayaks.
  Комфортні каяки, професійний супровід і маршрути,
  які захочеться повторити.
</p>

          <div className="hero__cta-row">

            <a
              href="#routes"
              className="btn-amber"
            >
              Обрати маршрут
            </a>

            <a
              href="#gallery"
              className="btn-ghost-dark"
            >
              Переглянути галерею
            </a>

          </div>

          <dl className="hero__stats">

            <div>
              <dt>2400+</dt>
              <dd>Учасників сплавів</dd>
            </div>

            <div>
              <dt>5+</dt>
              <dd>Років досвіду</dd>
            </div>

            <div>
             <dt>∞</dt>
<dd>Вражень на воді</dd>
            </div>

          </dl>

        </div>
</div>

      <a
        href="#about"
        className="hero__scroll"
        aria-label="Гортати далі"
      >
        <span />
      </a>

    </section>
  );
}