import React, { useEffect, useState } from "react";
import useAdminStore from "../Store/AdminStore";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdOutlineCategory } from "react-icons/md";
import { Head, Link } from "@inertiajs/react";
import { FaHome } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import {
    IoLogOutOutline,
    IoPricetagsOutline,
    IoSettingsOutline,
} from "react-icons/io5";

const SidebarAdmin = () => {
    const store = useAdminStore();

    const [menuDropdown, setMenuDropdown] = useState(false);

    const handleMenu = (e) => {
        setMenuDropdown(!menuDropdown);
    };

    return (
        <>
            <Head title={store.title} />
            <div
                className={`h-[100dvh] z-[99] bg-primary flex max-w-[90%] md:min-w-0 w-[400px] md:w-[200px] lg:w-[300px] fixed ${
                    store.showSidebar ? "translate-x-0" : "-translate-x-[100%]"
                } md:translate-x-0 text-[20px] overflow-y-auto duration-300 max-w-[90%] ease-in-out flex-col px-[24px] py-[22px] custom-scrollbar-sidebar`}
            >
                <div className="flex  flex-row gap-4 items-center w-full justify-center">
                    <img
                        className="h-24"
                        src="/assets/images/logo1.png"
                        alt="Logo"
                    />
                </div>
                {/* <div className="h-[71px]"></div> */}
                <p className="text-gray-200 text-xs py-2 mb-3">Menu</p>

                <Link href="/admin">
                    <div
                        className={`flex w-full items-center gap-4 py-4 md:py-2 px-3 ${
                            store.title == "Dashboard"
                                ? "bg-white rounded-md"
                                : "text-white"
                        }`}
                    >
                        <FaHome />
                        <span className={`text-[16px] `}>Home</span>
                    </div>
                </Link>
                <Link href="/admin/tag">
                    <div
                        className={`flex w-full items-center gap-4 py-4 md:py-2 px-3 mt-2 ${
                            store.title == "Tag"
                                ? "bg-white rounded-md"
                                : "text-white"
                        }`}
                    >
                        <IoPricetagsOutline />
                        <span className={`text-[16px] `}>Tag</span>
                    </div>
                </Link>

                <div
                    onClick={handleMenu}
                    className={`flex w-full items-center gap-4 py-4 md:py-2 px-3 mt-2 ${
                        store.title == "Category"
                            ? "bg-white rounded-md "
                            : "text-white"
                    }`}
                >
                    <MdOutlineCategory />
                    <span className={`text-[16px] flex-1 `}>
                        Produk Category
                    </span>
                    <IoIosArrowDown
                        className={` ${
                            !menuDropdown ? "rotate-0" : "rotate-180"
                        } duration-300 ease-in-out`}
                    />
                </div>
                <ul
                    className={`flex flex-col text-white cursor-pointer duration-300 ease-in-out overflow-hidden ${
                        !menuDropdown ? "h-0" : "h-[120px]"
                    }`}
                >
                    <Link href="/admin/product/1">
                        <li className={`px-2 py-2 pl-12 text-[16px]`}>Men</li>
                    </Link>
                    <Link href="/admin/product/2">
                        <li className={`px-2 py-2 pl-12 text-[16px]`}>Woman</li>
                    </Link>
                    <Link href="/admin/product/3">
                        <li className={`px-2 py-2 pl-12 text-[16px]`}>
                            Unisex
                        </li>
                    </Link>
                </ul>
                <Link href="/admin/cover">
                    <div
                        className={`flex w-full items-center gap-4 py-4 md:py-2 px-3 mt-2 ${
                            store.title == "Landing Page"
                                ? "bg-white rounded-md"
                                : "text-white"
                        }`}
                    >
                        <IoSettingsOutline />
                        <span className={`text-[16px] `}>
                            Cover Landing Page
                        </span>
                    </div>
                </Link>
                <a href="/logout">
                    <div
                        className={`flex w-full items-center gap-4 py-4 md:py-2 px-3  text-white
                        }`}
                    >
                        <IoLogOutOutline />
                        <span className={`text-[16px] `}>Logout</span>
                    </div>
                </a>
            </div>

            <div
                onClick={store.handleSidebar}
                className={`duration-500 ease-in-out min-h-[100dvh] w-screen flex z-[90] ${
                    store.showSidebar
                        ? "bg-black/50 backdrop-blur-sm pointer-events-auto"
                        : "bg-black/0 backdrop-blur-none pointer-events-none"
                } fixed`}
            ></div>
        </>
    );
};

export default SidebarAdmin;
