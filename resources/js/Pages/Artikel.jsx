import React, { useEffect } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import useHomeStore from "../Store/HomeStore";

const Artikel = () => {
    const store = useHomeStore();

    useEffect(() => {
        store.setPage("artikel");

        return () => {};
    }, []);

    return (
        <HomeLayout>
            <div className="flex flex-col container px-4 max-w-[1000px] mx-auto py-6">
                <div className="flex flex-row mb-6">
                    <div className="flex flex-col">
                        <p className="text-xl font-semibold">
                            VISIT & JOIN
                        </p>
                        <p className="text-3xl text-orange-500 font-bold">
                            OUR ARTICLE
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <CardArtikel img={"/assets/images/artikel.png"} />
                    <CardArtikel img={"/assets/images/artikel.png"} />
                    <CardArtikel img={"/assets/images/artikel.png"} />
                    <CardArtikel img={"/assets/images/artikel.png"} />
                </div>
            </div>
        </HomeLayout>
    );
};

const CardArtikel = ({ img }) => {
    return (
        <div className="flex flex-col bg-white relative group">
            <div className="z-[3] absolute w-full h-full flex justify-center items-center">
                <button className="bg-red-500 text-white w-fit px-4 py-2 scale-0 group-hover:scale-100 ease-in-out duration-300">{`READ MORE >`}</button>
            </div>
            <img
                src={img}
                alt={"artikel"}
                className="object-cover h-[300px] md:h-[400px] w-full "
            />
            <div className="bg-black/20 group-hover:bg-white/70 duration-300 ease-in-out absolute top-0 left-0 w-full h-full"></div>
            <div className="absolute bottom-5 left-5">
                <p className="font-bold text-xl text-white group-hover:text-black duration-300 ease-in-out">
                    SAVE YOUR
                </p>
                <p className="text-orange-500 font-bold text-xl">
                    CLOTH SAFETY
                </p>
            </div>
        </div>
    );
};

export default Artikel;
