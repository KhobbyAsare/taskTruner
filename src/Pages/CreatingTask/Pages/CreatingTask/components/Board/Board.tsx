import "./Board.scss";
import Card from "./Card/Card";

const Board = () => {
  return (
    <section className="Board-wrapper">
      <div className="content-container">
        <div className="Backlog">
          <div className="title">
            <p className="title-text">BackLog</p>
          </div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

          <h1>Trying</h1>
        </div>
        <div className="Inprogress">
          <div className="title">
            <p className="title-text">In Progress</p>
          </div>
        </div>
        <div className="Testing">
          <div className="title">
            <p className="title-text"> Testing</p>
          </div>
        </div>
        <div className="Done">
          <div className="title">
            <p className="title-text"> Done</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Board;
