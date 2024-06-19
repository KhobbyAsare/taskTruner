import Footer from "../Components/Footer/Footer";
import NavigationBar from "../Components/NavigationBar/NavigationBar";
import "./LandingPage.scss";
import AiRecommendation from "./components/AiRecommendation/AiRecommendation";
import HeroSection from "./components/HeroSection/HeroSection";
import PartnersSection from "./components/Partners/PartnersSection";
import Pricing from "./components/Pricing/Pricing";
import SearchTaskSection from "./components/SearchTaskSection/SearchTaskSection";
import QuestionsSection from "./components/Questions/QuestionsSection";
import TheFuture from "./components/TheFuture/TheFuture";

const LandingPage = () => {
  return (
    <section className="landing-wrapper">
      <NavigationBar />
      <HeroSection />
      <PartnersSection />
      <AiRecommendation />
      <TheFuture />
      <SearchTaskSection />
      <QuestionsSection />
      <Pricing />
      <Footer />
    </section>
  );
};

export default LandingPage;
