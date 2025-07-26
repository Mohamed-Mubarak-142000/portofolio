import About from "../../components/About/About";
import Articles from "../../components/Articles/Articles";
import BtnScroller from "../../components/BtnScroller/BtnScroller";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import ListSkills from "../../components/skills/ListSkills";
import ListProjects from "../../components/projects/ListProjects";
// import ListCertificates from "../../components/ListCertificates/ListCertificates";
import Footer from "../../components/footer/Footer";
const HomePage = () => {
  return (
    <>
      <div
        style={{
          overflow: "hidden",
          backgroundImage:
            "linear-gradient(318deg, #9066dd -12.31%, #fff0 97.92%), linear-gradient(#160040, #160040)",
          backgroundSize: "100% 100%",
        }}
        className="min-h-screen "
      >
        <Navbar />
        <Hero />
      </div>

      <div className="other_section py-12">
        <About />
        <ListSkills />
        <Articles />
        <ListProjects />
        {/* <ListCertificates /> */}
      </div>
      <Footer />
      <BtnScroller />
    </>
  );
};

export default HomePage;
