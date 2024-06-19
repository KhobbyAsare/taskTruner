import "./QuestionsSection.scss";
import Accordion from "react-bootstrap/Accordion";
import {contentData} from "./content";

const QuestionsSection = () => {
  return (
    <div className="taskSteps-section">
      <div className="container">
        <div className="text-content">
          <p className="ai-p-text">THE FUTURE OF TASK ORGANIZATION</p>
          <h1 className="ai-h1-text">
            The Game-Changer Your Task Management Craves
          </h1>
        </div>
        {contentData.map((data, index) => (
          <Accordion defaultActiveKey={index.toString()} flush key={index}>
            <Accordion.Item eventKey={index.toString()}>
              <Accordion.Header>
                <p className="accordion-header">{data.mainText}</p>
              </Accordion.Header>
              <Accordion.Body>{data.content}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default QuestionsSection;