import Image from "next/image";

const Introduction = () => {
    return (
        <section id="#introduce">
            <div className="flex container">
            <div className="flex flex-col w-[95%] md:w-[50%] gap-7 order-1 sm:order-[0] items-center sm:items-start sm:w-[45%] py-10 pl-[10%] text-[#fefefe]">
                <h1 className="font-bold text-6xl"><span className="text-[#fc7b54]">CPMC </span> là gì?</h1>
                <p className="text-justify font-normal text-[#b1aebb] font-sans pr-[20%] pt-2">
                <span className="font-bold text-[#fc7b54]">Central Park Media Crew</span> là một cộng đồng dành cho tất cả những ai đam mê nhiếp ảnh và truyền thông. Chúng mình không chỉ đơn thuần là một câu lạc bộ, mà còn là một gia đình gắn kết bởi tình yêu chung dành cho hình ảnh và nghệ thuật.
                </p>
            </div>
            <div className="flex justify-center items-center align-middle">
            <Image
                src="/banner.jpg"
                width={300}
                height={300}
                alt="test"
                className='w-auto h-auto rounded-xl'></Image>
            </div>
            </div>
        </section>
    )
};

export default Introduction;
