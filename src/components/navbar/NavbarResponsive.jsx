import { useState } from "react";
import { motion } from "framer-motion";
import { BsList } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import UlLinks from "./UlLinks";

const NavbarResponsive = () => {
  const [open, setOpen] = useState(false);

  const toggleBTN = () => {
    setOpen(!open);
  };
  return (
    <motion.div className=" block lg:hidden ">
      <button type="button" onClick={toggleBTN}>
        {open ? (
          <CgClose size={30} className="text-primaryText" />
        ) : (
          <BsList size={30} className="text-primaryText" />
        )}
      </button>

      <motion.ul
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: open ? "350px" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage:
            "linear-gradient(268.87deg,#59319ebe 0.14%,#7242c6cd 99.81%)",
          backgroundSize: "100% 100%",
        }}
        onClick={toggleBTN}
        className="absolute overflow-hidden top-full left-0 w-full rounded-b-lg shadow-lg flex flex-col items-center gap-2 pt-5"
      >
        <UlLinks
          toggleBTN={toggleBTN}
          styleLink={
            "text-[20px] w-full text-center hover:bg-[#8854e1a9] hover:transition hover:duration-150 cursor-pointer py-2 text-primaryText hover:text-secondaryText"
          }
          styleOneLi={"w-full flex items-center justify-center"}
        />
      </motion.ul>
    </motion.div>
  );
};

export default NavbarResponsive;
