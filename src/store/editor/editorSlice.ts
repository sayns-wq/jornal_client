import { OutputData } from "@editorjs/editorjs";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface EditorState {
  data: OutputData;
}

const initialState: EditorState = {
  data: {
    blocks: [],
  },
};

export const editorSlice = createSlice({
  name: "editorState",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = editorSlice.actions;

export default editorSlice.reducer;
