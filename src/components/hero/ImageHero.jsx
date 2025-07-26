import imageProf from "../../assets/my.png";
import SocialMedia from "../socialMedia/SocialMedia";

const ImageHero = () => {
  return (
    <div className="flex flex-col items-center gap-10 relative">
      <div className="relative w-96 h-full p-1 rounded-xl overflow-hidden z-10">
        {/* الدائرة الكبيرة المتوهجة */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-50 animate-pulse z-0"></div>

        {/* دائرة توسعية بشكل بطيء */}
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-tr from-blue-400 to-cyan-400 rounded-full blur-2xl opacity-40 animate-[ping_4s_linear_infinite] z-0"></div>

        {/* دائرة دائرية منقطة حول الصورة */}
        <div className="absolute top-1/2 left-1/2 w-80 h-80 border-2 border-dashed border-white/10 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow z-0"></div>

        {/* صورة البروفايل */}
        <img
          src={imageProf}
          alt="Profile"
          className="w-full h-full object-cover rounded-xl relative z-10"
        />
      </div>

      <SocialMedia />
    </div>
  );
};

export default ImageHero;
