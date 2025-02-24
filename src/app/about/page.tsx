"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Title from "./_components/title";
import Motto from "./_components/motto";
import Core from "./_components/core";
import Introduction from "./_components/introduction";
import Department from "./_components/department";
import Loading from "../_components/isLoading";
import { FaArrowUp } from "react-icons/fa6";
import { ScrollContainer } from "react-scroll-motion";
import { useUser } from "@clerk/nextjs";
import { useOverlayScrollbars } from 'overlayscrollbars-react';
import 'overlayscrollbars/overlayscrollbars.css';
import { useEffect } from "react";
import { motion, useAnimationControls, useScroll, Variants } from "motion/react";

const About = () => {
    const [init] = useOverlayScrollbars({});
    const { isLoaded } = useUser();
    const isBrowser = () => typeof window !== 'undefined';
    const ScrollToTopContainerVariants: Variants = {
        hide: { opacity: 0, y: 100 },
        show: { opacity: 1, y: 0},
    };
    const { scrollYProgress } = useScroll();
    const controls = useAnimationControls();

    useEffect(() => {
        init({
            target: document.body,
            cancel: {
                nativeScrollbarsOverlaid: true,
            }
        })

        return scrollYProgress.on('change', (latestValue) => {
            if (latestValue > 0.15) {
                controls.start('show');
            } else {
                controls.start('hide');
            }
        });
    }, [controls, init, scrollYProgress]);
    
    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth'});
    }

    if (!isLoaded) {
        return (
            <Loading/>
        );
    }

    return (
        <>
            <title>About</title>
            <Navbar isFixed/>
            <ScrollContainer>
                <Title/>
                <Introduction/>
                <Motto/>
                <Core title/>
                <Core 
                    position="PRESIDENT"
                    positionVN="Chủ Tịch"
                    name="Ngô Thế Phong"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ullam laboriosam tenetur dolorem, quis accusamus voluptas commodi facilis laborum optio modi quidem blanditiis ab perspiciatis?"
                />
                <Core 
                    position="VICE PRESIDENT"
                    positionVN="Phó Chủ Tịch"
                    name="Phan Nhất Huy"
                    nickname="Lucas"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ullam laboriosam tenetur dolorem, quis accusamus voluptas commodi facilis laborum optio modi quidem blanditiis ab perspiciatis?"
                    switchSide
                />
                <Core
                    position="HEAD OF PHOTO"
                    positionVN="Trưởng Ban Photo"
                    name="Đinh Nhật Khang"
                    nickname="Austin"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ullam laboriosam tenetur dolorem, quis accusamus voluptas commodi facilis laborum optio modi quidem blanditiis ab perspiciatis?"
                />
                <Core 
                    position="VICE HEAD OF PHOTO"
                    positionVN="Phó Ban Photo"
                    name="Huỳnh Nguyễn Khôi Nguyên"
                    nickname="Jerry"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ullam laboriosam tenetur dolorem, quis accusamus voluptas commodi facilis laborum optio modi quidem blanditiis ab perspiciatis?"
                    switchSide
                />
                <Core
                    position="HEAD OF PUBLIC RELATIONS"
                    positionVN="Trưởng Ban Quan Hệ Công Chúng"
                    name="Nguyễn Hữu Hào"
                    nickname="Jack"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ullam laboriosam tenetur dolorem, quis accusamus voluptas commodi facilis laborum optio modi quidem blanditiis ab perspiciatis?"
                    />
                <Core 
                    position="HEAD OF CONTENT WRITER"
                    positionVN="Trưởng Ban Nội Dung"
                    name="Lê Hồng Tiên"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ullam laboriosam tenetur dolorem, quis accusamus voluptas commodi facilis laborum optio modi quidem blanditiis ab perspiciatis?"
                    switchSide
                    />
                <Core
                    position="HEAD OF DESIGN"
                    positionVN="Trưởng Ban Design"
                    name="Hòa Thị Minh Ngân"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ullam laboriosam tenetur dolorem, quis accusamus voluptas commodi facilis laborum optio modi quidem blanditiis ab perspiciatis?"
                    />
                <Department/>
            </ScrollContainer>
            <motion.button
                className="fixed bottom-0 right-0 m-5 p-3 bg-black/35 rounded-full"
                variants={ScrollToTopContainerVariants}
                initial="hide"
                animate={controls}
                onClick={scrollToTop}>
                <FaArrowUp/>
            </motion.button>
            <Footer/>
        </>
    );
};

export default About;