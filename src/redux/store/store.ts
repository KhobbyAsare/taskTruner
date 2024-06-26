import { configureStore } from "@reduxjs/toolkit";
import SideMenu from "../Reducers/SideNavMenu/sideNavSlice";
import TasksSlice from "../Reducers/ProjectTask/projectTaskSlice";


// If you have multiple reducers, combine them. Otherwise, this step is for future-proofing.
// const rootReducer = combineReducers({
//   SideMenu: SideMenuSlice, // Use a key for your SideMenuSlice
// });

export const store = configureStore({
  reducer: {
    SideMenu,
    TasksSlice,
  }, // Use the combined reducer here
});

// Define RootState based on the rootReducer
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
