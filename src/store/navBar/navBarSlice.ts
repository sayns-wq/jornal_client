import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface NavBarState {
  activeBlock: string;
}

const initialState: NavBarState = {
  activeBlock: "All",
};

export const navSlice = createSlice({
  name: "navBarState",
  initialState,
  reducers: {
    setBlock: (state, action: PayloadAction<string>) => {
      state.activeBlock = action.payload;
    },
  },
});

export const { setBlock } = navSlice.actions;

export default navSlice.reducer;
