import React from "react";

const Footer = () => {
    return (
        <div className="bg-slate-900 flex flex-col mt-4 pt-6">
            <div className="flex flex-col md:flex-row gap-3 container mx-auto max-w-[1000px] justify-center  px-6 text-white">
                <div className="flex flex-col mt-3 w-full md:max-w-[200px]">
                    <div className="relative w-fit mb-8">
                        <p className="py-3 text-xl">ABOUT</p>
                        <div className="w-[60%] h-[4px] bg-white absolute bottom-0 left-0"></div>
                    </div>
                    <p>
                        SCK.CO have been running in the circles of vein for
                        several years. Those cycles of journey have been an
                        amazing adventures. Besides brave thundering days, the
                        tempering nights, some cloaks were washed out, some
                        bottles emptied, some passions tired out.
                    </p>
                </div>

                <div className="flex flex-col mt-3 w-full md:max-w-[200px]">
                    <div className="relative w-fit mb-8">
                        <p className="py-3 text-xl">INFORMATION</p>
                        <div className="w-[60%] h-[4px] bg-white absolute bottom-0 left-0"></div>
                    </div>
                    <ul>
                        <li className="py-1 font-semibold">Home</li>
                        <li className="py-1 font-semibold">Privacy Policy</li>
                        <li className="py-1 font-semibold">Store Location</li>
                    </ul>
                </div>

                <div className="flex flex-col mt-3 w-full md:max-w-[200px]">
                    <div className="relative w-fit mb-8">
                        <p className="py-3 text-xl">ORDER</p>
                        <div className="w-[60%] h-[4px] bg-white absolute bottom-0 left-0"></div>
                    </div>
                    <ul>
                        <li className="py-1 font-semibold">How to Order</li>
                        <li className="py-1 font-semibold">Shipping</li>
                        <li className="py-1 font-semibold">Returns</li>
                        <li className="py-1 font-semibold">Size Chart</li>
                    </ul>
                </div>

                <div className="flex flex-col mt-3 w-full md:max-w-[200px]">
                    <div className="relative w-fit mb-8">
                        <p className="py-3 text-xl">CONTACT US</p>
                        <div className="w-[60%] h-[4px] bg-white absolute bottom-0 left-0"></div>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-semibold">Online CS</h1>
                        <p className="text-gray-400">+6285335390133</p>
                        <p className="text-gray-400">
                            Monday - Sunday 24 Hours
                        </p>
                    </div>
                    <div className="flex flex-col mt-3">
                        <h1 className="font-semibold">Admin CS</h1>
                        <p className="text-gray-400">+6285335390133</p>
                        <p className="text-gray-400">admin@gmail.com</p>
                        <p className="text-gray-400">
                            Monday - Sunday 24 Hours
                        </p>
                    </div>
                </div>
            </div>
            <span className="text-gray-400 text-center pt-16 mb-8">
                Diprojectin@ | IT_solution 2024 webdev
            </span>
        </div>
    );
};

export default Footer;
