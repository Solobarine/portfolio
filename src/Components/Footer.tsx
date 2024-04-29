import Socials from "./Socials";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="p-2 py-12 sm:px-20 bg-emerald-300">
      <div className="flex flex-wrap items-center justify-between gap-2 gap-y-6">
        <p className="text-4xl font-semibold text-justify">Solomon Akpuru</p>
        <Socials />
      </div>
      <p className="text-center mt-10 font-semibold">
        Copyright &copy; {date.getFullYear()} Solomon Akpuru. All Rights
        Reserved
      </p>
    </footer>
  );
};

export default Footer;
