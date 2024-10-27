import { configureStore } from "@reduxjs/toolkit";
import MainCard from "./Slicer";
export const store = configureStore({
  reducer: {
    cart: MainCard,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
