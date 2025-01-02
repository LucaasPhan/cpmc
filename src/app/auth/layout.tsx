import Navbar from "@/components/navbar";
import { ReactNode } from "react";

const AuthLayout = ({children}: {children: ReactNode}) => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <Navbar/>
            <div className="pt-28 pb-10">{children}</div>
        </div>
    );
};

export default AuthLayout;