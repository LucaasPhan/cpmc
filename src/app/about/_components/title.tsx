const Title = () => {
    return (
        <div className="relative flex items-center justify-around flex-col sm:flex-row pt-16 bg-center[-50] bg-no-repeat bg-[url('/banner.jpg')] bg-cover h-[500px] overflow-hidden bg-purple-950/25 bg-blend-multiply">
            <div className="flex flex-col gap-7 order-1 sm:order-[0] items-center align-middle">
                <h1 className="text-7xl font-bold text-center text-white drop-shadow-2xl">Về Chúng Mình</h1>
            </div>
        </div>
    )
}

export default Title;