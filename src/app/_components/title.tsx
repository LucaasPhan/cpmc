import NavigationButton from "@/components/_components/navigationButton";
import { Raleway } from "next/font/google";

const raleway = Raleway({
    subsets: ["vietnamese"],
    style: "italic"
});

const Title = () => {
    return(
        <section id="#" className="">
            <div className="relative flex items-end pb-16 justify-end flex-col pt-16 bg-center[-50] bg-no-repeat bg-[url('/banner.jpg')] bg-cover h-[100vh] overflow-hidden bg-[#202a44]/25 bg-blend-multiply">
                <div className="w-[100vw] flex flex-col gap-y-5 px-[5%] xl:px-[10%] 2xl:px-[20%] items-left">
                    <div className="md:w-[60%]">
                        <p className={`text-4xl md:text-5xl md:leading-[60px] ${raleway.className} drop-shadow-md`}>Ghi lại <span className="font-semibold">khoảnh khắc</span>, lan tỏa <span className="font-semibold">tiếng nói</span>, tạo nên <span className="font-semibold">sự khác biệt</span>.</p>
                    </div>
                    <NavigationButton href="/about" text="Tìm hiểu thêm →"/>
                </div>
            </div>
        </section>
    );
};

export default Title;