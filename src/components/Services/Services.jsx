import { GiCanoe, GiPaddles } from 'react-icons/gi';
import { FiCamera, FiUsers } from 'react-icons/fi';
import './Services.scss';

const SERVICES = [
  {
    icon: GiCanoe,
    title: 'Оренда спорядження',
    text: 'Одномісні та двомісні каяки, SUP-дошки й катамарани. Весла, рятувальні жилети та гермомішки входять у комплект.',
  },
  {
    icon: GiPaddles,
    title: 'Сплави з інструктором',
    text: 'Проводимо групу лінією порога, підстраховуємо на воді та підказуємо техніку гребка з першої хвилини.',
  },
  {
    icon: FiCamera,
    title: 'Фото та відео на воді',
    text: 'Знімаємо групу з берега і з води екшн-камерою. Фото та ролик — того ж вечора в чаті.',
  },
  {
    icon: FiUsers,
    title: 'Групи та кемпи',
    text: 'Корпоративні виїзди, дні народження, дитячі табори від 10 років. Прокладаємо маршрут під рівень групи.',
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Що ми робимо</p>
            <h2>Все для сплаву — від весла до фотографії на порозі</h2>
          </div>
          <p className="section-head__desc">
            Обирайте формат: візьміть каяк напрокат і йдіть тихою водою
            самостійно, або довіртесь інструктору й пройдіть каньйон повністю.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <article className="services__card" key={s.title}>
              <span className="services__index">{String(i + 1).padStart(2, '0')}</span>
              <s.icon className="services__icon" aria-hidden="true" />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
