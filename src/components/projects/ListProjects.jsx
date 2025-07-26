import { data } from "../../assets/data/data";
import TitleSection from "../common/TitleSection";
import OneProject from "./OneProject";

const ListProjects = () => {
  return (
    <div className="project xs:w-[90%] lg:w-[80%] mx-auto">
      <TitleSection title={"All Projects"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20 ">
        {data.map((pro) => {
          return <OneProject key={pro.id} pro={pro} />;
        })}
      </div>
    </div>
  );
};

export default ListProjects;
