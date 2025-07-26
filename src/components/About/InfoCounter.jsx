import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";

const InfoCounter = ({ startText, endText, number }) => {
  const ref = useRef(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [displayCount, setDisplayCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Update displayed count when motion value changes
  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayCount(latest);
    });
    return () => unsubscribe();
  }, [rounded]);

  // Intersection Observer callback
  const handleIntersection = useCallback(
    ([entry], observer) => {
      if (entry.isIntersecting && !hasAnimated) {
        animate(count, +number, { duration: 5 });
        setHasAnimated(true);
        observer.unobserve(entry.target);
      }
    },
    [count, number, hasAnimated]
  );

  // Set up Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });
    const el = ref.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [handleIntersection]);

  return (
    <div
      ref={ref}
      className="w-[280px] h-[170px] p-3 rounded flex justify-center items-center text-primaryText"
      style={{
        backgroundImage:
          "linear-gradient(268.87deg,#8854e15e 0.14%,#8854e13c 99.81%)",
      }}
    >
      <motion.h1 className="text-[25px] uppercase text-center leading-snug">
        {startText}
        <br />
        {displayCount}
        <br />
        {endText}
      </motion.h1>
    </div>
  );
};

export default InfoCounter;
