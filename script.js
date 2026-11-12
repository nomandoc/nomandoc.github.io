(() => {
  'use strict';

  const SUPPORTED = ['en', 'ru'];
  const DEFAULT_LANG = 'en';
  const STORAGE_KEY = 'resume-lang';

  const profile = {
    email: 'reanimatology@outlook.com',
    telegram: 'https://t.me/n0m2n',
    github: 'https://github.com/nomandoc',
    cvPdf: { en: 'cv/cv-en.pdf', ru: 'cv/cv-ru.pdf' }, // optional downloadable CV
  };

  const translations = {
    /* ============================ ENGLISH ============================ */
    en: {
      meta: {
        title: 'Viacheslav Andreenkov, MD / Data Scientist',
        description: 'Resume of Viacheslav Andreenkov, MD: data scientist and anesthesiologist-intensivist.',
      },
      nav: {
        about: 'About', skills: 'Skills', experience: 'Experience', education: 'Education',
        projects: 'Projects', contribute: 'Value', publications: 'Publications', contacts: 'Contacts',
      },
      hero: {
        shortName: 'Viacheslav Andreenkov',
        name: 'Viacheslav Andreenkov, MD',
        role: 'Data Scientist · Anesthesiologist-Intensivist',
        tagline: 'I build machine learning models for critical care and perioperative medicine, '
               + 'combining bedside clinical experience with data science.',
        photoAlt: 'Portrait of Viacheslav Andreenkov',
        contact: 'Contact me',
        downloadCv: 'Download CV (PDF)',
      },
      about: {
        title: 'About',
        paragraphs: [
          'I am a software developer, a ML engineer, a scientist, and an anesthesiologist-intensivist. '
          + 'I effectively combine those professions by launching IT projects based on medical clinics.',
          'My experience in medicine makes me an indispensable member of the development team: '
          + 'I understand what the customer wants and know how to implement it most effectively.',
          'I write mainly in C# and Python (pandas, scikit-learn, XGBoost), but I often have to use other related languages and tools.',
        ],
      },
      skills: {
        title: 'Skills',
        techTitle: 'Technical skills',
        clinicalTitle: 'Clinical & research skills',
        softTitle: 'Soft skills',
        yearsOne: 'year', yearsMany: 'years',
        tech: [
          { name: 'Python', years: 3 },
          { name: 'SQL', years: 3 },
          { name: 'Machine learning', years: 3 },
          { name: 'Statistics & biostatistics', years: 6 },
          { name: 'Git', years: 3 },
        ],
        other: [
          { name: 'Clinical work in anesthesiology & ICU', years: 6 },
          { name: 'Scientific research', years: 12 }
        ],
        soft: [
          'Clinician ↔ developer communication', 'Scientific writing',
          'Presenting to investors and clients', 'Teamwork in critical situations',
        ],
      },
      experience: {
        title: 'Experience',
        items: [
          {
            period: '2025 – present',
            title: 'Scientist / Data Scientist',
            place: 'RMACPE, Moscow, Russia',
            points: [
              'I conduct research in the field of predicting intraoperative hypotension as a freelance specialist. ',
              'Developed a model for predicting intraoperative hypotension based on ultrasound data, which demonstrates high accuracy (AUROC 0.975).',
            ],
          },
          {
            period: '2020 – 2023',
            title: 'Anesthesiologist-intensivist',
            place: 'Spasokukotsky Hospatal, Moscow, Russia',
            points: [
              'MD in 2nd ICU department for general medical patients. ',
              'Worked with medical equipment, including machines for renal replacement therapy and extracorporeal hemocorrection.',
            ],
          },
          {
            period: '2023',
            title: 'Anesthesiologist-intensivist',
            place: 'Hospatal N52, Moscow, Russia',
            points: [
              'MD in 3rd ICU department for nephrology patients. ',
              'Scientific research: participation in clinical trials, development of study protocols.',
            ],
          },
          {
            period: '2023 - наст. время',
            title: 'Anesthesiologist-intensivist',
            place: 'Botkin Hospital, Moscow, Russia',
            points: [
              'MD in ICU No. 79 dept. for urology patients. ',
              'Scientific research: conducting a scientific study on the prediction of intraoperative hypotension.',
            ],
          },
        ],
      },
      education: {
        title: 'Education',
        items: [
          { period: '2012 – 2018', title: 'MD, General Medicine', place: 'Belgorod State University, Belgorod', note: 'Graduated with honors.' },
          { period: '2018 – 2020', title: 'Residency in Anesthesiology and Intensive Care', place: 'Institute of Anesthesiology and Reanimation, Moscow', note: '' },
          { period: '2019 - 2020', title: 'C# Programming Course', place: 'USU', note: '' },
          { period: '2019 - 2020', title: 'Programming Techonologies Course', place: 'USU', note: '' },
          { period: '2020 - 2021', title: 'Applied Statistical Analysis Course', place: 'HSE University', note: '' },
          { period: '2026', title: 'Machine Learing Course', place: 'MEPhI', note: '' },
        ],
      },
      projects: {
        title: 'Projects',
        items: [
          {
            name: 'Intraoperative Hypotension Prediction',
            stack: ['Python', 'scikit-learn', 'pandas', 'XGBoost', 'SHAP'],
            text: 'Algorithm for predicting intraoperative hypotension from ultrasound and anthropometric data. '
                + 'Developed within a clinical research study.',
            links: [{ label: 'Registration certificate', url: 'https://new.fips.ru/registers-doc-view/fips_servlet?DB=EVM&DocNumber=2025687356&TypeFile=html' }],
          },
          {
            name: 'Personal Assistant to a Psychiatrist',
            stack: ['Python', 'JS', 'HTML', 'CSS', 'SQL', 'LLM', 'ML'],
            text: 'A system for monitoring patients with anxiety and depression between appointments, developed as part of the “Clinical Compass” competition.',
            links: [{ label: 'Participant Certificate', url: 'files/compass.pdf' },
                    { label: 'News link', url: 'https://chemrar.ru/klinicheskij-kompas-avinejro-i-partnyory-zapustili-kejs-chempionat-po-poisku-reshenij-dlya-diagnostiki-trevogi-i-depressii/' }],
          },
          {
            name: 'Medical Multifunctional Bed',
            stack: ['Nocode'],
            text: 'I served as a medical consultant and No-Code developer. The project was brought to the production and implementation stage.',
            links: [],
          },
        ],
      },
      contribute: {
        title: 'How I can contribute',
        items: [
          { title: 'Better medical ML models', text: 'I understand not only how to train a model but why it should be trained that way, and I can explain the “black box” using clinical knowledge.' },
          { title: 'A bridge between medicine and IT', text: 'I see medical projects from the viewpoint of the physician, the client and the developer, which prevents costly misunderstandings.' },
          { title: 'Research-grade rigour', text: 'Experience with study design, statistics, ethics approval and publishing helps validate models properly.' },
          { title: 'Effective Presentation', text: 'I effectively present projects to investors and clients, drawing on my academic and project experience.' },
          { title: 'Fast prototyping', text: 'I can build an MVP quickly and present it convincingly to clinicians, investors and clients.' },
        ],
      },
      publications: {
        title: 'Publications & awards',
        papersTitle: 'Selected publications',
        awardsTitle: 'Awards & media',
        papers: [
          { text: 'Andreenkov V.S., Vlasenko A.V., Kornienko A.N., Kazakov A.S., Rodionov E.P., Kolontarev K.B., Evdokimov E.A. Machine learning with ultrasound examination for prediction of intraoperative hypotension during robot-assisted radical prostatectomy. Medical alphabet. 2025;(27):30-38. (In Russ.)', url: 'https://www.med-alphabet.com/jour/article/view/4689' },
        ],
        awards: [
          { text: 'Prize-winning place at the Young Scientists Congress', url: 'https://t.me/rmanpoacademy/3473' },
          { text: 'Best poster presentation at the Anesthesiologists and Reanimatologists Forum', url: 'https://rmanpo.ru/press-center/news/novosti-kafedry-anesteziologii-i-neotlozhnoj-medic/posternyy-doklad-molodogo-uchenogo-rmanpo-stal-luchshim-na-forume-federatsii-anesteziologov-i-reanim/' },
        ],
      },
      other: {
        title: 'Other',
        languagesTitle: 'Languages',
        languages: ['Russian — native', 'English — B2/C1'],
        hobbiesTitle: 'Hobbies',
        hobbies: [
          'Board games and science fiction.',
        ],
      },
      contacts: {
        title: 'Contacts',
        labels: { email: 'E-mail', telegram: 'Telegram', github: 'GitHub'},
      },
      footer: { text: '© Viacheslav Andreenkov' },
    },

    /* ============================ РУССКИЙ ============================ */
    ru: {
      meta: {
        title: 'Вячеслав Андреенков — Data Scientist, врач',
        description: 'Резюме Вячеслава Андреенкова: специалист по анализу данных, врач анестезиолог-реаниматолог.',
      },
      nav: {
        about: 'Обо мне', skills: 'Навыки', experience: 'Опыт', education: 'Образование',
        projects: 'Проекты', contribute: 'Чем полезен', publications: 'Публикации', contacts: 'Контакты',
      },
      hero: {
        shortName: 'Вячеслав Андреенков',
        name: 'Вячеслав Андреенков',
        role: 'Data Scientist · Анестезиолог-реаниматолог',
        tagline: 'Создаю модели машинного обучения для интенсивной терапии и периоперационной медицины, '
               + 'объединяя клинический опыт с анализом данных.',
        photoAlt: 'Фотография Вячеслав Андреенков',
        contact: 'Связаться',
        downloadCv: 'Скачать резюме (PDF)',
      },
      about: {
        title: 'Обо мне',
        paragraphs: [
          'Я разработчик программного обеспечения, ML-инженер, ученый и врач анестезиолог-реаниматолог. '
          + 'Я эффективно совмещаю эти профессии, запуская IT-проекты на базе медицинских клиник.',
          'Мой опыт в медицине делает меня незаменимым членом команды разработки: '
          + 'я понимаю, чего хочет заказчик, и знаю, как реализовать это наиболее эффективным способом.',
          'Пишу в основном на C# и Python (pandas, scikit-learn, XGBoost), но часто использую другие смежные языки и инструменты.',
        ],
      },
      skills: {
        title: 'Навыки',
        techTitle: 'Технические навыки',
        clinicalTitle: 'Клинические и научные навыки',
        softTitle: 'Личные качества',
        yearsOne: 'год', yearsFew: 'года', yearsMany: 'лет',
        tech: [
          { name: 'Python', years: 4 },
          { name: 'SQL', years: 4 },
          { name: 'Машинное обучение', years: 3 },
          { name: 'Статистика и биостатистика', years: 6 },
          { name: 'Git', years: 3 },
        ],
        other: [
          { name: 'Клиническая работа: анестезиология и реанимация', years: 6 },
          { name: 'Научно-исследовательская работа', years: 12 }
        ],
        soft: [
          'Диалог между врачами и разработчиками', 'Научное письмо',
          'Презентация проектов инвесторам и заказчикам', 'Командная работа в критических ситуациях',
        ],
      },
      experience: {
        title: 'Опыт работы',
        items: [
          {
            period: '2025 – наст. время',
            title: 'Научный сотрудник / Data Scientist',
            place: 'РМАНПО, Москва, Россия',
            points: [
              'Выполняю научную работу в области прогнозирования интраоперационной гипотензии как внештатный специалист. ',
              'Разработал модель прогнозирования интраоперационной гипотензии на основе ультразвуковых данных, обладающий высокой точность (AUROC 0,975).',
            ],
          },
          {
            period: '2020 – 2023',
            title: 'Врач анестезиолог-реаниматолог',
            place: 'ГКБ им. С.И. Спасокукоцкого, Москва, Россия',
            points: [
              'Врач в ОРИТ №2 для больных общего профиля. ',
              'Работал с медицинским оборудованием, включая аппараты для проведения заместительной почечной терапии, экстракорпоральной гемокоррекции.',
            ],
          },
          {
            period: '2023',
            title: 'Врач анестезиолог-реаниматолог',
            place: 'ГКБ 52, Москва, Россия',
            points: [
              'Врач в ОРИТ №3 для нефрологических больных. ',
              'Научная работа: участие в клинических исследованиях, разработка протоколов исследований.',
            ],
          },
          {
            period: '2023 - наст. время',
            title: 'Врач анестезиолог-реаниматолог',
            place: 'ММНКЦ им. С.П.Боткина, Москва, Россия',
            points: [
              'Врач в ОАР №79 для урологических больных. ',
              'Научная работа: проведение научного исследования по прогнозированию интраоперационной гипотензии.',
            ],
          },
        ],
      },
      education: {
        title: 'Образование',
        items: [
          { period: '2012 – 2018', title: 'Специалитет, лечебное дело', place: 'НИУ БелГУ, Белгород', note: 'Диплом с отличием.' },
          { period: '2018 – 2020', title: 'Ординатура по анестезиологии и реаниматологии', place: 'НИИ ОР им. С.А.Неговского РАН, Москва', note: '' },
          { period: '2019 - 2020', title: 'Курс «Программирование на C#»', place: 'УрФУ', note: '' },
          { period: '2019 - 2020', title: 'Курс «Технологии программирования»', place: 'УрФУ', note: '' },
          { period: '2020 - 2021', title: 'Курс «Прикладной статистический анализ»', place: 'НИУ ВШЭ', note: '' },
          { period: '2026', title: 'Курс «Машинное обучение»', place: 'МИФИ', note: '' },
        ],
      },
      projects: {
        title: 'Проекты',
        items: [
          {
            name: 'Прогнозирование интраоперационной гипотензии',
            stack: ['Python', 'scikit-learn', 'pandas', 'XGBoost', 'SHAP'],
            text: 'Алгоритм прогнозирования интраоперационной гипотензии по данным УЗИ и антропометрии. '
                + 'Разработан в рамках клинического исследования.',
            links: [{ label: 'Свительство о регистрации программы для ЭВМ', url: 'https://new.fips.ru/registers-doc-view/fips_servlet?DB=EVM&DocNumber=2025687356&TypeFile=html' }],
          },
          {
            name: 'Персональный ассистент врача-психиатра',
            stack: ['Python', 'JS', 'HTML', 'CSS', 'SQL', 'LLM', 'ML'],
            text: 'Система контроля пациентов с тревогой и депрессией между приёмами, разработана в рамках чемпионата «Клинический компас».',
            links: [{ label: 'Сертификат участника', url: 'files/compass.pdf' }, 
                    { label: 'Ссылка на сайт', url: 'https://chemrar.ru/klinicheskij-kompas-avinejro-i-partnyory-zapustili-kejs-chempionat-po-poisku-reshenij-dlya-diagnostiki-trevogi-i-depressii/' },], 
          },
          {
            name: 'Медицинская многофункциональная кровать',
            stack: ['Nocode'],
            text: 'Выполнял роль медицинского эксперта-консультанта и Nocode-разработчика. Проектт доведен до стадии производства и реализации.',
            links: [],
          },
        ],
      },
      contribute: {
        title: 'Чем я могу быть полезен',
        items: [
          { title: 'Более качественные медицинские ML-модели', text: 'Я понимаю не только как обучать модель, но и почему именно так, и могу объяснить «чёрный ящик» с опорой на клинические знания.' },
          { title: 'Мост между медициной и IT', text: 'Вижу медицинские проекты глазами врача, заказчика и разработчика, что помогает избегать дорогостоящих недопониманий.' },
          { title: 'Научная строгость', text: 'Опыт планирования исследований, статистики, этической экспертизы и публикаций помогает корректно валидировать модели.' },
          { title: 'Эффективное представление', text: 'Я эффективно представляю проекты инвесторам и клиентам, jпираясь на свой научный и проектный опыт.' },
          { title: 'Быстрое прототипирование', text: 'Могу быстро собрать MVP и убедительно представить его врачам, инвесторам и заказчикам.' },
        ],
      },
      publications: {
        title: 'Публикации и награды',
        papersTitle: 'Избранные публикации',
        awardsTitle: 'Награды и упоминания в СМИ',
        papers: [
          { text: 'Андреенков В.С., Власенко А.В., Корниенко А.Н., Казаков А.С., Родионов Е.П., Колонтарев К.Б., Евдокимов Е.А. Машинное обучение с использованием ультразвуковых показателей в прогнозировании интраоперационной гипотензии при робот-ассистированной радикальной простатэктомии. Медицинский алфавит. 2025;(27):30-38.', url: 'https://www.med-alphabet.com/jour/article/view/4689' },
        ],
        awards: [
          { text: 'Призовое место на Конгрессе молодых учёных', url: 'https://t.me/rmanpoacademy/3473' },
          { text: 'Лучший постерный доклад на Форуме анестезиологов-реаниматологов', url: 'https://rmanpo.ru/press-center/news/novosti-kafedry-anesteziologii-i-neotlozhnoj-medic/posternyy-doklad-molodogo-uchenogo-rmanpo-stal-luchshim-na-forume-federatsii-anesteziologov-i-reanim/' },
        ],
      },
      other: {
        title: 'Дополнительно',
        languagesTitle: 'Языки',
        languages: ['Русский — родной', 'Английский — B2/C1'],
        hobbiesTitle: 'Увлечения',
        hobbies: [
          'Настольные игры и научная фантастика.',
        ],
      },
      contacts: {
        title: 'Контакты',
        labels: { email: 'Эл. почта', telegram: 'Telegram', github: 'GitHub'},
      },
      footer: { text: '© Андреенков Вячеслав' },
    },
  };

  /* ------------------------------------------------------------------
     Helpers
     ------------------------------------------------------------------ */
  let currentLang = DEFAULT_LANG;

  const get = (obj, path) =>
    path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj);

  /** Tiny DOM builder: h('a', {href: '#'}, 'text', childNode) */
  function h(tag, attrs, ...children) {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs || {})) {
      if (value === null || value === undefined || value === false) continue;
      if (key === 'class') node.className = value;
      else node.setAttribute(key, value);
    }
    for (const child of children.flat()) {
      if (child === null || child === undefined || child === '') continue;
      node.append(typeof child === 'string' ? document.createTextNode(child) : child);
    }
    return node;
  }

  /** Link that opens externally when it is an absolute URL. */
  function link(label, url, cls) {
    const external = /^https?:\/\//i.test(url);
    return h('a', {
      href: url,
      class: cls,
      target: external ? '_blank' : null,
      rel: external ? 'noopener noreferrer' : null,
    }, label);
  }

  /** "3 years" / "3 года" / "5 лет" */
  function formatYears(n, t) {
    if (currentLang === 'ru') {
      const m10 = n % 10, m100 = n % 100;
      let word = t.yearsMany;
      if (m10 === 1 && m100 !== 11) word = t.yearsOne;
      else if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) word = t.yearsFew;
      return `${n} ${word}`;
    }
    return `${n} ${n === 1 ? t.yearsOne : t.yearsMany}`;
  }

  function skillBars(skills, t) {
    const max = Math.max(...skills.map((s) => s.years), 1);
    return skills.map((s) =>
      h('li', null,
        h('div', { class: 'bar-label' }, h('span', null, s.name), h('span', null, formatYears(s.years, t))),
        h('div', { class: 'bar', role: 'presentation' },
          h('i', { style: `width:${Math.round((s.years / max) * 100)}%` }))));
  }

  /* ------------------------------------------------------------------
     Renderers: data-render="name" -> function(t) returning nodes
     ------------------------------------------------------------------ */
  const renderers = {
    heroActions: (t) => {
      const cv = profile.cvPdf && profile.cvPdf[currentLang];
      return [
        link(t.hero.contact, '#contacts', 'btn primary'),
        cv ? link(t.hero.downloadCv, cv, 'btn') : null,
      ];
    },

    about: (t) => t.about.paragraphs.map((p) => h('p', null, p)),

    techSkills: (t) => skillBars(t.skills.tech, t.skills),
    otherSkills: (t) => skillBars(t.skills.other, t.skills),
    softSkills: (t) => t.skills.soft.map((s) => h('li', null, s)),

    experience: (t) => t.experience.items.map((i) =>
      h('article', { class: 't-item' },
        h('div', { class: 't-period' }, i.period),
        h('div', { class: 't-title' }, i.title),
        h('div', { class: 't-place' }, i.place),
        i.points && i.points.length ? h('ul', null, i.points.map((p) => h('li', null, p))) : null)),

    education: (t) => t.education.items.map((i) =>
      h('article', { class: 't-item' },
        h('div', { class: 't-period' }, i.period),
        h('div', { class: 't-title' }, i.title),
        h('div', { class: 't-place' }, i.place),
        i.note ? h('p', null, i.note) : null)),

    projects: (t) => t.projects.items.map((p) =>
      h('article', { class: 'card' },
        h('h3', null, p.name),
        h('ul', { class: 'chips' }, p.stack.map((s) => h('li', null, s))),
        h('p', { style: 'margin-top:.8em' }, p.text),
        p.links.length
          ? h('div', { class: 'links' }, p.links.map((l) => link(l.label, l.url)))
          : null)),

    contribute: (t) => t.contribute.items.map((i) =>
      h('article', { class: 'card' }, h('h3', null, i.title), h('p', null, i.text))),

    publications: (t) => t.publications.papers.map((p) =>
      h('li', null, p.url ? link(p.text, p.url) : p.text)),

    awards: (t) => t.publications.awards.map((a) =>
      h('li', null, a.url ? link(a.text, a.url) : a.text)),

    languages: (t) => t.other.languages.map((l) => h('li', null, l)),
    hobbies: (t) => t.other.hobbies.map((p) => h('p', null, p)),

    contacts: (t) => {
      const labels = t.contacts.labels;
      const rows = [
        ['email', profile.email, `mailto:${profile.email}`],
        ['telegram', profile.telegram, profile.telegram],
        ['github', profile.github, profile.github]
      ].filter(([, value]) => value);
      return rows.map(([key, value, url]) =>
        h('li', null,
          h('span', { class: 'label' }, labels[key]),
          link(value.replace(/^https?:\/\//, ''), url)));
    },
  };

  /* ------------------------------------------------------------------
     Apply language
     ------------------------------------------------------------------ */
  function applyLanguage(lang) {
    const t = translations[lang];
    currentLang = lang;

    document.documentElement.lang = lang;
    document.title = t.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t.meta.description);

    // Simple text: data-i18n="path.to.key"
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const value = get(t, el.dataset.i18n);
      if (typeof value === 'string') el.textContent = value;
    });

    // Attributes: data-i18n-attr="alt:hero.photoAlt;title:foo.bar"
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      el.dataset.i18nAttr.split(';').forEach((pair) => {
        const [attr, path] = pair.split(':').map((s) => s.trim());
        const value = get(t, path);
        if (attr && typeof value === 'string') el.setAttribute(attr, value);
      });
    });

    // Lists / blocks
    document.querySelectorAll('[data-render]').forEach((el) => {
      const render = renderers[el.dataset.render];
      if (render) el.replaceChildren(...[].concat(render(t)).filter(Boolean));
    });

    // Switcher state
    document.querySelectorAll('.lang-switch [data-lang]').forEach((btn) => {
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
    });
  }

  function setLanguage(lang) {
    if (!SUPPORTED.includes(lang)) lang = DEFAULT_LANG;
    applyLanguage(lang);
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage may be blocked */ }
    // keep ?lang= in the URL so a language-specific link can be shared
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      history.replaceState(null, '', url);
    } catch (e) { /* ignore (e.g. file:// in some browsers) */ }
  }

  function detectInitialLanguage() {
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (SUPPORTED.includes(fromUrl)) return fromUrl;

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (SUPPORTED.includes(saved)) return saved;
    } catch (e) { /* ignore */ }

    const browser = (navigator.language || '').slice(0, 2).toLowerCase();
    return SUPPORTED.includes(browser) ? browser : DEFAULT_LANG;
  }

  /* ------------------------------------------------------------------
     Init
     ------------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang-switch [data-lang]').forEach((btn) => {
      btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    const year = document.getElementById('year');
    if (year) year.textContent = String(new Date().getFullYear());

    applyLanguage(detectInitialLanguage());
  });
})();
