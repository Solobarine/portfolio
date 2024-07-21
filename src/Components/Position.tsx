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
  return <img src={logo} alt={company} className="object-cover" />;
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
      ref={ref}
      date={`${data.dateStarted} - ${data.dateEnded}`}
      icon={<Icon logo={data.logo} company={data.company} />}
      iconStyle={{
        overflow: "hidden",
        backgroundColor: data.color ? data.color : "#ccc",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div className="rounded-lg transition-all p-2 duration-500 ease-in grow">
        <a
          href={data.website}
          target="_blank"
          className="text-base font-semibold"
        >
          {data.company}
        </a>
        <h4 className="text-base pt-1 font-semibold">{data.location}</h4>
        <h5 className="font-bold pb-1 m-0">{data.jobTitle}</h5>
        <ul className="list-disc list-inside grid gap-2 text-sm mt-5">
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

export default Position;
