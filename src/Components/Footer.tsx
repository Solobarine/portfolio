import Socials from "./Socials";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="p-2 py-12 sm:px-20 bg-emerald-300">
      <div className="mb-10">
        <p className="text-4xl font-semibold text-justify">Solomon Akpuru</p>
        <Socials customStyles="text-xl my-10" />
      </div>
      <hr />
      <div className="flex mt-10 items-center gap-3 justify-between flex-wrap">
        <p className="text-center font-semibold">
          Copyright &copy; {date.getFullYear()} Solomon Akpuru. All Rights
          Reserved
        </p>
        <div className="flex items-center gap-4 text-nowrap font-semibold">
          <p className="text-sm">Privacy Policy</p>
          <p className="text-sm">Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
