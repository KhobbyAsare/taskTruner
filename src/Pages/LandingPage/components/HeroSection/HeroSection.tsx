import "./HeroSection.scss";
import Lottie from "react-lottie-player";
import lottieJson from "../../../../Lottie-Anime/hero-task-anime.json";
import useBrand from "../../../../context-api/Brandname-context/brandname";
import { Link } from "react-router-dom";
const HeroSection = () => {
  const { brandname } = useBrand();
  return (
    <section className="hero-wrapper">
      <div className="container">
        <div className="hero-content">
          <p className="first-p-tag">Unloack Your Full Potential</p>
          <h1>
            Discover a New Era of Task Management with {brandname}'s Features
          </h1>
          <p className="second-p-tag">
            Streammline your work with our Powerful Task Management Solution
          </p>

          <div className="btns">
            <Link className="btn" to="/tasks">
              GET STARTED{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m10 17l5-5l-5-5"
                />
              </svg>
            </Link>
            <button className="btn">LEARN MORE</button>
          </div>

          <div className="lottie-holder">
            <Lottie className="lottie" loop animationData={lottieJson} play />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
