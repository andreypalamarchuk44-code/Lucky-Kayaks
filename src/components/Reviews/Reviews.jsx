import { useRef, useState } from 'react';
import './Reviews.scss';

const REVIEWS = [
  {
    name: 'Олена К.',
    route: 'Степашки',
    text: 'Дуже сподобалась подорож до Степашок. Тиха вода, мальовничі береги та чудова атмосфера. Провели кілька годин на природі й зовсім не хотілося повертатися.',
  },
  {
    name: 'Максим і Дар\u2019я',
    route: 'Вечірній сплав під Ладижином',
    text: 'Замовляли на річницю. Захід сонця над скелями і чай на косі — саме те, чого хотілось замість ресторану.',
  },
  {
    name: 'Тарас В.',
    route: 'Південний Буг',
    text: 'Чудовий маршрут для тих, хто хоче відпочити від міста. Пливли затишними затоками, милувалися краєвидами та навіть зробили кілька зупинок для купання. Організація на високому рівні.',
  },
  {
    name: 'Ірина С.',
    route: 'Рибалка на заливах',
    text: 'Неймовірна атмосфера вечірньої рибалки! Поки сонце сідало над Південним Бугом, ми насолоджувалися тишею, природою й чудовим кльовом.',
  },
  {
    name: 'Андрій П.',
    route: 'Корпоративний виїзд, 22 особи',
    text: 'Організували все під ключ: трансфер, каяки, фото з дрона. Команда досі пересилає той відео-нарізку в чат.',
  },
];

export default function Reviews() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const scrollTo = (i) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i];
    if (card) {
      track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });
      setActive(i);
    }
  };

  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Відгуки</p>
            <h2>Що кажуть після виходу з води</h2>
          </div>
        </div>
      </div>

      <div className="reviews__scroller" ref={trackRef}>
        {REVIEWS.map((r, i) => (
          <article className="review-card" key={r.name}>
            <div className="review-card__stars" aria-label="Оцінка 5 з 5">
              {'★★★★★'}
            </div>
            <p className="review-card__text">&laquo;{r.text}&raquo;</p>
            <footer>
              <strong>{r.name}</strong>
              <span>{r.route}</span>
            </footer>
          </article>
        ))}
      </div>

      <div className="reviews__dots">
        {REVIEWS.map((r, i) => (
          <button
            key={r.name}
            className={`reviews__dot ${active === i ? 'reviews__dot--active' : ''}`}
            onClick={() => scrollTo(i)}
            aria-label={`Показати відгук ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
