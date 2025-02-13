import { Raleway } from "next/font/google";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";


const raleway = Raleway({
    subsets: ["latin"],
    style: "italic"
});

const Motto = () => {
    return(
        <section id="motto">
            <div className="flex flex-col items-center gap-y-10 pt-20">
                <h1 className={`${raleway.className} md:leading-none text-4xl font-semibold text-center lg:text-left`}><FaQuoteLeft size={24} className="inline translate-y-[8px] lg:translate-y-[15px] pr-1"/>Ghi lại khoảnh khắc, lan tỏa tiếng nói, tạo nên sự khác biệt.<FaQuoteRight size={24} className="inline translate-y-[-8px] lg:translate-y-[-15px] pl-1"/></h1>
                <p className="text-justify md:text-xl lg:px-40 lg:pt-5 italic">Tại CPMC, chúng mình tin vào sức mạnh của việc ghi lại khoảnh khắc, lan tỏa tiếng nói và tạo nên sự khác biệt. Chia sẻ những trải nghiệm đáng nhớ không chỉ giúp kết nối mọi người mà còn tạo ra một cộng đồng vững mạnh và đầy cảm hứng.</p>
            </div>
        </section>
    )
};

export default Motto;