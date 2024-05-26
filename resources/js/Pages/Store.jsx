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
                        <p className="text-xl font-semibold">
                            WE ARE AVAILABLE
                        </p>
                        <p className="text-3xl text-orange-500 font-bold">
                            ON MARKETPLACE
                        </p>
                    </div>
                </div>
                <div>
                    <img src="/assets/images/tokopedia.png" alt="tokopedia" />
                </div>
                <div className="flex flex-row w-full mt-4">
                    <img
                        className=" object-cover w-[60%] pr-2"
                        src="/assets/images/shopee.png"
                        alt="shopee"
                    />
                    <img
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
