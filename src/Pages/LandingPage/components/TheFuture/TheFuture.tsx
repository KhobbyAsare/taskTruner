import "./TheFuture.scss";
import mobileImage from "../../../../assets/LandingPage/mobile-app.png";
import timeSave from "../../../../assets/LandingPage/time saving.png";
import useBrand from "../../../../context-api/Brandname-context/brandname";

const TheFuture = () => {
    const {brandname} = useBrand()
  return (
    <section className="thefuture-section">
      <div className="container">
        <p className="ai-p-text">THE FUTURE OF TASK ORGANIZATION</p>
        <h1 className="ai-h1-text">
          The Game-Changer Your Task Management Craves
        </h1>

        <div className="cards">
            {/* 1st section */}
          <div className="first-cards">
            <div className="top-section">
              <p>Projects Tracker With {brandname}</p>
              <p>100%</p>
            </div>
            <div className="down-section">
                <div className="card-1">
                    <img src={timeSave} alt="time saver" />
                </div>
                <div className="card-2">
                    <p className="save-text">Save Time</p>
                    <p className="save-des">With {brandname} you can easily track your projects, tasks and time spent on each task. This will help you to know how much time you spend on each task and how much time you have left to complete the task.</p>
                </div>
            </div>
          </div>
          {/* 2nd section */}
          <div className="mobile-card">
            <img src={mobileImage} alt="mobile image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheFuture;
