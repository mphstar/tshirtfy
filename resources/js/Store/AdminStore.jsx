import { create } from "zustand";

const useAdminStore = create((set) => ({
    showSidebar: false,
    title: "Dashboard",
    setTitle: (title) => set({ title }),
    handleSidebar: () => set((state) => ({ showSidebar: !state.showSidebar })),
}));

export default useAdminStore;
