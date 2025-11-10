import { Link } from "react-router-dom";
import ImageCarousel from "./ImageCaurosel";

interface ProjectProps {
  id: number;
  name: string;
  description: string;
  features: string[];
  images: string[];
  languages: { name: string; icon?: string; image?: string }[];
  frameworksAndTools: { name: string; icon?: string; image?: string }[];
  links: { name: string; link: string }[];
  in_progress: boolean;
  redacted: boolean;
}

const ProjectPreview = ({ data }: { data: ProjectProps }) => {
  return (
    <div className="w-full max-w-sm bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden transition hover:shadow-xl">
      <div className="relative">
        <ImageCarousel images={data.images} />
        {data.in_progress && (
          <span className="absolute bottom-1 right-1 bg-sky-500 text-white text-xs font-semibold px-3 py-1 rounded-full mt-3 ml-auto">
            In Progress
          </span>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold mt-2 text-neutral-800 dark:text-white hover:underline hover:text-sky-600">
          <Link to={`/projects/${data.id}`}>{data.name}</Link>
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-2">
          {data.description}
        </p>

        <div className="flex flex-wrap gap-3 mt-2">
          {data.frameworksAndTools.map((tool, index) => (
            <div
              key={index}
              className="group flex items-center bg-neutral-100 dark:bg-neutral-800 border border-sky-300 rounded-full px-2 py-1 shadow-sm hover:shadow-md transition"
            >
              {tool.icon ? (
                <i className={`${tool.icon} text-lg text-sky-600`}></i>
              ) : (
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="h-5 w-5 object-contain"
                  loading="lazy"
                />
              )}
              <span className="ml-2 text-sm font-medium text-neutral-700 dark:text-neutral-200">
                {tool.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex gap-4 justify-center">
          {data.redacted ? (
            <p className="text-red-500 text-lg font-semibold">Redacted</p>
          ) : (
            data.links.map((link, index) => (
              <a
                key={index}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-sky-600 hover:underline"
              >
                {link.name}
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
