import React, { useEffect, useState } from "react";
import AdminLayout from "../../Layouts/AdminLayout";
import { FaEdit, FaSearch } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import useAdminStore from "../../Store/AdminStore";
import { Link, router, usePage } from "@inertiajs/react";
import ConfirmDialog from "../../Utils/ConfirmDialog";
import Swal from "sweetalert2";
import formatRupiah from "../../Utils/FormatRupiah";

const Product = () => {
    const store = useAdminStore();

    const page = usePage();

    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();

        router.get(`/admin/product/${page.props.kategori_id}?search=${search}`);
    };

    const handleFilter = (e) => {
        router.get(
            `/admin/product/${page.props.kategori_id}?tag=${e.target.value}`
        );
    };

    useEffect(() => {
        store.setTitle("Category");

        // cek jika terdapat parameter search
        if (page.props.search) {
            setSearch(page.props.search);
        }
    }, []);

    const DeleteData = (id) => {
        ConfirmDialog({
            isDelete: true,
            onConfirm: async () => {
                Swal.fire({
                    title: "Loading",
                    html: '<div class="body-loading"><div class="loadingspinner"></div></div>', // add html attribute if you want or remove
                    allowOutsideClick: false,
                    showConfirmButton: false,
                });

                const respone = await fetch(`/api/product/delete`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        id: id,
                    }),
                });

                const data = await respone.json();

                if (respone.status === 200) {
                    Swal.fire("Success", data.message, "success");
                    router.reload();
                } else {
                    Swal.fire("Error", data.message, "error");
                }
            },
        });
    };

    return (
        <AdminLayout>
            <div className="flex flex-col">
                <h1 className="py-3 text-2xl font-semibold text-primary">
                    Products
                </h1>
                <div className="flex flex-col gap-3 md:flex-row md:justify-between">
                    <div className="flex flex-row bg-gray-200 px-3 py-2 gap-2">
                        <form onSubmit={handleSearch} action="">
                            <input
                                className="bg-transparent outline-none w-full"
                                type="text"
                                name=""
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search..."
                                id=""
                            />
                        </form>
                        <FaSearch className="h-full text-gray-500" />
                    </div>
                    <div className="flex flex-row gap-3 w-full md:w-fit">
                        <label className="w-full md:w-fit">
                            <div className="relative">
                                <select
                                    className="bg-gray-200 pr-12 outline-none w-full px-3 py-2 appearance-none"
                                    name=""
                                    value={page.props.tag_id ?? ""}
                                    id=""
                                    onChange={handleFilter}
                                >
                                    <option value="">All</option>
                                    {page.props.tag.map((tag, i) => (
                                        <option value={tag.id} key={i}>
                                            {tag.nama}
                                        </option>
                                    ))}
                                </select>
                                <div className="absolute top-0 right-4 h-full pointer-events-none">
                                    <RiArrowDropDownLine className="h-full" />
                                </div>
                            </div>
                        </label>
                        <Link
                            href={`/admin/product/add?category=${page.props.kategori_id}`}
                        >
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
                                    Stock
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
                            {page.props.data.map((product, i) => (
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
                                                src={`/images/${product.gambar}`}
                                                alt=""
                                            />
                                        </div>
                                        {/* buatkan gambar agar tidak wrap */}
                                    </td>
                                    <td className="px-3 py-2">
                                        {product.nama}
                                    </td>
                                    <td className="px-3 py-2">
                                        {product.kategori.nama}
                                    </td>
                                    <td className="px-3 py-2">
                                        {formatRupiah(product.harga)}
                                    </td>
                                    <td className="px-3 py-2">
                                        {product.stok}
                                    </td>
                                    <td className="px-3 py-2">
                                        {product.tag.nama}
                                    </td>
                                    <td className="px-3 py-2">
                                        <div className="flex gap-2">
                                            <Link
                                                href={`/admin/product/edit/${product.id}`}
                                            >
                                                <button className="bg-orange-500 p-3 rounded-md text-white">
                                                    <FaEdit size={12} />
                                                </button>
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    DeleteData(product.id)
                                                }
                                                className="bg-red-500 p-3 rounded-md text-white"
                                            >
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
