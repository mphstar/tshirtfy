import React, { useEffect } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import useHomeStore from "../Store/HomeStore";

const Product = () => {
    const store = useHomeStore();

    useEffect(() => {
        store.setPage("product");

        return () => {};
    }, []);

    return (
        <HomeLayout>
            <div className="flex flex-col container px-4 max-w-[1000px] mx-auto py-6">
                <div className="grid grid-cols-2 md:grid-cols-4 mt-4 gap-4">
                    <CardProduct
                        product={{
                            name: "SCK B3K01",
                            harga: "IDR. 90.000",
                            image: "/assets/images/30.png",
                        }}
                    />
                    <CardProduct
                        product={{
                            name: "SCK B3K01",
                            harga: "IDR. 90.000",
                            image: "/assets/images/30.png",
                        }}
                    />
                    <CardProduct
                        product={{
                            name: "SCK B3K01",
                            harga: "IDR. 90.000",
                            image: "/assets/images/30.png",
                        }}
                    />
                    <CardProduct
                        product={{
                            name: "SCK B3K01",
                            harga: "IDR. 90.000",
                            image: "/assets/images/30.png",
                        }}
                    />
                    <CardProduct
                        product={{
                            name: "SCK B3K01",
                            harga: "IDR. 90.000",
                            image: "/assets/images/30.png",
                        }}
                    />
                </div>
            </div>
        </HomeLayout>
    );
};

const CardProduct = ({ product }) => {
    return (
        <div
            data-aos="zoom-in"
            data-aos-delay="0"
            data-aos-duration="1000"
            className="flex flex-col items-center"
        >
            <img
                className="w-full"
                src={product.image}
                alt={product.name}
            />
            <p className="text-base">{product.name}</p>
            <p className="text-base font-semibold">{product.harga}</p>
        </div>
    );
};

export default Product;
