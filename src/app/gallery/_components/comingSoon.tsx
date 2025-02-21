import NavigationButton from "@/components/_components/navigationButton";

const ComingSoon = () => {
    return ( 
        <div className="relative flex items-center justify-around flex-col sm:flex-row pt-16 bg-no-repeat bg-[url('/2.jpg')] bg-cover h-[100vh] overflow-hidden bg-[#202a44]/40 bg-blend-multiply">
            <div className="flex flex-col gap-7 order-1 sm:order-[0] items-center align-middle text-foreground">
                <h1 className="font-semibold text-5xl lg:text-6xl super-lg:text-5xl text-center">Coming Soon... </h1>
                <NavigationButton href="/" text="Về lại trang chủ"/>
            </div>
        </div>
    )
};

export default ComingSoon;