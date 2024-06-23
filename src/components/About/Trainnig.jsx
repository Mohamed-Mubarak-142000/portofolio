import { items } from "../../assets/data/data";

const Training = () => {
  return (
    <section className="my-5 flex flex-col gap-5 items-start">
      <h2 className="border-l-2 rounded-tl-none rounded-br-none rounded-bl-md p-2 mx-2 border-b-2 border-primaryText text-secondaryText uppercase xs:text-[16px] md:text-[22px] font-semibold">
        Education and Training & Experience
      </h2>

      <div className="xs:flex xs:flex-wrap xs:justify-center xs:gap-3 md:hidden md:w-[600px] mx-auto md:space-y-5 my-5">
        {items.map((item, index) => (
          <article
            key={index}
            className="p-5 w-[80%] shadow-md rounded hover:border mx-auto"
            style={{
              backgroundImage:
                "linear-gradient(268.87deg, #8854e15e 0.14%, #8854e13c 99.81%)",
            }}
          >
            <h3
              className={`${item.size} text-secondaryText hover:text-primaryText`}
            >
              {item.title}
            </h3>
          </article>
        ))}
      </div>

      {/************************************* */}

      <div className="hidden md:block border-2 border-secondaryText w-[600px] mx-auto h-[600px] relative rounded-full my-5 ">
        {items.map((item, index) => (
          <article
            key={index}
            className={`${item.classResponsive}`}
            style={{
              backgroundImage:
                "linear-gradient(268.87deg, #8854e15e 0.14%, #8854e13c 99.81%)",
            }}
          >
            <h3 className={`${item.size} text-primaryText`}>{item.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Training;
