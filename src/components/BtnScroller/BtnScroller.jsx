import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { HiArrowUpCircle } from "react-icons/hi2";

const BtnScroller = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: true });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      title="Scroll to top"
      className={`fixed bottom-4 right-4 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <HiArrowUpCircle className="w-10 h-10 text-bgColorBtn hover:scale-110 transition-transform" />
    </button>
  );
};

export default BtnScroller;
