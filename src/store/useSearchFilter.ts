import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware';

type SearchFilterStore = {
  searchText: string;
  setSearchText: (searchText: string) => void;
  onlyFavs: boolean;
  toggleOnlyFavs: () => void;
  category: string;
  setCategory: (category: string) => void;
  listingType: string;
  setListingType: (listingType: string) => void;
};

export const useSearchFilter = create(persist<SearchFilterStore>(
  (set, get) => ({
    searchText: '',
    setSearchText: (searchText) => {
      set({ searchText })
    },
    onlyFavs: false,
    toggleOnlyFavs: () => {
      set({ onlyFavs: !get().onlyFavs })
    },
    category: '',
    setCategory: (category) => {
      set({ category })
    },
    listingType: '',
    setListingType: (listingType) => {
      set({ listingType })
    }
  }), {
  name: 'searchFilterStore',
  storage: createJSONStorage(() => sessionStorage)
})
);
