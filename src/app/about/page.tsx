"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Title from "./_components/title";
import Introduction from "./_components/introduction";

const About = () => {
    return (
        <>
            <title>About</title>
            <Navbar/>
            <Title/>
            <div className="flex flex-col items-center lg:px-[5%] xl:px-[10%] 2xl:px-[20%]">
                <Introduction/>
            </div>
            <Footer/>
        </>
    );
};

export default About;