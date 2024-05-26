import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../Components/Footer";
import HomeLayout from "../Layouts/HomeLayout";
import useHomeStore from "../Store/HomeStore";

const Landing = () => {
    const [selectedTab, setSelectedTab] = useState("jacket");

    const store = useHomeStore();

    useEffect(() => {
        store.setPage("home");
        
        return () => {};
    }, []);

    return (
        <HomeLayout>
            <Carousel
                autoPlay={true}
                className=""
                interval={2000}
                infiniteLoop
                showThumbs={false}
                showArrows
                showStatus={false}
                emulateTouch
            >
                <div>
                    <img
                        className="max-h-screen object-cover"
                        src="/assets/images/hero.png"
                        alt="hero"
                    />
                </div>
                <div>
                    <img
                        className="max-h-screen object-cover"
                        src="/assets/images/hero1.png"
                        alt="hero1"
                    />
                </div>
            </Carousel>
            <Carousel
                className=" md:hidden w-full mt-6"
                emulateTouch
                autoPlay={false}
                showArrows
                showIndicators={false}
                showStatus={false}
            >
                <CardCategory
                    category={{
                        name: "Mens",
                        image: "/assets/images/man.png",
                    }}
                />
                <CardCategory
                    category={{
                        name: "Women",
                        image: "/assets/images/woman.png",
                    }}
                />
                <CardCategory
                    category={{
                        name: "Unisex",
                        image: "/assets/images/unisex.png",
                    }}
                />
            </Carousel>
            <div className=" grid-cols-1 hidden md:grid md:grid-cols-3 container max-w-[1000px] mx-auto mt-4">
                <CardCategory
                    category={{
                        name: "Mens",
                        image: "/assets/images/man.png",
                    }}
                />
                <CardCategory
                    category={{
                        name: "Women",
                        image: "/assets/images/woman.png",
                    }}
                />
                <CardCategory
                    category={{
                        name: "Unisex",
                        image: "/assets/images/unisex.png",
                    }}
                />
            </div>

            <div className="container max-w-[1000px] mx-auto px-4 mt-2 flex flex-col">
                <p className="text-xl font-semibold py-3 text-center">
                    Best Seller Product
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4  gap-4">
                    <CardBestSeller
                        product={{
                            name: "SCK B3K01",
                            harga: "IDR. 90.000",
                            image: "/assets/images/baju.png",
                        }}
                    />
                    <CardBestSeller
                        product={{
                            name: "SCK B3K01",
                            harga: "IDR. 90.000",
                            image: "/assets/images/baju.png",
                        }}
                    />
                    <CardBestSeller
                        product={{
                            name: "SCK B3K01",
                            harga: "IDR. 90.000",
                            image: "/assets/images/baju.png",
                        }}
                    />
                    <CardBestSeller
                        product={{
                            name: "SCK B3K01",
                            harga: "IDR. 90.000",
                            image: "/assets/images/baju.png",
                        }}
                    />
                </div>
            </div>

            <div className="flex flex-col md:flex-row w-full mt-8 justify-center items-center md:items-end conteiner px-4 mx-auto gap-3">
                <div className="flex flex-col">
                    <p className="text-3xl text-center md:text-start font-semibold">
                        New BATCH
                    </p>
                    <p className="text-3xl text-center md:text-start font-semibold">
                        Product
                    </p>
                    <p className="text-orange-500 text-center md:text-start text-5xl font-bold">
                        BEST SELLER
                    </p>
                </div>
                <div className="relative w-fit">
                    <img
                        className="w-[50px] hidden md:flex  md:w-[200px] absolute -left-10 top-16"
                        src="/assets/images/hero2.png"
                        alt="hero 2"
                    />
                    <img
                        className="w-[50px] hidden md:flex  md:w-[200px] absolute -right-10 top-32"
                        src="/assets/images/hero2.png"
                        alt="hero 2"
                    />
                    <img
                        className="w-full  md:w-[400px]"
                        src="/assets/images/hero2.png"
                        alt="hero 2"
                    />
                </div>
            </div>

            <div className="container max-w-[1000px] mx-auto px-4 mt-6 flex flex-col mb-6">
                <p className="text-xl font-semibold py-3 text-center">
                    PRODUCT PROMO OF WEEK
                </p>

                <div className="flex flex-row justify-center gap-3 cursor-pointer">
                    <div
                        onClick={() => setSelectedTab("jacket")}
                        className={`py-1 px-2 duration-300 ${
                            selectedTab == "jacket"
                                ? "font-semibold border-b-4 border-b-red-500"
                                : ""
                        }`}
                    >
                        Jacket
                    </div>
                    <div
                        onClick={() => setSelectedTab("tshirt")}
                        className={`py-1 px-2 duration-300 ${
                            selectedTab == "tshirt"
                                ? "font-semibold border-b-4 border-b-red-500"
                                : ""
                        }`}
                    >
                        T-shirt
                    </div>
                    <div
                        onClick={() => setSelectedTab("polo")}
                        className={`py-1 px-2 duration-300 ${
                            selectedTab == "polo"
                                ? "font-semibold border-b-4 border-b-red-500"
                                : ""
                        }`}
                    >
                        Polo
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 mt-4 gap-4">
                    <CardBestSeller
                        product={{
                            name: "SCK B3K01",
                            harga: "IDR. 90.000",
                            image: "/assets/images/baju.png",
                        }}
                    />
                    <CardBestSeller
                        product={{
                            name: "SCK B3K01",
                            harga: "IDR. 90.000",
                            image: "/assets/images/baju.png",
                        }}
                    />
                    <CardBestSeller
                        product={{
                            name: "SCK B3K01",
                            harga: "IDR. 90.000",
                            image: "/assets/images/baju.png",
                        }}
                    />
                    <CardBestSeller
                        product={{
                            name: "SCK B3K01",
                            harga: "IDR. 90.000",
                            image: "/assets/images/baju.png",
                        }}
                    />
                    <CardBestSeller
                        product={{
                            name: "SCK B3K01",
                            harga: "IDR. 90.000",
                            image: "/assets/images/baju.png",
                        }}
                    />
                </div>

                
            </div>
        </HomeLayout>
    );
};

const CardCategory = ({ category }) => {
    return (
        <div className="flex flex-col items-center w-full px-4">
            <img
                className="w-full h-[200px] object-cover"
                src={category.image}
                alt={category.name}
            />
            <p className="text-xl font-semibold">{category.name}</p>
        </div>
    );
};

const CardBestSeller = ({ product }) => {
    return (
        <div className="flex flex-col items-center">
            <img
                className="w-full h-[200px] object-cover"
                src={product.image}
                alt={product.name}
            />
            <p className="text-base">{product.name}</p>
            <p className="text-base font-semibold">{product.harga}</p>
        </div>
    );
};

export default Landing;
