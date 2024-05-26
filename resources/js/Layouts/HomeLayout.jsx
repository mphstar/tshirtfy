import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const HomeLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <Header />
            {children}
            <div className="flex flex-col mt-32 mb-6 container px-4 max-w-[1000px] mx-auto">
                <img src="/assets/images/pembayaran.png" alt="pembayaran" />
                <img src="/assets/images/pengiriman.png" alt="pengiriman" />
            </div>
            <Footer />
        </div>
    );
};

export default HomeLayout;
