import React from "react";
import useAdminStore from "../Store/AdminStore";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdOutlineCategory } from "react-icons/md";
import { Link } from "@inertiajs/react";

const SidebarAdmin = () => {
    const store = useAdminStore();

    return (
        <>
            <div
                className={`h-[100dvh] z-[99] bg-slate-900 flex max-w-[90%] md:min-w-0 w-[400px] md:w-[200px] lg:w-[300px] fixed ${
                    store.showSidebar ? "translate-x-0" : "-translate-x-[100%]"
                } md:translate-x-0 text-[20px] overflow-y-auto duration-300 max-w-[90%] ease-in-out flex-col px-[34px] py-[22px] custom-scrollbar-sidebar`}
            >
                <div className="flex mb-[32px] flex-row gap-4 items-center mt-12">
                    <span className="font-semibold text-[16px] md:text-base flex items-center gap-3">
                        <FaBookOpenReader size={18} className="text-white" />
                        <span className="text-white text-[20px] md:text-base flex-1">
                            TshirtFy
                        </span>
                    </span>
                </div>
                {/* <div className="h-[71px]"></div> */}
                <p className="text-gray-200 text-xs py-4">Menu</p>

                <Link href="/admin/category">
                    <div
                        className={`flex w-full items-center gap-4 py-4 md:py-2 ${
                            store.title == "Category"
                                ? "stroke-white"
                                : "stroke-gray-400"
                        }`}
                    >
                        <MdOutlineCategory
                            className={`${
                                store.title == "Category"
                                    ? "text-white"
                                    : "text-gray-400"
                            }`}
                        />

                        <span
                            className={`text-[16px] ${
                                store.title == "Category"
                                    ? "text-white"
                                    : "text-gray-400"
                            }`}
                        >
                            Category
                        </span>
                    </div>
                </Link>
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
