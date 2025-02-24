"use client";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { useState } from "react";
import Avatar from "./avatar";
import UserMenu from "./userMenu";

const User = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="flex xl:w-[56px] hover:cursor-pointer">
            <SignedIn>
                <div className="block" onClick={() => setToggleMenu(!toggleMenu)}>
                    <Avatar/>
                </div>
                <UserMenu toggleMenu={toggleMenu}/>
            </SignedIn>
            <SignedOut>
                <div className="block" onClick={() => setToggleMenu(!toggleMenu)}>
                    <Avatar/>
                </div>
                <UserMenu toggleMenu={toggleMenu}/>
            </SignedOut>
        </div>
    )
};

export default User;