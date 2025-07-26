import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";

const socialLinks = [
  {
    href: "https://github.com/Mohamed-Mubarak-142000",
    icon: <FaGithub size={30} className="text-primaryText" />,
  },
  {
    href: "https://www.linkedin.com/in/mohamed-mubarak-142317215/",
    icon: <FaLinkedin size={30} className="text-blue-900" />,
  },
  {
    href: "https://www.instagram.com/mohamedmubarak1_4_2000/",
    icon: <FaInstagram size={30} className="text-red-500" />,
  },
  {
    href: "https://www.facebook.com/profile.php?id=100088453234469",
    icon: <FaFacebook size={30} className="text-blue-700" />,
  },
  {
    href: "https://www.freelancer.com/u/mohamed0270",
    icon: <SiFreelancer size={30} className="text-blue-500" />,
  },
];

const SocialMedia = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      {socialLinks.map(({ href, icon }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer transition-transform duration-300 hover:scale-110"
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
