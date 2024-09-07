import { create } from 'zustand'

type JobModalStore = {
  jobId: number | null;
  openModal: (jobId: number) => void;
  closeModal: () => void;
};

export const useJobModal = create<JobModalStore>((
  (set) => ({
    jobId: null,
    openModal: (jobId: number) => {
      set({ jobId })
      const modal = document.getElementById('jobmodal') as HTMLDialogElement | null;
      modal?.showModal();
    },
    closeModal: () => {
      set({ jobId: null })
      const modal = document.getElementById('jobmodal') as HTMLDialogElement | null;
      modal?.close();
    }
  })
)
)
