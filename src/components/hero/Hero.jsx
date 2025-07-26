import TextHero from "./TextHero";
import ImageHero from "./ImageHero";
const Hero = () => {
  const visible = { opacity: 1, y: 0, transition: { duration: 1, delay: 2 } };

  return (
    <div className="home xs:mt-20 lg:mt-32">
      <div className="relative min-h-[80vh] xs:flex-col-reverse xs:gap-2 xs:mt-10 md:mt-0 md:flex-row flex items-center justify-center md:gap-20 p-5">
        <TextHero visible={visible} />
        <ImageHero />
      </div>
    </div>
  );
};

export default Hero;
