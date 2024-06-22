import React, { useEffect, useState } from "react";
import AdminLayout from "../../Layouts/AdminLayout";
import { FaEdit, FaSearch } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import useAdminStore from "../../Store/AdminStore";
import { Link, router, usePage } from "@inertiajs/react";
import ConfirmDialog from "../../Utils/ConfirmDialog";
import Swal from "sweetalert2";

const Tag = () => {
    const store = useAdminStore();

    const page = usePage();

    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();

        router.get(`/admin/tag?search=${search}`);
    };

    useEffect(() => {
        store.setTitle("Tag");

        // cek jika terdapat parameter search
        if (page.props.search) {
            setSearch(page.props.search);
        }
    }, []);

    const DeleteData = (id) => {
        ConfirmDialog({
            onConfirm: async () => {
                Swal.fire({
                    title: "Loading",
                    html: '<div class="body-loading"><div class="loadingspinner"></div></div>', // add html attribute if you want or remove
                    allowOutsideClick: false,
                    showConfirmButton: false,
                });

                const respone = await fetch(`/api/tag/delete`, {
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
                    router.get("/admin/tag");
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
                    Tags
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
                        <Link href="/admin/tag/add">
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
                                    No
                                </th>
                                <th className="text-start py-2 px-3 text-primary ">
                                    Tag Name
                                </th>
                                <th className="text-start py-2 px-3 text-primary">
                                    Created At
                                </th>
                                <th className="text-start py-2 px-3 text-primary">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {page.props.data.map((tag, i) => (
                                <tr
                                    className={`${
                                        i % 2 == 0
                                            ? "bg-gray-200"
                                            : "bg-gray-300"
                                    }`}
                                    key={i}
                                >
                                    <td className="px-3 py-2 ">
                                        <p>{i + 1}</p>
                                    </td>
                                    <td className="px-3 py-2">{tag.nama}</td>
                                    <td className="px-3 py-2">
                                        {new Date(
                                            tag.created_at
                                        ).toLocaleDateString()}
                                    </td>

                                    <td className="px-3 py-2">
                                        <div className="flex gap-2">
                                            <Link
                                                href={`/admin/tag/edit/${tag.id}`}
                                            >
                                                <button className="bg-orange-500 p-3 rounded-md text-white">
                                                    <FaEdit size={12} />
                                                </button>
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    DeleteData(tag.id)
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

export default Tag;
