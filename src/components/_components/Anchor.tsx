const Anchor = ({href, text}: {href: string; text: string}) => {
    return (
        <a href={href} className="block py-3 px-3 whitespace-nowrap hover:text-[#b7c9f7] active:text-[#576b9d] transition-all">{text}</a>
    );
};

export default Anchor;