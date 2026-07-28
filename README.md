# Lucky Kayaks — production-ready landing page

Адаптивний односторінковий сайт на React 19 + Vite + SCSS для прокату каяків і сплавів Південним Бугом.

## Запуск
```bash
npm install
npm run dev
npm run build
npm run preview
```

## Перед публікацією для реального клієнта
Усі контактні дані зібрані в `src/config/site.js`. Замініть тестові телефон, email, Telegram, Instagram, Viber і посилання Google Maps на дані власника.

Форма в поточній демо-версії має бути підключена до Formspree, EmailJS, Netlify Forms або власного API перед прийманням реальних заявок. Не залишайте фальшиве повідомлення про успішне надсилання без фактичного бекенду.

## Перевірки перед деплоєм
- `npm run build`
- перевірка 320 / 375 / 768 / 1024 / 1440 px
- заміна контактів і посилань
- оптимізація фінального відео до WebM/MP4
- перевірка форми на реальне отримання заявки
- Lighthouse: Performance, Accessibility, Best Practices, SEO

`node_modules` не входить у ZIP — залежності встановлюються командою `npm install`.
