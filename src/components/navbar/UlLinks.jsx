import { Link } from "react-scroll";
const UlLinks = ({ styleLink, styleOneLi, toggleBTN }) => {
  return (
    <>
      <li className={styleOneLi}>
        <Link
          onClick={toggleBTN}
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styleLink}
        >
          Home
        </Link>
      </li>
      <li className={styleOneLi}>
        <Link
          onClick={toggleBTN}
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styleLink}
        >
          About
        </Link>
      </li>

      <li className={styleOneLi}>
        <Link
          onClick={toggleBTN}
          activeClass="active"
          to="artical"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styleLink}
        >
          Artical
        </Link>
      </li>
      <li className={styleOneLi}>
        <Link
          onClick={toggleBTN}
          activeClass="active"
          to="project"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styleLink}
        >
          Projects
        </Link>
      </li>

      <li className={styleOneLi}>
        <Link
          onClick={toggleBTN}
          activeClass="active"
          to="certificates"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styleLink}
        >
          Certificates
        </Link>
      </li>
      <button
        type="button"
        className="bg-bgColorBtn py-2 px-6 text-[18px] rounded-md shadow-lg hover:bg-bgColorBtnHover hover:text-primaryText hover:transition hover:duration-150"
      >
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mohamedmubarak142000m@gmail.com&su=Hello%20from%20Portfolio%20Mo.Mubarak%20Frontend%20Developer%20Reactjs%20TypeScript%20Nextjs&body=I%20am%20interested%20in%20discussing%20a%20potential%20opportunity."
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Me
        </a>
      </button>
    </>
  );
};

export default UlLinks;
