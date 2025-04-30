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
    <div className="flex items-center gap-3 p-3 rounded-md min-w-[10em]">
      <div className="w-10 h-10 flex items-center justify-center text-sky-600 group-hover:text-sky-700 transition-colors duration-300">
        {icon ? (
          <i className={`${icon} text-2xl`}></i>
        ) : (
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="h-8 object-contain group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
        )}
      </div>
      <p className="text-sm font-semibold transition-colors duration-300">
        {name}
      </p>
    </div>
  );
};

export default Skill;
