import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../../Interface/TaskInterface";

const initialState: { tasks: Task | undefined } = {
  tasks: {} as Task | undefined,
};

const PreviewSlice = createSlice({
  name: "PreviewSlice",
  initialState,
  reducers: {
    addTaskPreview: (state, action: PayloadAction<Omit<Task, "id">>) => {
      const task: Task = {
        id: nanoid(),
        ...action.payload,
      };
      state.tasks = task;
    },

    closeTaskPreview: (state) => {
      state.tasks = undefined;
    },
  },
});

export default PreviewSlice.reducer;
export const { addTaskPreview, closeTaskPreview } = PreviewSlice.actions;
