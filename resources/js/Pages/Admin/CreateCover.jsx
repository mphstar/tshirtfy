import React, { useEffect, useState } from "react";
import AdminLayout from "../../Layouts/AdminLayout";
import { MdOutlineUploadFile } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import useAdminStore from "../../Store/AdminStore";
import { router, usePage } from "@inertiajs/react";
import ConfirmDialog from "../../Utils/ConfirmDialog";
import Swal from "sweetalert2";

const CreateCover = () => {
    const store = useAdminStore();

    const page = usePage();

    useEffect(() => {
        store.setTitle("Landing Page");
    }, []);

    const [form, setForm] = useState({
        gambar: undefined,
    });

    const handleGambar = (e) => {
        setForm({ ...form, gambar: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log(form);

        let formData = new FormData();
        formData.append("id", page.props.data?.id ?? "");
        formData.append("gambar", form.gambar);

        ConfirmDialog({
            onConfirm: async () => {
                Swal.fire({
                    title: "Loading",
                    html: '<div class="body-loading"><div class="loadingspinner"></div></div>', // add html attribute if you want or remove
                    allowOutsideClick: false,
                    showConfirmButton: false,
                });

                const respone = await fetch(
                    `/api/cover/${page.props.data ? "edit" : "add"}`,
                    {
                        method: "POST",
                        body: formData,
                        headers: {
                            Accept: "application/json",
                        },
                    }
                );

                const data = await respone.json();

                if (respone.status === 200) {
                    Swal.fire("Success", data.message, "success");
                    router.get(`/admin/cover`);
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
                        Upload New Cover
                    </h1>

                    <label>
                        <p className="text-primary py-2 font-semibold">
                            Cover Image
                        </p>
                        <div className="h-[200px] bg-red-500 w-[200px] relative">
                            {form.gambar && (
                                <img
                                    className="absolute w-full h-full object-cover"
                                    src={URL.createObjectURL(form.gambar)}
                                    alt="gambar"
                                />
                            )}

                            {page.props.data?.gambar && !form.gambar && (
                                <img
                                    className="absolute w-full h-full object-cover"
                                    src={`/cover/${page.props.data.gambar}`}
                                    alt="gambar"
                                />
                            )}
                            <input
                                className="bg-gray-200 outline-none opacity-0 w-full h-full px-3 py-2"
                                type="file"
                                name="gambar"
                                accept="image/*"
                                onChange={handleGambar}
                                id=""
                            />
                            {!form.gambar && !page.props.data?.gambar && (
                                <div className="absolute top-0 w-full h-full flex items-center justify-center">
                                    <MdOutlineUploadFile
                                        size={32}
                                        className="text-white"
                                    />
                                </div>
                            )}
                        </div>
                        <p className="text-sm text-primary mt-2">
                            Select This Image Format JPG. JPEG. PNG Max 2MB
                        </p>
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

export default CreateCover;
