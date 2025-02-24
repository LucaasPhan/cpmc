import { ReactNode } from "react";
import Footer from "@/components/footer";
import { Logo } from "@/components/_components/logo";

const AuthLayout = ({children}: {children: ReactNode}) => {
    return (
        <body>
            <div className="flex items-center justify-between py-2 gap-3 relative xl:px-[10%] 2xl:px-[20%] px-[3%] shadow-lg">
            <Logo/>
            </div>
            <div className="flex flex-col justify-center items-center pt-16 pb-24">
                <div>{children}</div>
            </div>
            <Footer/>
        </body>
    );
};

export default AuthLayout;
