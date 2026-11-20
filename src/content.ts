export type Language = "en" | "pt";

export const content = {
  en: {
    nav: ["About", "Projects", "Experience", "Stack", "Contact"],
    hero: {
      eyebrow: "PEDRO ROCHA — DATA ENGINEER",
      headline: ["I build data systems", "that make sense."],
      description:
        "From ingestion and orchestration to fast, trustworthy analytics. A software engineering background, now focused on data.",
      projects: "Explore projects",
    },
    about: {
      label: "ABOUT",
      headline: ["Software engineering", "meets data engineering."],
      lead: "I like understanding the whole system, not just the query that runs inside it.",
      paragraphs: [
        "I started in infrastructure and software development, working with Python, APIs, databases and automation. That foundation led me to data engineering: building and maintaining pipelines that people can rely on.",
        "Today, at SEEDUC-RJ, I work with NiFi and Airflow, SQL Server-to-ClickHouse data flows, materialized views and reporting in Apache Superset. I care about reliability, maintainability and the experience of the people using the data.",
      ],
      focuses: ["DATA PIPELINES", "SQL PERFORMANCE", "DATA QUALITY", "ANALYTICS"],
    },
    projects: {
      label: "SELECTED WORK",
      heading: "Projects with working code, not just architecture diagrams.",
      code: "View code",
      statusInProgress: "IN PROGRESS",
      items: [
        {
          number: "01",
          title: "MeepleLake",
          description:
            "A board-game data lake project. Batch ingestion from BoardGameGeek, raw XML in Bronze, Parquet transformations in Silver and explicit data-quality checks. Working with local MinIO object storage; orchestration and further layers are planned.",
          architecture: ["BGG API", "Bronze XML", "Silver Parquet", "MinIO"],
          technologies: ["Python", "Pandas", "Parquet", "MinIO"],
          link: "https://github.com/Pedrorocha13/MeepleLake",
          inProgress: true,
        },
        {
          number: "02",
          title: "MusicPulse",
          description:
            "A personal Spotify data pipeline with OAuth ingestion, Python transformations, PostgreSQL staging and dimensional modeling, orchestrated with Apache Airflow. Built to explore listening patterns with SQL.",
          architecture: ["Spotify API", "Python ETL", "PostgreSQL", "Airflow"],
          technologies: ["Python", "SQL", "Airflow", "Docker"],
          link: "https://github.com/Pedrorocha13/MusicPulse",
          inProgress: false,
        },
        {
          number: "03",
          title: "Weather Data Pipeline",
          description:
            "An ETL exercise based on OpenWeather data: extraction, Python transformations and PostgreSQL loading. A compact project for practicing pipeline structure and execution.",
          architecture: ["OpenWeather", "Extract", "Transform", "PostgreSQL"],
          technologies: ["Python", "ETL", "PostgreSQL", "Docker"],
          link: "https://github.com/Pedrorocha13/Weather-Pipeline",
          inProgress: false,
        },
      ],
    },
    experience: {
      label: "EXPERIENCE",
      heading: "A path from software and infrastructure to production data systems.",
      items: [
        {
          period: "JUL 2026 — PRESENT",
          role: "Data Engineer I",
          company: "SEEDUC-RJ",
          description:
            "Maintain batch data flows in Apache NiFi and Airflow; integrate SQL Server with ClickHouse and optimize analytical queries using materialized views. For selected batch-backed dashboards, improvements reduced observed waiting times from 15–20 minutes to nearly immediate results. Rebuild Power BI reports in Apache Superset with CTEs, JOINs and complex aggregations, including education and school-safety indicators.",
          technologies: ["Apache NiFi", "Airflow", "SQL Server", "ClickHouse", "Superset"],
        },
        {
          period: "JUN — DEC 2025",
          role: "Full-Stack Developer / Data Engineer",
          company: "DRIC",
          description:
            "Developed Python/SQL ingestion and transformation pipelines and straightforward analytical dashboards alongside Flask APIs, integrations and AWS EC2 deployments.",
          technologies: ["Python", "SQL", "Flask", "AWS EC2"],
        },
        {
          period: "JUL 2024 — APR 2025",
          role: "Full-Stack Developer",
          company: "Filefy Tecnologia",
          description:
            "Built application features and service integrations with Python, SQL and webhooks, while supporting business rules and reporting workflows.",
          technologies: ["Python", "SQL", "Webhooks", "Power BI"],
        },
        {
          period: "JUL — OCT 2024 · 3-MONTH PROJECT",
          role: "Python Developer",
          company: "STORM Group",
          description:
            "Short-term project alongside Filefy: automated data-processing tasks with Python/Pandas and supported SQL queries and Power BI reporting.",
          technologies: ["Python", "Pandas", "SQL"],
        },
        {
          period: "DEC 2023 — JUN 2024",
          role: "Python Developer",
          company: "DRIC Software",
          description:
            "Developed Flask backends integrated with SQL and NoSQL databases and automated data collection and processing.",
          technologies: ["Python", "Flask", "SQL", "APIs"],
        },
        {
          period: "AUG 2022 — NOV 2023",
          role: "Infrastructure Analyst",
          company: "DRIC Software",
          description:
            "Supported Linux infrastructure across AWS, Azure and GCP and automated operational tasks using Python.",
          technologies: ["Linux", "AWS", "Azure", "GCP"],
        },
      ],
    },
    stack: {
      label: "STACK",
      groups: [
        { category: "CORE", description: "Languages and foundations", technologies: ["Python", "SQL", "Pandas"] },
        { category: "PIPELINES", description: "Production orchestration & integration", technologies: ["Apache NiFi", "Apache Airflow", "ETL / ELT"] },
        { category: "DATA", description: "Databases and analytics", technologies: ["SQL Server", "ClickHouse", "PostgreSQL", "Apache Superset"] },
        { category: "PLATFORM", description: "Development and delivery", technologies: ["Docker", "Linux", "Git", "AWS EC2", "MinIO (project)"] },
      ],
      learning: "Currently exploring: Spark / PySpark, lakehouse formats and streaming architectures.",
    },
    contact: {
      label: "CONTACT",
      headline: ["Let's build something", "with data."],
      description: "Interested in data engineering, Python or analytics? Let's talk about thoughtful, reliable systems.",
    },
  },
  pt: {
    nav: ["Sobre", "Projetos", "Experiência", "Stack", "Contato"],
    hero: {
      eyebrow: "PEDRO ROCHA — ENGENHEIRO DE DADOS",
      headline: ["Construo sistemas de dados", "que fazem sentido."],
      description:
        "Da ingestão e orquestração às análises rápidas e confiáveis. Uma base em desenvolvimento de software, hoje aplicada à engenharia de dados.",
      projects: "Ver projetos",
    },
    about: {
      label: "SOBRE",
      headline: ["Engenharia de software", "encontra engenharia de dados."],
      lead: "Gosto de entender o sistema inteiro, não apenas a consulta que roda dentro dele.",
      paragraphs: [
        "Comecei em infraestrutura e desenvolvimento, trabalhando com Python, APIs, bancos de dados e automação. Essa base me levou à engenharia de dados: construir e manter pipelines confiáveis.",
        "Hoje, na SEEDUC-RJ, trabalho com NiFi e Airflow, integração SQL Server–ClickHouse, materialized views e relatórios no Apache Superset. Valorizo confiabilidade, manutenção simples e a experiência de quem utiliza os dados.",
      ],
      focuses: ["PIPELINES", "PERFORMANCE SQL", "QUALIDADE DE DADOS", "ANALYTICS"],
    },
    projects: {
      label: "PROJETOS",
      heading: "Projetos com código funcionando, não só diagramas de arquitetura.",
      code: "Ver código",
      statusInProgress: "EM DESENVOLVIMENTO",
      items: [
        {
          number: "01", title: "MeepleLake",
          description:
            "Projeto de Data Lake de jogos de tabuleiro. Ingestão em lotes da BoardGameGeek, XML bruto na Bronze, transformações Parquet na Silver e validações de qualidade. Armazenamento local com MinIO; orquestração e novas camadas estão no planejamento.",
          architecture: ["BGG API", "Bronze XML", "Silver Parquet", "MinIO"],
          technologies: ["Python", "Pandas", "Parquet", "MinIO"],
          link: "https://github.com/Pedrorocha13/MeepleLake", inProgress: true,
        },
        {
          number: "02", title: "MusicPulse",
          description:
            "Pipeline pessoal do Spotify com ingestão OAuth, transformações em Python, staging no PostgreSQL e modelagem dimensional, orquestrado pelo Apache Airflow. Criado para explorar hábitos musicais com SQL.",
          architecture: ["Spotify API", "Python ETL", "PostgreSQL", "Airflow"],
          technologies: ["Python", "SQL", "Airflow", "Docker"],
          link: "https://github.com/Pedrorocha13/MusicPulse", inProgress: false,
        },
        {
          number: "03", title: "Weather Data Pipeline",
          description:
            "Exercício de ETL com dados da OpenWeather: extração, transformação em Python e carga no PostgreSQL. Projeto compacto para praticar estrutura e execução de pipelines.",
          architecture: ["OpenWeather", "Extract", "Transform", "PostgreSQL"],
          technologies: ["Python", "ETL", "PostgreSQL", "Docker"],
          link: "https://github.com/Pedrorocha13/Weather-Pipeline", inProgress: false,
        },
      ],
    },
    experience: {
      label: "EXPERIÊNCIA",
      heading: "Da infraestrutura e desenvolvimento aos sistemas de dados em produção.",
      items: [
        {
          period: "JUL 2026 — ATUAL", role: "Engenheiro de Dados I", company: "SEEDUC-RJ",
          description:
            "Sustento fluxos batch em Apache NiFi e Airflow; integro SQL Server ao ClickHouse e otimizo consultas com materialized views. Em painéis específicos, os ajustes reduziram a espera observada de 15–20 minutos para resultados praticamente imediatos, ainda em batch. Migro relatórios Power BI para Apache Superset com CTEs, JOINs e agregações complexas, incluindo indicadores educacionais e de violência escolar.",
          technologies: ["Apache NiFi", "Airflow", "SQL Server", "ClickHouse", "Superset"],
        },
        {
          period: "JUN — DEZ 2025", role: "Desenvolvedor Fullstack / Engenheiro de Dados", company: "DRIC",
          description:
            "Desenvolvi pipelines simples de ingestão e transformação com Python/SQL e dashboards analíticos, além de APIs Flask, integrações e deploy na AWS EC2.",
          technologies: ["Python", "SQL", "Flask", "AWS EC2"],
        },
        {
          period: "JUL 2024 — ABR 2025", role: "Desenvolvedor Fullstack", company: "Filefy Tecnologia",
          description:
            "Desenvolvi funcionalidades e integrações de aplicações com Python, SQL e webhooks, apoiando regras de negócio e fluxos de relatórios.",
          technologies: ["Python", "SQL", "Webhooks", "Power BI"],
        },
        {
          period: "JUL — OUT 2024 · PROJETO DE 3 MESES", role: "Desenvolvedor Python", company: "STORM Group",
          description:
            "Projeto temporário em paralelo à Filefy: automatização de tarefas de processamento com Python/Pandas e apoio a consultas SQL e relatórios Power BI.",
          technologies: ["Python", "Pandas", "SQL"],
        },
        {
          period: "DEZ 2023 — JUN 2024", role: "Desenvolvedor Python", company: "DRIC Software",
          description:
            "Desenvolvi backends Flask integrados a bancos SQL e NoSQL e automatizei coleta e processamento de dados.",
          technologies: ["Python", "Flask", "SQL", "APIs"],
        },
        {
          period: "AGO 2022 — NOV 2023", role: "Analista de Infraestrutura", company: "DRIC Software",
          description:
            "Atuei na sustentação de infraestrutura Linux em AWS, Azure e GCP e na automação de rotinas com Python.",
          technologies: ["Linux", "AWS", "Azure", "GCP"],
        },
      ],
    },
    stack: {
      label: "TECNOLOGIAS",
      groups: [
        { category: "BASE", description: "Linguagens e fundamentos", technologies: ["Python", "SQL", "Pandas"] },
        { category: "PIPELINES", description: "Orquestração e integração em produção", technologies: ["Apache NiFi", "Apache Airflow", "ETL / ELT"] },
        { category: "DADOS", description: "Bancos e análise", technologies: ["SQL Server", "ClickHouse", "PostgreSQL", "Apache Superset"] },
        { category: "PLATAFORMA", description: "Desenvolvimento e entrega", technologies: ["Docker", "Linux", "Git", "AWS EC2", "MinIO (projeto)"] },
      ],
      learning: "Em estudo: Spark / PySpark, formatos lakehouse e arquiteturas de streaming.",
    },
    contact: {
      label: "CONTATO",
      headline: ["Vamos construir algo", "com dados."],
      description: "Engenharia de dados, Python ou analytics? Gosto de conversar sobre sistemas bem pensados e confiáveis.",
    },
  },
} as const;
