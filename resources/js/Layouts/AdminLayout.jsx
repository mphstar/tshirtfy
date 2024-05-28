import React from "react";
import SidebarAdmin from "../Components/SidebarAdmin";
import HeaderAdmin from "../Components/HeaderAdmin";

const AdminLayout = ({ children }) => {
    return (
        <div className={`flex flex-row`}>
            <SidebarAdmin />
            <div className="flex w-full flex-col md:pl-[200px] lg:pl-[300px] duration-300 ease-in-out min-h-[100dvh]">
                <HeaderAdmin />
                <div className="px-4 md:px-8 py-4 flex flex-col flex-1 bg-light dark:bg-dark duration-300 ease-in-out">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
