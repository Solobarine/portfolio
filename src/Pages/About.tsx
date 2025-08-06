const About = () => {
  return (
    <section className="py-24 px-6 sm:px-20 bg-gradient-to-br" id="about">
      <div className="max-w-6xl mx-auto">
        {/* About Me Section */}
        <div className="max-w-2xl mb-20">
          <h1 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight">
            About Me
          </h1>
          <p className="text-lg leading-relaxed">
            Hi, I'm <span className="font-semibold">Solomon Akpuru</span>, a
            software engineer focused on building impactful digital products. I
            specialize in backend and full-stack development, with a strong
            track record of designing scalable architectures and developing
            clean, intuitive APIs. I'm deeply committed to continuous growth,
            actively seek out challenging problems, and thrive in environments
            that push me to expand my skills and perspective.
          </p>
        </div>

        {/* What I Do Section */}
        <div className="max-w-2xl ml-auto">
          <h2 className="text-3xl sm:text-5xl font-bold mb-8 leading-tight">
            What I Do
          </h2>

          <div className="space-y-8">
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:shadow-xl transition-shadow">
                  🚀
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Full-Stack Development
                  </h3>
                  <p className="leading-relaxed">
                    I build robust, scalable applications using technologies
                    like Ruby on Rails, Laravel, Elixir Phoenix, React, Vue.js,
                    and Nuxt.js — delivering fast, secure, and user-friendly
                    digital experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:shadow-xl transition-shadow">
                  ⚙️
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Backend Architecture & APIs
                  </h3>
                  <p className="leading-relaxed">
                    I design clean, scalable backend systems and REST APIs,
                    often integrating authentication (JWT, OAuth), payment
                    systems (Stripe, NowPayments, Flutterwave), and real-time
                    features like chat and notifications.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:shadow-xl transition-shadow">
                  🛠
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    SaaS Platform Development
                  </h3>
                  <p className="leading-relaxed">
                    I build SaaS solutions with a focus on multi-tenancy, secure
                    data handling, and seamless user experiences—ranging from
                    management systems to utility service platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
