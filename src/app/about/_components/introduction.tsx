import Image from "next/image";

const Introduction = () => {
    return (
        <section id="#introduce">
            <div className="flex flex-col container items-center justify-around lg:flex-row py-10 gap-4 md:gap-10 lg:gap-0">
                <div className="flex flex-col items-center lg:items-start w-[93%] md:w-[80%] lg:w-[40%] gap-4">
                    <h1 className="text-center leading-[1.1] lg:text-left font-bold text-6xl w-[70%] super-sm:w-full super-sm:text-[55px] md:text-7xl lg:text-6xl 2xl:text-6xl drop-shadow-xl"><span className="text-span">CPMC </span> là gì?</h1>
                    <p className="text-justify lg:text-left text-lg font-normal text-[#b1aebb] pt-2 max-lg:px-5 w-full md:w-[85%] lg:w-[90%]">
                    <span className="font-bold text-span">Central Park Media Crew</span> là một cộng đồng dành cho tất cả những ai đam mê nhiếp ảnh và truyền thông. Chúng mình không chỉ đơn thuần là một câu lạc bộ, mà còn là <span className="font-semibold text-gray-200">một gia đình</span> gắn kết bởi tình yêu chung dành cho hình ảnh và nghệ thuật.
                    </p>
                </div>
                <Image
                    src="/banner.jpg"
                    width={300}
                    height={300}
                    alt="test"
                    className='flex order-1 w-[300px] sm:w-[400px] '></Image>
            </div>
        </section>
    )
};

export default Introduction;
