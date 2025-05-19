import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = ({
  title = "Page",
  redirectRoute = "/",
  redirectRouteName = "Home",
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-800 dark:to-black flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full text-center">
        <div className="relative w-72 mx-auto mb-8">
          <img
            src="/lost.svg"
            alt={`${title} not found illustration`}
            className="object-contain w-full"
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
          <span className="inline-block animate-bounce delay-100">4</span>
          <span className="inline-block animate-bounce delay-200">0</span>
          <span className="inline-block animate-bounce delay-300">4</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-neutral-800 dark:text-neutral-200 mb-6">
          {`${title} Not Found`}
        </h2>

        <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-xl mx-auto">
          {`We couldn't find the ${title.toLowerCase()} you're looking for. It might have been
          moved, deleted, or perhaps it never existed in the first place.`}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={redirectRoute}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-700 hover:bg-neutral-800 transition-colors duration-300"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            {`Back to ${redirectRouteName}`}
          </Link>
        </div>
      </div>

      <div className="mt-16 w-full max-w-2xl">
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-500 dark:via-neutral-300 to-transparent"></div>

        <div className="mt-8 text-center">
          <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-300 mb-4">
            Looking for something specific?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto text-neutral-700 dark:text-white">
            <Link
              to="/case-studies"
              className="px-4 py-2 text-sm hover:text-neutral-900 hover:dark:text-neutral-400 hover:underline transition-colors"
            >
              All Case Studies
            </Link>
            <Link
              to="/#projects"
              className="px-4 py-2 text-sm hover:text-neutral-900 hover:dark:text-neutral-400 hover:underline transition-colors"
            >
              My Best Works
            </Link>
            <Link
              to="/#skills"
              className="px-4 py-2 text-sm hover:text-neutral-900 hover:dark:text-neutral-400 hover:underline transition-colors"
            >
              My Skills
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-200"></div>
    </div>
  );
};

export default NotFound;
