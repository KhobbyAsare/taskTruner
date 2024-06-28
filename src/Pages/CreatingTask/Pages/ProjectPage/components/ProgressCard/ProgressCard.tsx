import "./ProgressCard.scss";

interface ProgressCardProps {
  percentage: number; // Define a prop to accept the progress percentage
}

const ProgressCard = ({ percentage }: ProgressCardProps) => {
  return (
    <section className="progressCard-wrapper">
      <h3>Task Progress</h3>
      <div className="progress-content">
        <h4 className="progress-percentage">{percentage}%</h4>
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
        <div className="progress-text">
            <p>
                Task Progress is a measure of how much work has been completed in a task. It is calculated as the percentage of the task that has been completed. 🚀
            </p>
            <h5 className="task-done">10/20 Task on Done</h5>
        </div>
    </section>
  );
};

export default ProgressCard;
