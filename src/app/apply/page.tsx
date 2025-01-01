"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaArrowDown } from "react-icons/fa";

const Apply = () => {
    return (
        <>
            <title>Apply</title>
            <Navbar/>
            <div className="relative flex items-center justify-center h-[100vh] bg-center[-50] bg-no-repeat bg-[url('/banner.jpg')] bg-cover overflow-hidden bg-purple-950/50 bg-blend-multiply">
                <div className="flex flex-col gap-7 order-1 sm:order-[0] items-center align-middle">
                    <h1 className="font-semibold text-5xl lg:text-6xl super-lg:text-7xl text-center"><span>Chúng mình mở tuyển rồi nè!!!</span></h1>
                    <FaArrowDown
                        className="h-12 w-auto animate-bounce animation-duration"
                    />
                    <a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfDIW59kvpC23zq3oQ2pnkQKfA3caksTXLCVaM2PKWTM0HbHQ/viewform?embedded=true"
                        title="Bấm vô để dẫn tới link form của bọn mình!!!"
                        target="_blank"
                        rel="noopener"
                        className="">
                            <div className="bg-blue-700 hover:bg-blue-800 hover:scale-110 transition-all focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-xl px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Recruit!</div>
                        </a>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Apply;