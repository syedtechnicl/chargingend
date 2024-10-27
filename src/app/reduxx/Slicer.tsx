import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CardItem {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
}

export const counterSlice = createSlice({
  name: "counter",
  initialState: [] as CardItem[],
  reducers: {
    AddtoCart: (state, action: PayloadAction<CardItem>) => {
      state.push(action.payload);
    },
    Removetocart: (state, action: PayloadAction<number>) => {
      return state.filter((elem, ind) => elem.id !== action.payload);
    },
  },
});

export const { AddtoCart, Removetocart } = counterSlice.actions;

export default counterSlice.reducer;
