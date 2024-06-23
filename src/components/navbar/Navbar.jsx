import { useEffect, useState } from "react";
import NavbarResponsive from "./NavbarResponsive";
import "./Navbar.css";
import UlLinks from "./UlLinks";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [scrollVal, setScrollVal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollVal(window.scrollY >= 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      style={{
        backgroundImage: `${
          scrollVal
            ? "linear-gradient(318deg, #9066dd -12.31%, #fff0 97.92%), linear-gradient(#160040, #160040)"
            : "none"
        }`,
        backgroundSize: "100% 100%",
        transition: "box-shadow 0.3s ease",
      }}
      className={`h-20 flex z-50 items-center xs:justify-between lg:justify-evenly xs:px-5 fixed top-0 left-0 w-full `}
    >
      {/**logo */}
      <Link to="/">
        <h3 className="font-medium">
          <span className="text-primaryText">
            Mo.Mubarak<span className="text-[18px] animate-pulse">👨‍💻</span>
          </span>
        </h3>
        <span className="text-xs capitalize text-gray-500 animate-pulse">
          software engineering
        </span>
      </Link>
      {/**ul list */}
      <ul className="nav-links hidden  lg:flex lg:items-center lg:justify-center md:gap-0 lg:gap-0  ">
        <UlLinks />
      </ul>
      <NavbarResponsive />
    </nav>
  );
};

export default Navbar;
