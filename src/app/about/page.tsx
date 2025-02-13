"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Raleway } from "next/font/google";
import { FaArrowDown } from "react-icons/fa6";
import { Animator, batch, Fade, MoveOut, ScrollContainer, ScrollPage } from "react-scroll-motion";
import Introduction from "./_components/introduction";
import { useUser } from "@clerk/nextjs";
import Motto from "./_components/motto";

const raleway = Raleway({
    subsets: ["latin"],
})

const About = () => {
    const { isLoaded } = useUser();

    if (!isLoaded) {
        return (
            <div className="relative flex items-center justify-around flex-col sm:flex-row pt-16 bg-center[-50] bg-no-repeat bg-[url('/banner.jpg')] bg-cover h-[100vh] overflow-hidden bg-purple-950/25 bg-blend-multiply">
                <div className="flex flex-col gap-7 order-1 sm:order-[0] items-center align-middle text-foreground">
                    <h1 className="font-semibold text-5xl lg:text-6xl super-lg:text-5xl text-center">Đang tải...</h1>
                </div>
            </div>
        );
    }

    return (
        <>
            <title>About</title>
            <Navbar/>
            <ScrollContainer>
                <ScrollPage>
                    <div className={`relative flex items-center gap-y-3 pb-16 justify-center flex-col pt-16 bg-center[-50] bg-no-repeat bg-[url('/banner.jpg')] bg-cover h-[100vh] overflow-hidden bg-purple-950/25 bg-blend-multiply ${raleway.className}`}>
                        <Animator animation={Fade()}>
                            <div className="text-6xl pl-3 md:pl-0 lg:text-8xl font-bold h-[90vh] translate-y-[40vh] md:text-center drop-shadow-2">Chúng mình là ai?</div>
                        </Animator>
                        <Animator animation={Fade()}>
                            <div className="items-center animate-bounce">
                              <FaArrowDown size={40}/>
                            </div>
                        </Animator>
                    </div>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={batch(Fade(), MoveOut(0, -500))}>
                        <div className="flex flex-col h-[100vh] items-center justify-center align-middle px-[5%] xl:px-[10%] 2xl:px-[20%]">
                            <Introduction/>
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={batch(Fade(), MoveOut(0, -500))}>
                        <div className="flex flex-col h-[50vh] items-center justify-center align-middle px-[5%] xl:px-[10%] 2xl:px-[20%]">
                            <Motto/>
                        </div>
                    </Animator>
                </ScrollPage>
                {/* <ScrollPage>
                    <Animator animation={batch(Fade())}>
                        <div className="h-[100vh] w-[100vw] justify-center">
                            <h1 className="text-white">CORE</h1>
                        </div>
                    </Animator>
                </ScrollPage> */}
            </ScrollContainer>
            <Footer/>
        </>
    );
};

export default About;