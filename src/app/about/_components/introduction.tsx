import Image from "next/image";
import { Animator, batch, Fade, MoveOut } from "react-scroll-motion";

const Introduction = ({font}: {font: string}) => {
    return (
        <section id="#introduce">
            <Animator animation={batch(Fade(), MoveOut(0, -500))}>
                <div className="flex flex-col h-[100vh] items-center justify-center align-middle px-[5%] xl:px-[10%] 2xl:px-[20%]">
                    <div className="flex items-center justify-around flex-col lg:flex-row gap-4">
                        <div className="flex flex-col items-center lg:items-start lg:pl-10 pb-10 gap-y-5 md:w-[50%]">
                            <h1 className={`${font} text-left leading-[1.1] font-bold text-[44px] lg:w-[80%] lg:text-5xl w-full drop-shadow-xl`}><span className="text-span">Central Park Media Crew </span> là gì?</h1>
                            <p className="text-justify md:text-xl font-normal text-[#f2f1f5] pt-7">
                            <span className="font-bold text-span">Central Park Media Crew</span> là một cộng đồng dành cho tất cả những ai đam mê nhiếp ảnh và truyền thông. Chúng mình không chỉ đơn thuần là một câu lạc bộ, mà còn là <span className="font-semibold text-gray-200">một gia đình</span> gắn kết bởi tình yêu chung dành cho hình ảnh và nghệ thuật.
                            </p>
                        </div>
                        <Image
                            src="/oday.jpg"
                            width={2000}
                            height={2000}
                            alt="oday"
                            className='flex order-1 w-[300px] sm:w-[500px] lg:pr-10'></Image>
                    </div>
                </div>
            </Animator>
        </section>
    )
};

export default Introduction;
