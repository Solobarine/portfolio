import School from "../Components/School";
import education from "../Data/education";
import { VerticalTimeline } from "react-vertical-timeline-component";

const Education = () => {
  return (
    <div className="pt-12 px-2" id="education">
      <h2 className="text-3xl font-bold text-center py-6">Education</h2>

      <VerticalTimeline>
        {education.map((data) => (
          <School key={data.id} data={data} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Education;
