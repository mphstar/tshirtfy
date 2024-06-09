import React from "react";
import useAdminStore from "../Store/AdminStore";

const HeaderAdmin = () => {
    const store = useAdminStore();

    return (
        <div className="flex w-full px-4 md:px-8 py-2 z-[50] bg-white duration-300 ease-in-out items-center">
            <div className="flex items-center flex-1 gap-2">
                <div className="md:hidden p-3 dark:fill-primary-dark scale-">
                    <svg
                        onClick={store.handleSidebar}
                        className=""
                        width="16"
                        height="11"
                        viewBox="0 0 16 11"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M14.5589 4.52942H0.970591C0.434552 4.52942 0 4.96397 0 5.50001C0 6.03605 0.434552 6.4706 0.970591 6.4706H14.5589C15.0949 6.4706 15.5294 6.03605 15.5294 5.50001C15.5294 4.96397 15.0949 4.52942 14.5589 4.52942Z" />
                        <path d="M0.970591 1.94118H14.5589C15.0949 1.94118 15.5294 1.50663 15.5294 0.97059C15.5294 0.434552 15.0949 0 14.5589 0H0.970591C0.434552 0 0 0.434552 0 0.97059C0 1.50663 0.434552 1.94118 0.970591 1.94118Z" />
                        <path d="M14.5589 9.05884H0.970591C0.434552 9.05884 0 9.49339 0 10.0294C0 10.5655 0.434552 11 0.970591 11H14.5589C15.0949 11 15.5294 10.5655 15.5294 10.0294C15.5294 9.49339 15.0949 9.05884 14.5589 9.05884Z" />
                    </svg>
                </div>

                {/* <h1 className="font-semibold">{store.title}</h1> */}
            </div>
            <div className="flex flex-row items-center gap-4">
                <div className="flex flex-col items-end">
                    <h1 className="text-primary font-bold">Diprojectin</h1>
                    <p className="text-xs -translate-y-1">Admin</p>
                </div>
                <img className="" src="/assets/images/diprojectin.png" alt="" />
            </div>
        </div>
    );
};

export default HeaderAdmin;
