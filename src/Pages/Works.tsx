import fullstack from "../Data/Projects/fullstack";
import frontend from "../Data/Projects/frontend";
import ProjectPreview from "../Components/ProjectPreview";

const Works = () => {
  return (
    <>
      <section
        className=" w-full max-w-[60em] mx-auto sm:px-3 pt-16"
        id="projects"
      >
        <h2 className="text-3xl sm:text-5xl font-semibold text-center p-2 py-6 mb-6">
          Best Works
        </h2>
        <div className="flex items-center gap-10 justify-center flex-wrap pb-10">
          {fullstack.map((data, index) => (
            <ProjectPreview key={index} data={data} />
          ))}
          {frontend.map((data, index) => (
            <ProjectPreview key={index} data={data} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Works;
