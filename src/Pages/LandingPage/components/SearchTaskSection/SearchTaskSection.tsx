import "./SearchTaskSection.scss";
import search_task from "../../../../assets/LandingPage/search-task.png";

const SearchTaskSection = () => {
  return (
    <div className="seach-task-wrapper">
      <div className="container">
        <div className="text-section">
          <p className="ai-p-text">A NEW ERA OF PRODUCTIVITY</p>
          <h1 className="ai-h1-text">
            Get Started With Personalized Advice and Better Task Management
          </h1>

          <div className="features">
            <div className="feature">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="#fff"
                    d="M10.5 2.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zm-5 7.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0M10 8.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .5.5H11a.5.5 0 0 0 0-1h-1zm0 7.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5M2.5 9.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM16 10a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5M4.146 15.146a.5.5 0 0 0 .708.708l1-1a.5.5 0 0 0-.708-.708zm10-10l1-1a.5.5 0 0 1 .708.708l-1 1a.5.5 0 0 1-.708-.708m-9.292-1a.5.5 0 1 0-.708.708l1 1a.5.5 0 1 0 .708-.708zm10 10l1 1a.5.5 0 0 1-.708.708l-1-1a.5.5 0 0 1 .708-.708"
                  />
                </svg>
              </div>
              <div className="text">
                <h6>Task Availabilty</h6>
                <p>
                  Instantly view team memeber's task schedule to asssign work to
                  those with open slot in their bottlenecks
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    d="M2 22h4v-4H2zM22 2L12 12m10-2V2h-8m8 11h-4v9h4zm-12 9h4v-6h-4z"
                  />
                </svg>
              </div>
              <div className="text">
                <h6>Optimal Assignment</h6>
                <p>
                  Maximize team productivity by assigning tasks to the right
                  team member based on their availability and skillset
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path
                      fill="#fff"
                      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2H5v14h14zm-6.963 2.729c.271-.868 1.44-.95 1.85-.184l.052.11L15.677 12H17a1 1 0 0 1 .117 1.993L17 14h-1.993a1.01 1.01 0 0 1-.886-.524l-.052-.11l-.953-2.384l-1.654 5.293c-.259.828-1.355.953-1.807.255l-.06-.105L8.381 14H7a1 1 0 0 1-.117-1.993L7 12h1.994c.34 0 .654.17.84.449l.063.11l.388.776z"
                    />
                  </g>
                </svg>
              </div>
              <div className="text">
                <h6>Performance Insight</h6>
                <p>
                  Monitor team performance and task progress to identify
                  bottlenecks and make data-driven decisions to improve team
                  productivity and efficiency
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="image-section">
          <img src={search_task} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SearchTaskSection;
