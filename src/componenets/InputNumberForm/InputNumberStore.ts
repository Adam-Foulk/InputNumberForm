import { create } from "zustand";

// define types for state values and actions separately
type InputNumberState = {
  value: string;
  display: boolean;
};
type InputNumberActions = {
  value: string;
  display: boolean;
  addText: (event: React.MouseEvent<HTMLButtonElement>) => void;
  open: () => void;
  close: () => void;
  clear: () => void;
};

// define the initial state
const initialState: InputNumberState = {
  value: "",
  display: false,
}

// create store
export const useInputNumberStore = create<InputNumberState & InputNumberActions>((set, get) => ({
  ... initialState,
  addText: (event) =>
    !get().value.includes(".") || event.target.innerText !== "."
      ? set({ value: get().value + event.target.innerText })
      : "",
  open: () =>
    set({
      display: true,
    }),
  close: () =>
    set(initialState),
  clear: () =>
    set({
      value: "",
    }),
}));
