const Anchor = ({href, text}: {href: string; text: string}) => {
    return (
        <a
            href={href}
            className="block py-3 px-3 whitespace-nowrap hover:text-purple-300 transition-all"
        >
            {text}
        </a>
    );
};

export default Anchor;