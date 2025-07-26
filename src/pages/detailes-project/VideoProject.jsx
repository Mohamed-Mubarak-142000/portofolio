const VideoProject = ({ videoProject, imageProject }) => {
  if (videoProject) {
    return (
      <video
        src={videoProject}
        controls
        muted
        className="w-full h-[500px] rounded-md object-cover"
      />
    );
  }

  if (imageProject && imageProject.length > 0) {
    return (
      <img
        src={imageProject[0].image}
        alt="project"
        className="w-2/3 mx-auto h-[600px] rounded-md object-fit"
      />
    );
  }

  return (
    <div className="w-full h-[500px] bg-gray-300 rounded-md flex items-center justify-center text-gray-700">
      No media available
    </div>
  );
};

export default VideoProject;
