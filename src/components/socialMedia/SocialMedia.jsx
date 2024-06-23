import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <a
        href="https://github.com/Mohamed-Mubarak-142000"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={25} className="text-primaryText cursor-pointer" />
      </a>

      <a
        href="https://www.linkedin.com/in/mohamed-mubarak-142317215/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={25} className="text-blue-600 cursor-pointer" />
      </a>

      <a
        href="https://www.instagram.com/mohamedmubarak1_4_2000/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={25} className="text-red-500 cursor-pointer" />
      </a>

      <a
        href="https://www.facebook.com/profile.php?id=100088453234469"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook size={25} className="text-blue-700 cursor-pointer" />
      </a>
    </div>
  );
};

export default SocialMedia;
