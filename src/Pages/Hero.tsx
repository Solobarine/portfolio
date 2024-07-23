import Space from "../3d/Scenes/Space";
import Socials from "../Components/Socials";

const Hero = () => {
  return (
    <div className="relative">
      <Space />
      <div
        className="py-10 px-2 sm:pl-32 h-full sm:min-h-screen w-full absolute top-0"
        id="hero"
      >
        <div className="z-10 sm:mt-0 h-full flex flex-col justify-between sm:block">
          <div>
            <h1 className="text-4xl sm:text-6xl font-bold pt-10 sm:pt-20 py-2 text-white">
              Hello, I'm <br />
              Solomon <span className="text-sky-500">Akpuru</span>
            </h1>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              I build Full Stack Applications
            </h1>
            <small className="font-semibold text-gray-200 text-xl pt-4 hidden sm:block">
              I am a Software Developer adept in <br /> Creating Memorable
              Digital Experiences.
            </small>
          </div>
          <a
            href="/downloadables/solly_resume.pdf"
            download
            className="bg-sky-500 text-white font-semibold block w-fit px-4 py-3 rounded-lg mt-6"
          >
            Download My Resume
          </a>
        </div>
        <Socials customStyles="z-20 hidden sm: text-xl sm:text-3xl sm:absolute sm:left-7 sm:top-0 sm:flex sm:flex-col sm:min-h-screen sm:justify-center gap-2 text-sky-400" />
        <img
          src="/logo.png"
          alt=""
          className="block absolute -z-10 top-[0%] w-full max-w-[40em] right-0"
        />
        <div className="bg-gray-200 absolute -z-20 inset-0"></div>
      </div>
    </div>
  );
};

export default Hero;
