const Skill = ({
  name,
  icon,
  image,
}: {
  name: string;
  icon?: string;
  image?: string;
}) => {
  return (
    <div className="group relative overflow-hidden">
      {/* Background gradient that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-400 dark:to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

      {/* Main card */}
      <div className="relative flex items-center gap-4 p-4 rounded-xl border border-neutral-200 dark:border-none bg-white/80 dark:bg-neutral-700/80 backdrop-blur-sm hover:border-neutral-300 hover:shadow-lg hover:shadow-neutral-200/50 transition-all duration-300 min-w-[12rem] group-hover:-translate-y-1">
        {/* Icon/Image container */}
        <div className="relative flex-shrink-0">
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-600 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
            {icon ? (
              <i
                className={`${icon} text-2xl text-neutral-600 group-hover:text-blue-600 transition-colors duration-300`}
              ></i>
            ) : (
              <img
                src={
                  image ||
                  "/placeholder.svg?height=32&width=32&query=skill icon"
                }
                alt={`${name} icon`}
                className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            )}
          </div>

          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
        </div>

        {/* Text content */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-200 group-hover:text-neutral-900 transition-colors duration-300 truncate">
            {name}
          </p>

          {/* Subtle underline that appears on hover */}
          <div className="h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-1 rounded-full"></div>
        </div>

        {/* Arrow indicator */}
        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          <svg
            className="w-4 h-4 text-neutral-400 group-hover:text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Skill;
