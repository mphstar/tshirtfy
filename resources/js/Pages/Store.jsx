import React, { useEffect } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import useHomeStore from "../Store/HomeStore";

const Store = () => {
    const store = useHomeStore();

    useEffect(() => {
        store.setPage("store");

        return () => {};
    }, []);

    return (
        <HomeLayout>
            <div className="flex flex-col container px-4 max-w-[1000px] mx-auto py-6">
                <div className="flex flex-row mb-6">
                    <div className="flex flex-col">
                        <p
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            className="text-xl font-semibold"
                        >
                            WE ARE AVAILABLE
                        </p>
                        <p
                            data-aos="fade-left"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                            className="text-3xl text-orange-500 font-bold"
                        >
                            ON MARKETPLACE
                        </p>
                    </div>
                </div>
                <div>
                    <img
                        data-aos="zoom-in"
                        data-aos-delay="0"
                        data-aos-duration="1000"
                        src="/assets/images/tokopedia.png"
                        alt="tokopedia"
                    />
                </div>
                <div className="flex flex-row w-full mt-4">
                    <img
                        data-aos="zoom-in"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                        data-aos-offset="5"
                        className=" object-cover w-[60%] pr-2"
                        src="/assets/images/shopee.png"
                        alt="shopee"
                    />
                    <img
                        data-aos="zoom-in"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        data-aos-offset="5"
                        className=" object-cover w-[40%] pl-2"
                        src="/assets/images/tiktok.png"
                        alt="tiktok"
                    />
                </div>
            </div>
        </HomeLayout>
    );
};

export default Store;
