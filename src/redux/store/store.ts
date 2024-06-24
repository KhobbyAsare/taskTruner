// import { configureStore } from "@reduxjs/toolkit";
// import SideMenuSlice from "../Reducers/SideNavMenu/sideNavSlice";

// export const store = configureStore({
//   reducer: SideMenuSlice, // Add reducers here
// });

// export default store;

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import SideMenuSlice from "../Reducers/SideNavMenu/sideNavSlice";

// If you have multiple reducers, combine them. Otherwise, this step is for future-proofing.
const rootReducer = combineReducers({
  SideMenu: SideMenuSlice, // Use a key for your SideMenuSlice
});

export const store = configureStore({
  reducer: rootReducer, // Use the combined reducer here
});

// Define RootState based on the rootReducer
export type RootState = ReturnType<typeof store.getState>;

export default store;
