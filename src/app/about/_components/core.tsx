import Image from "next/image";
import { Animator, batch, Fade, MoveOut, MoveIn } from "react-scroll-motion";


const Core = ({title: title = false, switchSide: switchSide = false, position, positionVN, name, nickname: nickname = "", content, image: image = "/Gigachad.jpg", font}: {title?: boolean, switchSide?: boolean, position?: string, positionVN?: string, name?: string, content?: string, image?: string, font: string, nickname?: string}) => {
    return (
        <section id="core">
            {title ? (
                <Animator animation={batch(Fade())}>
                    <div className="flex flex-col py-10 h-[100vh] gap-y-10 items-center justify-center text-center">
                        <h1 className={`${font} font-semibold text-white text-7xl`}>CORE</h1>
                        <p className="w-[75%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis esse consectetur eos unde, pariatur aperiam reiciendis, eum quidem dicta, rerum autem dolore impedit amet sequi necessitatibus libero magnam harum. Obcaecati recusandae nulla numquam a. Impedit cum provident nihil odit recusandae necessitatibus, corporis tempora natus repellat doloribus, qui in animi a.</p>
                    </div>
                </Animator>
            ) : (
                <Animator animation={batch(Fade(), MoveIn((switchSide ? 500 : -500)), MoveOut(0, -500))}>
                    <div className={`${font} flex flex-col my-32 pt-28 pb-32 h-[75vh] w-[100vw] items-center justify-center `}>
                        <div className={`text-center font-bold text-4xl md:text-5xl lg:text-7xl w-full pb-1`}>{position}</div>
                        <div className={`text-center text-lg md:text-xl lg:text-3xl w-full lg:mb-10 italic`}>{positionVN}</div>
                        <div className="flex flex-col lg:flex-row w-full items-center justify-center lg:mt-5 gap-y-3 gap-x-20 lg:gap-y-0">
                            <div className={`px-12 lg:px-0 lg:w-[45%] ${switchSide ? "lg:order-1":"lg:order-0"}`}>
                                <h1 className="text-center lg:text-left text-[36px] pb-1 lg:text-5xl font-semibold lg:font-medium tracking-tighter md:tracking-normal">{name}</h1>
                                <h2 className="text-center lg:text-left text-2xl pb-2 lg:pb-5 italic">{nickname}</h2>
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
                </Animator>
            )}
        </section>
    )
}

export default Core;