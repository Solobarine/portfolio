import { VerticalTimeline } from "react-vertical-timeline-component";
import Position from "../Components/Position";
import experience from "../Data/experience";

const Experience = () => {
  return (
    <div className="px-2 pt-10" id="experience">
      <h2 className="text-3xl font-bold py-3 text-center pt-16">Experience</h2>
      <div className="experience flex items-start justify-center flex-wrap gap-4">
        <VerticalTimeline lineColor="#cdc">
          {experience.map((data, index) => (
            <Position key={index} data={data} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
