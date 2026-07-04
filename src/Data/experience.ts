const experience = [
  {
    id: 0,
    company: "Independent Contractor (Freelance)",
    website: "https://solobarine.netlify.app",
    logo: "/logo.png",
    dateStarted: "January 2023",
    dateEnded: "Present",
    jobTitle: "Software Engineer",
    location: "Port Harcourt, Nigeria (Remote)",
    highlights: [
      "Delivered property rental SaaS platform serving 2K+ landlords and tenants, featuring real-time search with 80% faster query performance through optimized indexing and caching strategies",
      "Built crypto-fiat exchange infrastructure processing $30K+ monthly volume across 5+ cryptocurrencies, implementing fraud detection reducing chargebacks.",
      "Architected e-commerce platform for digital art marketplace, integrating Stripe payments and achieving 99.95% transaction success rate with automated reconciliation",
      "Developed a recommendation engine increasing user engagement by 32% through collaborative filtering algorithms analyzing 8K+ user interactions",
    ],
    color: "#ffffff",
  },
  {
    id: 1,
    company: "Digital Factory",
    website: "https://www.dgtl-factory.com",
    logo: "/workplace/dgtf-logo.png",
    dateStarted: "May 2024",
    dateEnded: "January 2025",
    jobTitle: "Web Developer (Contract)",
    location: "Chicago, USA (Remote)",
    color: "#222",
    highlights: [
      "Enhanced UI and implemented new features, driving increased user engagement and overall user satisfaction.",
      "Improved loading times by 24% by implementing image optimization techniques as well as JavaScript thread management.",
      "Modernized the codebase by upgrading deprecated dependencies and replacing unsupported packages with actively maintained alternatives.",
      "Streamlined asset delivery, optimized animations, and resolved site errors , contributing to a 20% increase in website PageScans ratings.",
    ],
  }, 
  {
    id: 2,
    company: "Syntrix",
    website: "",
    logo: "",
    dateStarted: "May 2021",
    dateEnded: "Apr 2023",
    jobTitle: "Software Engineer II",
    location: "Remote",
    color: "#fff",
    highlights: [
      "Developed and shipped new product features in a Django + React application, improving user engagement and overall usability.",

      "Implemented background jobs and automated workflows using Django Q / Celery, ensuring timely execution of recurring and heavy tasks.",

      "Integrated and managed email delivery pipelines, enabling transactional and bulk email notifications with high deliverability.",

      "Enhanced accessibility across the web app (ARIA roles, semantic HTML, contrast adjustments), making the platform compliant with accessibility standards (WCAG).",

      "Containerized services with Docker and set up GitHub Actions for CI/CD, streamlining deployments and reducing release time.",

      "Optimized database queries and schema design in MySQL, improving response times for critical endpoints.",

      "Collaborated with cross-functional teams to refine UI components in React with TailwindCSS, ensuring a consistent design system and responsive layout.",
    ],
  },
  {
    id: 3,
    company: "Syntrix",
    website: "",
    logo: "",
    dateStarted: "Jul 2020",
    dateEnded: "May 2021",
    jobTitle: "Software Engineer I",
    location: "Remote",
    color: "#fff",
    highlights: [
      "Designed and built a real-time chat application with secure private channels using WebSockets, enabling instant communication between users.",

      "Implemented robust authentication and authorization, including OAuth integrations (Google, Facebook, etc.), ensuring secure and seamless logins.",

      "Developed a notifications system (in-app + email), improving user engagement and retention.",

      "Leveraged Sidekiq to manage background jobs such as message delivery, notifications, and scheduled tasks, reducing app latency and improving scalability.",

      "Optimized PostgreSQL queries and introduced Redis caching, cutting down response times on frequently accessed endpoints.",

      "Enhanced UI/UX by building reusable and responsive components with Next.js and Material UI, ensuring a modern and consistent front-end experience.",

      "Collaborated on architecture decisions to improve system scalability and reliability, supporting growing user traffic.",

      "Wrote and maintained RSpec and Jest test suites, improving code reliability and reducing production bugs.",
    ],
  },
  {
    id: 4,
    company: "Network Oil and Gas",
    website: "https://noandgltd.com",
    logo: "/workplace/nog.jpg",
    dateStarted: "May 2021",
    dateEnded: "August 2021",
    jobTitle: "Production Intern",
    location: "Benin City, Nigeria",
    color: "#fff",
    highlights: [
      "Actively contributed to the meticulous record-keeping and documentation of operational activities, maintenance logs, and safety reports, ensuring a comprehensive and organized repository of essential information.",

      "Played a pivotal role in the precision calibration of flow meters and various equipment, actively ensuring their accurate functionality to maintain precise measurements and enhance operational efficiency.",

      "Collected and recorded vital data concerning the flow of hydrocarbons, encompassing meticulous documentation of flow rates, pressure measurements, and temperature readings to support informed decision-making and operational optimization.",
    ],
  },
];

export default experience;
