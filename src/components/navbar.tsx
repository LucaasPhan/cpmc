import Link from "next/link";
import Image from "next/image";
import Anchor from "./_components/Anchor";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <header className="fixed top-0 w-full z-[100] bg-background shadow-xl">
            <nav className="flex items-center justify-between py-2 gap-3 relative lg:px-[20%] max-lg:px-[3%]">
                <div className="flex justify-start items-center w-full py-2 whitespace-nowrap">
                    <Link href="/" passHref>
                        <Image className="mr-3 max-lg:w-[40px] max-lg:h-auto"
                            src="/favicon_nobg.png"
                            width={50}
                            height={50}
                            alt="CPMC logo"
                        />
                    </Link>
                    <Link href="/" passHref><span className="font-semibold text-xl tracking-tight text-color max-xl:hidden">Central Park Media Crew</span></Link>
                </div>
                <div className="flex items-center flex-shrink-0 text-color max-xl:hidden">
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
            </nav>
        </header>
    );
};

export default Navbar;