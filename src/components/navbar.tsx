import Link from "next/link";
import Image from "next/image";
import Anchor from "./_components/Anchor";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import UserMenu from "./_components/userMenu";
import Avatar from "./_components/avatar";

const Navbar = ({noShadow: noShadow = false, isFixed: isFixed = false}: {noShadow?: boolean, isFixed?: boolean}) => {
    const [toggle, setToggle] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    


    return (
        <header className={`${isFixed ? "absolute" : "fixed"} top-0 w-full z-[1000] text-foreground ${!noShadow ? "shadow-md" : null} ${toggle ? "bg-[#17153B]/90" : null} transition-all duration-500`}>
            <nav className="flex items-center justify-between py-2 relative gap-3 xl:px-[10%] 2xl:px-[20%] px-[3%]">
                <div className="flex justify-start items-center w-full py-2 whitespace-nowrap">
                    <Link href="/">
                        <Image className="mr-3 w-[40px] lg:w-[50px] h-auto focus:border-none"
                            src="/favicon_nobg.png"
                            width={50}
                            height={50}
                            alt="CPMC logo"
                        />
                    </Link>
                    <Link href="/"><span className="font-semibold text-xl tracking-tight max-xl:hidden">Central Park Media Crew</span></Link>
                </div>
                <div
                className={`flex flex-col ${
                toggle ? null : "hidden"
                } w-full xl:w-max items-center xl:flex-row absolute xl:flex xl:relative left-0 top-[100%] hover:cursor-pointer py-0 z-10`}
                >
                    <div className="flex flex-col xl:flex-row xl:w-max w-full absolute xl:relative left-0 drop-shadow-xl bg-[#17153B]/90 font-medium xl:bg-transparent max-xl:animate-[fade_0.45s_ease-in-out]" onClick={() => setToggle(false)}>
                        <div className="px-2 py-2 space-y-1 text-right block max-xl:animate-[open-menu_0.30s_ease-in-out]">
                        <Anchor
                           href="/about"
                           text="Về chúng mình"
                        />
                        </div>
                        <div className="px-2 py-2 space-y-1 text-right block max-xl:animate-[open-menu_0.35s_ease-in-out]">
                        <Anchor
                           href="/gallery"
                            text="Thư viện ảnh"
                        />
                        </div>
                        <div className="px-2 py-2 space-y-1 text-right block max-xl:animate-[open-menu_0.40s_ease-in-out]">
                        <Anchor 
                           href="/workshop"
                           text="Workshop"
                        />
                        </div>
                        <div className="px-2 py-2 space-y-1 text-right block max-xl:animate-[open-menu_0.45s_ease-in-out]">
                        <Anchor
                           href="/recruit"
                            text="Recruit"
                        />
                        </div>
                    </div>
                </div>

                <div className="flex xl:w-[56px] hover:cursor-pointer">
                    <SignedIn>
                        <div className="block" onClick={() => setToggleMenu(!toggleMenu)}>
                            <Avatar/>
                        </div>
                        <UserMenu toggleMenu={toggleMenu}/>
                    </SignedIn>
                    <SignedOut>
                        <div className="block" onClick={() => setToggleMenu(!toggleMenu)}>
                            <Avatar/>
                        </div>
                        <UserMenu toggleMenu={toggleMenu}/>
                    </SignedOut>
                </div>
                <div className={"block xl:hidden size-[16px] items-center cursor-pointer"} onClick={() => setToggle(!toggle)}>
                    {toggle ? (<ImCross
                                size={14}/>
                    ) : (
                        <FaBars size={15}/>
                    )
                    }
                </div>
            </nav>
        </header>
    );
};

export default Navbar;