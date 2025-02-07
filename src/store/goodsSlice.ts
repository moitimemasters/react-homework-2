import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardProps } from '../types';
import cardData from "../data/cards.json"

interface GoodsState {
  items: CardProps[];
}

const initialState: GoodsState = {
  items: cardData
};

const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    setGoods(state, action: PayloadAction<CardProps[]>) {
      state.items = action.payload;
    },
    addGood(state, action: PayloadAction<CardProps>) {
      state.items.push(action.payload);
    },
  }
});

export const { setGoods, addGood } = goodsSlice.actions;
export default goodsSlice.reducer;
