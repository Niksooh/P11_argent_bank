import { configureStore } from "@reduxjs/toolkit";
import reducer from "./userReducer";

const store = configureStore({
  reducer: {
    user: reducer,
  },
});

export default store;
