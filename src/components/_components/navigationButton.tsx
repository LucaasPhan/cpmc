import Link from "next/link";

const NavigationButton = ({href, text}: {href: string, text: string}) => {
    return (
        <Link href={href}>
            <div className="text-white w-fit bg-[#917153] hover:scale-[1.05] hover:bg-[#7c6147] active:bg-[#654f3a] focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-7 py-2.5 focus:outline-none transition-all">{text}</div>
        </Link>
    );
};

export default NavigationButton;