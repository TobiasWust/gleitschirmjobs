import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type ThemeStore = {
  theme: string
  setTheme: (name: string) => void
};

const themeStore = create(
  persist<ThemeStore>((set) => ({
    theme: '',
    setTheme: (theme: string) => {
      set({ theme })
      document.querySelector('html')?.setAttribute("data-theme", theme);
    }
  }), {
    name: 'themeStore',
    storage: createJSONStorage(() => localStorage)
  })
);

export default themeStore;
