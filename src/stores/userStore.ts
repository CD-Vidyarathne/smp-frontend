import { create } from "zustand";
import { User } from "../types/User";

interface UserState {
  user: User;
  setUser: (u: User) => void;
}

const initialState: User = {
  id: undefined,
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  isActive: false,
  joinedDate: "",
};

export const useUserStore = create<UserState>()((set) => ({
  user: initialState,
  setUser: (u) => set(() => ({ user: u })),
}));
