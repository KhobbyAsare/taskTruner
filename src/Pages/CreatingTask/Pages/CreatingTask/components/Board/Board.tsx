import React, { useEffect, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DraggableProvided,
  DroppableProvided,
} from "@hello-pangea/dnd";
import "./Board.scss";
import Card from "./Card/Card";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../redux/store/store";
import { useDispatch } from "react-redux";
import { moveTaskTo } from "../../../../../../redux/Reducers/ProjectTask/projectTaskSlice";

interface Item {
  id: string;
  content: Task;
}

interface List {
  [key: string]: Item[];
}

interface Task {
  id: string;
  taskname: string;
  description: string;
  type: string;
  assigners: {
    name: string;
    profileIcon?: string;
  }[];
  dueDate: string;
  creator: string;
  link: string;
  profileIcon: string;
  currentStatus?: "backlog" | "in-progress" | "done";
}

// Reordering the result within the same list
const reorder = (
  list: Item[],
  startIndex: number,
  endIndex: number
): Item[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

// Moving item between different lists
const move = (
  source: Item[],
  destination: Item[],
  droppableSource: { droppableId: string; index: number },
  droppableDestination: { droppableId: string; index: number }
): List => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result: List = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const Board: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.TasksSlice.tasks);

  const [state, setState] = useState<List>({
    backlog: [],
    inProgress: [],
    testing: [],
    done: [],
  });

  const segregateTasks = (tasks: Task[]) => {
    const segregatedTasks: List = {
      backlog: [],
      inProgress: [],
      testing: [],
      done: [],
    };

    tasks.forEach((task) => {
      if (task.currentStatus) {
        segregatedTasks[task.currentStatus].push({
          id: task.id,
          content: task,
        });
      }
    });

    return segregatedTasks;
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setState(segregateTasks(tasks));
  }, [tasks]);

  const getList = (id: string): Item[] => state[id];

  // const onDragEnd = (result: DropResult): void => {
  //   const { source, destination } = result;

  //   // Dropped outside the list
  //   if (!destination) {
  //     return;
  //   }

  //   if (source.droppableId === destination.droppableId) {
  //     const items = reorder(
  //       getList(source.droppableId),
  //       source.index,
  //       destination.index
  //     );

  //     setState({ ...state, [source.droppableId]: items });
  //   } else {
  //     const result = move(
  //       getList(source.droppableId),
  //       getList(destination.droppableId),
  //       source,
  //       destination
  //     );

  //     setState({
  //       ...state,
  //       [source.droppableId]: result[source.droppableId],
  //       [destination.droppableId]: result[destination.droppableId],
  //     });
  //   }
  // };

  const onDragEnd = (result: DropResult): void => {
    const { source, destination } = result;

    // Dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        getList(source.droppableId),
        source.index,
        destination.index
      );

      setState({ ...state, [source.droppableId]: items });
    } else {
      const result = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      );

      setState({
        ...state,
        [source.droppableId]: result[source.droppableId],
        [destination.droppableId]: result[destination.droppableId],
      });

      // Dispatch the moveTaskTo action for each moved task
      result[destination.droppableId].forEach((item: Item) => {
        dispatch(
          moveTaskTo({
            taskId: item.id,
            status: destination.droppableId as
              | "backlog"
              | "in-progress"
              | "done",
          })
        );
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <section className="Board-wrapper">
        <div className="content-container">
          {Object.keys(state).map((list, index) => (
            <Droppable key={index} droppableId={list}>
              {(provided: DroppableProvided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={list}
                >
                  <div className="title">
                    <p className="title-text">{list}</p>
                  </div>
                  {state[list].map((item: Item, index: number) => (
                    <Draggable
                      key={item.id} // Ensure this is unique
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided: DraggableProvided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Card content={item.content} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </section>
    </DragDropContext>
  );
};

export default Board;
