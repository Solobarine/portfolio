import languages from "../Data/languages";
import frontend from "../Data/frontend";
import backend from "../Data/backend";
import testLibrariesAndOthers from "../Data/testLibrariesAndOthers";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div className="w-full">
      <h1
        className="text-3xl overflow-hidden font-bold text-center py-6 pt-24"
        id="skills"
      >
        My Skills
      </h1>
      <div className="p-2 flex items-center flex-wrap justify-around gap-16">
        <div className="p-3 border rounded-lg border-emerald-500 bg-gray-100 shadow-lg shadow-slate-500 w-full grow max-w-[25em]">
          <h2 className="text-lg pb-2 font-bold">Languages</h2>
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
        <div className="p-3 border rounded-lg border-emerald-500 bg-gray-100 shadow-lg shadow-slate-500 grow w-full max-w-[25em]">
          <h2 className="text-lg pb-2 font-bold">Frontend</h2>
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
        <div className="p-3 border rounded-lg border-emerald-500 bg-gray-100 shadow-lg shadow-slate-500 grow max-w-[25em]">
          <h2 className="text-lg pb-2 font-bold">Backend</h2>
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
        <div className="p-3 border rounded-lg border-emerald-500 bg-gray-100 shadow-lg shadow-slate-500 grow w-full min-w-[12em] max-w-[25em]">
          <h2 className="text-lg pb-2 font-bold">Testing and Others</h2>
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
