import services from "../Data/services";

const About = () => {
  return (
    <div
      className="flex flex-wrap lg:flex-nowrap gap-2 bg-zinc-200 py-20 px-4 sm:px-32 gap-y-4"
      id="about"
    >
      <div className="w-full max-w-[30em] mx-auto grow">
        <h2 className="text-3xl sm:text-5xl font-semibold text-center text-nowrap">
          About Me
        </h2>
        <p className="text-justify w-full mt-6 text-base">
          Come explore the realm of web development with me! With a knack for
          crafting intricate web applications and a passion for adhering to
          industry best practices like version control and rigorous testing, I
          promise a journey filled with innovation and excellence. Let's
          collaborate seamlessly, ensuring the best outcomes together.{" "}
        </p>
      </div>
      <div className="p-2 grow-[9999]">
        {services.map((service, item) => (
          <div className="flex p-2 gap-2 items-start mb-10" key={item}>
            <div className="border-2 border-emerald-400 rounded-full bg-white w-10 aspect-square flex-shrink-0 grid place-items-center">
              <i className={`${service.icon} text-lg`}></i>
            </div>
            <div>
              <p className="text-base text-justify font-semibold">
                {service.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
