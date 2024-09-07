import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

interface ExperienceProps {
  id: number;
  company: string;
  website: string;
  logo: string;
  dateStarted: string;
  color?: string;
  dateEnded: string;
  location: string;
  jobTitle: string;
  highlights: string[];
}

const Icon = ({ logo, company }: { logo: string; company: string }) => {
  return (
    <img src={logo} alt={company} className="object-cover" loading="lazy" />
  );
};

const Position = ({ data }: { data: ExperienceProps }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <VerticalTimelineElement
      date={`${data.dateStarted} - ${data.dateEnded}`}
      icon={<Icon logo={data.logo} company={data.company} />}
      iconStyle={{
        overflow: "hidden",
        backgroundColor: data.color ? data.color : "#0ea5e9",
        display: "grid",
        placeItems: "center",
      }}
      contentStyle={{
        background: "#ffffff",
        color: "#333",
        borderRadius: "10px",
        boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)",
        padding: "20px",
      }}
      contentArrowStyle={{ borderRight: "7px solid #ffffff" }}
    >
      <div
        ref={ref}
        className="transition-all duration-500 ease-in-out transform hover:scale-105"
      >
        <a
          href={data.website}
          target="_blank"
          className="text-2xl font-bold hover:underline hover:text-sky-500 transition-colors duration-500"
        >
          {data.company}
        </a>
        <h4 className="text-sm pt-1 font-semibold text-gray-500">
          {data.location}
        </h4>
        <h5 className="text-xl font-bold text-gray-700 mt-2">
          {data.jobTitle}
        </h5>
        <ul className="list-disc list-inside space-y-2 text-sm mt-4 text-gray-600">
          {data.highlights.map((highlight, index) => (
            <li key={index} className="leading-relaxed">
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};
export default Position;
