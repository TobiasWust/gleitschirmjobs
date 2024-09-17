import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type ApplyStore = {
  name: string
  email: string
  message: string
  setName: (name: string) => void
  setEmail: (email: string) => void
  setMessage: (message: string) => void
};

const applyStore = create(
  persist<ApplyStore>((set) => ({
    name: '',
    email: '',
    message: '',
    setName: (name: string) => set({ name }),
    setEmail: (email: string) => set({ email }),
    setMessage: (message: string) => set({ message })
  }), {
    name: 'applyStore',
    storage: createJSONStorage(() => localStorage)
  })
);

export default applyStore;
