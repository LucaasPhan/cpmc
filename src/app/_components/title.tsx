const Title = () => {
    return(
        <section id="#" className="">
            <div className="relative flex items-center justify-around flex-col sm:flex-row pt-16 bg-center[-50] bg-no-repeat bg-[url('/banner.jpg')] bg-cover w-[100vw] h-[500px] overflow-hidden bg-purple-950/40 bg-blend-multiply">
                <div className="flex flex-col gap-7 items-center align-middle px-2">
                    <h1 className="xl:text-7xl text-[45px] font-bold text-center text-color drop-shadow-2xl">CENTRAL PARK MEDIA CREW</h1>
                    <p className="bg-gradient-to-r from-[#b1aebb] via-[#f395f7] via-40% to-[#96c2f5] text-transparent bg-clip-text xl:text-xl text-lg text-center mx-2 font-semibold drop-shadow-2xl">Ghi lại khoảnh khắc, Lan tỏa tiếng nói, Tạo nên sự khác biệt</p>
                </div>
            </div>
        </section>
    );
};

export default Title;