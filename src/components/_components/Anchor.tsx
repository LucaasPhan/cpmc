const Anchor = ({href, text}: {href: string; text: string}) => {
    return (
        <a
            href={href}
            className="w-full block py-3 px-3 whitespace-nowrap hover:text-purple-300"
        >
            {text}
        </a>
    );
};

export default Anchor;