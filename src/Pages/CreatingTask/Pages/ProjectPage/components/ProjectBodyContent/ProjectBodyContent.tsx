import { ProjectInterface } from "../../Interface/ProjectInterface";
import ProgressCard from "../ProgressCard/ProgressCard";
import "./ProjectBodyCOntent.scss";
const ProjectBodyContent = ({
  projectData,
}: {
  projectData: ProjectInterface;
}) => {
  return (
    <div className="content-body">
      <div className="info-holder">
        <h4 className="headlines">Description :</h4>
        <p className="text">{projectData.description}</p>
      </div>

      <div className="info-holder">
        <h4 className="headlines">Key Notes :</h4>
        <ul>
          {projectData.keynotes.map((keynote, index) => (
            <li key={index}>{keynote}</li>
          ))}
        </ul>
      </div>

      <div className="info-holder">
        <h4 className="headlines">Labels :</h4>
        <div className="labels-list">
          {projectData.labels.map((label, index) => (
            <span key={index}>{label}</span>
          ))}
        </div>
      </div>

      <div className="info-holder date-modified">
        <h4 className="headlines">Date Modified :</h4>
        <p className="text">24-June-2024</p>
      </div>

      <div className="info-holder duration">
        <h4 className="headlines">Project Duration :</h4>
        <div className="start-end-date">
          <p>Start: <span>{projectData.startDate}</span></p>
            <p>End: <span>{projectData.endDate}</span></p>
        </div>
      </div>

      <div className="info-holder project-creator">
        <h4 className="headlines">Creator :</h4>
        <div className="user">
          <div className="profile">
            <img
              src="https://images.unsplash.com/photo-1506633541287-7c7544a7a706?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="profile"
            />
          </div>
          <p className="text">{projectData.creator}</p>
        </div>
      </div>

      <div className="info-holder">
        <h4 className="headlines">Members :</h4>
        <div className="members-list">
          {projectData.members.map((member, index) => (
            <div className="member" key={index}>
              <div className="profile">
                <img src={member.avatar} alt="profile" />
              </div>
              <div className="member-details">
                <p className="member-email">{member.email}</p>
                <p className="member-name">{member.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="info-holder">
        <h4 className="headlines">Organization :</h4>
        <p>{projectData.organization}</p>
      </div>

      <div className="info-holder">
        <ProgressCard percentage={50} />
      </div>
    </div>
  );
};

export default ProjectBodyContent;
