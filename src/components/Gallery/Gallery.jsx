import { useEffect, useState } from "react";
import "./Gallery.scss";
import photo1 from "../../assets/images/kayak1.jpg";
import photo2 from "../../assets/images/kayak2.png";
import photo3 from "../../assets/images/kayak3.jpg";
import photo4 from "../../assets/images/kayak4.jpg";
import photo5 from "../../assets/images/kayak5.jpg";
import photo6 from "../../assets/images/kayak6.jpg";
import photo7 from "../../assets/images/kayak7.jpg";

const ITEMS = [
  {
    image: photo7,
    caption: "Свобода на воді",
    tall: true,
  },
  {
    image: photo2,
    caption: "Перші промені сонця",
    tall: false,
  },
  {
    image: photo5,
    caption: "Моменти разом",
    tall: false,
  },
  {
    image: photo1,
    caption: "Дика природа Південного Бугу",
    tall: true,
  },
  {
    image: photo3,
    caption: "Тиша і спокій",
    tall: false,
  },
  {
    image: photo6,
    caption: "Захід, який хочеться зустріти ще раз",
    tall: false,
  },
];

export default function Gallery() {

  const [active, setActive] = useState(null);

  const close = () => setActive(null);

  const next = () =>
    setActive((active + 1) % ITEMS.length);

  const prev = () =>
    setActive((active - 1 + ITEMS.length) % ITEMS.length);

  useEffect(() => {

    document.body.style.overflow = active === null ? '' : 'hidden';

    const handler = (e) => {

      if (active === null) return;

      if (e.key === "Escape") close();

      if (e.key === "ArrowRight") next();

      if (e.key === "ArrowLeft") prev();

    };

    window.addEventListener("keydown", handler);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };

  }, [active]);

  return (

    <section className="gallery" id="gallery">

      <div className="container">

        <div className="section-head">

          <div>

            <p className="eyebrow">
              Галерея
            </p>

            <h2>
              Побачте Буг
              <br />
              нашими очима
            </h2>

          </div>

          <p className="section-head__desc">
            Кожна фотографія — це справжній момент, який залишився
            не лише в пам'яті, а й у серці наших гостей.
          </p>

        </div>

        <div className="gallery__grid">

          {ITEMS.map((item, index) => (

            <figure
              key={index}
              className={`gallery__item ${item.tall ? "gallery__item--tall" : ""}`}
              onClick={() => setActive(index)}
              onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") setActive(index); }}
              role="button"
              tabIndex="0"
              aria-label={`Відкрити фото: ${item.caption}`}
            >

              <img
                src={item.image}
                alt={item.caption}
                loading="lazy"
              />

              <div className="gallery__overlay">

                <div className="gallery__overlay-content">

                  <span className="gallery__icon" aria-hidden="true">+</span>

                  <figcaption>
                    {item.caption}
                  </figcaption>

                </div>

              </div>

            </figure>

          ))}

        </div>

      </div>

      {active !== null && (

        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Перегляд фотографії"
          onClick={close}
        >

          <button
            className="lightbox__close"
            type="button"
            aria-label="Закрити галерею"
            onClick={close}
          >
            ✕
          </button>

          <button
            className="lightbox__prev"
            type="button"
            aria-label="Попереднє фото"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            ←
          </button>

          <img
            src={ITEMS[active].image}
            alt={ITEMS[active].caption}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightbox__next"
            type="button"
            aria-label="Наступне фото"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            →
          </button>

          <p className="lightbox__caption">
            {ITEMS[active].caption}
          </p>

        </div>

      )}

    </section>

  );

}