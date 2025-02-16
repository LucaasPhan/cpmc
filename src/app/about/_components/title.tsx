import { Animator, Fade } from "react-scroll-motion";
import Typewriter from "typewriter-effect";
import { FaArrowDown } from "react-icons/fa";

const Title = ({font}: {font: string}) => {
    return(
        <div className={`relative flex items-center gap-y-3 pb-16 justify-center flex-col pt-16 bg-center[-50] bg-no-repeat bg-[url('/banner.jpg')] bg-cover h-[100vh] overflow-hidden bg-purple-950/25 bg-blend-multiply ${font}`}>
            <Animator animation={Fade()}>
                <div className="text-6xl px-3 md:pl-0 lg:text-8xl font-bold h-[90vh] translate-y-[40vh] md:text-center drop-shadow-2"><Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('Chúng mình là ai?')
                        .start();
                    }}/></div>
            </Animator>
            <Animator animation={Fade()}>
                <div className="items-center animate-bounce">
                    <FaArrowDown size={40}/>
                </div>
            </Animator>
        </div>
    );
};

export default Title;