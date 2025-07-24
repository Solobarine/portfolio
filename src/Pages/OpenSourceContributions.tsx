type Contribution = {
  title: string;
  description: string;
  contributionUrl: string;
  techStack: string[];
};

const contributions: Contribution[] = [
  {
    title: "Openstack Manila",
    description:
      "Developed a patch to prevent resetting the state of active replicas in OpenStack Manila, effectively safeguarding against data loss and enhancing data integrity",
    contributionUrl: "https://review.opendev.org/c/openstack/manila/+/899320",
    techStack: ["Openstack", "Linux", "Python", "Django"],
  },
  {
    title: "Wikimedia Edu Dashboard",
    description:
      "Improve SEO of EduDashboard by adding descriptive titles to pages.",
    contributionUrl:
      "https://github.com/WikiEducationFoundation/WikiEduDashboard/pull/5977",
    techStack: ["Ruby on Rails", "React", "PostgreSQL", "Jest"],
  },
  {
    title: "Openstack Manila",
    description:
      "Updated documentation to replace deprecatd Manila CLI commands with Openstack CLI commands.",
    contributionUrl: "https://review.opendev.org/c/openstack/manila/+/945963",
    techStack: ["Linux", "Python", "Django", "Openstack"],
  },
  {
    title: "Wikimedia Edu Dashboard",
    description: "Wrote tests for actions, validating code functionality.",
    contributionUrl:
      "https://github.com/WikiEducationFoundation/WikiEduDashboard/pull/6285",
    techStack: ["Ruby on Rails", "React", "PostgreSQL", "Jest"],
  },
];

export default function OpenSourceContributions() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-5xl font-bold mb-10 text-center">
        Open Source Contributions
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contributions.map((contrib, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-neutral-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6"
          >
            <h3 className="text-xl font-semibold text-neutral-600 dark:text-white mb-2">
              {contrib.title}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-4">
              {contrib.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {contrib.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={contrib.contributionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium text-sky-600 hover:underline"
            >
              View Contribution →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
