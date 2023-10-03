import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./modules/counter/slice";
import listPokedexSlice from "./modules/list-pokedex/slice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    listPokedex: listPokedexSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
