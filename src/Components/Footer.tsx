import Socials from "./Socials";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="py-12 sm:px-20 bg-sky-800 text-white">
      <div className="mb-10 text-center">
        <p className="text-4xl font-bold mb-6">Solomon Akpuru</p>
        <Socials customStyles="text-2xl flex justify-center gap-6 my-6" />
      </div>
      <hr className="border-gray-500" />
      <div className="flex flex-col sm:flex-row mt-10 items-center justify-between gap-6 text-center sm:text-left">
        <p className="text-lg font-semibold">
          &copy; {date.getFullYear()} Solomon Akpuru. All Rights Reserved.
        </p>
        <div className="flex gap-6 text-sm font-semibold">
          <a
            href="#privacy-policy"
            className="hover:underline transition-all duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#terms-of-service"
            className="hover:underline transition-all duration-300"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
