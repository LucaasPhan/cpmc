"use client";
import { useUser, useClerk } from "@clerk/nextjs";
import Link from "next/link";

const UserMenu = () => {
    const {user} = useUser();
    const {signOut} = useClerk();
    const displayName = user?.username;
    const signOutUser = async () => {
        signOut({redirectUrl: "/"});
    };

    return (
    <div className="relative top-5 text-background">
        <div className="absolute right-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow-lg animate-[open-user-menu_0.2s_ease-in-out]">
            <ul className="py-2 text-sm">
                <li>
                    <div className="block px-4 py-2 font-semibold">{displayName}</div>
                </li>
                <li>
                    <Link href="/" className="block px-4 py-2 hover:bg-gray-100">Setting</Link>
                </li>
                <li>
                    <div className="block px-4 py-2 text-red-600 hover:text-white hover:bg-red-500 cursor-pointer" onClick={() => {signOutUser()}}>Sign Out</div>
                </li>
            </ul>
        </div>
    </div>
    );
};  

export default UserMenu;