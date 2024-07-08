import React, { useEffect } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import useHomeStore from "../Store/HomeStore";

const Service = () => {
    const store = useHomeStore();

    useEffect(() => {
        store.setPage("service");

        return () => {};
    }, []);

    return (
        <HomeLayout>
            <div
                data-aos="fade-in"
                data-aos-delay="200"
                data-aos-duration="1000"
                className="flex flex-col container px-4 max-w-[1000px] mx-auto py-6"
            >
                <img
                    className="h-[400px]"
                    src="/assets/images/construction.svg"
                    alt="Maintenance"
                />
                <p className="text-center font-semibold">
                    Sedang dalam perbaikan
                </p>
                {/* <div className="flex flex-row mb-6">
                    <div className="flex flex-col">
                        <p
                            className="text-xl font-semibold"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            GET CUSTOME IN
                        </p>
                        <p
                            data-aos="fade-left"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                            className="text-3xl text-orange-500 font-bold"
                        >
                            OUR SERVICES
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <CardService img={"/assets/images/service.png"} />
                    <CardService img={"/assets/images/service.png"} />
                    <CardService img={"/assets/images/service.png"} />
                    <CardService img={"/assets/images/service.png"} />
                    <CardService img={"/assets/images/service.png"} />
                    <CardService img={"/assets/images/service.png"} />
                    <CardService img={"/assets/images/service.png"} />
                </div> */}
            </div>
        </HomeLayout>
    );
};

const CardService = ({ img }) => {
    return (
        <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="flex flex-col bg-white relative group"
        >
            <div className="z-[3] absolute w-full h-full flex justify-center items-center">
                <button className="bg-red-500 text-white w-fit px-4 py-2 scale-0 group-hover:scale-100 ease-in-out duration-300">{`CONSULT HERE`}</button>
            </div>
            <img
                src={img}
                alt={"artikel"}
                className="object-cover h-[300px] md:h-[400px] w-full "
            />
            <div className="bg-black/20 group-hover:bg-white/70 duration-300 ease-in-out absolute top-0 left-0 w-full h-full"></div>
        </div>
    );
};

export default Service;
