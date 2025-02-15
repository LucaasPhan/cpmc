"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Raleway } from "next/font/google";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { Animator, batch, Fade, MoveIn, MoveOut, ScrollContainer, ScrollPage } from "react-scroll-motion";
import Introduction from "./_components/introduction";
import { useUser } from "@clerk/nextjs";
import Motto from "./_components/motto";
import Core from "./_components/core";
import { useOverlayScrollbars } from 'overlayscrollbars-react';
import 'overlayscrollbars/overlayscrollbars.css';
import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { motion, useAnimationControls, useScroll, Variants } from "motion/react";

const raleway = Raleway({
    subsets: ["latin"],
    style: ["italic", "normal"]
})

const About = () => {
    const [init] = useOverlayScrollbars({});
    const { isLoaded } = useUser();
    const font = raleway.className;
    const isBrowser = () => typeof window !== 'undefined';
    const ScrollToTopContainerVariants: Variants = {
        hide: { opacity: 0, y: 100 },
        show: { opacity: 1, y: 0},
    };
    const { scrollYProgress } = useScroll();
    const controls = useAnimationControls();

    useEffect(() => {
        return scrollYProgress.on('change', (latestValue) => {
            if (latestValue > 0.15) {
                controls.start('show');
            } else {
                controls.start('hide');
            }
        });
    });
    
    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth'});
    }

    useEffect(() => {
        init(document.body)
    }, [init]);

    if (!isLoaded) {
        return (
            <div className="flex flex-col gap-7 order-1 sm:order-[0] items-center align-middle text-foreground">
                <h1 className="font-semibold text-5xl lg:text-6xl super-lg:text-5xl text-center">Đang tải...</h1>
            </div>
        );
    }

    return (
        <>
            <title>About</title>
            <Navbar isFixed/>
            <ScrollContainer>
                <ScrollPage>
                    <div className={`relative flex items-center gap-y-3 pb-16 justify-center flex-col pt-16 bg-center[-50] bg-no-repeat bg-[url('/banner.jpg')] bg-cover h-[100vh] overflow-hidden bg-purple-950/25 bg-blend-multiply ${font}`}>
                        <Animator animation={Fade()}>
                            <div className="text-6xl pl-3 md:pl-0 lg:text-8xl font-bold h-[90vh] translate-y-[40vh] md:text-center drop-shadow-2"><Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString('Chúng mình là ai?')
                                    .start();
                                }}/></div>
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
                            <Introduction font={font}/>
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage className="bg-center[-50] bg-no-repeat bg-[url('/2.jpg')] bg-cover h-[100vh] overflow-hidden bg-purple-950/40 bg-blend-multiply">
                    <Animator animation={batch(Fade(), MoveOut(0, -200))}>
                        <div className="flex flex-col h-[100vh] items-center justify-center align-middle px-[5%] xl:px-[10%] 2xl:px-[20%]">
                            <Motto font={font}/>
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={batch(Fade())}>
                        <div className="flex flex-col py-10 h-[100vh] gap-y-10 items-center justify-center text-center">
                            <h1 className={`${font} font-semibold text-white text-7xl`}>CORE</h1>
                            <p className="w-[75%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis esse consectetur eos unde, pariatur aperiam reiciendis, eum quidem dicta, rerum autem dolore impedit amet sequi necessitatibus libero magnam harum. Obcaecati recusandae nulla numquam a. Impedit cum provident nihil odit recusandae necessitatibus, corporis tempora natus repellat doloribus, qui in animi a.</p>
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={batch(Fade(), MoveIn(-500), MoveOut(0, -500))}>
                        <Core 
                            position="PRESIDENT"
                            positionVN="Chủ Tịch"
                            name="Ngô Thế Phong"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ullam laboriosam tenetur dolorem, quis accusamus voluptas commodi facilis laborum optio modi quidem blanditiis ab perspiciatis?"
                            font={font}
                        />
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={batch(Fade(), MoveIn(500), MoveOut(0, -500))}>
                        <Core 
                            position="VICE PRESIDENT"
                            positionVN="Phó Chủ Tịch"
                            name="Phan Nhất Huy"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ullam laboriosam tenetur dolorem, quis accusamus voluptas commodi facilis laborum optio modi quidem blanditiis ab perspiciatis?"
                            font={font}
                            switchSide
                        />
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={batch(Fade(), MoveIn(-500), MoveOut(0, -500))}>
                        <Core
                            position="HEAD OF PHOTO"
                            positionVN="Trưởng Ban Photo"
                            name="Đinh Nhật Khang"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ullam laboriosam tenetur dolorem, quis accusamus voluptas commodi facilis laborum optio modi quidem blanditiis ab perspiciatis?"
                            font={font}
                        />
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={batch(Fade(), MoveIn(500), MoveOut(0, -500))}>
                        <Core 
                            position="VICE HEAD OF PHOTO"
                            positionVN="Phó Ban Photo"
                            name="Huỳnh Nguyễn Khôi Nguyên"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ullam laboriosam tenetur dolorem, quis accusamus voluptas commodi facilis laborum optio modi quidem blanditiis ab perspiciatis?"
                            font={font}
                            switchSide
                        />
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={batch(Fade(), MoveIn(-500), MoveOut(0, -500))}>
                        <Core
                            position="HEAD OF PUBLIC RELATIONS"
                            positionVN="Trưởng Ban Quan Hệ Công Chúng"
                            name="Nguyễn Hữu Hào"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ullam laboriosam tenetur dolorem, quis accusamus voluptas commodi facilis laborum optio modi quidem blanditiis ab perspiciatis?"
                            font={font}
                            />
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={batch(Fade(), MoveIn(500), MoveOut(0, -500))}>
                        <Core 
                            position="HEAD OF CONTENT WRITER"
                            positionVN="Trưởng Ban Nội Dung"
                            name="Lê Hồng Tiên"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ullam laboriosam tenetur dolorem, quis accusamus voluptas commodi facilis laborum optio modi quidem blanditiis ab perspiciatis?"
                            font={font}
                            switchSide
                            />
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={batch(Fade(), MoveIn(-500), MoveOut(0, -500))}>
                        <Core
                            position="HEAD OF DESIGN"
                            positionVN="Trưởng Ban Thiết Kế"
                            name="Hòa Thị Minh Ngân"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ullam laboriosam tenetur dolorem, quis accusamus voluptas commodi facilis laborum optio modi quidem blanditiis ab perspiciatis?"
                            font={font}
                        />
                    </Animator>
                </ScrollPage>
            </ScrollContainer>
            <motion.button
            className="fixed bottom-0 right-0 m-5 p-3 bg-black/35 rounded-full"
            variants={ScrollToTopContainerVariants}
            initial="hide"
            animate={controls}
            onClick={scrollToTop}>
                <FaArrowUp />
            </motion.button>
            <Footer/>
        </>
    );
};

export default About;