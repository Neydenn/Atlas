import {create} from "zustand";

interface TokenStore {
  token: string;
  isSessionInitialized: boolean;
  setToken: (token: string) => void;
  clearToken: () => void;
  setSessionInitialized: () => void;
}

export const useTokenStore = create<TokenStore>((set) => ({
    token: '',
    isSessionInitialized: false,
    setToken: (token) => set({ token }),
    clearToken: () => set({ token: '' }),
    setSessionInitialized: () => set({ isSessionInitialized: true }),
  }
))
