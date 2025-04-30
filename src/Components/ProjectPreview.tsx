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
}

const ProjectPreview = ({ data }: { data: ProjectProps }) => {
  return (
    <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-xl shadow-md overflow-hidden transition hover:shadow-xl p-4">
      <img
        src={data.images[0]}
        alt={`${data.name} preview`}
        className="w-full h-48 object-cover rounded-md"
        loading="lazy"
      />

      {data.in_progress && (
        <span className="inline-block bg-sky-500 text-white text-xs font-semibold px-3 py-1 rounded-full mt-3 ml-auto">
          In Progress
        </span>
      )}

      <h2 className="text-2xl font-bold mt-4 text-zinc-800 dark:text-white">
        {data.name}
      </h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2">
        {data.description}
      </p>

      <div className="flex flex-wrap gap-3 mt-4">
        {data.frameworksAndTools.map((tool, index) => (
          <div
            key={index}
            className="group flex items-center bg-zinc-100 dark:bg-zinc-800 border border-sky-300 rounded-full px-3 py-2 shadow-sm hover:shadow-md transition"
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
            <span className="ml-2 text-sm font-medium text-zinc-700 dark:text-zinc-200">
              {tool.name}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-4">
        {data.links.map(
          (link, index) =>
            link.name === "See Code" && (
              <a
                key={index}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-sky-600 hover:underline"
              >
                {link.name}
              </a>
            )
        )}
      </div>
    </div>
  );
};

export default ProjectPreview;
