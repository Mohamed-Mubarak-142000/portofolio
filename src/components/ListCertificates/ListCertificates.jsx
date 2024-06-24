// ListCertificates.js

import { useEffect, useState } from "react";
import { certificate } from "../../assets/data/data";
import TitleSection from "../common/TitleSection";
import SliderImage from "./SliderImage";

const ListCertificates = () => {
  const [current, setCurrent] = useState(0);
  const length = certificate.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [length]);

  return (
    <div className="certificates mb-32 xs:w-[90%] md:w-[80%] mx-auto">
      <TitleSection title={"My Certificates"} />
      <div
        style={{
          backgroundImage:
            " linear-gradient(268.87deg,#8854e15e 0.14%,#8854e13c 99.81%)",
        }}
        className="relative xs:w-[90%] md:w-[70%] mx-auto rounded-lg shadow-md min-h-[450px] my-5"
      >
        {certificate.map((cert, index) => {
          return (
            <SliderImage
              key={cert.id}
              certificate={cert}
              isActive={index === current}
            />
          );
        })}
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center mt-4">
        {certificate.map((_, index) => (
          <div
            key={index}
            className={`h-4 w-4 rounded-full mx-1 ${
              index === current ? "bg-bgColorBtnHover" : "bg-bgColorBtn"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ListCertificates;
