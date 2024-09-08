import { create } from 'zustand'

type SearchFilterStore = {
  searchText: string;
  setSearchText: (searchText: string) => void;
};

export const useSearchFilter = create<SearchFilterStore>(
  (set) => ({
    searchText: '',
    setSearchText: (searchText) => {
      set({ searchText })
    },
  })
);
