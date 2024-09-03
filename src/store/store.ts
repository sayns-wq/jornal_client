import { configureStore } from "@reduxjs/toolkit";
import navBarReducer from "./navBar/navBarSlice";
import editorReducer from "./editor/editorSlice";

export const store = configureStore({
  reducer: {
    navBar: navBarReducer,
    editor: editorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
