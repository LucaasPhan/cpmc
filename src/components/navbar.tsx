import Link from "next/link";
import Image from "next/image";
import Anchor from "./_components/Anchor";

const Navbar = () => {
    return (
        <header className="fixed top-0 w-full z-[100] bg-background shadow-xl">
            <nav className="flex items-center container justify-between py-2 gap-3 relative">
                <div className="flex justify-center items-center w-full py-2">
                    <Link href="/" passHref>
                        <Image className="mr-3"
                            src="/favicon_nobg.png"
                            width={50}
                            height={50}
                            alt="CPMC logo"
                        />
                    </Link>
                    <Link href="/" passHref><span className="font-semibold text-xl tracking-tight text-white ">Central Park Media Crew</span></Link>
                </div>
                <div className="flex items-center flex-shrink-0 text-white mr-4">
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
            </nav>
        </header>
    );
};

export default Navbar;