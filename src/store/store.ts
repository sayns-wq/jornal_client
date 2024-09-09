import { configureStore } from "@reduxjs/toolkit";
import navBarReducer from "./navBar/navBarSlice";
import editorReducer from "./editor/editorSlice";
import { articleApi } from "./api/articleApi";

export const store = configureStore({
  reducer: {
    navBar: navBarReducer,
    editor: editorReducer,
    [articleApi.reducerPath]: articleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
