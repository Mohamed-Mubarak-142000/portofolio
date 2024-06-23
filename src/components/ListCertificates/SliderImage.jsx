// SliderImage.js

import { AnimatePresence, motion } from "framer-motion";

const SliderImage = ({ certificate, isActive }) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="absolute top-0 left-0 w-full h-full flex items-center xs:flex-col lg:flex-row"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          <div className="xs:w-full md:w-[50%] xs:h-[70%] lg:h-full">
            <img
              src={certificate.image}
              alt={`Slide ${certificate.type}`}
              className="w-full h-full object-fill rounded-l-lg"
            />
          </div>
          <div className="p-4 text-left">
            <h2 className=" xs:text-[25px] lg:text-[30px] text-primaryText capitalize">
              {certificate.type}
            </h2>
            <h3 className="xs:text-[18px] lg:text-[25px] text-primaryText capitalize">
              {certificate.track}
            </h3>
            <p className="xs:text-[16px] lg:text-[22px] text-secondaryText capitalize">
              {certificate.from}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SliderImage;
