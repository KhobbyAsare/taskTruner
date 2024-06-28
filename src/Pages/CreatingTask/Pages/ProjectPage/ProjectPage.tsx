import { useDispatch, useSelector } from "react-redux";
import "./ProjectPage.scss";
import { useState } from "react";
import { toggleMenu } from "../../../../redux/Reducers/SideNavMenu/sideNavSlice";
import { RootState } from "../../../../redux/store/store";
import SmallerScreenMenuBtn from "../../../../common/SmallerScreenMenuBtn/SmallerScreenMenuBtn";

import { ProjectInterface } from "./Interface/ProjectInterface";
import ProjectBodyContent from "./components/ProjectBodyContent/ProjectBodyContent";
import CustomDateRangePicker from "./components/DateRange/DateRange";
import ModalBackdrop from "../../../../common/ModalBackdrop/ModalBackdrop";
import Modal from "../../../../common/modal/modal";

const ProjectPage = () => {
  const dispatch = useDispatch();
  const [toggleSideNav, setToggleSideNav] = useState(false);
  const [inputKeynote, setInputKeynote] = useState("");
  const [inputLabel, setInputLabel] = useState("");
  const [modalState, setModalState] = useState(false);

  const handleAddTodo = (e: React.MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    setToggleSideNav(!toggleSideNav);
    dispatch(toggleMenu(toggleSideNav));
  };

  const menuState: boolean = useSelector(
    (state: RootState) => state.SideMenu.menuState
  );

  const [isEditing, setIsEditing] = useState(false);
  const [projectData, setProjectData] = useState<ProjectInterface>({
    id: "1",
    projectname: "Urbar Tracker Mobile Project",
    description:
      "This is a mobile application for users to track their urber rides when they are on the go. The app will be available for both Android and iOS users. The app will have a user-friendly interface. The app will have a user-friendly interface",
    creator: "Mike Ross",
    startDate: "24-June-2024",
    endDate: "24-June-2024",
    keynotes: [
      "  The app will be available for both Android and iOS users.",
      "The app will have a user-friendly interface.",
      "Mobile application for users to track their urber rides when they are on the go.",
    ],
    members: [
      {
        id: "1",
        name: "Mike Ross",
        email: "mike@gmail.com",
        role: "Developer",
        avatar:
          "https://images.unsplash.com/photo-1506633541287-7c7544a7a706?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "2",
        name: "Lukki Mends",
        email: "lukki@gmail.com",
        role: "Designer",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "3",
        name: "Fancy Mensah",
        email: "fancy@gmail.com",
        role: "Tester",
        avatar:
          "https://images.unsplash.com/photo-1617694979129-c093b108cc4a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "4",
        name: "Kwame Mensah",
        email: "mens@gmail.com",
        role: "Developer",
        avatar:
          "https://images.unsplash.com/photo-1542801905-94103d446884?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    labels: [
      "app",
      "mobile",
      "android",
      "ios",
      "user-friendly",
      "urbar-tracker mobile project",
    ],
    organization: "Amalitech",
  });

  const onKeynotInputClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setProjectData({
        ...projectData,
        keynotes: [...projectData.keynotes, inputKeynote],
      });
      setInputKeynote("");
    }
  };

  const onLabelInputClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setProjectData({
        ...projectData,
        labels: [...projectData.labels, inputLabel],
      });
      setInputKeynote("");
    }
  };

  const closeModal = () => {
    setModalState(false);
  };
  return (
    <>
      <section className="project-page-wrapper">
        <SmallerScreenMenuBtn
          handleAddTodo={handleAddTodo}
          menuState={menuState}
        />
        <div className="container">
          <header>
            <h1 className="projectname">{projectData.projectname}</h1>
          </header>

          <div className="main-content">
            <div className="content-header">
              <div className="project">
                <h3 className="ptoject-text">Project</h3>
                <div className="right-content">
                  <div className="invite">
                    {isEditing && (
                      <button
                        className="invite-btn"
                        onClick={() => setModalState(true)}
                      >
                        Invite a Member
                      </button>
                    )}
                  </div>
                  <div className="members-profile">
                    {projectData.members.map((member, index) => (
                      <div className="member" key={index}>
                        <div className="member-profile">
                          <img src={member.avatar} alt="profile" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="edit-icon">
                    {isEditing ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.4em"
                        height="1.4em"
                        viewBox="0 0 24 24"
                        onClick={() => setIsEditing(false)}
                      >
                        <path
                          fill="#808080"
                          d="M8.94 10L2.22 3.28a.75.75 0 1 1 1.06-1.06l18.5 18.5a.75.75 0 0 1-1.06 1.06L14 15.061l-4.998 5a3.1 3.1 0 0 1-1.477.825L2.924 21.98a.75.75 0 0 1-.904-.903l1.096-4.602c.133-.559.419-1.07.825-1.476zm4 4L10 11.062l-4.998 5c-.21.21-.358.474-.427.763l-.813 3.415l3.416-.813c.289-.069.553-.216.763-.426zm5-5l-2.88 2.88l1.061 1.06l4.831-4.831a3.578 3.578 0 0 0-5.06-5.06l-4.831 4.83l1.06 1.06L15 6.062zm-.988-4.891a2.078 2.078 0 1 1 2.94 2.939L19 7.939L16.06 5z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.4em"
                        height="1.4em"
                        viewBox="0 0 24 24"
                        onClick={() => setIsEditing(true)}
                      >
                        <path
                          fill="none"
                          stroke="#808080"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M16.946 3.173c.587-.587.88-.88 1.206-1.021c.469-.203 1-.203 1.469 0c.325.14.619.434 1.206 1.021s.88.881 1.021 1.206c.203.469.203 1 0 1.469c-.14.325-.434.619-1.021 1.206l-5.022 5.022c-1.237 1.237-1.855 1.855-2.63 2.222s-1.646.452-3.387.624L9 15l.078-.788c.172-1.741.257-2.612.624-3.387s.985-1.393 2.222-2.63zM6 15H3.75a1.75 1.75 0 1 0 0 3.5h9.5a1.75 1.75 0 1 1 0 3.5H11"
                          color="#808080"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {!isEditing ? (
              <ProjectBodyContent projectData={projectData} />
            ) : (
              <div className="form-content">
                <form>
                  <div className="form-group">
                    <label htmlFor="projectname">Project Name</label>
                    <input
                      className="form-input"
                      type="text"
                      id="projectname"
                      value={projectData.projectname}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setProjectData({
                          ...projectData,
                          projectname: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                      placeholder="Add Description"
                      className="form-input"
                      id="description"
                      value={projectData.description}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        setProjectData({
                          ...projectData,
                          description: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="keynotes">Key Notes</label>
                    <ul>
                      {projectData.keynotes.map((keynote, index) => (
                        <li key={index}>{keynote}</li>
                      ))}
                    </ul>
                    <input
                      placeholder="Add Keynote and press Enter to add"
                      type="text"
                      className="form-input"
                      name=""
                      id=""
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setInputKeynote(e.target.value)
                      }
                      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                        onKeynotInputClick(e)
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="keynotes">Project Labels</label>
                    <ul>
                      {projectData.labels.map((label, index) => (
                        <li key={index}>{label}</li>
                      ))}
                    </ul>
                    <input
                      placeholder="Add Label and press Enter to add"
                      type="text"
                      className="form-input"
                      name=""
                      id=""
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setInputLabel(e.target.value)
                      }
                      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                        onLabelInputClick(e)
                      } // Changed from onClick to onKeyDown
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="duration">Project Duration</label>
                    <CustomDateRangePicker />
                  </div>

                  <div className="form-group">
                    <label htmlFor="organization">Organization</label>
                    <input
                      className="form-input"
                      type="text"
                      id="organization"
                      value={projectData.organization}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setProjectData({
                          ...projectData,
                          organization: e.target.value,
                        })
                      }
                    />
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {modalState && (
        <ModalBackdrop>
          <Modal
            modalText="Invite a member"
            modelDescription="Enter an email address to invite a new member to this project. The
          member will be able to view and edit the project."
            butttontext="Invite"
            closeModal={() => closeModal()}
          />
        </ModalBackdrop>
      )}
    </>
  );
};

export default ProjectPage;
