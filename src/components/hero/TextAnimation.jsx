import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

const TextAnimation = ({ visible }) => {
  const title =
    "Hi 👋, my name is Mohamed Mubarak. I work as a Frontend Developer React js @Innovatek.";

  const characterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const titleChars = useMemo(
    () =>
      title.split("").map((char, index) => ({
        char,
        id: `${char}-${index}`,
      })),
    [title]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (visible) {
      setCurrentIndex(0); // Reset on re-entry

      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) =>
          prev === title.length - 1 ? title.length - 1 : prev + 1
        );
      }, 200); // faster animation

      return () => clearInterval(intervalRef.current);
    } else {
      clearInterval(intervalRef.current);
    }
  }, [visible, title.length]);

  return (
    <motion.div className="w-full flex flex-col gap-5">
      <motion.h1 className="xs:text-[20px] md:text-[2rem] text-primaryText leading-relaxed">
        {titleChars.map(({ char, id }, index) => (
          <motion.span
            key={id}
            variants={characterVariants}
            initial="hidden"
            animate={visible && index <= currentIndex ? "visible" : "hidden"}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  );
};

export default TextAnimation;
