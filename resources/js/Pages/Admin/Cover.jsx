import React, { useEffect, useState } from "react";
import AdminLayout from "../../Layouts/AdminLayout";
import { FaEdit, FaSearch } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import useAdminStore from "../../Store/AdminStore";
import { Link, router, usePage } from "@inertiajs/react";
import ConfirmDialog from "../../Utils/ConfirmDialog";
import Swal from "sweetalert2";

const Cover = () => {
    const store = useAdminStore();

    const page = usePage();

    useEffect(() => {
        store.setTitle("Landing Page");
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

                const respone = await fetch(`/api/cover/delete`, {
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
                    Cover Landing Page
                </h1>
                <div className="flex flex-col gap-3 md:flex-row md:justify-end">
                    <div className="flex flex-row gap-3 w-full md:w-fit">
                        <Link href={`/admin/cover/add`}>
                            <button className="bg-green-500 px-4 py-2 rounded-md text-white">
                                Tambah
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-2 mt-4 md:grid-cols-4 lg:grid-cols-5">
                    {page.props.data.map((item, i) => (
                        <div
                            key={i}
                            className="bg-gray-200 p-3 rounded-md flex flex-col gap-3"
                        >
                            <img
                                src={`/cover/${item.gambar}`}
                                alt=""
                                className="w-full h-[200px] object-cover rounded-md"
                            />
                            <div className="flex flex-row justify-between items-center">
                                <h1 className="text-lg font-semibold">
                                    Cover {i + 1}
                                </h1>
                                <div className="flex flex-row gap-3">
                                    <Link href={`/admin/cover/edit/${item.id}`}>
                                        <FaEdit className="text-blue-500" />
                                    </Link>
                                    <FaTrash onClick={() => {
                                        DeleteData(item.id)
                                    }} className="text-red-500" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AdminLayout>
    );
};

export default Cover;
