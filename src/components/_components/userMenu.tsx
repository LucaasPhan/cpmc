"use client";
import { useUser, useClerk } from "@clerk/nextjs";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";

const UserMenu = ({toggleMenu}: {toggleMenu: boolean}) => {
    const { isSignedIn, user } = useUser();
    const {signOut} = useClerk();
    const displayName = user?.username;
    const signOutUser = async () => {
        signOut({redirectUrl: "/"});
    };

    return (
        <div className={`${toggleMenu ? null : "hidden"} relative top-9 z-0`}>
            <div className={`absolute right-0 mt-2 w-44 bg-white ${isSignedIn ? "text-background" : "text-foreground"} rounded-lg shadow-lg animate-[open-user-menu_0.2s_ease-in-out]`}>
            {isSignedIn ? (
                <ul className="py-2 text-sm">
                    <li>
                        <div className="block px-4 py-2 font-semibold">{displayName}</div>
                    </li>
                    <li>
                        <Link href="/user" className="block px-4 py-2 hover:bg-gray-400/50">Setting</Link>
                    </li>
                    <li>
                        <div className="block px-4 py-2 text-red-600 hover:text-white hover:bg-red-500 cursor-pointer" onClick={() => {signOutUser()}}>Sign Out</div>
                    </li>
                </ul>
            ) : (
                <div>
                    <div className="bg-[#2e2252] hover:bg-[#6047ac] text-center font-medium rounded-lg text-sm mx-2 my-2 px-5 py-2 hover:scale-[1.05] transition-all">
                        <SignInButton>Log In</SignInButton>
                    </div>
                    <div className="border border-background hover:border-[#6047ac] hover:bg-[#6047ac] text-background hover:text-foreground text-center font-medium rounded-lg text-sm mx-2 my-2 px-5 py-2 hover:scale-[1.05] transition-all">
                        <SignUpButton>Sign Up</SignUpButton>
                    </div>
                </div>
            )}
            </div>
        </div>
    );
};  

export default UserMenu;