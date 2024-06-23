const VideoProject = ({ videoProject }) => {
  return (
    <div className=" xs:w-[90%] md:w-[70%] mx-auto">
      <video
        width="100%"
        height="350"
        controls
        className="shadow-lg rounded-md"
      >
        <source src={videoProject} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoProject;
