"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import NavigationButton from "@/components/_components/navigationButton";

const Apply = () => {
    return (
        <>
            <title>Thư viện ảnh</title>
            <Navbar/>
            <div className="relative flex items-center justify-around flex-col sm:flex-row pt-16 h-[100vh]">
                <div className="flex flex-col gap-7 order-1 sm:order-[0] items-center align-middle">
                    <h1 className="font-semibold text-5xl lg:text-6xl super-lg:text-7xl text-center"><span>Coming soon...</span></h1>
                    <NavigationButton href="/" text="Về lại trang chủ"/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Apply;