import { VerticalTimeline } from "react-vertical-timeline-component";
import Position from "../Components/Position";
import experience from "../Data/experience";

const Experience = () => {
  return (
    <div className="px-2 pt-10 py-20" id="experience">
      <h2 className="text-3xl sm:text-5xl font-semibold py-3 text-center mb-6">
        Experience
      </h2>
      <div className="experience flex items-start justify-center flex-wrap gap-4">
        <VerticalTimeline lineColor="#cdc" layout="2-columns">
          {experience.map((data, index) => (
            <Position key={index} data={data} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
