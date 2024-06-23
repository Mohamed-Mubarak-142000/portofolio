import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../assets/data/data";
import Navbar from "../../components/navbar/Navbar";
import AllSkills from "./AllSkills";
import InfoProject from "./InfoProject";
import RelatedProjects from "./RelatedProjects";
import VideoProject from "./VideoProject";

const DetailProject = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [projectRelated, setProjectRelated] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const dataProject = data.find((pro) => pro.id === +id);
    setProjectRelated(() =>
      data.filter(
        (proRelated) =>
          proRelated.category.toLowerCase() ===
          dataProject.category.toLowerCase()
      )
    );
    if (dataProject) {
      setProject(dataProject);
      setError(null);
    } else {
      setError("Project not found");
      setProject(null);
    }
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        overflow: "hidden",
        backgroundImage:
          "linear-gradient(318deg, #9066dd -12.31%, #fff0 97.92%), linear-gradient(#160040, #160040)",
        backgroundSize: "100% 100%",
      }}
      className="min-h-screen "
    >
      <Navbar />
      <div className="xs:w-[90%] md:w-[80%] mx-auto my-20">
        <VideoProject videoProject={project.video} />
        <div className="my-10 ">
          <InfoProject project={project} />
          <AllSkills project={project} />
        </div>
      </div>

      <div className="xs:w-[90%] md:w-[80%] mx-auto my-20">
        <RelatedProjects projectRelated={projectRelated} />
      </div>
    </div>
  );
};

export default DetailProject;
