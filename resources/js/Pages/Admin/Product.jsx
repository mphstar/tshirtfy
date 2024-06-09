import React, { useEffect } from "react";
import AdminLayout from "../../Layouts/AdminLayout";
import { FaEdit, FaSearch } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import useAdminStore from "../../Store/AdminStore";
import { Link } from "@inertiajs/react";

const Product = () => {
    const store = useAdminStore();

    useEffect(() => {
        store.setTitle("Category");
    }, []);
    return (
        <AdminLayout>
            <div className="flex flex-col">
                <h1 className="py-3 text-2xl font-semibold text-primary">
                    Products
                </h1>
                <div className="flex flex-col gap-3 md:flex-row md:justify-between">
                    <div className="flex flex-row bg-gray-200 px-3 py-2 gap-2">
                        <input
                            className="bg-transparent outline-none w-full"
                            type="text"
                            name=""
                            placeholder="Search..."
                            id=""
                        />
                        <FaSearch className="h-full text-gray-500" />
                    </div>
                    <div className="flex flex-row gap-3 w-full md:w-fit">
                        <label className="w-full md:w-fit">
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
                                <div className="absolute top-0 right-4 h-full pointer-events-none">
                                    <RiArrowDropDownLine className="h-full" />
                                </div>
                            </div>
                        </label>
                        <Link href="/admin/product/add">
                            <button className="bg-green-500 px-4 py-2 rounded-md text-white">
                                Tambah
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="mt-4 w-full">
                        <thead>
                            <tr>
                                <th className="text-start py-2 text-primary w-[100px] whitespace-nowrap">
                                    Image
                                </th>
                                <th className="text-start py-2 px-3 text-primary ">
                                    Product Name
                                </th>
                                <th className="text-start py-2 px-3 text-primary">
                                    Category
                                </th>
                                <th className="text-start py-2 px-3 text-primary">
                                    Price
                                </th>
                                <th className="text-start py-2 px-3 text-primary">
                                    Tag
                                </th>
                                <th className="text-start py-2 px-3 text-primary">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 10 }).map((_, i) => (
                                <tr
                                    className={`${
                                        i % 2 == 0
                                            ? "bg-gray-200"
                                            : "bg-gray-300"
                                    }`}
                                    key={i}
                                >
                                    <td className="px-3 py-2 ">
                                        <div className="w-20 h-20">
                                            <img
                                                className="w-20 h-20  object-cover"
                                                src="https://picsum.photos/200/300"
                                                alt=""
                                            />
                                        </div>
                                        {/* buatkan gambar agar tidak wrap */}
                                    </td>
                                    <td className="px-3 py-2">
                                        T-shirt Pro V2
                                    </td>
                                    <td className="px-3 py-2">Man</td>
                                    <td className="px-3 py-2">20.000</td>
                                    <td className="px-3 py-2">T-shirt</td>
                                    <td className="px-3 py-2">
                                        <div className="flex gap-2">
                                            <button className="bg-orange-500 p-3 rounded-md text-white">
                                                <FaEdit size={12} />
                                            </button>
                                            <button className="bg-red-500 p-3 rounded-md text-white">
                                                <FaTrash size={12} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Product;
