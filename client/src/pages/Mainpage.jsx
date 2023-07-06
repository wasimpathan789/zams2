import "./mainpage.css";
import Footer from "../components/footer/Footer";
import Projects from "../components/projects/Projects";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Services from "../components/servies/Services";
import Contact from "../components/contact/Contact";
import NewContact from "../components/contact/NewContact";
import AboutUsPage from "./aboutUsPage/AboutUsPage";
import OurTeam from "../components/ourteam/OurTeam";
import MainContact from "../components/contact/MainContact";
import OurClients from "../components/clients/OurClients";

const Mainpage = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <div className="mainWrapper">
        <AboutUsPage />
        <Services />

        <Projects />
        <OurTeam />
        <OurClients />
        <MainContact />
      </div>

      <Footer />
    </div>
  );
};

export default Mainpage;
