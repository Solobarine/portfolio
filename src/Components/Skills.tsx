import languages from "../Data/languages";
import frontend from "../Data/frontend";
import backend from "../Data/backend";
import testLibrariesAndOthers from "../Data/testLibrariesAndOthers";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div className="w-full py-20">
      <h1
        className="text-3xl sm:text-5xl overflow-hidden font-semibold text-center py-6 mb-6"
        id="skills"
      >
        My Skills
      </h1>
      <div className="p-2 flex items-center flex-wrap justify-center gap-16 sm:px-32">
        <div className="p-3 border rounded-lg border-emerald-500 bg-gray-100 shadow-lg shadow-slate-400 w-full grow sm:max-w-[20em]">
          <h2 className="text-lg pb-2 font-semibold">Languages</h2>
          <hr className="border-emerald-500" />
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
        <div className="p-3 border rounded-lg border-emerald-500 bg-gray-100 shadow-lg shadow-slate-400 grow w-full sm:max-w-[20em]">
          <h2 className="text-lg pb-2 font-semibold">Frontend</h2>
          <hr className="border-emerald-500" />
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
              )
            )}
          </div>
        </div>
        <div className="p-3 border rounded-lg border-emerald-500 bg-gray-100 shadow-lg shadow-slate-400 grow sm:max-w-[20em]">
          <h2 className="text-lg pb-2 font-semibold">Backend</h2>
          <hr className="border-emerald-500" />
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
        <div className="p-3 border rounded-lg border-emerald-500 bg-gray-100 shadow-lg shadow-slate-400 grow w-full min-w-[12em] sm:max-w-[20em]">
          <h2 className="text-lg pb-2 font-semibold">Testing and Others</h2>
          <hr className="border-emerald-500" />
          <div className="skills">
            {testLibrariesAndOthers.map((tech) => (
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
