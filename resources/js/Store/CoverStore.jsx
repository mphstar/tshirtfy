import { create } from "zustand";

const useProduct = create((set) => ({
    cover: {},
    setCover: (cover) => set({ cover }),
    showModal: false,
    handleModal: () => set((state) => ({ showModal: !state.showModal })),
}));

export default useProduct;
