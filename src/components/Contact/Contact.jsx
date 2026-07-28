import { useMemo, useState } from 'react';
import { FiPhone, FiMapPin, FiSend, FiClock } from 'react-icons/fi';
import { SITE } from '../../config/site';
import './Contact.scss';

const ROUTE_OPTIONS = ['Три затоки Південного Бугу', 'Паланський залив', 'Сплав у Степашки', 'Вечірня риболовля та захід сонця', 'Ще не визначились'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', date: '', route: ROUTE_OPTIONS[0], message: '' });
  const [prepared, setPrepared] = useState(false);
  const minDate = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const update = (key) => (event) => { setPrepared(false); setForm((value) => ({ ...value, [key]: event.target.value })); };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Бронювання Lucky Kayaks — ${form.name}`);
    const body = encodeURIComponent(`Ім'я: ${form.name}\nТелефон: ${form.phone}\nДата: ${form.date || 'не вказана'}\nМаршрут: ${form.route}\nКоментар: ${form.message || '—'}`);
    setPrepared(true);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <p className="eyebrow eyebrow--on-dark">Контакти</p>
          <h2>Забронюйте дату — деталі узгодимо голосом або в чаті</h2>
          <p className="contact__text">Пишіть у зручний месенджер або телефонуйте напряму. Зазвичай відповідаємо протягом години в робочий час.</p>
          <ul className="contact__list">
            <li><FiPhone aria-hidden="true" /><a href={`tel:${SITE.phoneHref}`}>{SITE.phoneDisplay}</a></li>
            <li><FiMapPin aria-hidden="true" /><span>м. Ладижин, Вінницька область, Південний Буг</span></li>
            <li><FiClock aria-hidden="true" /><span>Щодня, 8:00–20:00, травень–жовтень</span></li>
          </ul>
          <div className="contact__socials">
            <a href={SITE.telegram} target="_blank" rel="noreferrer">Telegram</a>
            <a href={SITE.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={SITE.viber}>Viber</a>
          </div>
        </div>
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__row">
            <label><span>Ім&rsquo;я</span><input required autoComplete="name" type="text" value={form.name} onChange={update('name')} placeholder="Як до вас звертатись" /></label>
            <label><span>Телефон</span><input required autoComplete="tel" inputMode="tel" type="tel" value={form.phone} onChange={update('phone')} placeholder="+380" minLength="10" /></label>
          </div>
          <div className="contact__row">
            <label><span>Бажана дата</span><input type="date" min={minDate} value={form.date} onChange={update('date')} /></label>
            <label><span>Маршрут</span><select value={form.route} onChange={update('route')}>{ROUTE_OPTIONS.map((route) => <option key={route} value={route}>{route}</option>)}</select></label>
          </div>
          <label><span>Коментар</span><textarea rows="3" value={form.message} onChange={update('message')} placeholder="Кількість людей, чи є діти, побажання" /></label>
          <button type="submit" className="btn-amber contact__submit"><FiSend aria-hidden="true" /> Сформувати заявку</button>
          {prepared && <p className="contact__notice" role="status">Заявку сформовано у вашій поштовій програмі. Перед публікацією підключіть Formspree, EmailJS або власний API.</p>}
        </form>
      </div>
    </section>
  );
}
