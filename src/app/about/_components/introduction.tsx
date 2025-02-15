import Image from "next/image";

const Introduction = ({font}: {font: string}) => {
    return (
        <section id="#introduce">
            <div className="flex items-center justify-around flex-col gap-4">
                <div className="flex flex-col items-center lg:px-40 pb-10 gap-y-5">
                    <h1 className={`${font} text-center leading-[1.1] font-bold text-[44px] lg:text-5xl w-full drop-shadow-xl`}><span className="text-span">Central Park Media Crew </span> là gì?</h1>
                    <p className="text-justify md:text-xl font-normal text-[#f2f1f5] pt-7 italic">
                    <span className="font-bold text-span">Central Park Media Crew</span> là một cộng đồng dành cho tất cả những ai đam mê nhiếp ảnh và truyền thông. Chúng mình không chỉ đơn thuần là một câu lạc bộ, mà còn là <span className="font-semibold text-gray-200">một gia đình</span> gắn kết bởi tình yêu chung dành cho hình ảnh và nghệ thuật.
                    </p>
                </div>
                <Image
                    src="/banner.jpg"
                    width={300}
                    height={300}
                    alt="test"
                    className='flex order-1 w-[300px] sm:w-[500px]'></Image>
            </div>
        </section>
    )
};

export default Introduction;
