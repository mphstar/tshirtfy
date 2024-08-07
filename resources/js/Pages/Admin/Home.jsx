import React, { useEffect } from "react";
import AdminLayout from "../../Layouts/AdminLayout";
import { MdOutlineUploadFile } from "react-icons/md";
import useAdminStore from "../../Store/AdminStore";
import { Link } from "@inertiajs/react";

const Home = (props) => {
    const store = useAdminStore();

    useEffect(() => {
        store.setTitle("Dashboard");
    }, []);

    return (
        <AdminLayout>
            <div className="flex flex-col">
                <h1 className="py-3 text-2xl font-semibold text-primary">
                    Dashboard
                </h1>
                <div className="flex flex-col bg-primary text-white px-4 py-7 mt-6 relative">
                    <img
                        className="right-0 bottom-0 absolute hidden md:flex"
                        src="/assets/images/bro.png"
                        alt=""
                    />
                    <h1 className="text-xl font-semibold">Total Product</h1>
                    <span className="font-semibold text-xl">Uploaded</span>
                    <div className="flex flex-row mt-12 gap-3 overflow-x-auto scrollbar-hide">
                        {props.tag.map((item, i) => (
                            <div key={i} className="flex flex-row gap-4">
                                <ItemCard name={item.nama} total={item.product.length} />
                                <div className="w-[2px] h-full bg-white"></div>
                            </div>
                        ))}
                    </div>
                </div>
                <h1 className="py-3 text-2xl font-semibold text-primary mt-6">
                    Add New Product
                </h1>
                <Link href="/admin/product/add">
                    <div className="flex flex-col w-full h-[200px] bg-gray-300 mt-4 rounded-lg justify-center items-center gap-3 text-primary">
                        <MdOutlineUploadFile size={44} />
                        <p className="text-center">
                            Input New Product with detail & category{" "}
                        </p>
                    </div>
                </Link>
            </div>
        </AdminLayout>
    );
};

const ItemCard = ({ name, total }) => {
    return (
        <div className="flex flex-col">
            <h1 className="text-xs">{name}</h1>
            <span className="text-sm">{total}</span>
        </div>
    );
};

export default Home;
