import React, { useEffect } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import useHomeStore from "../Store/HomeStore";

const Login = () => {
    const store = useHomeStore();

    useEffect(() => {
        store.setPage("login");

        return () => {};
    }, []);

    return (
        <HomeLayout>
            <div className="flex flex-col container px-4 max-w-[1000px] mx-auto py-6">
                <div className="flex flex-row mb-6">
                    <div className="flex flex-col">
                        <p
                            className="text-xl font-semibold"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            LOGIN
                        </p>
                        <p
                            data-aos="fade-left"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                            className="text-3xl text-orange-500 font-bold"
                        >
                            MY ACCOUNT
                        </p>
                    </div>
                </div>

                <form className="md:max-w-[400px] flex flex-col gap-2">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">Username / Email</label>
                        <input
                            className="bg-[#D9D9D9] px-4 py-2 outline-none"
                            type="text"
                            name=""
                            id="email"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password">Password</label>
                        <input
                            className="bg-[#D9D9D9] px-4 py-2 outline-none"
                            type="text"
                            name=""
                            id="password"
                        />
                    </div>
                    {/* buatkan remember me */}
                    <div className="flex flex-row items-center gap-2">
                        <input type="checkbox" name="" id="check" />
                        <label htmlFor="check">Remember Me</label>
                    </div>
                    <div className="flex flex-row items-center gap-3 mt-6">
                        <button className="text-white px-3 py-2 bg-[#E41919]">LOGIN</button>
                        <button className="text-white px-3 py-2 bg-[#FCA522]">REGISTER</button>
                    </div>
                </form>
            </div>
        </HomeLayout>
    );
};

export default Login;
