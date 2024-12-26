const Anchor = ({href, text}: {href: string; text: string}) => {
    return (
        <a
            href={href}
            className="w-full block py-3 px-3 whitespace-nowrap hover:text-purple-300 hover:bg-[#433D8B] hover:rounded-xl hover:animate-[bgfade_0.25s_ease-in-out]"
        >
            {text}
        </a>
    );
};

export default Anchor;