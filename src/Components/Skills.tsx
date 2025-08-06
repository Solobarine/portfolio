import languages from "../Data/languages";
import frontend from "../Data/frontend";
import backend from "../Data/backend";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div className="w-full py-20">
      <h1
        className="text-3xl sm:text-5xl overflow-hidden font-semibold text-center p-2"
        id="skills"
      >
        My Skills
      </h1>
      <p className="text-center max-w-lg mx-auto mb-6">
        A showcase of the tools, technologies, and frameworks I specialize in.
      </p>

      <div className="p-2 sm:px-10 space-y-6">
        <div className="p-4 rounded-lg shadow-md hover:shadow-lg bg-neutral-100 dark:bg-neutral-800 w-full">
          <h2 className="text-2xl pb-2 font-semibold">Languages</h2>
          <hr className="border-blue-400" />
          <div className="skills">
            {languages.map((language) => (
              <Skill
                key={language.id}
                name={language.name}
                icon={language.icon}
              />
            ))}
          </div>
        </div>
        <div className="p-4 rounded-lg shadow-md hover:shadow-lg bg-neutral-100 dark:bg-neutral-800 grow w-full">
          <h2 className="text-2xl pb-2 font-semibold">Frontend</h2>
          <hr className="border-blue-400" />
          <div className="skills">
            {frontend.map((tech) =>
              tech.icon ? (
                <Skill
                  key={tech.id}
                  icon={tech.icon as string}
                  name={tech.name}
                />
              ) : (
                <Skill key={tech.id} image={tech.image} name={tech.name} />
              ),
            )}
          </div>
        </div>
        <div className="p-4 rounded-lg shadow-md hover:shadow-lg bg-neutral-100 dark:bg-neutral-800 grow w-full">
          <h2 className="text-2xl pb-2 font-semibold">Backend</h2>
          <hr className="border-blue-400" />
          <div className="skills">
            {backend.map((tech) => (
              <Skill
                key={tech.id}
                icon={tech.icon as string}
                name={tech.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
