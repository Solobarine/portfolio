import fullstack from "../Data/Projects/fullstack";
import ProjectPreview from "../Components/ProjectPreview";

const Works = () => {
  return (
    <>
      <section className="sm:px-3 pt-16" id="projects">
        <h2 className="text-3xl sm:text-5xl font-semibold text-center p-2">
          Best Projects
        </h2>
        <p className="text-center max-w-lg mx-auto mb-6">
          A showcase of my best personal and professional projects, highlighting
          the technologies I work with and the problems I solve.
        </p>
        <div className="flex items-center gap-10 justify-center flex-wrap pb-10">
          {fullstack.map((data, index) => (
            <ProjectPreview key={index} data={data} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Works;
