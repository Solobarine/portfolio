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
    title: "Rental Property Platform",
    imageURI: "/rental_platform.avif",
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
    id: 2,
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
    id: 3,
    title: "Art E-commerce Platform",
    imageURI: "/art_ecommerce_platform.avif",
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
