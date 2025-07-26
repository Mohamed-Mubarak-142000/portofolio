import { motion } from "framer-motion";

const TitleSection = ({ title }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center mb-10">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide text-secondaryText relative inline-block pb-2"
      >
        {title}
        <span className="block h-[3px] w-16 bg-secondaryText mt-2 mx-auto rounded-full" />
      </motion.h2>
    </div>
  );
};

export default TitleSection;
