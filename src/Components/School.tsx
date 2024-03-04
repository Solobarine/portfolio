import { useAnimation, useInView } from "framer-motion";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { useEffect, useRef } from "react";

interface SchoolProps {
  id: number;
  institution: string;
  logo: string;
  dateStarted: string;
  dateEnded: string;
  location: string;
  course: string;
  degree: string;
  highlights: string[];
}

const Icon = ({ logo, institution }: { logo: string; institution: string }) => {
  return <img src={logo} alt={institution} />;
};

const School = ({ data }: { data: SchoolProps }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [ref, inView, controls]);

  return (
    <VerticalTimelineElement
      ref={ref}
      date={`${data.dateStarted} - ${data.dateEnded}`}
      icon={<Icon logo={data.logo} institution={data.institution} />}
    >
      <div className="p-2 rounded-lg bg-gray-300 px-3 py-6 grow transition-all duration-500 ease-in hover:bg-emerald-200 hover:shadow-md">
        <h2 className="text-base font-semibold">{data.institution}</h2>
        <h6 className="font-semibold">{data.location}</h6>
        <div className="flex items-center justify-between py-1">
          <h3 className="font-semibold">{data.course}</h3>
          <h4 className="font-semibold">{data.degree}</h4>
        </div>
        <ul className="list-disc list-inside grid gap-2 text-sm">
          {data.highlights.map((highlight) => (
            <li key={highlight} className="text-justify">
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

export default School;
