"use client";
import Image from 'next/image';
import { useUser } from "@clerk/nextjs";
import { FaUserCircle } from "react-icons/fa";

const Avatar = () => {
    const {user} = useUser();
    const imageUrl = user?.imageUrl;
    const params = new URLSearchParams();
    const w = 50, h = 50, q = 100;
    params.set("height", `${h}`);
    params.set("width", `${w}`);
    params.set("quality", `${q}`);
    const imageSrc = `${imageUrl}?${params.toString()}`;
    const imageLoader = () => {
        return `${imageSrc}`;
    };
    const avatar = imageUrl == undefined ? false : true;
    return (
            <div>
                {avatar ? (
                    <Image
                    loader={imageLoader}
                    src={imageSrc}
                    width={w}
                    height={h}
                    alt="User avatar"
                    className="rounded-full w-[30px] h-auto cursor-pointer"/>
                ) : (
                    <FaUserCircle className='w-[30px] h-auto'/>
                )}
                
            </div>
            );
};

export default Avatar;