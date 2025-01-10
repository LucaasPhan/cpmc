"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

const Submit = () => {
    return (
        <>
            <Navbar/>
            <div className="flex items-start justify-center h-screen bg-foreground pt-16">
                <Image src="/competition/title.png" 
                    width={4000}
                    height={4000} 
                    unoptimized={true} 
                    alt="title" 
                    className="w-[50vw] h-auto pt-10"/>      
                <div></div>           
            </div>
            <Footer/>
        </>
    );
};

export default Submit;