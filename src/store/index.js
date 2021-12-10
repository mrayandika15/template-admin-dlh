import { configureStore } from "@reduxjs/toolkit";
import authReducers, { authActions } from "./auth";

const store = configureStore({
  reducer: {
    reducer: { auth: authReducers },
  },
});

export { authActions };

export default store;
