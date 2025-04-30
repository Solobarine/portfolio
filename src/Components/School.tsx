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
  return (
    <img
      src={logo}
      alt={institution}
      loading="lazy"
      className="h-10 w-10 object-cover rounded-full border-2 border-sky-500"
    />
  );
};

const School = ({ data }: { data: SchoolProps }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  const theme = localStorage.getItem("theme") as "light" | "dark";

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <VerticalTimelineElement
      date={`${data.dateStarted} - ${data.dateEnded}`}
      dateClassName="dark:text-gray-100"
      icon={<Icon logo={data.logo} institution={data.institution} />}
      iconStyle={{
        backgroundColor: "#fff",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        display: "grid",
        placeItems: "center",
      }}
      contentStyle={{
        background: theme === "light" ? "#fff" : "#222",
        color: "#333",
        borderRadius: "10px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        padding: "20px",
      }}
      contentArrowStyle={{ borderRight: "7px solid #f9f9f9" }}
    >
      <div
        ref={ref}
        className="transition-all duration-500 ease-in-out transform hover:scale-105"
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          {data.institution}
        </h2>
        <h6 className="text-sm font-medium text-gray-500 dark:text-gray-100 mt-1">
          {data.location}
        </h6>
        <div className="flex items-center justify-between flex-wrap text-sm py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-100">
            {data.course}
          </h3>
          <h4 className="text-base font-medium text-gray-600 dark:text-gray-100">
            {data.degree}
          </h4>
        </div>
        <ul className="list-disc list-inside space-y-2 mt-4 text-gray-600 dark:text-gray-100 text-sm">
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

export default School;
