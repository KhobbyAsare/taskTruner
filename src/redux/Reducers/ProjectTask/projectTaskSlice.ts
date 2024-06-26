import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

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

// Define the initial state with explicit type
const initialState: { tasks: Task[] } = {
  tasks: JSON.parse(localStorage.getItem("tasks") || "[]") as Task[],
};

const TaskSlice = createSlice({
  name: "TasksSlice",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<Task, "id">>) => {
      const task: Task = {
        id: nanoid(),
        ...action.payload,
      };
      state.tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    moveTaskTo: (
      state,
      action: PayloadAction<{
        taskId: string;
        status: "backlog" | "in-progress" | "done";
      }>
    ) => {
      const task = state.tasks.find(
        (task) => task.id === action.payload.taskId
      );
      if (task) {
        task.currentStatus = action.payload.status;
      }
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

export const { addTask, removeTask, moveTaskTo } = TaskSlice.actions;
export default TaskSlice.reducer;
