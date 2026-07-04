import { ProjectInterface } from "../../types/project";

const fullstack: ProjectInterface[] = [
  {
    id: 0,
    name: "Toucan",
    description: "A Realtime Posts and Messaging Platform",
    features: [
      "User Authentication",
      "User Authorization",
      "Websockets for Posts",
      "Comments and Replies",
    ],
    images: [
      "https://i.postimg.cc/mkLR6tgW/Screenshot-2025-08-07-210323.png",
      "https://i.postimg.cc/YSx60mb5/feed.avif",
      "https://i.postimg.cc/k5CN7yFN/chats.avif",
    ],
    languages: [
      {
        name: "TypeScript",
        icon: "devicon-typescript-plain colored",
      },
      {
        name: "Elixir",
        icon: "devicon-elixir-plain colored",
      },
    ],
    frameworksAndTools: [
      {
        name: "React",
        icon: "devicon-react-original colored",
      },
      { name: "Redux", icon: "devicon-redux-plain colored" },
      {
        name: "Phoenix",
        icon: "devicon-phoenix-plain-wordmark colored",
      },
      {
        name: "PostgreSQL",
        icon: "devicon-postgresql-plain colored",
      },
      {
        name: "TailwindCSS",
        icon: "devicon-tailwindcss-plain colored",
      },
      {
        name: "JWT",
        image: "/technologies/jwt.png",
      },
    ],
    links: [
      {
        name: "See Demo",
        link: "https://toucan-ten.vercel.app",
      },
      {
        name: "See Code",
        link: "https://github.com/solobarine/toucan",
      },
    ],
    in_progress: true,
    redacted: false,
  },
  {
    id: 1,
    name: "Property Listing",
    description: "An Property Listing App connecting Renters and Agents",
    features: [""],
    images: ["/projects/property-listing/hero.png"],
    languages: [
      { name: "Ruby", icon: "devicon-ruby-plain colored" },
      { name: "Typescript", icon: "devicon-typescript-plain colored" },
    ],
    frameworksAndTools: [
      { name: "Rails", icon: "devicon-rails-plain colored" },
      {
        name: "NextJS",
        icon: "devicon-nextjs-plain colored",
      },

      {
        name: "PostgreSQL",
        icon: "devicon-postgresql-plain colored",
      },
      {
        name: "TailwindCSS",
        icon: "devicon-tailwindcss-plain colored",
      },
      {
        name: "JWT",
        image: "/technologies/jwt.png",
      },
    ],
    links: [],
    in_progress: false,
    redacted: true,
  },
  {
    id: 2,
    name: "RechargePadi",
    description:
      "A Bills Payment Platform for Airtime, Data, Cable and Electricity",
    features: [
      "User Authentication",
      "Airtime and Data Purchase",
      "Cable and Electricity Purchase",
      "Transaction History",
    ],
    images: [
      "/projects/rechargepadi/rechargepadi.png",
      "https://i.postimg.cc/pd4ngH0K/Screenshot-2025-07-26-011944.png",
      "https://i.postimg.cc/jjszm1wd/Screenshot-2025-07-26-012009.png",
      "https://i.postimg.cc/BQH7Gd6n/Screenshot-2025-07-26-012115.png",
    ],
    languages: [
      { name: "Ruby", icon: "devicon-ruby-plain colored" },
      { name: "Typescript", icon: "devicon-typescript-plain colored" },
    ],
    frameworksAndTools: [
      { name: "Rails", icon: "devicon-rails-plain colored" },
      {
        name: "NuxtJS",
        icon: "devicon-nuxtjs-plain colored",
      },
      {
        name: "PostgreSQL",
        icon: "devicon-postgresql-plain colored",
      },
      {
        name: "TailwindCSS",
        icon: "devicon-tailwindcss-plain colored",
      },
      {
        name: "JWT",
        image: "/technologies/jwt.png",
      },
    ],
    links: [
      {
        name: "See Demo",
        link: "https://rechargepadi.netlify.app",
      },
      {
        name: "See Code",
        link: "https://github.com/Solobarine/recharge_padi",
      },
    ],
    in_progress: false,
    redacted: true,
  },
  {
    id: 3,
    name: "Arts E-Commerce Store",
    description: "An Online Arts Store",
    features: [],
    images: ["/projects/arts-store/products.png"],
    languages: [
      {
        name: "PHP",
        icon: "devicon-php-plain colored",
      },
      {
        name: "Typescript",
        icon: "devicon-typescript-plain colored",
      },
    ],
    frameworksAndTools: [
      {
        name: "NuxtJS",
        icon: "devicon-nuxtjs-plain colored",
      },
      {
        name: "Pinia",
        image: "/technologies/pinia.svg",
      },
      {
        name: "Laravel",
        icon: "devicon-laravel-plain colored",
      },
      {
        name: "PostgreSQL",
        icon: "devicon-postgresql-plain colored",
      },
      {
        name: "TailwindCSS",
        icon: "devicon-tailwindcss-plain colored",
      },
    ],
    links: [],
    in_progress: false,
    redacted: true,
  },
  {
    id: 4,
    name: "RoadMaster",
    description: "An Inventory Management Application for Car Dealerships",
    features: [
      "User Authentication",
      "User Authorization",
      "Car Inventory Management",
      "Test Drives Co-Ordination",
      "Reviews and Ratings",
    ],
    images: ["/projects/roadmaster/roadmaster.png"],
    languages: [
      {
        name: "Ruby",
        icon: "devicon-ruby-plain colored",
      },
      {
        name: "Typescript",
        icon: "devicon-typescript-plain colored",
      },
    ],
    frameworksAndTools: [
      {
        name: "Rails",
        icon: "devicon-rails-plain colored",
      },
      {
        name: "NuxtJS",
        icon: "devicon-nuxtjs-plain colored",
      },
      {
        name: "PostgreSQL",
        icon: "devicon-postgresql-plain colored",
      },
      {
        name: "TailwindCSS",
        icon: "devicon-tailwindcss-plain colored",
      },
      {
        name: "JWT",
        image: "/technologies/jwt.png",
      },
    ],
    links: [
      {
        name: "See Demo",
        link: "#",
      },
      {
        name: "See Code",
        link: "https://github.com/solobarine/roadmaster",
      },
    ],
    in_progress: true,
    redacted: false,
  },
  {
    id: 5,
    name: "Bite Express",
    description: "A Food Ordering Site connecting Food Lovers with Restaurants",
    features: [
      "User and Restaurant Authentication",
      "User and Restaurant Authorization",
      "Asset Upload and Storage",
      "Meals Creation",
      "Likes",
      "Reviews and Ratings",
    ],
    images: [
      "/projects/bite_express/landing.avif",
      "/projects/bite_express/settings.avif",
      "/projects/bite_express/dashboard.avif",
      "/projects/bite_express/restaurant.png",
    ],
    languages: [
      {
        name: "Ruby",
        icon: "devicon-ruby-plain colored",
      },
      {
        name: "TypeScript",
        icon: "devicon-typescript-plain colored",
      },
    ],
    frameworksAndTools: [
      {
        name: "Rails",
        icon: "devicon-rails-plain colored",
      },
      {
        name: "React",
        icon: "devicon-react-original colored",
      },
      {
        name: "Redux",
        icon: "devicon-redux-plain colored",
      },
      {
        name: "PostgreSQL",
        icon: "devicon-postgresql-plain colored",
      },
      {
        name: "TailwindCSS",
        icon: "devicon-tailwindcss-plain colored",
      },
      {
        name: "JWT",
        image: "/technologies/jwt.png",
      },
    ],
    links: [
      {
        name: "See Demo",
        link: "#",
      },
      {
        name: "See Code",
        link: "https://github.com/solobarine/bite_express",
      },
    ],
    in_progress: false,
    redacted: false,
  },
  {
    id: 6,
    name: "Flymate",
    description: "A Travel Landing Page with 3D elements.",
    features: ["3D scenes", "3D models", "Animatioons"],
    images: [
      "/projects/flymate/hero.png",
      "/projects/flymate/destinations.png",
      "/projects/flymate/call_to_action.png",
    ],
    languages: [
      {
        name: "TypeScript",
        icon: "devicon-typescript-plain colored",
      },
      {
        name: "CSS",
        icon: "devicon-css-plain colored",
      },
    ],
    frameworksAndTools: [
      {
        name: "NextJS",
        icon: "devicon-nextjs-plain colored",
      },
      {
        name: "ThreeJS",
        icon: "devicon-threejs-original colored",
      },
      {
        name: "TailwindCSS",
        icon: "devicon-tailwindcss-plain colored",
      },
    ],
    links: [
      {
        name: "See Demo",
        link: "https://flymate-omega.vercel.app/",
      },
      {
        name: "See Code",
        link: "https://github.com/Solobarine/flymate",
      },
    ],
    in_progress: false,
    redacted: false,
  },
  {
    id: 7,
    name: "Truckstop",
    description: "An ELD Logger for Truckers with map route and directions",
    features: ["Maps"],
    images: [
      "https://i.postimg.cc/c4PBb6hn/Screenshot-2025-11-10-094710.png",
      "https://i.postimg.cc/3JkZ12gs/Screenshot-2025-11-10-094549.png",
      "https://i.postimg.cc/rFD9j51c/Screenshot-2025-11-10-094623.png",
    ],
    languages: [
      {
        name: "TypeScript",
        icon: "devicon-typescript-plain colored",
      },
      {
        name: "Python",
        icon: "devicon-python-plain colored",
      },
    ],
    frameworksAndTools: [
      {
        name: "React",
        icon: "devicon-react-original colored",
      },
      {
        name: "Django RestFramework",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-original.svg",
      },
      {
        name: "TailwindCSS",
        icon: "devicon-tailwindcss-plain colored",
      },
    ],
    links: [
      {
        name: "See Demo",
        link: "https://truckstop-phi.vercel.app",
      },
      {
        name: "See Code",
        link: "https://github.com/Solobarine/truckstop",
      },
    ],
    in_progress: false,
    redacted: false,
  },
  ];

export default fullstack;
