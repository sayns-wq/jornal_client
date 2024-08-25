import { configureStore } from "@reduxjs/toolkit";
import navBarReducer from "./navBar/navBarSlice";

export const store = configureStore({
  reducer: {
    navBar: navBarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
