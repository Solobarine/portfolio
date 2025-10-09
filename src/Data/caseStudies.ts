type CaseStudies = {
  id: number;
  imageURI: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  technologies: string[];
};

const caseStudies: CaseStudies[] = [
  {
    id: 0,
    title: "Crypto Exchange Application",
    imageURI: "/crypto_exchange.avif",
    summary:
      "A Web Applications that enables Users Buy and Sell Cryptocurrencies with ease",
    challenge:
      "A fintech startup required a secure, user-friendly platform for trading cryptocurrencies for cash and vice versa. The goal was to support seamless transactions while ensuring regulatory compliance and user data protection.",
    solution:
      "I designed and developed a crypto exchange platform, implementing features such as real-time trading, secure wallet integration, and multi-currency support. To enhance security, I utilized robust encryption techniques and integrated third-party APIs for payment processing.",
    result:
      "The platform successfully facilitated thousands of transactions with minimal downtime, significantly boosting user engagement and trust. The streamlined process led to a increase of over 36% in daily active users within the first quarter.",
    technologies: ["React", "TypeScript", "Laravel", "PHP", "PostgreSQL"],
  },
  {
    id: 1,
    title: "Toucan - Social Media Application",
    imageURI: "https://i.postimg.cc/k5CN7yFN/chats.avif",
    summary:
      "A web application that enables users to share posts, chat in real time, and interact meaningfully through comments, likes, and reposts — built with Elixir Phoenix, React, and TypeScript.",
    challenge:
      "Modern social platforms amplify noise, reward outrage, and prioritize engagement over genuine connection. Many users feel disconnected, overwhelmed, and unheard. I set out to build a platform that brings back authentic interaction, intentional sharing, and real-time connection — without the toxicity or algorithmic manipulation.",
    solution:
      "I’m developing Toucan, a social media app built with Elixir Phoenix, React, and TypeScript, designed for meaningful engagement. Toucan features real-time private chat, interactive posts (likes, comments, reposts), and customizable light/dark themes — all powered by JWT authentication and Phoenix Channels for instant updates.",
    result:
      "Toucan’s MVP is live in development, already supporting private messaging and social interactions. The next milestone is a personalized feed algorithm that curates content based on relevance, relationships, and interaction patterns — helping users connect meaningfully, not mindlessly.",
    technologies: [
      "Elixir Phoenix",
      "React",
      "Typescript",
      "PostgreSQL",
      "AWS S3",
      "TailwindCSS",
    ],
  },
  {
    id: 2,
    title: "RechargePadi - Bills Payment Platform",
    imageURI: "https://i.postimg.cc/pd4ngH0K/Screenshot-2025-07-26-011944.png",
    summary:
      "A web application that allows users to buy airtime, data, electricity, and TV subscriptions seamlessly using secure payment integrations with VTpass and Flutterwave.",
    challenge:
      "Explore the feasibility of building a lightweight bills payment service for airtime, data, TV, and electricity in a market dominated by Opay and Moniepoint.",
    solution:
      "Developed a full-stack MVP using Ruby on Rails and Nuxt.js, integrated with VTpass and Flutterwave for live transactions, and tested real-time notifications and user flows.",
    result:
      "User research showed strong preference for established platforms. I decided to discontinue development early and pivot insights toward understanding user trust, fintech differentiation, and market saturation in Nigeria’s payment ecosystem.",
    technologies: [
      "NuxtJS",
      "Typescript",
      "Ruby on Rails",
      "TailwindCSS",
      "PostgreSQL",
    ],
  },
  {
    id: 3,
    title: "Rental Property Platform",
    imageURI: "/projects/property-listing/hero.png",
    summary:
      "Building of a Property Rental Platform that led to a 23% decrease in property browsing.",
    challenge:
      "The client aimed to create a digital marketplace where renters could easily find properties and connect with agents, reducing the time spent on property searches.",
    solution:
      "I built a rental property platform with features such as advanced property filtering, agent-renter messaging, and an integrated map view for property locations. The backend was optimized for speed, allowing quick property listing updates and fast search results.",
    result:
      "The platform’s intuitive design and efficient search functionality reduced property browsing time by 23%, leading to a higher rate of successful renter-agent connections.",
    technologies: [
      "Ruby on Rails",
      "TypeScript",
      "NextJS",
      "TailwindCSS",
      "PostgreSQL",
      "WebSockets",
      "AWS S3",
      "PayStack",
    ],
  },
  {
    id: 4,
    title: "Personalized Meals Recommendations Algorithm",
    imageURI: "/meals.jpg",
    summary:
      "A Recommendations Engine that delivers personalized meals suggestions.",
    challenge:
      "A meal delivery app needed to increase user engagement by offering personalized meal suggestions based on dietary preferences and ordering history.",
    solution:
      "I developed an algorithm that analyzes user interactions and order history to generate tailored meal recommendations. Seasonal trends were also incorporated to enhance relevance. The algorithm leveraged machine learning techniques to continuously refine suggestions based on feedback.",
    result:
      "The implementation increased repeat orders by 16%, as users found the personalized suggestions more aligned with their tastes.",
    technologies: [
      "Ruby on Rails",
      "React",
      "TypeScript",
      "PostgreSQL",
      "AWS S3",
    ],
  },
  {
    id: 5,
    title: "Art E-commerce Platform",
    imageURI: "/projects/arts-store/products.png",
    summary:
      "Development of an E-Commerce Platform with Payment integration for Art Sales.",
    challenge:
      "An independent artist wanted to launch an e-commerce platform to sell original artwork and limited-edition prints while offering secure online payments.",
    solution:
      "I built a user-friendly e-commerce platform, integrating Stripe for secure payment processing and implementing a product catalog with high-quality image support. The platform also featured an order tracking system to enhance customer experience.",
    result:
      "The platform’s seamless checkout process and visual appeal contributed to a 60% increase in sales within the first month of launch.",
    technologies: [
      "NuxtJS",
      "Laravel",
      "TypeScript",
      "PHP",
      "TailwindCSS",
      "PostgreSQL",
      "AWS S3",
      "Stripe",
    ],
  },
];

export default caseStudies;
