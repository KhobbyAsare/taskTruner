import { useDispatch } from "react-redux";
import "./TaskPreview.scss";
import { closeTaskPreview } from "../../../../redux/Reducers/TaskPreview/TaskPreviewSlice";
import { Task } from "../../../../Interface/TaskInterface";
import { useState } from "react";

const TaskPreview = ({ task }: { task: Task }) => {
  const dispatch = useDispatch();

  const [comment, setComment] = useState<string>("");

  const onPostComment = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log("comment");
    console.log(comment);
    // task.commnents.push({
    //   id: "1",
    //   comment: comment,
    //   commenter: "Jones Hacks",
    //   profileIcon:
    //     "https://images.unsplash.com/photo-1718613205605-d933afdd1f36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // } as TaskCommnents);

    console.log(task);
  };

  return (
    <section
      className="preview-wrapper"
      onClick={() => dispatch(closeTaskPreview(undefined))}
    >
      <div className="container" onClick={(e) => e.stopPropagation()}>
        <div className="content">
          <div className="taskname-description">
            <h1 className="taskname">{task.taskname}</h1>
            <span className="task-type">
              {task.type ? task.type : "Type Unspecified"}
            </span>
            <div className="description">
              <p className="des-textarea">{task.description}</p>
            </div>
          </div>
          <div className="assigners-comments">
            <div className="assigners">
              <h5 className="assigners-text">Assigners</h5>
              <div className="profile-icons">
                <div className="profile">
                  <img
                    src="https://images.unsplash.com/photo-1718203695046-0dfd0976a198?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="assignee icon"
                  />
                </div>
                <div className="profile">
                  <img
                    src="https://images.unsplash.com/photo-1718203695046-0dfd0976a198?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="assignee icon"
                  />
                </div>
              </div>
            </div>

            <div className="comments-count">
              <p>
                <span>5</span> Comments
              </p>
            </div>
          </div>

          <div className="comments-list">
            <div className="comment">
              <div className="user-profile">
                <div className="profile-icon">
                  <img
                    src="https://images.unsplash.com/photo-1718613205605-d933afdd1f36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="profile icon"
                  />
                </div>
                <div className="user">
                  <p>Jones Hacks</p>
                </div>
              </div>

              <div className="comment-text">
                <p className="comment-text-body">
                  I was able to complete the task but I had to do a lot of
                  research to get it done.
                </p>
              </div>
            </div>
            <div className="comment">
              <div className="user-profile">
                <div className="profile-icon">
                  <img
                    src="https://images.unsplash.com/photo-1718613205605-d933afdd1f36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="profile icon"
                  />
                </div>
                <div className="user">
                  <p>Jones Hacks</p>
                </div>
              </div>

              <div className="comment-text">
                <p className="comment-text-body">
                  I was able to complete the task but I had to do a lot of
                  research to get it done.
                </p>
              </div>
            </div>
            <div className="comment">
              <div className="user-profile">
                <div className="profile-icon">
                  <img
                    src="https://images.unsplash.com/photo-1718613205605-d933afdd1f36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="profile icon"
                  />
                </div>
                <div className="user">
                  <p>Jones Hacks</p>
                </div>
              </div>

              <div className="comment-text">
                <p className="comment-text-body">
                  I was able to complete the task but I had to do a lot of
                  research to get it done.
                </p>
              </div>
            </div>
            <div className="comment">
              <div className="user-profile">
                <div className="profile-icon">
                  <img
                    src="https://images.unsplash.com/photo-1718613205605-d933afdd1f36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="profile icon"
                  />
                </div>
                <div className="user">
                  <p>Jones Hacks</p>
                </div>
              </div>

              <div className="comment-text">
                <p className="comment-text-body">
                  I was able to complete the task but I had to do a lot of
                  research to get it done.
                </p>
              </div>
            </div>
            <div className="comment">
              <div className="user-profile">
                <div className="profile-icon">
                  <img
                    src="https://images.unsplash.com/photo-1718613205605-d933afdd1f36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="profile icon"
                  />
                </div>
                <div className="user">
                  <p>Jones Hacks</p>
                </div>
              </div>

              <div className="comment-text">
                <p className="comment-text-body">
                  I was able to complete the task but I had to do a lot of
                  research to get it done.
                </p>
              </div>
            </div>
            <div className="comment">
              <div className="user-profile">
                <div className="profile-icon">
                  <img
                    src="https://images.unsplash.com/photo-1718613205605-d933afdd1f36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="profile icon"
                  />
                </div>
                <div className="user">
                  <p>Jones Hacks</p>
                </div>
              </div>

              <div className="comment-text">
                <p className="comment-text-body">
                  I was able to complete the task but I had to do a lot of
                  research to get it done.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="comment-space">
          <div className="comment-input">
            <textarea
              onChange={(e) => setComment(e.target.value)}
              name=""
              id=""
              placeholder="Add a comment"
              className="comment-textarea"
            ></textarea>
          </div>
          <div className="comment-btn">
            <button className="btn" onClick={($event) => onPostComment($event)}>
              Comment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskPreview;
