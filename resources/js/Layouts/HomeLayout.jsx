import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const HomeLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default HomeLayout;
