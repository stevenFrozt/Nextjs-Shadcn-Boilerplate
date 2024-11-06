import { create } from "zustand";

type User = {
  user: {
    name: string;
    email: string;
    image: string;
  } | null;
};

interface userState {
  user: User | null;
  setUser: (session: User | null) => void;
}

export const useUserStore = create<userState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
