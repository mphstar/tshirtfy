import React, { useEffect, useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import useHomeStore from "../Store/HomeStore";
import { MdArrowBack } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { router } from "@inertiajs/react";
import getParamByName from "../Utils/GetParamByName";
import { GrFilter } from "react-icons/gr";
import AddParamUrl from "../Utils/AddParamUrl";
import formatRupiah from "../Utils/FormatRupiah";

const Product = (props) => {
    const store = useHomeStore();

    const [collapseMan, setCollapseMan] = useState(
        getParamByName("category") === "1"
    );
    const [collapseWoman, setCollapseWoman] = useState(
        getParamByName("category") === "2"
    );
    const [collapseUnisex, setCollapseUnisex] = useState(
        getParamByName("category") === "3"
    );

    const [showFilter, setShowFilter] = useState(false);

    useEffect(() => {
        store.setPage("product");

        return () => {};
    }, []);

    return (
        <HomeLayout>
            <div className="flex flex-col container px-4 max-w-[1000px] mx-auto py-6">
                <div className="flex flex-row gap-4 w-full h-fit">
                    <div
                        onClick={() => setShowFilter(false)}
                        className={`bg-black w-screen h-screen z-[4] md:hidden duration-300 ease-in-out fixed top-0 left-0 ${
                            showFilter
                                ? "opacity-30 pointer-events-auto"
                                : "opacity-0 pointer-events-none"
                        }`}
                    ></div>
                    <div
                        className={`w-[90%] md:w-[500px] md:max-w-[500px] h-fit pb-12 bg-[#D9D9D9] ${
                            showFilter
                                ? "translate-y-[0]"
                                : "translate-y-[400%]"
                        } md:flex md:translate-y-0 flex-col fixed md:static duration-300 ease-in-out z-[5]`}
                    >
                        <div className=" px-6 py-3 mb-3">
                            <h1 className="font-semibold">Categories</h1>
                        </div>
                        <div
                            onClick={() => setCollapseMan(!collapseMan)}
                            className={`px-6 py-1 flex ${
                                getParamByName("category") == 1
                                    ? "bg-red-500 text-white"
                                    : "bg-transparent text-black"
                            } items-center`}
                        >
                            <p className="flex-1">Men</p>
                            <IoIosArrowUp
                                className={`${
                                    collapseMan ? "rotate-0" : "rotate-180"
                                }`}
                            />
                        </div>
                        <div
                            className={`flex flex-col px-6 py-1 overflow-hidden ${
                                collapseMan ? "h-full" : "h-0"
                            }`}
                        >
                            {props.tag.map((item, i) => (
                                <div
                                    onClick={() =>
                                        router.get(
                                            "/product?category=1&tag=" + item.id
                                        )
                                    }
                                    key={i}
                                    className="pl-4 py-1 hover:bg-gray-300"
                                >
                                    <p
                                        className={
                                            getParamByName("tag") == item.id &&
                                            getParamByName("category") == 1
                                                ? "text-red-500"
                                                : "text-black"
                                        }
                                    >
                                        {item.nama}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div
                            onClick={() => setCollapseWoman(!collapseWoman)}
                            className={`px-6 py-1 flex ${
                                getParamByName("category") == 2
                                    ? "bg-red-500 text-white"
                                    : "bg-transparent text-black"
                            } items-center`}
                        >
                            <p className="flex-1">Woman</p>
                            <IoIosArrowUp
                                className={`${
                                    collapseWoman ? "rotate-0" : "rotate-180"
                                }`}
                            />
                        </div>
                        <div
                            className={`flex flex-col px-6 py-1 overflow-hidden ${
                                collapseWoman ? "h-full" : "h-0"
                            }`}
                        >
                            {props.tag.map((item, i) => (
                                <div
                                    onClick={() =>
                                        router.get(
                                            "/product?category=2&tag=" + item.id
                                        )
                                    }
                                    key={i}
                                    className="pl-4 py-1 hover:bg-gray-300"
                                >
                                    <p
                                        className={
                                            getParamByName("tag") == item.id &&
                                            getParamByName("category") == 2
                                                ? "text-red-500"
                                                : "text-black"
                                        }
                                    >
                                        {item.nama}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div
                            onClick={() => setCollapseUnisex(!collapseUnisex)}
                            className={`px-6 py-1 flex ${
                                getParamByName("category") == 3
                                    ? "bg-red-500 text-white"
                                    : "bg-transparent text-black"
                            } items-center`}
                        >
                            <p className="flex-1">Men</p>
                            <IoIosArrowUp
                                className={`${
                                    collapseUnisex ? "rotate-0" : "rotate-180"
                                }`}
                            />
                        </div>
                        <div
                            className={`flex flex-col px-6 py-1 overflow-hidden ${
                                collapseUnisex ? "h-full" : "h-0"
                            }`}
                        >
                            {props.tag.map((item, i) => (
                                <div
                                    onClick={() =>
                                        router.get(
                                            "/product?category=3&tag=" + item.id
                                        )
                                    }
                                    key={i}
                                    className="pl-4 py-1 hover:bg-gray-300"
                                >
                                    <p
                                        className={
                                            getParamByName("tag") == item.id &&
                                            getParamByName("category") == 3
                                                ? "text-red-500"
                                                : "text-black"
                                        }
                                    >
                                        {item.nama}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="flex w-full justify-end gap-3">
                            <div className="flex gap-3 items-center">
                                <span>SHOW ALL RESULT</span>
                                <select
                                    className="border-2 rounded-md px-3 py-2"
                                    name=""
                                    id=""
                                    value={getParamByName("filter")}
                                    onChange={(e) =>
                                        router.get(
                                            AddParamUrl(
                                                "filter",
                                                e.target.value
                                            )
                                        )
                                    }
                                >
                                    <option value="new">New</option>
                                    <option value="old">Old</option>
                                </select>
                            </div>
                            <div>
                                <button
                                    onClick={() => setShowFilter(true)}
                                    className="bg-slate-800 h-full px-3 md:hidden rounded-md"
                                >
                                    {" "}
                                    <GrFilter className="text-white" />
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 mt-4 h-fit gap-4">
                            {props.data.map((product, i) => (
                                <CardProduct
                                    key={i}
                                    product={{
                                        name: product.nama,
                                        harga: formatRupiah(product.harga),
                                        image: "/images/" + product.gambar,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
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
            <img className="w-full" src={product.image} alt={product.name} />
            <p className="text-base text-center">{product.name}</p>
            <p className="text-base text-center font-semibold">
                {product.harga}
            </p>
        </div>
    );
};

export default Product;
