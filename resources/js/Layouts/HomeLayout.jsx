import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeLayout = ({ children }) => {
    useEffect(() => {
        AOS.init();

        return () => {
            AOS.refresh();
        };
    });

    return (
        <div className="flex flex-col min-h-[100dvh]">
            <Header />
            {children}
            <div data-aos="zoom-in" data-aos-duration="1000"  className="flex flex-col mt-32 mb-6 container px-4 max-w-[1000px] mx-auto">
                <img src="/assets/images/pembayaran.png" alt="pembayaran" />
                <img src="/assets/images/pengiriman.png" alt="pengiriman" />
            </div>
            <Footer />
        </div>
    );
};

export default HomeLayout;
