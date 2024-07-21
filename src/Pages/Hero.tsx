import Wormhole from "../3d/Scenes/Wormhole";
import Socials from "../Components/Socials";

const Hero = () => {
  return (
    <div className="relative">
      <Wormhole />
      <div
        className="py-10 px-2 sm:pl-32 min-h-[70dvh] sm:min-h-screen w-full absolute top-0"
        id="hero"
      >
        <div className="z-10 mt-[15em] sm:mt-0">
          <h1 className="text-2xl sm:text-6xl font-bold pt-20 py-2 text-stone-800">
            Hello, I'm <br />
            Solomon <span className="text-emerald-700">Akpuru</span>
          </h1>
          <h1 className="text-2xl sm:text-3xl font-bold text-stone-800">
            I build Full Stack Applications
          </h1>
          <small className="font-semibold sm:block text-slate-800 text-xl pt-4">
            I am a Software Developer adept in <br /> Creating Memorable Digital
            Experiences.
          </small>
          <div className="grid mt-2 gap-2 py-2">
            <small className="mt-3 text-lg font-semibold italic">
              Let's Build Something Today.
            </small>
            <a
              href="/downloadables/solly_resume.pdf"
              download
              className="bg-sky-500 text-white font-semibold block w-fit px-4 py-3 rounded-lg"
            >
              Download My Resume
            </a>
          </div>
        </div>
        <Socials customStyles="z-20 text-xl sm:text-3xl sm:absolute sm:left-7 sm:top-0 sm:flex sm:flex-col sm:min-h-screen sm:justify-center gap-2 text-green-800" />
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
