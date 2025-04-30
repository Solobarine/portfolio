import { VerticalTimeline } from "react-vertical-timeline-component";
import Position from "../Components/Position";
import experience from "../Data/experience";

const Experience = () => {
  return (
    <div className="px-4 py-20 bg-gray-100 dark:bg-neutral-800" id="experience">
      <h2 className="text-4xl sm:text-6xl font-bold py-4 text-center mb-10">
        Experience
      </h2>
      <div className="flex items-start justify-center flex-wrap gap-8">
        <VerticalTimeline lineColor="#0ea5e9" layout="2-columns">
          {experience.map((data, index) => (
            <Position key={index} data={data} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
