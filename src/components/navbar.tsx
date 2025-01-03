import Link from "next/link";
import Image from "next/image";
import Anchor from "./_components/Anchor";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import UserMenu from "./_components/userMenu";
import { useUser } from "@clerk/nextjs";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    const {user} = useUser();
    const imageUrl = user?.imageUrl;
    const params = new URLSearchParams();
    const w = 50, h = 50, q = 100;
    params.set("height", `${h}`);
    params.set("width", `${w}`);
    params.set("quality", `${q}`);
    const imageSrc = `${imageUrl}?${params.toString()}`;
    const imageLoader = () => {
        return `${imageSrc}`;
    }


    return (
        <header className="fixed top-0 w-full z-[1000] bg-background shadow-xl">
            <nav className="flex items-center justify-between py-2 gap-3 relative xl:px-[10%] 2xl:px-[20%] px-[3%]">
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
                        href="/recruit"
                        text="Recruit"
                    />
                    <SignedIn>
                        <div className="pl-1 block" onClick={() => setToggleMenu(!toggleMenu)}>
                            {toggleMenu ? (
                                <div>
                                    <Image
                                        loader={imageLoader}
                                        src={imageSrc}
                                        width={w}
                                        height={h}
                                        alt="User avatar"
                                        className="rounded-full w-[30px] h-auto"/>
                                </div>
                            ) : (
                                <div>
                                    <Image
                                        loader={imageLoader}
                                        src={imageSrc}
                                        width={w}
                                        height={h}
                                        alt="User avatar"
                                        className="rounded-full w-[30px] h-auto hover:scale-[1.05] transition-all duration-[0.1]"/>
                                </div>
                            )}
                        </div>
                        {toggleMenu && (
                            <UserMenu/>
                        )}
                    </SignedIn>
                    <SignedOut>
                        <div className="text-foreground bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 ml-1 transition-all">
                            <SignInButton>Log In</SignInButton>
                        </div>
                        <div className="text-foreground border hover:border-blue-800 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 transition-all">
                            <SignUpButton>Sign Up</SignUpButton>
                        </div>
                    </SignedOut>
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
                           href="/recruit"
                            text="Recuit"
                        />
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;