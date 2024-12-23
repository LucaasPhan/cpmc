import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const About = () => {
    return (
        <>
            <Navbar/>
            <div className="relative flex items-center justify-around flex-col sm:flex-row pt-16 bg-center[-50] bg-no-repeat bg-[url('/banner.jpg')] bg-cover w-[100vw] h-[500px] overflow-hidden bg-purple-950/25 bg-blend-multiply">
                <div className="flex flex-col gap-7 order-1 sm:order-[0] items-center align-middle">
                    <h1 className="text-7xl font-bold text-center whitespace-nowrap text-white drop-shadow-2xl">ABOUT US</h1>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default About;