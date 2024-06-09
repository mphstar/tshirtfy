import React, { useEffect } from "react";
import AdminLayout from "../../Layouts/AdminLayout";
import { MdOutlineUploadFile } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import useAdminStore from "../../Store/AdminStore";

const CreateProduct = () => {

    const store = useAdminStore();

    useEffect(() => {
        store.setTitle("Category");
    }, []);

    return (
        <AdminLayout>
            <div className="flex flex-col">
                <h1 className="py-3 text-2xl mb-3 font-semibold text-primary">
                    Upload New Product
                </h1>

                <label>
                    <p className="text-primary py-2 font-semibold">
                        Product Name
                    </p>
                    <input
                        className="bg-gray-200 outline-none w-full px-3 py-2"
                        type="text"
                        name=""
                        id=""
                    />
                </label>

                <label>
                    <p className="text-primary py-2 font-semibold">
                        Product Image
                    </p>
                    <div className="h-[200px] bg-red-500 w-[200px] relative">
                        <input
                            className="bg-gray-200 outline-none opacity-0 w-full h-full px-3 py-2"
                            type="file"
                            name=""
                            id=""
                        />
                        <div className="absolute top-0 w-full h-full flex items-center justify-center">
                            <MdOutlineUploadFile
                                size={32}
                                className="text-white"
                            />
                        </div>
                    </div>
                    <p className="text-sm text-primary mt-2">
                        Select This Image Format JPG. JPEG. PNG Max 2MB
                    </p>
                </label>

                <label>
                    <p className="text-primary py-2 font-semibold">
                        Product Category
                    </p>
                    <div className="relative">
                        <select
                            className="bg-gray-200 pr-12 outline-none w-full px-3 py-2 appearance-none"
                            name=""
                            id=""
                        >
                            <option value="">Men</option>
                            <option value="">Woman</option>
                            <option value="">Unisex</option>
                        </select>
                        <div className="absolute top-0 right-4 h-full">
                            <RiArrowDropDownLine className="h-full" />
                        </div>
                    </div>
                </label>
                <label>
                    <p className="text-primary py-2 font-semibold">
                        Product Tags
                    </p>
                    <div className="relative">
                        <select
                            className="bg-gray-200 pr-12 outline-none w-full px-3 py-2 appearance-none"
                            name=""
                            id=""
                        >
                            <option value="">Tshirt</option>
                            <option value="">Polo</option>
                            <option value="">Shoes</option>
                        </select>
                        <div className="absolute top-0 right-4 h-full">
                            <RiArrowDropDownLine className="h-full" />
                        </div>
                    </div>
                </label>
                <label>
                    <p className="text-primary py-2 font-semibold">
                        Product Description
                    </p>
                    <textarea
                        className="bg-gray-200 h-40 outline-none w-full px-3 py-2"
                        name=""
                        id=""
                    ></textarea>
                </label>
                <label>
                    <p className="text-primary py-2 font-semibold">
                        Product Price
                    </p>
                    <input
                        className="bg-gray-200 outline-none w-full px-3 py-2"
                        type="text"
                        name=""
                        id=""
                    />
                </label>
                <label>
                    <p className="text-primary py-2 font-semibold">
                        Product Url
                    </p>
                    <input
                        className="bg-gray-200 outline-none w-full px-3 py-2"
                        type="text"
                        name=""
                        id=""
                    />
                </label>

                <button className="bg-green-500 hover:bg-green-600 text-white w-fit px-8 rounded-md py-2 mt-6 mb-20">Save</button>
            </div>
        </AdminLayout>
    );
};

export default CreateProduct;
