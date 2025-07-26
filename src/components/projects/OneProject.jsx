/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const OneProject = ({ pro }) => {
  const hasVideo = pro.video;
  const hasImage = pro.imageProject && pro.imageProject.length > 0;
  const showLiveDemo = pro.liveDemo && pro.linkProject;

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(268.87deg,#8854e15e 0.14%,#8854e13c 99.81%)",
      }}
      className=" h-[500px] flex flex-col shadow-lg rounded"
    >
      <div className="w-full h-[55%] rounded-t-md rounded-b-none overflow-hidden">
        {hasVideo ? (
          <video
            className="w-full h-full rounded-t-md object-cover"
            src={pro.video}
            controls
            muted
          />
        ) : hasImage ? (
          <img
            className="w-full h-full rounded-t-md object-cover"
            src={pro.imageProject[0].image}
            alt="project"
          />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600">
            No Media Available
          </div>
        )}
      </div>

      <div className="w-full h-[10%] line-clamp-1 flex items-start p-2">
        <h1 className="text-primaryText text-[18px] capitalize">{pro.name}</h1>
      </div>

      <div className="w-full h-[18%] flex items-start line-clamp-3 px-2">
        <h1 className="text-[#9f9d9d] text-left text-[15px]">
          {pro.description}
        </h1>
      </div>

      <div className="w-full flex items-center justify-center gap-3 px-5 h-[15%]">
        {showLiveDemo ? (
          <a
            href={pro.linkProject}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 py-3 text-[16px] text-center text-primaryText capitalize bg-bgColorBtnHover hover:bg-bgColorBtn hover:text-secondaryText cursor-pointer hover:rounded-md hover:transition hover:duration-50"
          >
            Live demo
          </a>
        ) : (
          <span
            className="w-1/2 py-3 text-[16px] text-center capitalize bg-gray-400 text-gray-700 cursor-not-allowed rounded"
            title="Live demo not available"
          >
            Live demo
          </span>
        )}

        <Link
          to={`/detail-project/${pro.id}`}
          className="w-1/2 py-3 text-[16px] text-center capitalize bg-bgColorBtn hover:bg-bgColorBtnHover hover:text-primaryText"
        >
          Details more
        </Link>
      </div>
    </div>
  );
};

export default OneProject;
