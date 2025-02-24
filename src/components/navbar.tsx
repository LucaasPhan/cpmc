import Anchor from "./_components/Anchor";
import User from "./_components/user";
import { Logo } from "./_components/logo";
import { PAGE_INFO } from "./_constants/constants";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";

const Navbar = ({noShadow: noShadow = false, isFixed: isFixed = false}: {noShadow?: boolean, isFixed?: boolean}) => {
    const [toggle, setToggle] = useState(false);

    return (
        <header className={`${isFixed ? "absolute" : "fixed"} top-0 w-full z-[1000] text-foreground ${!noShadow ? "shadow-md" : null} ${toggle ? "max-xl:bg-[#17153B]/90" : null} transition-all duration-500`}>
            <nav className="flex items-center justify-between py-2 relative gap-3 xl:px-[10%] 2xl:px-[20%] px-[3%]">
                <Logo/>
                <div
                className={`flex flex-col ${
                toggle ? null : "hidden"
                } w-full xl:w-max items-center xl:flex-row absolute xl:flex xl:relative left-0 top-[100%] hover:cursor-pointer py-0 z-10`}
                >
                    <div className="flex flex-col xl:flex-row xl:w-max w-full absolute xl:relative left-0 drop-shadow-xl bg-[#17153B]/90 font-medium xl:bg-transparent max-xl:animate-[fade_0.45s_ease-in-out]" onClick={() => setToggle(false)}>
                    {PAGE_INFO.map((item, index) => (
                            <div className={`px-2 py-2 space-y-1 text-right block max-xl:animate-[open-menu_0.${30 + 5*index}s_ease-in-out]`} key={index}>
                                <Anchor href={item.href} text={item.page_name}/>
                            </div>
                    ))}
                    </div>
                </div>
                <User/>
                <div className={"block xl:hidden size-[16px] items-center cursor-pointer"} onClick={() => setToggle(!toggle)}>
                    {toggle ? ( <ImCross size={14}/> ) : ( <FaBars size={15}/> )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;