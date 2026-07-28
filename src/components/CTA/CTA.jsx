import './CTA.scss';

export default function CTA() {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <div className="cta__river" aria-hidden="true">
          <svg viewBox="0 0 600 120" preserveAspectRatio="none">
            <path d="M-20 90 C 120 60 180 100 300 70 C 420 40 480 80 620 55" stroke="#0B2224" strokeWidth="3" fill="none" opacity="0.25" />
          </svg>
        </div>

        <p className="eyebrow eyebrow--on-cta">Місця на найближчі вихідні обмежені</p>
        <h2>Річка вже тече. Питання лише — коли на неї вийдете ви.</h2>
        <div className="cta__row">
          <a href="#contact" className="btn-ghost-dark cta__btn">Забронювати сплав</a>
          <a href="tel:+380971234567" className="cta__phone">+380 97 123 45 67</a>
        </div>
      </div>
    </section>
  );
}
