import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    itemCard: [],
  },
  reducers: {
    setItenCard: (state, action) => {
      state.itemCard.push(action.payload);
    },
    deleteCard: (state, action) => {
      state.itemCard = state.itemCard.filter(
        (images) => images.id !== action.payload
      );
    },
  },
});

export const { setItenCard, deleteCard } = cardSlice.actions;
export const cardReducer = cardSlice.reducer;
