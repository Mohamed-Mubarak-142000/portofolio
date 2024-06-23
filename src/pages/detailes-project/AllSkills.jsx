const AllSkills = ({ project }) => {
  return (
    <div className="xs:w-[95%] md:w-[85%] my-5">
      <span className="text-secondaryText capitalize text-[20px]">
        project Skills:
      </span>
      <div className="flex xs:justify-center md:items-start md:justify-start flex-wrap md:flex-row gap-5 my-2">
        {project.technologySkills.map((skill) => {
          return (
            <div
              key={skill.id}
              className="border border-secondaryText xs:w-[180px] md:w-[200px] capitalize text-primaryText hover:bg-secondaryText cursor-pointer rounded-2xl p-2"
            >
              {skill.nameSkill}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
