import ContactForm from "../Components/ContactForm";

const Contact = () => {
  return (
    <div className="p-2 bg-gray-200 py-20" id="contact">
      <h1 className="text-3xl sm:text-5xl font-semibold text-center mb-6">
        Contact Me
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="w-full grow max-w-[25em] shrink">
          <h3 className="text-xl sm:text-2xl font-semibold">Get in Touch</h3>
          <p className="text-sm mt-4">
            Reach Out to Me if you have a project you need completing or you
            have a project in mind.
          </p>
          <div className="py-4 divide divide-emerald-400 font-semibold">
            <a
              href="https://linkedin.com/in/solomon-akpuru"
              className="flex items-center p-2 gap-1 text-lg"
            >
              <i className="devicon-linkedin-plain colored"></i>
              <p className=" hover:text-emerald-600 transition-all duration-500 ease-in hover:font-bold">
                /in/solomon-akpuru
              </p>
            </a>
            <a
              href="https://twitter.com/SolomonAkpuru"
              className="flex items-center p-2 gap-1 text-lg"
            >
              <i className="fa-brands fa-x-twitter"></i>{" "}
              <p className=" hover:text-emerald-600 transition-all duration-500 ease-in hover:font-bold">
                @SolomonAkpuru
              </p>
            </a>
            <a
              href="https://wellfound.com/u/solomon-akpuru"
              className="flex items-center p-2 gap-1 text-lg"
            >
              <i className="fa-brands fa-angellist"></i>
              <p className=" hover:text-emerald-600 transition-all duration-500 ease-in hover:font-bold">
                /u/solomon-akpuru
              </p>
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
