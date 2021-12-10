import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "Bearer ",
  isLoggedin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      state.isLoggedin = !!state.token;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
