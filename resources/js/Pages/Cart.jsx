import React from "react";
import HomeLayout from "../Layouts/HomeLayout";
import formatRupiah from "../Utils/FormatRupiah";
import { router } from "@inertiajs/react";
import { FaCartShopping } from "react-icons/fa6";
import { data } from "autoprefixer";
import { MdDelete } from "react-icons/md";

const Cart = (props) => {
    console.log(props);

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
                    {props.data.map((item, i) => (
                        <CardCart key={i} item={item} />
                    ))}
                </div>
            </div>
        </HomeLayout>
    );
};

const CardCart = ({ item }) => {
    return (
        <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="flex items-center bg-[#D9D9D9] px-2 md:px-8 py-4"
        >
            <img
                className="mix-blend-multiply w-16 md:w-[200px]"
                src={`/images/${item.gambar}`}
                alt=""
            />
            <div className="flex flex-col flex-1">
                <div className="flex flex-row gap-2 items-center font-semibold">
                    <p>{item.nama}</p>
                    <p>({formatRupiah(item.harga)})</p>
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
            <div className="p-4 hover:bg-gray-300">
                <MdDelete size={24} className="" />
            </div>
        </div>
    );
};

export default Cart;
