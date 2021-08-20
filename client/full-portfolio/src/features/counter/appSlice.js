import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./counterAPI";

const initialState = {
  value: 0,
  status: "idle",
};

export const incrementAsync = createAsyncThunk(
  "app/fetchCount",
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const appSlice = createSlice({
  name: "app",
  initialState: {
    channelId: null,
    channelName: null,
  },
  reducers: {
    setchannelId: (state, action) => {
      state.app += action.payload;
      state.value += 1;
    },
  },
});

export const { setchannelId } = appSlice.actions;

export const selectchannelId = (state) => state.app.channelId;
export const selectchannelName = (state) => state.app.channelName;
export default appSlice.reducer;
