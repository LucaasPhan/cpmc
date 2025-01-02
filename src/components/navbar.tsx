import Link from "next/link";
import Image from "next/image";
import Anchor from "./_components/Anchor";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <header className="fixed top-0 w-full z-[1000] bg-background shadow-xl">
            <nav className="flex items-center justify-between py-2 gap-3 relative xl:px-[10%] 2xl:px-[20%] px-[3%]">
                <div className="flex justify-start items-center w-full py-2 whitespace-nowrap">
                    <Link href="/">
                        <Image className="mr-3 max-lg:w-[40px] max-lg:h-auto focus:border-none"
                            src="/favicon_nobg.png"
                            width={50}
                            height={50}
                            alt="CPMC logo"
                        />
                    </Link>
                    <Link href="/"><span className="font-semibold text-xl tracking-tight text-color max-xl:hidden">Central Park Media Crew</span></Link>
                </div>
                <div className="flex items-center flex-shrink-0 text-color max-xl:hidden gap-2">
                    <Anchor
                        href="/about"
                        text="Về chúng mình"
                    />
                    <Anchor
                        href="/gallery"
                        text="Thư viện ảnh"
                    />
                    <Anchor 
                        href="/workshop"
                        text="Workshop"
                    />
                    <Anchor
                        href="/apply"
                        text="Apply"
                    />
                </div>
                <div className="block xl:hidden" onClick={() => setToggle(!toggle)}>
                    {toggle ? (<ImCross
                                size={12}/>
                    ) : (
                        <FaBars/>
                    )
                    }
                </div>
                {toggle && (
                    <div className="xl:hidden absolute top-[60px] left-0 w-full bg-background animate-[fade_0.45s_ease-in-out]">
                        <div className="px-2 py-2 space-y-1 text-right bg-background block animate-[open-menu_0.30s_ease-in-out]">
                        <Anchor
                           href="/about"
                           text="Về chúng mình"
                        />
                        </div>
                        <div className="px-2 py-2 space-y-1 text-right bg-background block animate-[open-menu_0.35s_ease-in-out]">
                        <Anchor
                           href="/gallery"
                            text="Thư viện ảnh"
                        />
                        </div>
                        <div className="px-2 py-2 space-y-1 text-right bg-background block animate-[open-menu_0.40s_ease-in-out]">
                        <Anchor 
                           href="/workshop"
                           text="Workshop"
                        />
                        </div>
                        <div className="px-2 py-2 space-y-1 text-right bg-background block animate-[open-menu_0.45s_ease-in-out]">
                        <Anchor
                           href="/apply"
                            text="Apply"
                        />
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;