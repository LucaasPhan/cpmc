
const NavigationButton = ({href, text}: {href: string, text: string}) => {
    return (
        <a href={href} className="text-white w-fit bg-[#917153] hover:scale-[1.05] hover:bg-[#7c6147] active:bg-[#654f3a] focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-7 py-2.5 focus:outline-none transition-all">{text}</a>
    );
};

export default NavigationButton;