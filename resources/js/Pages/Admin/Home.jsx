import React from "react";
import AdminLayout from "../../Layouts/AdminLayout";
import { MdOutlineUploadFile } from "react-icons/md";

const Home = () => {
    return (
        <AdminLayout>
            <div className="flex flex-col">
                <h1 className="py-3 text-2xl font-semibold text-primary">
                    Dashboard
                </h1>
                <div className="flex flex-col bg-primary text-white px-4 py-7 mt-6 relative">
                    <img
                        className="right-0 bottom-0 absolute hidden md:flex"
                        src="/assets/images/bro.png"
                        alt=""
                    />
                    <h1 className="text-xl font-semibold">Total Product</h1>
                    <span className="font-semibold text-xl">Uploaded</span>
                    <div className="flex flex-row mt-12 gap-3 overflow-x-auto scrollbar-hide">
                        <ItemCard name={"T-shirt"} total={20} />
                        <div className="w-[2px] h-full bg-white"></div>
                        <ItemCard name={"Jacket"} total={64} />
                        <div className="w-[2px] h-full bg-white"></div>
                        <ItemCard name={"Shoes"} total={32} />
                        <div className="w-[2px] h-full bg-white"></div>
                        <ItemCard name={"Hoodie"} total={34} />
                        <div className="w-[2px] h-full bg-white"></div>
                        <ItemCard name={"Polo Series"} total={36} />
                        <div className="w-[2px] h-full bg-white"></div>
                        <ItemCard name={"Totebag"} total={36} />
                        <div className="w-[2px] h-full bg-white"></div>
                        <ItemCard name={"Slippers"} total={36} />
                    </div>
                </div>
                <h1 className="py-3 text-2xl font-semibold text-primary mt-6">
                    Add New Product
                </h1>
                <div className="flex flex-col w-full h-[200px] bg-gray-300 mt-4 rounded-lg justify-center items-center gap-3 text-primary">
                    <MdOutlineUploadFile size={44} />
                    <p className="text-center">Input New Product with detail & category </p>
                </div>
            </div>
        </AdminLayout>
    );
};

const ItemCard = ({ name, total }) => {
    return (
        <div className="flex flex-col">
            <h1 className="text-xs">{name}</h1>
            <span className="text-sm">{total}</span>
        </div>
    );
};

export default Home;
