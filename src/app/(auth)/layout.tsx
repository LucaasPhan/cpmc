<<<<<<< HEAD
    import { ReactNode } from "react";
    import Image from "next/image";
    import Link from "next/link";
    import Footer from "@/components/footer";
=======
import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
>>>>>>> b9297f40acace0e3fa49ce408d79087be0ce042d

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
                <Footer/>
            </body>
        );
    };

<<<<<<< HEAD
    export default AuthLayout;
=======
export default AuthLayout;
>>>>>>> b9297f40acace0e3fa49ce408d79087be0ce042d
