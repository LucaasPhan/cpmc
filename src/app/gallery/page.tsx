"use client";
import Navbar from "@/components/navbar";
import Link from "next/link";
import Footer from "@/components/footer";

const Apply = () => {
    return (
        <>
            <title>Thư viện ảnh</title>
            <Navbar/>
            <div className="relative flex items-center justify-around flex-col sm:flex-row pt-16 h-[100vh]">
                <div className="flex flex-col gap-7 order-1 sm:order-[0] items-center align-middle">
                    <h1 className="font-semibold text-5xl lg:text-6xl super-lg:text-7xl text-center"><span>Coming soon...</span></h1>
                    <Link href="/">
                        <div className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Về lại trang chủ</div>
                    </Link>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Apply;