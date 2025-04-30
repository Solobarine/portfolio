const Contact = () => {
  return (
    <div className="bg-zinc-200 dark:bg-neutral-800 py-20 p-4" id="contact">
      <h1 className="text-3xl sm:text-5xl font-semibold text-center mb-10">
        Contact Me
      </h1>
      <div className="flex flex-wrap justify-center gap-10">
        <div className="w-full max-w-[30em]">
          <p className="text-lg dark:text-gray-100 leading-relaxed">
            I'm passionate about building beautiful and functional web
            applications. Feel free to reach out if you have any questions or
            would like to discuss your web development needs. Let’s connect and
            create something amazing together!
          </p>
          <div className="py-6 border-t border-gray-300 mt-6">
            <h3 className="text-xl font-semibold mb-4">Connect with me:</h3>
            <div className="flex flex-col space-y-3">
              <a
                href="https://linkedin.com/in/solomon-akpuru"
                className="flex items-center gap-3 text-lg hover:text-emerald-600 transition-all duration-300 ease-in-out"
              >
                <i className="devicon-linkedin-plain colored text-2xl"></i>
                <span className="hover:underline">/in/solomon-akpuru</span>
              </a>
              <a
                href="https://twitter.com/SolomonAkpuru"
                className="flex items-center gap-3 text-lg hover:text-emerald-600 transition-all duration-300 ease-in-out"
              >
                <i className="fa-brands fa-x-twitter text-2xl"></i>
                <span className="hover:underline">@SolomonAkpuru</span>
              </a>
              <a
                href="https://wellfound.com/u/solomon-akpuru"
                className="flex items-center gap-3 text-lg hover:text-emerald-600 transition-all duration-300 ease-in-out"
              >
                <i className="fa-brands fa-angellist text-2xl"></i>
                <span className="hover:underline">/u/solomon-akpuru</span>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[30em] bg-white dark:bg-neutral-600 shadow-lg p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Send me a message
          </h3>
          <p className="text-gray-600 dark:text-gray-100 text-sm mb-6">
            I'd love to hear from you! Whether you have a question or just want
            to say hi, I'll try my best to get back to you.
          </p>
          {/* Placeholder for form */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
