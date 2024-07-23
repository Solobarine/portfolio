import { useState } from "react";
import { Link } from "react-router-dom";

interface ProjectProps {
  id: number;
  name: string;
  description: string;
  features: string[];
  images: string[];
  languages: { name: string; icon?: string; image?: string }[];
  frameworksAndTools: { name: string; icon?: string; image?: string }[];
  links: { name: string; link: string }[];
}

const ProjectPreview = ({ data }: { data: ProjectProps }) => {
  const [name, setName] = useState<{
    isHovered: boolean;
    index: null | number;
  }>({ isHovered: false, index: null });
  return (
    <div className="p-3 border-lg w-full max-w-[25em] shadow-lg shadow-slate-300 rounded-md">
      <img
        src={data.images[0]}
        alt=""
        className="w-full aspect-video"
        loading="lazy"
      />
      <h2 className="font-2xl font-semibold">{data.name}</h2>
      <p className="mt-2 text-sm">{data.description}</p>
      <div className="flex items-center gap-2 mt-2 flex-wrap">
        {data.frameworksAndTools.map((framework, index) => (
          <div
            key={index}
            onMouseEnter={() => setName({ isHovered: true, index })}
            onMouseLeave={() => setName({ isHovered: false, index: null })}
            className="flex items-center w-fit flex-wrap px-4 py-2 rounded-xl border-2 border-sky-300 shadow-lg bg-gray-200 cursor-pointer transition duration-500"
          >
            {framework.icon ? (
              <i className={`${framework.icon} text-xl`}></i>
            ) : (
              <img
                src={framework.image}
                alt={framework.name}
                className="h-6"
                loading="lazy"
              />
            )}
            <p
              className={`text-sm font-semibold transition duration-500 ${
                name.isHovered && name.index === index
                  ? "scale-100 ml-3"
                  : "scale-0 ml-0"
              }`}
            >
              {name.isHovered && name.index === index ? framework.name : null}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-6 mt-2 py-1">
        {data.links.map(
          (link, index) =>
            link.name === "See Code" && (
              <Link
                key={index}
                to={link.link}
                target="_blank"
                className="text-sm font-bold text-blue-500"
              >
                {link.name}
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default ProjectPreview;
