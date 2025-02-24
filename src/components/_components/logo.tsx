import Image from "next/image"
import Link from "next/link";

export const Logo = () => {
    return (
        <div className="flex justify-start items-center w-full py-2 whitespace-nowrap">
            <Link href="/">
                <Image 
                    className="mr-3 w-[40px] lg:w-[50px] h-auto focus:border-none"
                    src="/favicon_nobg.png"
                    width={50}
                    height={50}
                    alt="CPMC logo"/>  
            </Link>
            <Link href="/"><span className="font-semibold text-xl tracking-tight max-xl:hidden">Central Park Media Crew</span></Link>
        </div>
    );
};