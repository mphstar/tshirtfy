import React, { useEffect, useState } from "react";
import AdminLayout from "../../Layouts/AdminLayout";
import { MdOutlineUploadFile } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import useAdminStore from "../../Store/AdminStore";
import { router, usePage } from "@inertiajs/react";
import Swal from "sweetalert2";
import ConfirmDialog from "../../Utils/ConfirmDialog";

const CreateTag = () => {
    const store = useAdminStore();

    const page = usePage();
    useEffect(() => {
        store.setTitle("Tags");
    }, []);

    const [form, setForm] = useState({
        nama: page.props.data?.nama ?? "",
    });

    const handleForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        ConfirmDialog({
            onConfirm: async () => {
                Swal.fire({
                    title: "Loading",
                    html: '<div class="body-loading"><div class="loadingspinner"></div></div>', // add html attribute if you want or remove
                    allowOutsideClick: false,
                    showConfirmButton: false,
                });

                const respone = await fetch(
                    `/api/tag/${page.props.data ? "edit" : "add"}`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                        },
                        body: JSON.stringify({
                            ...form,
                            id: page.props.data?.id ?? "",
                        }),
                    }
                );

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
            <form onSubmit={handleSubmit} action="">
                <div className="flex flex-col">
                    <h1 className="py-3 text-2xl mb-3 font-semibold text-primary">
                        Upload New Tag
                    </h1>

                    <label>
                        <p className="text-primary py-2 font-semibold">
                            Tag Name
                        </p>
                        <input
                            className="bg-gray-200 outline-none w-full px-3 py-2"
                            type="text"
                            name="nama"
                            value={form.nama}
                            onChange={handleForm}
                            id=""
                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white w-fit px-8 rounded-md py-2 mt-6 mb-20"
                    >
                        Save
                    </button>
                </div>
            </form>
        </AdminLayout>
    );
};

export default CreateTag;
