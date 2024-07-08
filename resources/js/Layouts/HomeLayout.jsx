import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp } from "react-icons/fa6";

const HomeLayout = ({ children }) => {
    useEffect(() => {
        AOS.init();

        return () => {
            AOS.refresh();
        };
    });

    return (
        <div className="flex flex-col min-h-[100dvh]">
            <a href="https://wa.me/6285748288912" className="flex flex-row text-white cursor-pointer hover:bg-green-500 rounded-full z-[9] drop-shadow-lg gap-2 items-center fixed bottom-8 right-8 w-fit px-3 py-2 bg-green-400">
                <FaWhatsapp />
                <span className="text-sm font-semibold">CONTACT US</span>
            </a>
            <Header />
            {children}
            <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="flex flex-col mt-32 mb-6 container px-4 max-w-[1000px] mx-auto"
            >
                <img src="/assets/images/pembayaran.png" alt="pembayaran" />
                <img src="/assets/images/pengiriman.png" alt="pengiriman" />
            </div>
            <Footer />
        </div>
    );
};

export default HomeLayout;
