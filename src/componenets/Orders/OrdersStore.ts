import { create } from "zustand";
import { OrderType } from "../../types/types";

type useOrdersState = {
  activeTab: string;
  setActiveTab: (value: string) => void;
  orders: OrderType[];
  setOrders: (value: OrderType[]) => void;
};

export const useOrdersStore = create<useOrdersState>((set, get) => ({
  activeTab: "1",
  setActiveTab: (value) => set({ activeTab: value }),
  orders: [
    { id: "1", content: "first" },
    { id: "2", content: "second" },
    { id: "3", content: "third" },
    { id: "4", content: "fourth" },
  ],
  setOrders: (value) => set({ orders: value }),
}));
