const Loading = () => {
    return (
        <div className="relative flex items-center justify-around flex-col sm:flex-row pt-16 bg-center[-50] bg-no-repeat bg-[url('/banner.jpg')] bg-cover h-[100vh] overflow-hidden bg-purple-950/25 bg-blend-multiply">
            <div className="flex flex-col gap-7 order-1 sm:order-[0] items-center align-middle text-foreground">
                <h1 className="font-semibold text-5xl lg:text-6xl super-lg:text-5xl text-center">Đang tải...</h1>
            </div>
        </div>
    );
};

export default Loading;