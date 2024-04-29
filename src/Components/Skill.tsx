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
    <div className="flex items-center gap-2 p-2 rounded-md min-w-[10em]">
      {icon ? (
        <i className={`${icon} text-2xl`}></i>
      ) : (
        <img src={image} alt={name} className="h-8" />
      )}
      <p className="text-sm font-semibold">{name}</p>
    </div>
  );
};

export default Skill;
