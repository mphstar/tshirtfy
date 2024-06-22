import React, { useEffect, useState } from "react";
import AdminLayout from "../../Layouts/AdminLayout";
import { MdOutlineUploadFile } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import useAdminStore from "../../Store/AdminStore";
import { router, usePage } from "@inertiajs/react";
import ConfirmDialog from "../../Utils/ConfirmDialog";
import Swal from "sweetalert2";

const CreateProduct = () => {
    const store = useAdminStore();

    const page = usePage();

    useEffect(() => {
        store.setTitle("Category");
    }, []);

    const [form, setForm] = useState({
        nama: page.props.data?.nama ?? "",
        gambar: undefined,
        kategori_id: page.props.data?.kategori_id ?? "",
        tag_id: page.props.data?.tag_id ?? "",
        deskripsi: page.props.data?.deskripsi ?? "",
        harga: page.props.data?.harga ?? "",
        url: page.props.data?.url
            ? page.props.data?.url.map((item, i) => {
                  return {
                      nama: item.name,
                      url: item.url,
                  };
              })
            : [{ nama: "", url: "" }],
    });

    const handleForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleGambar = (e) => {
        setForm({ ...form, gambar: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(form);

        let formData = new FormData();
        formData.append("id", page.props.data?.id ?? "");
        formData.append("gambar", form.gambar);
        formData.append("nama", form.nama);
        formData.append("kategori_id", form.kategori_id);
        formData.append("tag_id", form.tag_id);
        formData.append("deskripsi", form.deskripsi);
        formData.append("harga", form.harga);
        formData.append("url", JSON.stringify(form.url));
        ConfirmDialog({
            onConfirm: async () => {
                Swal.fire({
                    title: "Loading",
                    html: '<div class="body-loading"><div class="loadingspinner"></div></div>', // add html attribute if you want or remove
                    allowOutsideClick: false,
                    showConfirmButton: false,
                });

                const respone = await fetch(
                    `/api/product/${page.props.data ? "edit" : "add"}`,
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
                    router.get(`/admin/product/${data.category}`);
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
                        Upload New Product
                    </h1>

                    <label>
                        <p className="text-primary py-2 font-semibold">
                            Product Name
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

                    <label>
                        <p className="text-primary py-2 font-semibold">
                            Product Image
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
                                    src={`/images/${page.props.data.gambar}`}
                                    alt="gambar"
                                />
                            )}
                            <input
                                className="bg-gray-200 outline-none opacity-0 w-full h-full px-3 py-2"
                                type="file"
                                name="gambar"
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

                    <label>
                        <p className="text-primary py-2 font-semibold">
                            Product Category
                        </p>
                        <div className="relative">
                            <select
                                className="bg-gray-200 pr-12 outline-none w-full px-3 py-2 appearance-none"
                                name="kategori_id"
                                value={form.kategori_id}
                                onChange={handleForm}
                                id=""
                            >
                                <option value="">-</option>
                                {page.props.category.map((item, i) => (
                                    <option value={item.id} key={i}>
                                        {item.nama}
                                    </option>
                                ))}
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
                                name="tag_id"
                                value={form.tag_id}
                                onChange={handleForm}
                                id=""
                            >
                                <option value="">-</option>
                                {page.props.tag.map((item, i) => (
                                    <option value={item.id} key={i}>
                                        {item.nama}
                                    </option>
                                ))}
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
                            name="deskripsi"
                            value={form.deskripsi}
                            onChange={handleForm}
                            id=""
                        ></textarea>
                    </label>
                    <label>
                        <p className="text-primary py-2 font-semibold">
                            Product Price
                        </p>
                        <input
                            className="bg-gray-200 outline-none w-full px-3 py-2"
                            type="number"
                            name="harga"
                            value={form.harga}
                            onChange={handleForm}
                            id=""
                        />
                    </label>
                    <label>
                        <p className="text-primary py-2 font-semibold">
                            Product Url
                        </p>
                        <div className="border-2 min-h-[200px] px-4 py-4">
                            {form.url.map((item, i) => (
                                <div className="border-b-2 pb-4" key={i}>
                                    <ProductUrl
                                        form={form}
                                        setForm={setForm}
                                        index={i}
                                    />
                                </div>
                            ))}
                            <div className="flex gap-3 items-center mt-3 w-full justify-center">
                                <div
                                    onClick={() => {
                                        setForm({
                                            ...form,
                                            url: [
                                                ...form.url,
                                                { nama: "", url: "" },
                                            ],
                                        });
                                    }}
                                >
                                    + Add More
                                </div>
                            </div>
                        </div>
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

const ProductUrl = ({ form, setForm, index }) => {
    return (
        <div className="flex flex-row gap-4">
            <div className="flex-1">
                <p className="text-primary py-2 font-semibold">Name</p>
                <input
                    className="bg-gray-200 outline-none w-full px-3 py-2"
                    type="text"
                    name="url"
                    value={form.url[index].nama}
                    onChange={(e) => {
                        setForm({
                            ...form,
                            url: form.url.map((item, i) =>
                                i === index
                                    ? { ...item, nama: e.target.value }
                                    : item
                            ),
                        });
                    }}
                    id=""
                />
                <p className="text-primary py-2 font-semibold">Url</p>
                <input
                    className="bg-gray-200 outline-none w-full px-3 py-2"
                    type="text"
                    name="url"
                    value={form.url[index].url}
                    onChange={(e) => {
                        setForm({
                            ...form,
                            url: form.url.map((item, i) =>
                                i === index
                                    ? { ...item, url: e.target.value }
                                    : item
                            ),
                        });
                    }}
                    id=""
                />
            </div>
            <div
                onClick={() => {
                    setForm({
                        ...form,
                        url: form.url.filter((item, i) => i !== index),
                    });
                }}
                className="bg-red-500 text-white rounded-md h-fit py-2 px-4"
            >
                Hapus
            </div>
        </div>
    );
};

export default CreateProduct;
