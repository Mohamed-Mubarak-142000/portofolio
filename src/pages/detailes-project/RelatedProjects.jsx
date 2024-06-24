import TitleSection from "../../components/common/TitleSection";
import OneProject from "../../components/projects/OneProject";

const RelatedProjects = ({ projectRelated }) => {
  return (
    <div>
      <TitleSection title={"related projects"} />
      <div className="flex items-center xs:justify-center flex-wrap md:justify-start gap-10 my-10">
        {projectRelated.map((pro) => {
          return <OneProject pro={pro} key={pro.id} />;
        })}
      </div>
    </div>
  );
};

export default RelatedProjects;
