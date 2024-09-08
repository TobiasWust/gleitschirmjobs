import { create } from 'zustand'

type SearchFilterStore = {
  searchText: string;
  setSearchText: (searchText: string) => void;
  onlyFavs: boolean;
  toggleOnlyFavs: () => void;
};

export const useSearchFilter = create<SearchFilterStore>(
  (set, get) => ({
    searchText: '',
    setSearchText: (searchText) => {
      set({ searchText })
    },
    onlyFavs: false,
    toggleOnlyFavs: () => {
      set({ onlyFavs: !get().onlyFavs })
    }
  })
);
