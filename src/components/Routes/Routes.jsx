import './Routes.scss';

const ROUTES = [
  {
    badge: 'Сімейний маршрут',
    badgeClass: 'easy',
    label: 'спокійна вода',
    name: 'Три заливи Південного Бугу',
    distance: '8 км',
    duration: '2–2.5 год',
    level: 'Для всіх',
    desc: 'Маршрут через три мальовничі затоки Південного Бугу поблизу Ладижина. Спокійна вода, очерети, дикі птахи та чудові краєвиди роблять цей сплав ідеальним для першого знайомства з каяками або SUP-дошками.',
    button: 'Обрати маршрут',
  },
  {
    badge: 'Природний маршрут',
    badgeClass: 'nature',
    label: 'тиха затока',
    name: 'Паланський залив',
    distance: '10 км',
    duration: '3 год',
    level: 'Від 8 років',
    desc: 'Неспішний маршрут через затишний Паланський залив. Тут можна насолодитися природою, зробити красиві фотографії та відчути справжній спокій Південного Бугу.',
    button: 'Обрати маршрут',
  },
  {
    badge: 'Панорамний маршрут',
    badgeClass: 'panorama',
    label: 'подорож річкою',
    name: 'Сплав у Степашки',
    distance: '14 км',
    duration: '4–5 год',
    level: 'Любителі природи',
    desc: 'Один із найкрасивіших маршрутів поблизу Ладижина. Високі береги, чиста вода та затишні місця для відпочинку зроблять цей день незабутнім.',
    button: 'Обрати маршрут',
  },
  {
    badge: 'Relax Tour',
    badgeClass: 'sunset',
    label: 'вечірній відпочинок',
    name: 'Вечірня риболовля та захід сонця',
    distance: '2–3 км',
    duration: 'За 2 години до заходу',
    level: 'Для всіх',
    desc: 'Проведіть вечір на Південному Бузі з вудкою в руках. Тиша, свіже повітря, дзеркальна вода та захід сонця створюють атмосферу, яку хочеться переживати знову.',
    button: 'Забронювати',
  },
];

export default function Routes() {
  return (
    <section className="routes" id="routes">
      <div className="container">

        <div className="section-head">

          <div>
            <p className="eyebrow">
              Наші маршрути
            </p>

            <h2>
              Оберіть свою пригоду
              <br />
              на Південному Бузі
            </h2>
          </div>

          <p className="section-head__desc">
            Усі маршрути починаються в Ладижині та підходять як для
            новачків, так і для тих, хто вже має досвід активного
            відпочинку на воді.
          </p>

        </div>

      </div>

      <div className="routes__scroller">

        <div className="routes__track">

          {ROUTES.map((route) => (

            <article
              className="route-card"
              key={route.name}
            >

              <div className="route-card__top">

                <span
                  className={`route-card__grade route-card__grade--${route.badgeClass}`}
                >
                  {route.badge}
                </span>

                <span className="route-card__grade-label">
                  {route.label}
                </span>

              </div>

              <h3>
                {route.name}
              </h3>

              <p className="route-card__desc">
                {route.desc}
              </p>

              <dl className="route-card__stats">

                <div>
                  <dt>Дистанція</dt>
                  <dd>{route.distance}</dd>
                </div>

                <div>
                  <dt>Тривалість</dt>
                  <dd>{route.duration}</dd>
                </div>

                <div>
                  <dt>Для кого</dt>
                  <dd>{route.level}</dd>
                </div>

              </dl>

              <a
                href="#contact"
                className="route-card__link"
              >
                {route.button}

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

              </a>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}