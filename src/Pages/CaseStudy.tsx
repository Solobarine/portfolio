import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import caseStudies from "../Data/caseStudies";
import NotFound from "./NotFound";

const CaseStudy = () => {
  const { id } = useParams();
  console.log(id);
  const caseStudy = caseStudies.find((study) => study.id.toString() === id);

  if (!caseStudy) {
    return (
      <NotFound
        title="Case Study"
        redirectRoute="/case-studies"
        redirectRouteName="Case Studies"
      />
    );
  }

  return (
    <div className="min-h-screen pt-14">
      <div className="relative h-96 w-full">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
            <Link
              to="/case-studies"
              className="inline-flex items-center text-white hover:text-neutral-200 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to all case studies
            </Link>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              {caseStudy.title}
            </h1>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg prose-neutral max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              The Challenge
            </h2>
            <p>{caseStudy.challenge}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              The Solution
            </h2>
            <p>{caseStudy.solution}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              The Results
            </h2>
            <p>{caseStudy.result}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Technologies Used
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {caseStudy.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block rounded-full bg-neutral-200 dark:bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <div className="mt-12 border-t border-neutral-200 pt-8">
            <Link
              to="/case-studies"
              className="inline-flex items-center text-neutral-900 dark:text-neutral-300 hover:text-neutral-700 dark:hover:text-white font-medium transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to all case studies
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CaseStudy;
