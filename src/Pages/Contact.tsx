const Contact = () => {
  return (
    <div className="p-2 bg-zinc-200 py-20" id="contact">
      <h1 className="text-3xl sm:text-5xl font-semibold text-center mb-6">
        Contact Me
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="w-full grow max-w-[30em] shrink">
          <p className="text-xl mt-4">
            I'm passionate about building beautiful and functional web
            applications. Feel free to reach out if you have any questions or
            would like to discuss your web development needs.
          </p>
          <div className="py-4 divide divide-emerald-400 font-semibold">
            <a
              href="https://linkedin.com/in/solomon-akpuru"
              className="flex items-center p-2 gap-1 text-lg"
            >
              <i className="devicon-linkedin-plain colored text-xl"></i>
              <p className=" hover:text-emerald-600 transition-all duration-500 ease-in hover:font-bold">
                /in/solomon-akpuru
              </p>
            </a>
            <a
              href="https://twitter.com/SolomonAkpuru"
              className="flex items-center p-2 gap-1 text-lg"
            >
              <i className="fa-brands fa-x-twitter text-xl"></i>
              <p className=" hover:text-emerald-600 transition-all duration-500 ease-in hover:font-bold">
                @SolomonAkpuru
              </p>
            </a>
            <a
              href="https://wellfound.com/u/solomon-akpuru"
              className="flex items-center p-2 gap-1 text-lg"
            >
              <i className="fa-brands fa-angellist text-xl"></i>
              <p className=" hover:text-emerald-600 transition-all duration-500 ease-in hover:font-bold">
                /u/solomon-akpuru
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
