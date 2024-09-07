import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type FavStore = {
  favs: number[];
  addJobId: (jobId: number) => void;
  toggleFav: (jobId: number) => void;
};

export const useFav = create(
  persist<FavStore>(
    (set, get) => ({
      favs: [],
      addJobId: (jobId) => {
        if (get().favs.includes(jobId)) return;
        set({ favs: [...get().favs, jobId] })
      },
      toggleFav: (jobId) => {
        if (get().favs.includes(jobId)) {
          set({ favs: get().favs.filter((id) => id !== jobId) })
        } else {
          set({ favs: [...get().favs, jobId] })
        }
      }
    }),
    {
      name: 'favStore', // unique name
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
