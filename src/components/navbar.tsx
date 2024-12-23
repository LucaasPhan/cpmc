import Link from "next/link";
import Image from "next/image";
import React, { ReactNode } from "react";
// import React, {ReactNode, useState} from "react";

const Navbar = ({children}: {children: ReactNode}) => {
    return (
        <header className="fixed top-0 w-full z-[100] bg-background/95 shadow-xl">
            <nav className="flex flex-row items-center container justify-between py-2 gap-3 relative">
                <div className="flex justify-center items-center w-full">
                    <Link href="/">
                        <Image className="mr-3"
                            src="/favicon_nobg.png"
                            width={50}
                            height={50}
                            alt="CPMC logo"
                        />
                    </Link>
                    <Link href="/"><span className="font-semibold text-xl tracking-tight text-white">Central Park Media Crew</span></Link>
                </div>
                <div className="flex items-center flex-shrink-0 text-white mr-4">
                    {React.Children.map(children, (child) => (
                        <div className="hover:text-purple-300 font-semibold">
                            {child}
                        </div>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;