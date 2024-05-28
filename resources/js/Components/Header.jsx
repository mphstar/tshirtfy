import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import useHomeStore from "../Store/HomeStore";

const Header = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const store = useHomeStore();

    return (
        <div className="sticky top-0 z-10 bg-[#D9D9D9] flex w-full items-center">
            <div className="container mx-auto max-w-[1000px] flex justify-between items-center px-6 py-3 md:py-0">
                <div className="flex items-center gap-3">
                    <img
                        src="/assets/images/logo.png"
                        alt="logo"
                        className="w-[70px] pr-6"
                    />
                    <div
                        className={`fixed md:static  md:bg-transparent ${
                            showNavbar
                                ? "translate-y-0 bg-white/80 backdrop-blur-md"
                                : "translate-y-[100%] bg-transparent backdrop-blur-none"
                        } md:translate-y-0 md:backdrop-blur-none duration-300 ease-in-out w-[100dvw] md:w-fit md:h-fit justify-center flex left-0 top-0 px-6 py-8 items-center h-[100dvh] md:flex`}
                    >
                        <IoIosClose
                            onClick={() => setShowNavbar(false)}
                            size={32}
                            className="absolute top-5 right-5 md:hidden"
                        />
                        <ul className="flex flex-col justify-center items-center md:flex-row gap-6">
                            <li>
                                <Link
                                    href="/"
                                    className={`text-gray-600 pb-2 ${
                                        store.page == "home"
                                            ? "border-b-4 border-b-red-500"
                                            : ""
                                    } hover:text-gray-800`}
                                >
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/product"
                                    className={`text-gray-600 pb-2 ${
                                        store.page == "product"
                                            ? "border-b-4 border-b-red-500"
                                            : ""
                                    } hover:text-gray-800`}
                                >
                                    PRODUCT
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/artikel"
                                    className={`text-gray-600 pb-2 ${
                                        store.page == "artikel"
                                            ? "border-b-4 border-b-red-500"
                                            : ""
                                    } hover:text-gray-800`}
                                >
                                    ARTIKEL
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/store"
                                    className={`text-gray-600 pb-2 ${
                                        store.page == "store"
                                            ? "border-b-4 border-b-red-500"
                                            : ""
                                    } hover:text-gray-800`}
                                >
                                    STORE
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/service"
                                    className={`text-gray-600 pb-2 ${
                                        store.page == "service"
                                            ? "border-b-4 border-b-red-500"
                                            : ""
                                    } hover:text-gray-800`}
                                >
                                    SERVICES
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <ul className="flex gap-6 items-center">
                        <li>
                            <Link
                                href="/login"
                                className="text-gray-600 hover:text-gray-800"
                            >
                                Login
                            </Link>
                        </li>
                        <RxHamburgerMenu
                            onClick={() => setShowNavbar(true)}
                            className="md:hidden"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
