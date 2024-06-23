const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage:
          "linear-gradient(318deg, #9066dd -12.31%, #fff0 97.92%), linear-gradient(#160040, #160040)",
        backgroundSize: "100% 100%",
      }}
      className="text-primaryText z-[1000] py-1 px-20"
    >
      <div className=" mx-auto flex flex-wrap  justify-between items-center">
        <div className="text-sm xs:w-full lg:w-[50%] flex justify-center lg:justify-start">
          &copy; {new Date().getFullYear()} Mo.Mubarak.All rights reserved.
        </div>
        <div className="flex space-x-4 xs:w-full lg:w-[50%] justify-center lg:justify-end">
          <a
            href="https://github.com/Mohamed-Mubarak-142000"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-mubarak-142317215/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100088453234469"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
