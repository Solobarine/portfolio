import { Link, useParams } from "react-router-dom";
import fullstack from "../Data/Projects/fullstack";
import NotFound from "./NotFound";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import ImageCarousel from "../Components/ImageCaurosel";

export default function ProjectPage() {
  const { id } = useParams();
  const project = fullstack.find((project) => project.id == Number(id));

  if (!project) return <NotFound />;

  return (
    <div className="space-y-12">
      <div className="relative h-96 w-full overflow-y-hidden">
        <div className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
            <Link to="/#projects" className="inline-flex items-center mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to all projects
            </Link>
            <h1 className="text-4xl font-bold sm:text-5xl">{project.name}</h1>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-9">
        {/* Carousel */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <ImageCarousel images={project.images} interval={4000} />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl"
        >
          {project.description}
        </motion.p>

        {/* Features */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Features</h2>
          <ul className="list-disc ml-6 space-y-1 text-neutral-600 dark:text-neutral-300">
            {project.features.map((feature) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {feature}
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Languages</h2>
          <div className="flex flex-wrap gap-4 items-center">
            {project.languages.map((lang) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-800 px-4 py-2 rounded-lg shadow"
              >
                {lang.icon ? (
                  <i className={`${lang.icon} text-2xl`} />
                ) : (
                  <img
                    src={lang.image}
                    alt={lang.name}
                    className="w-6 h-6 object-contain"
                  />
                )}
                <span className="text-sm">{lang.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Frameworks & Tools */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Frameworks & Tools</h2>
          <div className="flex flex-wrap gap-4 items-center">
            {project.frameworksAndTools.map((tool) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-800 px-4 py-2 rounded-lg shadow"
              >
                {tool.icon ? (
                  <i className={`${tool.icon} text-2xl`} />
                ) : (
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-6 h-6 object-contain"
                  />
                )}
                <span className="text-sm">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Links */}
        {!project.redacted && (
          <section>
            <h2 className="text-xl font-semibold mb-3">Links</h2>
            <div className="flex gap-4">
              {project.links.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 bg-sky-600 text-white px-5 py-2 rounded-md hover:bg-sky-700 transition"
                >
                  {link.name}
                  <ExternalLink size={16} />
                </motion.a>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
