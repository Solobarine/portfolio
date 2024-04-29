import School from "../Components/School";
import education from "../Data/education";
import { VerticalTimeline } from "react-vertical-timeline-component";

const Education = () => {
  return (
    <div className="py-20 px-2 sm:px-32 bg-zinc-300" id="education">
      <h2 className="text-3xl sm:text-5xl font-semibold text-center py-6">
        Education
      </h2>

      <VerticalTimeline>
        {education.map((data) => (
          <School key={data.id} data={data} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Education;
