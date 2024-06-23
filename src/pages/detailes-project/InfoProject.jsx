const InfoProject = ({ project }) => {
  return (
    <>
      <div className="xs:flex-col xs:items-start xs:gap-5 flex md:flex-row md:items-center md:justify-around">
        <div>
          <span className="text-secondaryText capitalize text-[20px]">
            project name:
          </span>
          <h1 className="text-primaryText text-[22px] font-semibold">
            {project.name}
          </h1>
        </div>

        <div>
          <span className="text-secondaryText capitalize text-[20px]">
            project Category:
          </span>
          <h1 className="text-primaryText text-[22px] font-semibold">
            {project.category}
          </h1>
        </div>
      </div>

      <div className="xs:w-[95%] md:w-[85%] my-5">
        <span className="text-secondaryText capitalize text-[20px]">
          project Description:
        </span>
        <h1 className="text-primaryText text-[18px] ">{project.description}</h1>
      </div>
    </>
  );
};

export default InfoProject;
