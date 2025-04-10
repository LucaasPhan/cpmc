import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import AutoPlay from 'embla-carousel-autoplay';
import {WheelGesturesPlugin} from 'embla-carousel-wheel-gestures';
import { DEPARTMENT_INFO } from "../_constants/constants";
import "./_styles/embla.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Animator, Fade, ScrollPage } from "react-scroll-motion";
import { font } from "./_styles/font";

const Department = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [AutoPlay(), WheelGesturesPlugin()]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
        }, [emblaApi])
    
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()    
        }, [emblaApi])
    
    const handleKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLDivElement>) => {
            if (event.key === "ArrowLeft") {
                event.preventDefault();
                scrollPrev();
            } else if (event.key === "ArrowRight") {
                event.preventDefault();
                scrollNext();
            }
        },
        [scrollPrev, scrollNext]
    );

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes());
        }
    }, [emblaApi]);
    
    return (
        <section id='department' className="py-32">
            <ScrollPage>
                <Animator animation={Fade()}>
                    <h1 className={`${font} text-5xl lg:text-6xl font-semibold text-center pb-3`}>Các ban của <span className="text-span font-bold">CPMC</span></h1>
                    <h2 className="text-center text-sm md:text-lg px-5 md:px-32 pb-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sed harum dolor placeat, ab itaque omnis dolore deserunt quidem suscipit.</h2>
                    <div className="embla">
                        <div className="embla__viewport" ref={emblaRef} onKeyDownCapture={handleKeyDown}>
                            <div className="embla__container">
                            {   DEPARTMENT_INFO.map((item, index) => (
                                    <div className="embla__slide flex justify-center" key={index}>
                                        <div className="flex-col lg:w-[55vw] p-5 hover:scale-[1.04] transition-all content-center">
                                            <h1 className={`${font} font-semibold text-5xl text-center pb-5`}>{item.full}</h1>
                                            <p className="text-xl text-justify lg:px-20">{item.description}</p>
                                        </div>
                                    </div>
                            ))}
                            </div>
                            <div className="flex justify-around pt-3 lg:pt-0">
                                <button className="embla__prev lg:absolute lg:left-48 lg:top-[53vh] hover:scale-[1.1] transition-all" onClick={scrollPrev}><IoIosArrowBack size={35}/></button>
                                <button className="embla__next lg:absolute lg:right-48 lg:top-[53vh] hover:scale-[1.1] transition-all" onClick={scrollNext}><IoIosArrowForward size={35}/></button>
                            </div>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>
        </section>
    );
};

export default Department;