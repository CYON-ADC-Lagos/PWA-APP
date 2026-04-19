import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Features/authSlice";
import deaneryReducer from "./Features/deanerySlice";
import parishSlice from "./Features/parishSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    deanery: deaneryReducer,
    parish: parishSlice,
  },
});

export default store;
