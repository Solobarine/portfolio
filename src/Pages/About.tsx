const About = () => {
  return (
    <div className="py-20 px-6 sm:px-10" id="about">
      <div className="max-w-lg w-full">
        <h1 className="text-3xl sm:text-5xl font-semibold mb-4">About Me</h1>
        <p>
          Hi, I’m Solomon Akpuru, a software developer passionate about building
          impactful digital solutions. I specialize in backend and full-stack
          development, with experience designing scalable architectures,
          crafting intuitive APIs, and integrating machine learning into
          real-world applications. Beyond coding, I am commited to personal
          growth, open to learning and enjoy taking on challenges that help me
          improve my skills and broaden my perspectives.
        </p>
      </div>
      <div className="max-w-lg w-full ml-auto mt-8">
        <h1 className="text-3xl sm:text-5xl font-semibold mb-4">What I Do</h1>
        <p>
          <b>🚀 Full-Stack Development:</b> I build robust, scalable
          applications using technologies like Ruby on Rails, Laravel, Elixir
          Phoenix, React, Vue.js, and Nuxt.js — delivering fast, secure, and
          user-friendly digital experiences.
        </p>
        <p className="my-2">
          <b>⚙️ Backend Architecture & APIs</b> I design clean, scalable backend
          systems and REST APIs, often integrating authentication (Devise, JWT,
          OAuth), payment systems (NowPayments, Flutterwave), and real-time
          features like chat and notifications.
        </p>
        <p>
          <b>🛠 SaaS Platform Development:</b> I develop SaaS solutions, from
          hospital management platforms to VTU services, with multi-tenancy,
          secure data handling, and seamless user experiences.
        </p>
      </div>
    </div>
  );
};

export default About;
