import { items } from "../../assets/data/data";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Training = () => {
  return (
    <section className="py-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold uppercase text-secondaryText mb-10 border-b-4 border-primaryText inline-block">
        Education & Training Experience
      </h2>

      <div className="relative w-full my-10">
        {" "}
        {/* Vertical Line in the center */}
        <div className="absolute left-1/2 top-0 h-full w-[4px] bg-primaryText -translate-x-1/2 z-0"></div>
        <div className="space-y-14 relative z-10">
          {items.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative flex items-start justify-between ${
                  isLeft ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div
                  className="w-[48%] p-5 rounded-lg shadow-md z-10 max-h-60 overflow-y-auto"
                  style={{
                    backgroundImage:
                      "linear-gradient(268.87deg,#8854e15e 0.14%,#8854e13c 99.81%)",
                  }}
                >
                  <h3 className={`text-white ${item.size}`}>{item.title}</h3>
                  {item.description && (
                    <p className="text-white text-sm mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-primaryText rounded-full flex items-center justify-center text-white shadow-md z-20">
                  {index === 0 ? (
                    <FaGraduationCap className="text-sm" />
                  ) : (
                    <FaBriefcase className="text-sm" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Training;
