import { create } from "zustand";

const useHomeStore = create((set) => ({
    page: "",
    // Function to set the page
    setPage: (page) => set({ page }),
}));

export default useHomeStore;
