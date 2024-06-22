import { create } from "zustand";

const useProduct = create((set) => ({
    product: {},
    setProduct: (product) => set({ product }),
    showModal: false,
    handleModal: () => set((state) => ({ showModal: !state.showModal })),
}));

export default useProduct;
