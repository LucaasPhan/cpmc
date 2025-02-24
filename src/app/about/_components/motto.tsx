import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { Animator, batch, Fade, MoveOut, ScrollPage } from "react-scroll-motion";
import { font } from "./_styles/font";

const Motto = () => {
    return (
        <section id="motto">
            <ScrollPage>
                <Animator animation={batch(Fade(), MoveOut(0, -200))}>
                    <div className="flex flex-col h-[100vh] items-center justify-center align-middle px-[5%] xl:px-[10%] 2xl:px-[20%] bg-center bg-no-repeat bg-[url('/about3.JPG')] bg-cover overflow-hidden bg-[#202a44]/45 bg-blend-multiply">
                        <div className="flex flex-col items-center gap-y-10 pt-20">
                            <h1 className={`${font} md:leading-none text-4xl font-semibold text-center lg:text-left`}><FaQuoteLeft size={24} className="inline translate-y-[8px] lg:translate-y-[15px] pr-1"/>Ghi lại khoảnh khắc, lan tỏa tiếng nói, tạo nên sự khác biệt.<FaQuoteRight size={24} className="inline translate-y-[-8px] lg:translate-y-[-15px] pl-1"/></h1>
                            <p className="text-justify md:text-xl lg:px-40 lg:pt-5 italic">Tại <span className="text-[#de9a57] font-bold">CPMC</span>, chúng mình tin vào sức mạnh của việc ghi lại khoảnh khắc, lan tỏa tiếng nói và tạo nên sự khác biệt. Chia sẻ những trải nghiệm đáng nhớ không chỉ giúp kết nối mọi người mà còn tạo ra một cộng đồng vững mạnh và đầy cảm hứng.</p>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>
        </section>
    );
};

export default Motto;