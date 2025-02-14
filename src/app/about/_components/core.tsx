import { Raleway } from "next/font/google";
import Image from "next/image";

const raleway = Raleway({
    subsets: ["latin"],
    style: ["italic", "normal"]
})

const Core = ({switchSide: switchSide = false, position, positionVN, name, content, image: image = "/Gigachad.jpg"}: {switchSide?: boolean, position: string, positionVN: string, name: string, content: string, image?: string}) => {
    return (
        <div className={`${raleway.className} flex flex-col my-32 pt-28 pb-32 h-[75vh] w-[100vw] items-center justify-center `}>
            <div className={`text-center font-bold text-4xl md:text-5xl lg:text-7xl w-full pb-1`}>{position}</div>
            <div className={`text-center text-lg md:text-xl lg:text-3xl w-full lg:mb-10 italic`}>{positionVN}</div>
            <div className="flex flex-col lg:flex-row w-full items-center justify-center lg:mt-5 gap-y-3 gap-x-20 lg:gap-y-0">
                <div className={`px-12 lg:px-0 lg:w-[45%] ${switchSide ? "lg:order-1":"lg:order-0"}`}>
                    <h1 className="text-center lg:text-left text-[36px] lg:text-5xl pb-1 lg:pb-6 font-semibold lg:font-medium tracking-tighter md:tracking-normal">{name}</h1>
                    <p className="text-justify tracking-tight lg:text-left">{content}</p>
                </div>
                <div className="pt-3 lg:pt-0 w-full ml:w-[250px] h-auto">
                    <Image className="w-full h-auto" 
                        src={image}
                        width={2000}
                        height={2000}
                        alt="Core Photo"
                    />
                </div>
            </div>
        </div>
    )
}

export default Core;