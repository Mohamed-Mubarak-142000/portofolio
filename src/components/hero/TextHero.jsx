/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import cvFile from "../../assets/cvFile.pdf";
import TextAnimation from "./TextAnimation";
import Description from "./description";
const TextHero = ({ visible }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible,
      }}
      className="xs:w-full xs:gap-1 md:w-[40%] flex flex-col gap-5"
    >
      <TextAnimation visible={visible} />
      <Description />
      <a
        href={cvFile}
        download="cvFile.pdf"
        className="bg-bgColorBtn shadow-lg text-secondaryText text-[20px] z-20 hover:text-primaryText p-2 my-8 rounded cursor-pointer hover:bg-bgColorBtnHover transition-colors w-[180px] text-center"
      >
        Download CV
      </a>
    </motion.div>
  );
};

export default TextHero;
