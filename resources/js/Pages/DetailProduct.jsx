import React from "react";
import HomeLayout from "../Layouts/HomeLayout";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import ReactImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";
import useProduct from "../Store/ProductStore";
import CustomModal from "../Components/CustomModal";
import formatRupiah from "../Utils/FormatRupiah";
import Swal from "sweetalert2";
import useHomeStore from "../Store/HomeStore";

const MyModal = () => {
    const data = useProduct();

    return (
        <CustomModal
            title={"Product"}
            show={data.showModal}
            setShow={data.handleModal}
        >
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <p className="w-[80px]">Product</p>
                    <p className="px-2">:</p>
                    <p>{data.product.nama}</p>
                </div>
                <div className="flex flex-row">
                    <p className="w-[80px]">Price</p>
                    <p className="px-2">:</p>
                    <p>{formatRupiah(data.product.harga)}</p>
                </div>
                {data.product.url &&
                    data.product.url.map((item, i) => (
                        <div key={i}>
                            <p className="mt-2 font-semibold">Link Product</p>
                            <div className="flex flex-row">
                                <p className="w-[80px]">{item.name}</p>
                                <p className="px-2">:</p>
                                <p>
                                    <a
                                        target="_blank"
                                        className="text-blue-600"
                                        href={item.url}
                                    >
                                        Disini
                                    </a>
                                </p>
                            </div>
                        </div>
                    ))}
            </div>
        </CustomModal>
    );
};

const DetailProduct = (props) => {
    const images = [
        {
            original: `/images/${props.data.gambar}`,
            thumbnail: `/images/${props.data.gambar}`,
        },
        ...props.data.additional_image.map((item) => ({
            original: `/images/${item.gambar}`,
            thumbnail: `/images/${item.gambar}`,
        })),
    ];

    const data = useProduct();

    const homeStore = useHomeStore()

    const addToCart = (item) => {
        // add item to local storage
        let cart = localStorage.getItem("cart");
        cart = cart ? JSON.parse(cart) : [];

        const findItem = cart.find((i) => i.id === item.id);

        if (findItem) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Item already in cart!",
            });
            return;
        }

        cart.push(item);

        homeStore.setData(cart)

        localStorage.setItem("cart", JSON.stringify(cart));

        Swal.fire({
            icon: "success",
            title: "Success",
            text: "Item added to cart!",
        });
    };

    return (
        <HomeLayout>
            <MyModal />
            <div className="flex flex-col container px-4 max-w-[1000px] mx-auto py-6">
                <div className="flex flex-row mb-6">
                    <div className="flex flex-col">
                        <p
                            className="text-xl font-semibold"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            Product
                        </p>
                        <p
                            data-aos="fade-left"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                            className="text-3xl text-orange-500 font-bold"
                        >
                            Overview
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3">
                    <div data-aos="zoom-in" data-aos-duration="1000">
                        <ReactImageGallery items={images} />
                    </div>
                    <div className="flex flex-col md:min-w-[500px]">
                        <div
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            className="flex flex-row gap-2 items-center font-semibold"
                        >
                            <p>{props.data.nama}</p>
                            <p>({formatRupiah(props.data.harga)})</p>
                        </div>
                        <p
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                            className="text-gray-500 text-sm mb-3"
                        >
                            Category: {props.data.kategori.nama} |{" "}
                            {props.data.tag.nama}
                        </p>
                        <p
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-delay="500"
                        >
                            {props.data.overview}
                        </p>
                        <div
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-delay="700"
                            className="flex flex-row gap-3 mt-3"
                        >
                            <button
                                onClick={() => {
                                    data.setProduct(props.data);
                                    data.handleModal();
                                }}
                                className="bg-[#E41919] px-3 text-white flex justify-center items-center gap-3 py-2"
                            >
                                <FaCartShopping /> Order Here
                            </button>
                            <button
                                onClick={() => addToCart(props.data)}
                                className="bg-[#FCA522] px-3 text-white flex justify-center items-center gap-3 py-2"
                            >
                                <FaHeart /> Add Cart
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="flex flex-col mt-4"
                >
                    <h1 className="font-semibold">Description</h1>
                    <p className="whitespace-break-spaces">
                        {props.data.deskripsi}
                    </p>
                </div>
            </div>
        </HomeLayout>
    );
};

export default DetailProduct;
