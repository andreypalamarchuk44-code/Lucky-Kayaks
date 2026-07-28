import { FiShield, FiMap, FiUsers } from 'react-icons/fi';
import './About.scss';

const FEATURES = [
  { title: 'Безпечно', text: 'Перед стартом проводимо інструктаж та забезпечуємо сертифікованим спорядженням.', icon: FiShield },
  { title: 'Маршрути', text: 'Від спокійних прогулянок до мальовничих маршрутів Південним Бугом.', icon: FiMap },
  { title: 'Для всіх', text: 'Підійде новачкам, сім’ям, компаніям друзів і корпоративним групам.', icon: FiUsers },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__header">
          <p className="eyebrow">Lucky Kayaks</p>
          <h2>Відчуйте Південний Буг<br />таким, яким його знають місцеві</h2>
          <p className="about__lead">Ми не просто здаємо в оренду каяки, SUP-дошки та катамарани. Ми допомагаємо провести день серед чистої води, дикої природи та незабутніх краєвидів.</p>
        </div>
        <div className="about__cards">
          {FEATURES.map((item) => {
            const Icon = item.icon;
            return <article className="about__card" key={item.title}><span className="about__icon"><Icon aria-hidden="true" /></span><h3>{item.title}</h3><p>{item.text}</p></article>;
          })}
        </div>
        <div className="about__quote"><span aria-hidden="true">“</span><p>Ми знаємо кожен поворот річки, тому кожен маршрут — це не просто сплав, а справжня пригода.</p></div>
      </div>
    </section>
  );
}
