"use client";
import Navbar from "@/components/navbar";
// import Link from "next/link";
import Footer from "@/components/footer";
import {
    SignInButton,
    SignUpButton
} from "@clerk/nextjs";

const Apply = () => {
    return (
        <>
            <title>Workshop</title>
            <Navbar/>
            <div className="relative flex items-center justify-around flex-col sm:flex-row pt-16 h-[100vh] bg-blue-50">
                <div className="flex flex-col gap-7 order-1 sm:order-[0] items-center align-middle text-background">
                    <h1 className="font-semibold text-5xl lg:text-6xl super-lg:text-7xl text-center"><span>Coming soon...</span></h1>
                    {/* <Link href="/">
                        <div className="text-foreground bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Về lại trang chủ</div>
                    </Link> */}
                    <div className="flex gap-3">
                        <div className="text-foreground bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800 hover:scale-110 transition-all">
                            <SignInButton>Log In</SignInButton>
                        </div>
                        <div className="text-foreground bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hover:scale-110 transition-all">
                            <SignUpButton>Sign Up</SignUpButton>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Apply;