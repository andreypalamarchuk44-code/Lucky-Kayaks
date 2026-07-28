import { useState } from 'react';
import './FAQ.scss';

const FAQS = [
  {
    q: 'Чи потрібен досвід сплаву на каяку?',
    a: 'Ні, для маршруту «Плесо Ладижин — Розкопинці» та вечірнього сплаву досвід не потрібен — інструктор проведе короткий інструктаж перед виходом на воду. Для порогів II–III категорії просимо хоча б один попередній сплав.',
  },
  {
    q: 'Що взяти з собою на сплав?',
    a: 'Змінний одяг, взуття, яке не боїться води, сонцезахисний крем і гарну настрій. Каяки, весла, жилети та гермомішки для речей видаємо на місці.',
  },
  {
    q: 'Що якщо піде дощ?',
    a: 'Легкий дощ не скасовує сплав — на воді це навіть приємно. При грозі, сильному вітрі чи різкому підйомі рівня води переносимо дату без доплат.',
  },
  {
    q: 'Скільки людей у групі?',
    a: 'Стандартна група — до 6 каяків на одного інструктора. Для корпоративних виїздів та таборів формуємо кілька груп одночасно.',
  },
  {
    q: 'Як забронювати дату?',
    a: 'Залиште заявку у формі нижче або напишіть у Telegram — підтвердимо дату, маршрут і кількість місць протягом дня.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq" id="faq">
      <div className="container faq__grid">
        <div className="faq__intro">
          <p className="eyebrow">Питання</p>
          <h2>Перед тим, як бронювати</h2>
          <p className="faq__intro-text">
            Не знайшли відповідь? Напишіть нам напряму — відповідаємо
            протягом години у робочий час.
          </p>
          <a href="#contact" className="btn-ghost-light">Написати нам</a>
        </div>

        <div className="faq__list">
          {FAQS.map((item, i) => {
            const open = openIndex === i;
            return (
              <div className={`faq__item ${open ? 'faq__item--open' : ''}`} key={item.q}>
                <button
                  className="faq__question"
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                >
                  <span>{item.q}</span>
                  <span className="faq__icon" aria-hidden="true">{open ? '−' : '+'}</span>
                </button>
                <div className="faq__answer" style={{ gridTemplateRows: open ? '1fr' : '0fr' }}>
                  <div className="faq__answer-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
