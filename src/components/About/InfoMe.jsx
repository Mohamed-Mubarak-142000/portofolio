/* eslint-disable react/no-unescaped-entities */
import TitleSection from "../common/TitleSection";

const InfoMe = () => {
  return (
    <div>
      <TitleSection title={"about me"} />
      <p className="text-[16px] lg:text-[20px] px-5 xs:leading-6 lg:leading-8 text-primaryText xs:my-3 lg:my-5 w-full">
        Hello, my name is Mohamed Mubarak , and I’m a Front-End Developer
        specializing in building responsive, user-friendly web applications With
        a Bachelor's degree in Computer Science from Menoufia University. My
        skills lies in technologies like : •Frontend Mastery: React.js, Redux
        Toolkit, TypeScript, Tailwind CSS, Bootstrap, React Bootstrap, Styled
        Components, React Skeleton, Zod Validation, Next.js ,Zustand, React
        Query, •Backend Acumen: Express.js, MongoDB,prisma , postgres •Secure
        Authentication: Firebase, Clerk Auth, •API Development: Skilled in
        designing and implementing robust RESTful API endpoints. I pride myself
        on my problem-solving skills and my collaborative spirit, thriving in
        team environments where effective communication and adaptability are
        key. My passion for learning and staying current with the latest
        industry trends drives me to continuously improve and deliver
        high-quality solutions.
      </p>
    </div>
  );
};

export default InfoMe;
