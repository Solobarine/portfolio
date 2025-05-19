import { Link } from "react-router-dom";
import caseStudies from "../Data/caseStudies";

const CaseStudies = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 pt-14 bg-neutral-100 dark:bg-inherit">
      <div className="px-4 py-6 sm:px-0">
        <h2 className="mt-5 mb-20 text-3xl sm:text-5xl font-semibold text-center">
          Case Studies
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              to={`/case-studies/${study.id}`}
              className="bg-white dark:bg-zinc-800 rounded-lg overflow-hidden"
            >
              <div className="overflow-hidden shadow transition-all duration-300 hover:shadow-lg">
                <div className="relative h-60 w-full overflow-hidden">
                  <img src={study.imageURI} alt="Case Study Image" />
                </div>
                <div className="p-6">
                  <h3 className="mt-3 text-xl font-semibold">{study.title}</h3>
                  <p className="mt-2 text-sm">{study.summary}</p>
                  <div className="mt-4 flex items-center">
                    <span className="text-sm font-medium">Read case study</span>
                    <svg
                      className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
