import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type PostStore = {
  categoryId: number
  company: string
  companyUrl: string
  jobUrl: string
  listingType: string
  location: string
  title: string
  message: string
  email: string
  fulltime: boolean
  parttime: boolean
  freelance: boolean
  setCategoryId: (categoryId: number) => void
  setCompany: (company: string) => void
  setCompanyUrl: (companyUrl: string) => void
  setJobUrl: (jobUrl: string) => void
  setListingType: (listingType: string) => void
  setLocation: (location: string) => void
  setTitle: (title: string) => void
  setMessage: (message: string) => void
  setEmail: (email: string) => void
  setFulltime: (fulltime: boolean) => void
  setParttime: (parttime: boolean) => void
  setFreelance: (freelance: boolean) => void
};

const postStore = create(
  persist<PostStore>((set) => ({
    categoryId: 0,
    company: '',
    companyUrl: '',
    jobUrl: '',
    listingType: 'search',
    location: '',
    title: '',
    message: '',
    email: '',
    fulltime: false,
    parttime: false,
    freelance: false,
    setCategoryId: (categoryId) => set({ categoryId }),
    setCompany: (company) => set({ company }),
    setCompanyUrl: (companyUrl) => set({ companyUrl }),
    setJobUrl: (jobUrl) => set({ jobUrl }),
    setListingType: (listingType) => set({ listingType }),
    setLocation: (location) => set({ location }),
    setTitle: (title) => set({ title }),
    setMessage: (message) => set({ message }),
    setEmail: (email) => set({ email }),
    setFulltime: (fulltime) => set({ fulltime }),
    setParttime: (parttime) => set({ parttime }),
    setFreelance: (freelance) => set({ freelance }),
  }), {
    name: 'postStore',
    storage: createJSONStorage(() => localStorage)
  })
);

export default postStore;
