import create, { StoreApi } from "zustand";
import createContext from "zustand/context";
import { devtools } from "zustand/middleware";

export interface StoreState {
  counter: number;
  setCounter: (_value: number) => void;
}

export const { Provider, useStore } = createContext<StoreApi<StoreState>>();

export const createStore = () =>
  create<StoreState>()(
    devtools((set) => ({
      counter: 0,
      setCounter: (value) => set({ counter: value }),
    }))
  );
