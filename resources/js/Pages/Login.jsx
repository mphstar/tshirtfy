import React, { useEffect, useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import useHomeStore from "../Store/HomeStore";
import Swal from "sweetalert2";

const Login = (props) => {
    const store = useHomeStore();

    useEffect(() => {
        store.setPage("Login");

        return () => {};
    }, []);

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleLogin = async (e) => {
        e.preventDefault();

        Swal.fire({
            title: "Loading",
            html: '<div class="body-loading"><div class="loadingspinner"></div></div>', // add html attribute if you want or remove
            allowOutsideClick: false,
            showConfirmButton: false,
        });

        const res = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...form, _token: props.csrf_token }),
        });

        // Tutup loading
        Swal.close();

        const result = await res.json();

        if (res.status == 200) {
            Swal.fire({
                title: result.status == "berhasil" ? "Berhasil" : "Gagal",
                text: result.message,
                icon: result.status == "berhasil" ? "success" : "warning",
            });

            location.href = "/admin";
        } else {
            Swal.fire({
                title: "Gagal",
                text: result.message,
                icon: "error",
            });
        }
    };

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

                <form
                    onSubmit={handleLogin}
                    className="md:max-w-[400px] flex flex-col gap-2"
                >
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">Username / Email</label>
                        <input
                            className="bg-[#D9D9D9] px-4 py-2 outline-none"
                            type="text"
                            name=""
                            value={form.email}
                            onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                            }
                            id="email"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password">Password</label>
                        <input
                            className="bg-[#D9D9D9] px-4 py-2 outline-none"
                            type="password"
                            name=""
                            value={form.password}
                            onChange={(e) =>
                                setForm({ ...form, password: e.target.value })
                            }
                            id="password"
                        />
                    </div>
                    {/* buatkan remember me */}
                    <div className="flex flex-row items-center gap-2">
                        <input type="checkbox" name="" id="check" />
                        <label htmlFor="check">Remember Me</label>
                    </div>
                    <div className="flex flex-row items-center gap-3 mt-6">
                        <button className="text-white px-3 py-2 bg-[#E41919]">
                            LOGIN
                        </button>
                        {/* <button className="text-white px-3 py-2 bg-[#FCA522]">REGISTER</button> */}
                    </div>
                </form>
            </div>
        </HomeLayout>
    );
};

export default Login;
