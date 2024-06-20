import React, { useState } from "react";
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

interface Item {
  id: string;
  content: CardContent;
}

interface List {
  [key: string]: Item[];
}

interface CardContent {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  assignees: {
    name: string;
    avatar: string;
  }[];
}
[];

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
  const [state, setState] = useState<List>({
    backlog: [
      {
        id: "1",
        content: {
          id: "task-1",
          title: "Design User Interface",
          description:
            "Create the initial design mockups for the new user profile page.",
          dueDate: "2024-07-12",
          assignees: [
            {
              name: "Alex Johnson",
              avatar:
                "https://images.unsplash.com/photo-1718203695046-0dfd0976a198?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              name: "Jamie Smith",
              avatar:
                "https://images.unsplash.com/photo-1718073725822-96f864f08837?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ],
        },
      },
      {
        id: "2",
        content: {
          id: "task-2",
          title: "Implement Authentication",
          description:
            "Develop the authentication logic and integrate it with the backend.",
          dueDate: "2024-07-20",
          assignees: [
            {
              name: "Sam Taylor",
              avatar:
                "https://images.unsplash.com/photo-1659956956591-73af98b68fe8?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ],
        },
      },
      {
        id: "3",
        content: {
          id: "task-3",
          title: "Database Optimization",
          description:
            "Analyze the current database schema and apply optimizations for performance.",
          dueDate: "2024-08-05",
          assignees: [
            {
              name: "Jordan Lee",
              avatar:
                "https://images.unsplash.com/photo-1715630915001-35be2d8dba4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMzZ8fHxlbnwwfHx8fHw%3D",
            },
            {
              name: "Casey Kim",
              avatar:
                "https://images.unsplash.com/photo-1717978321659-7b93b42d97ea?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ],
        },
      },
      {
        id: "4",
        content: {
          id: "task-4",
          title: "Database Optimization",
          description:
            "Analyze the current database schema and apply optimizations for performance.",
          dueDate: "2024-08-05",
          assignees: [
            {
              name: "Jordan Lee",
              avatar:
                "https://images.unsplash.com/photo-1715630915001-35be2d8dba4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMzZ8fHxlbnwwfHx8fHw%3D",
            },
            {
              name: "Casey Kim",
              avatar:
                "https://images.unsplash.com/photo-1717978321659-7b93b42d97ea?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ],
        },
      },
      {
        id: "5",
        content: {
          id: "task-5",
          title: "Database Optimization",
          description:
            "Analyze the current database schema and apply optimizations for performance.",
          dueDate: "2024-08-05",
          assignees: [
            {
              name: "Jordan Lee",
              avatar:
                "https://images.unsplash.com/photo-1715630915001-35be2d8dba4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMzZ8fHxlbnwwfHx8fHw%3D",
            },
            {
              name: "Casey Kim",
              avatar:
                "https://images.unsplash.com/photo-1717978321659-7b93b42d97ea?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ],
        },
      },
      {
        id: "6",
        content: {
          id: "task-6",
          title: "Database Optimization",
          description:
            "Analyze the current database schema and apply optimizations for performance.",
          dueDate: "2024-08-05",
          assignees: [
            {
              name: "Jordan Lee",
              avatar:
                "https://images.unsplash.com/photo-1715630915001-35be2d8dba4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMzZ8fHxlbnwwfHx8fHw%3D",
            },
            {
              name: "Casey Kim",
              avatar:
                "https://images.unsplash.com/photo-1717978321659-7b93b42d97ea?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ],
        },
      },
    ],
    inProgress: [],
    testing: [],
    done: [],
  });

  const getList = (id: string): Item[] => state[id];

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
