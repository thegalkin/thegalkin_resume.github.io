window.I18N = {
  ru: {
    brand: "ГНВ",
    name: "Галкин Никита Владимирович",
    title: "Системный аналитик · Senior",
    subtitle: "6+ лет · FinTech и Telecom · Москва · 10.03.2001",
    download_ru: "Скачать PDF (RU)",
    about_title: "О себе",
    about_body: `
      <p>Системный аналитик, 6+ лет в FinTech и Telecom. Поработал над ВЭД-сервисом крупного банка, биллингом Московской Биржи, корпоративным браузером Сбера и приложением для выездных мастеров МТС.</p>
      <p>Чем занимаюсь: собираю и формализую требования, проектирую интеграции (REST, Kafka), веду API-контракты, моделирую данные, сопровождаю задачи от постановки до прода. Умею договариваться со смежными командами и не теряю задачи на стыках.</p>
      <p>Читаю и пишу код на Java, Python, Swift, JS — не как разработчик, но достаточно, чтобы спорить с командой по делу и читать чужой код без переводчика.</p>
    `,
    experience_title: "Опыт работы",
    education_title: "Образование",
    skills_title: "Навыки",
    skills_modeling: "Моделирование",
    skills_integration: "Интеграции",
    skills_db: "Базы данных",
    skills_code: "Код",
    skills_process: "Процессы",

    wmt_title: "WMT, Москва — Системный аналитик",
    wmt_meta: "Октябрь 2024 — Апрель 2026 · 1 год 7 месяцев",
    wmt_context: "Финансово-агентский сервис ВЭД для крупного банка: ТН ВЭД, заявки и предложения, агентские цепочки, расчёт налогов и пошлин, валютный контроль. Делали с нуля, до прода дошли за год.",
    wmt_bullets: [
      "Участвовал в проектировании архитектуры с самого начала: разносил домены (заявки, предложения, агенты, налоги/пошлины, валютный контроль), описывал взаимодействие сервисов в UML и PlantUML.",
      "Формализовал требования с оглядкой на регуляторку — валютный контроль и работа с ТН ВЭД задают рамки, в которые приходится укладывать продуктовые хотелки.",
      "Проектировал интеграции с внутрибанковскими системами и внешними справочниками (ТН ВЭД, ставки пошлин и налогов, курсы ЦБ). Вёл API-контракты в OpenAPI, событийные потоки и асинхронные обмены в Kafka.",
      "Моделировал сущности и связи (ER, UML), сверял решения с командой БД для расчётных и отчётных витрин в PostgreSQL.",
      "Декомпозировал задачи на разработку, ревьюил постановки, ловил риски на стыках доменов до того, как они доходили до прода.",
      "Согласовывал изменения с разработкой, продуктом, юристами, комплаенсом и ИБ."
    ],
    wmt_stack: "Стек: PostgreSQL, REST, Kafka, OpenAPI / Swagger, UML, PlantUML, BPMN, Confluence.",

    moex_title: "Московская Биржа — Системный аналитик",
    moex_meta: "Август 2023 — Октябрь 2024 · 1 год 3 месяца",
    moex_context: "Биллинг клиентов биржи: собрать тарифицируемые события из всех систем, где клиент что-то делает, и посчитать корректный счёт. Контур обширный — десятки интегрированных систем-источников транзакций. Цена ошибки — претензии от клиентов и регулятора, поэтому требования к точности и аудитопригодности максимальные.",
    moex_bullets: [
      "Собирал и формализовывал требования по тарифным моделям и расчётным сценариям.",
      "Проектировал интеграции с торговыми, клиринговыми и сервисными системами — источниками тарифицируемых событий. Согласовывал REST-контракты и потоки событий в Kafka со смежными командами.",
      "Участвовал в моделировании биллинговых витрин в PostgreSQL, включая контур для аналитики и DWH; сущности и связи описывал в ER и UML.",
      "Ревьюил постановки и убирал двусмысленные формулировки до этапа разработки.",
      "Сопровождал задачи разработки до приёмки, держал документацию в Confluence в актуальном состоянии."
    ],
    moex_stack: "Стек: PostgreSQL, REST, Kafka, OpenAPI / Swagger, UML, ER, BPMN, Confluence.",

    sber_title: "Сбер — Системный аналитик",
    sber_meta: "Март 2022 — Август 2023 · 1 год 6 месяцев",
    sber_context: "СберБраузер — корпоративный мобильный браузер на базе Chromium для сотрудников банка. Единая точка входа в личные кабинеты в разных внутренних системах, с упором на безопасность и единый логин.",
    sber_bullets: [
      "Интеграции: проектировал стыки браузера с корпоративными сервисами и личными кабинетами сотрудника в разных внутренних системах. Синхронные обмены — REST, асинхронные события — Kafka. Верхнеуровневую архитектуру описывал в C4.",
      "Аутентификация и безопасность: участвовал в проектировании единого контура входа (SSO, корпоративные токены), согласовывал решения с ИБ. Спецификации REST API проходили проверки безопасности банка с первого-второго захода.",
      "Релизы: помогал релизному менеджеру — собирал релизные постановки, следил за готовностью интеграций, заранее синхронизировался со смежными командами, чтобы выкатки не срывались по чужой вине.",
      "Бизнес-процессы: оптимизировал согласование заявок (BPMN).",
      "Подготовил много user stories и постановок, участвовал в декомпозиции задач для команды.",
      "Вёл стажёра: вводил в проект, ревьюил постановки, помогал разобраться с интеграционным контуром."
    ],
    sber_stack: "Стек: PostgreSQL, REST, Kafka, OpenAPI / Swagger, C4, BPMN, UML, Agile / Scrum, Confluence.",

    mts_title: "МТС — Системный аналитик",
    mts_meta: "Сентябрь 2019 — Март 2022 · 2 года 7 месяцев",
    mts_context: "Мобильное приложение для выездных мастеров МТС: документооборот, заявки от диспетчеров, тарифы, учёт оборудования, графики работ. Полевой инструмент бригады — всё, что нужно мастеру в смену, от получения наряда до закрытия акта.",
    mts_bullets: [
      "Разработал архитектуру модуля биллинга мастеров, описал её в UML и PlantUML. Завёл интеграции с внешними партнёрами и внутренними справочниками (тарифы, оборудование, графики).",
      "Описал жизненный цикл заявки от назначения до закрытия акта, согласовал статусные модели со смежными системами.",
      "Проектировал интеграции: синхронные обмены через REST, асинхронные события и обновления справочников — через Kafka.",
      "Работал с PostgreSQL: моделировал сущности и связи, согласовывал схему с командой БД.",
      "Внедрил автогенерацию документации из кода (Documentation as Code), Confluence перестал быть кладбищем устаревших страниц.",
      "Проводил приёмочное тестирование API в Postman.",
      "Синхронизировал изменения между разработкой, диспетчерами и логистикой оборудования."
    ],
    mts_stack: "Стек: PostgreSQL, REST, Kafka, OpenAPI / Swagger, UML, PlantUML, BPMN, Confluence, Postman.",

    edu_title: "Финансовый университет при Правительстве РФ, Москва",
    edu_meta: "Прикладная информатика · Бакалавр · 2024"
  },

  en: {
    brand: "NG",
    name: "Nikita Galkin",
    title: "Systems Analyst · Senior",
    subtitle: "6+ years · FinTech & Telecom · Moscow · born 10 Mar 2001",
    download_ru: "Download PDF (RU)",
    about_title: "About",
    about_body: `
      <p>Systems analyst with 6+ years in FinTech and Telecom. Worked on a foreign-trade (cross-border) service for a major bank, the billing system of the Moscow Exchange, a corporate mobile browser at Sber, and a field-engineer app at MTS.</p>
      <p>What I do: gather and formalize requirements, design integrations (REST, Kafka), maintain API contracts, model data, and shepherd tasks from spec to production. I'm good at aligning with adjacent teams and don't lose tasks at the seams.</p>
      <p>I read and write code in Java, Python, Swift, JS — not as a developer, but well enough to argue with the dev team on merit and read someone else's code without a translator.</p>
    `,
    experience_title: "Experience",
    education_title: "Education",
    skills_title: "Skills",
    skills_modeling: "Modeling",
    skills_integration: "Integrations",
    skills_db: "Databases",
    skills_code: "Code",
    skills_process: "Process",

    wmt_title: "WMT, Moscow — Systems Analyst",
    wmt_meta: "October 2024 — April 2026 · 1 year 7 months",
    wmt_context: "Foreign-trade agent service for a major bank: HS codes (TN VED), requests and offers, agent chains, calculation of taxes and duties, currency control. Built from scratch — reached production in a year.",
    wmt_bullets: [
      "Helped design the architecture from day one: split the system into domains (requests, offers, agents, taxes/duties, currency control), modelled service interactions in UML and PlantUML.",
      "Formalized requirements with regulatory constraints in mind — currency control and HS-code handling set the framing within which product needs have to fit.",
      "Designed integrations with internal bank systems and external registries (HS codes, duty/tax rates, central-bank FX rates). Maintained API contracts in OpenAPI and async event flows in Kafka.",
      "Modelled entities and relationships (ER, UML), aligned with the DB team on PostgreSQL data marts for calculations and reporting.",
      "Broke work down for engineering, reviewed specs, and caught risks at domain seams before they hit production.",
      "Aligned changes with engineering, product, legal, compliance, and infosec."
    ],
    wmt_stack: "Stack: PostgreSQL, REST, Kafka, OpenAPI / Swagger, UML, PlantUML, BPMN, Confluence.",

    moex_title: "Moscow Exchange — Systems Analyst",
    moex_meta: "August 2023 — October 2024 · 1 year 3 months",
    moex_context: "Client billing for the exchange: collect billable events from every system a client interacts with and produce a correct invoice. Wide perimeter — dozens of integrated source systems. Mistakes mean client and regulator complaints, so the bar for accuracy and auditability is high.",
    moex_bullets: [
      "Gathered and formalized requirements for tariff models and calculation scenarios.",
      "Designed integrations with trading, clearing, and service systems as sources of billable events. Agreed REST contracts and Kafka event streams with adjacent teams.",
      "Took part in modelling billing data marts in PostgreSQL, including the analytics/DWH layer; documented entities and relationships in ER and UML.",
      "Reviewed specs and rewrote anything that could be read two ways before development started.",
      "Walked tasks through to acceptance and kept Confluence documentation current."
    ],
    moex_stack: "Stack: PostgreSQL, REST, Kafka, OpenAPI / Swagger, UML, ER, BPMN, Confluence.",

    sber_title: "Sber — Systems Analyst",
    sber_meta: "March 2022 — August 2023 · 1 year 6 months",
    sber_context: "SberBrowser — a corporate mobile browser built on Chromium for bank employees. A single entry point into employee personal cabinets across many internal systems, with a strong focus on security and SSO.",
    sber_bullets: [
      "Integrations: designed the browser's touch points with corporate services and employee personal cabinets across internal systems. Synchronous calls over REST, asynchronous events over Kafka. Captured the high-level architecture in C4.",
      "Authentication and security: took part in designing the unified sign-in flow (SSO, corporate tokens), aligned solutions with InfoSec. REST API specs passed the bank's security reviews on the first or second pass.",
      "Releases: assisted the release manager — assembled release specs, tracked integration readiness, synced with adjacent teams early to avoid rollouts collapsing through someone else's fault.",
      "Process: streamlined the request approval flow (BPMN).",
      "Wrote a large number of user stories and specs and helped decompose work for the team.",
      "Mentored an intern: onboarded them, reviewed their specs, and helped them navigate the integration landscape."
    ],
    sber_stack: "Stack: PostgreSQL, REST, Kafka, OpenAPI / Swagger, C4, BPMN, UML, Agile / Scrum, Confluence.",

    mts_title: "MTS — Systems Analyst",
    mts_meta: "September 2019 — March 2022 · 2 years 7 months",
    mts_context: "Mobile app for field engineers at MTS: document flow, dispatcher tickets, tariffs, equipment tracking, work schedules. A field tool for the crew — everything an engineer needs during a shift, from receiving a ticket to closing the act.",
    mts_bullets: [
      "Designed the architecture of the field-engineer billing module, captured it in UML and PlantUML. Set up integrations with external partners and internal registries (tariffs, equipment, schedules).",
      "Described the full ticket lifecycle from assignment to act closure and aligned status models with adjacent systems.",
      "Designed integrations: synchronous calls over REST, async events and registry updates over Kafka.",
      "Worked with PostgreSQL: modelled entities and relationships, aligned schema with the DB team.",
      "Rolled out Documentation as Code — Confluence stopped being a graveyard of outdated pages.",
      "Ran API acceptance testing in Postman.",
      "Synced changes between engineering, dispatchers, and equipment logistics."
    ],
    mts_stack: "Stack: PostgreSQL, REST, Kafka, OpenAPI / Swagger, UML, PlantUML, BPMN, Confluence, Postman.",

    edu_title: "Financial University under the Government of the Russian Federation, Moscow",
    edu_meta: "Applied Informatics · Bachelor's · 2024"
  }
};
