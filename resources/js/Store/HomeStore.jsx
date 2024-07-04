import { data } from "autoprefixer";
import { create } from "zustand";

const useHomeStore = create((set) => ({
    page: "",
    // Function to set the page
    setPage: (page) => set({ page }),

    data: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    setData: (data) => set({ data }),
}));

export default useHomeStore;
