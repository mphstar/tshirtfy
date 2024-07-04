import React, { useEffect, useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import formatRupiah from "../Utils/FormatRupiah";
import { router } from "@inertiajs/react";
import { FaCartShopping } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useHomeStore from "../Store/HomeStore";

const Cart = () => {
    const homeStore = useHomeStore();

    useEffect(() => {
        homeStore.setPage("Cart");

        return () => {};
    }, []);

    const removeItemFromCart = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                const cart = localStorage.getItem("cart");
                let newCart = JSON.parse(cart).filter((i) => i.id !== item.id);
                localStorage.setItem("cart", JSON.stringify(newCart));
                homeStore.setData(newCart);
                Swal.fire("Deleted!", "Your item has been deleted.", "success");
            }
        });
    };

    return (
        <HomeLayout>
            <div className="flex flex-col container px-4 max-w-[1000px] mx-auto py-6">
                <div className="flex flex-row mb-6">
                    <div className="flex flex-col">
                        <p
                            className="text-xl font-semibold"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            CHECKOUT YOUR
                        </p>
                        <p
                            data-aos="fade-left"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                            className="text-3xl text-orange-500 font-bold"
                        >
                            SHOPPING CART
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    {homeStore.data.map((item, i) => (
                        <CardCart
                            key={i}
                            onClick={() => removeItemFromCart(item)}
                            item={item}
                        />
                    ))}
                </div>
            </div>
        </HomeLayout>
    );
};

const CardCart = ({ item, onClick }) => {
    return (
        <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="flex items-center bg-[#D9D9D9] px-2 md:px-8 py-4 gap-3"
        >
            <img
                className="mix-blend-multiply w-16 md:w-[200px]"
                src={`/images/${item.gambar}`}
                alt=""
            />
            <div className="flex flex-col flex-1">
                <div className="flex flex-row gap-2 items-center font-semibold">
                    <p>
                        {item.nama} ({formatRupiah(item.harga)})
                    </p>
                </div>
                <p className="text-sm line-clamp-3">{item.deskripsi}|</p>
                <button
                    onClick={() => {
                        router.get(`/product/${item.id}`);
                    }}
                    className="bg-[#E41919] px-3 mt-4 text-white flex w-fit justify-center items-center gap-3 py-2"
                >
                    <FaCartShopping /> Order Here
                </button>
            </div>
            <div onClick={onClick} className="p-4 hover:bg-gray-300">
                <MdDelete size={24} className="" />
            </div>
        </div>
    );
};

export default Cart;
