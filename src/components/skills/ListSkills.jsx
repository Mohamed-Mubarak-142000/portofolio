/* eslint-disable react/jsx-key */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import {
  SiAxios,
  SiExpress,
  SiJavascript,
  SiJsonwebtokens,
  SiMaterialdesign,
  SiPrisma,
  SiReacthookform,
  SiReactquery,
  SiRedux,
  SiTypescript,
  SiZod,
} from "react-icons/si";
import { BsBootstrapFill, BsFiletypeScss } from "react-icons/bs";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { CgFramer } from "react-icons/cg";
import { DiMongodb, DiResponsive } from "react-icons/di";
// import TitleSection from "../common/TitleSection";
import { TbBrandSocketIo } from "react-icons/tb";

const settings = {
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 0,
  cssEase: "linear",
  pauseOnHover: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const skills = [
  { icon: <FaHtml5 />, label: "HTML5" },
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <FaCss3 />, label: "CSS3" },
  { icon: <BsBootstrapFill />, label: "Bootstrap" },
  { icon: <FaReact />, label: "React" },
  { icon: <SiRedux />, label: "Redux" },
  { icon: <BsFiletypeScss />, label: "SCSS" },
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <RiNextjsFill />, label: "Next.js" },
  { icon: <RiTailwindCssFill />, label: "Tailwind" },
  { icon: <CgFramer />, label: "Framer Motion" },
  { icon: <SiExpress />, label: "Express.js" },
  { icon: <DiMongodb />, label: "MongoDB" },
  { icon: <SiReactquery />, label: "React Query" },
  { icon: <SiZod />, label: "Zod" },
  { icon: <SiMaterialdesign />, label: "Material UI" },
  { icon: <SiJsonwebtokens />, label: "JWT" },
  { icon: <SiReacthookform />, label: "React Hook Form" },
  { icon: <DiResponsive />, label: "Responsive Design" },
  { icon: <SiAxios />, label: "Axios" },
  { icon: <TbBrandSocketIo />, label: "Socket.IO" },
  { icon: <SiPrisma />, label: "Prisma" },
];

const ListSkills = () => {
  return (
    <section className="py-10">
      {/* <TitleSection title="technology skills" /> */}
      <div className="mt-10">
        <Slider {...settings}>
          {skills.map((skill, i) => (
            <div key={i} className="px-2">
              <div className="w-24 h-28 md:w-36 md:h-36 flex flex-col items-center justify-center bg-white dark:bg-slate-800 rounded-xl shadow-md text-primaryText">
                <div className="text-4xl">{skill.icon}</div>
                <p className="mt-2 text-sm text-center font-medium">
                  {skill.label}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ListSkills;
