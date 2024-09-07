import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import urlParamStorage from '../utils/urlParamStorage';

type SearchStore = {
  category: string;
};

export const useBoundStore = create(
  persist<SearchStore>(
    (set) => ({
      category: '',
      setCategory: (category: string) => set({ category }),
    }),
    {
      name: 'searchStore', // unique name
      storage: createJSONStorage(() => urlParamStorage),
    },
  ),
)
