import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const AuthLayout = ({children}: {children: ReactNode}) => {
    return (
        <body>
            <div className="flex items-center justify-between py-2 gap-3 relative xl:px-[10%] 2xl:px-[20%] px-[3%] shadow-lg">
            <div className="flex justify-start items-center w-full py-2 whitespace-nowrap">
                <Link href="/">
                    <Image className="mr-3 w-[40px] lg:w-[50px] h-auto focus:border-none"
                        src="/favicon_nobg.png"
                        width={50}
                        height={50}
                        alt="CPMC logo"
                    />
                </Link>
                <Link href="/"><span className="font-semibold text-xl tracking-tight text-color max-xl:hidden">Central Park Media Crew</span></Link>
            </div>
            </div>
            <div className="flex flex-col justify-center items-center pt-16 pb-24">
                <div>{children}</div>
            </div>
            <div className="bg-[#010101] text-color justify-around block w-full">
                <div className="flex flex-col md:flex-row items-center justify-between py-2 gap-3 px-[25vw]">
                    <div className="flex justify-center items-center py-2 order-1 md:order-0 text-sm whitespace-nowrap">
                    <p>© 2024 Central Park Media Crew</p>
                    </div>
                    <div className="flex items-center justify-center order-0 md:order-1 flex-shrink-0">
                    <a 
                        href="https://instagram.com/cpmc.vcp/"
                        title="Instagram"
                        target="_blank"
                        rel="noopener"
                        className="mr-1">
                        <FaInstagram className="color"></FaInstagram>
                    </a>
                    <a 
                        href="https://facebook.com/cpmc.vcp"
                        title="Instagram"
                        target="_blank"
                        rel="noopener">
                        <FaFacebook className="color"></FaFacebook>
                    </a>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default AuthLayout;