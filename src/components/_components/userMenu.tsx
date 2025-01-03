"use client";
import { useUser, useClerk } from "@clerk/nextjs";

const UserMenu = () => {
    const {user} = useUser();
    const {signOut} = useClerk();

    const signOutUser = async () => {
        signOut({redirectUrl: "/"});
    };

    return (
    <div className="absolute translate-x-[325px] translate-y-28 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 bg-foreground text-background ">
        <ul className="py-2 text-sm" aria-labelledby="dropdownDefaultButton">
        <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Dashboard</a>
        </li>
        <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-60">Settings</a>
        </li>
        <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Earnings</a>
        </li>
        <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Sign out</a>
        </li>
        </ul>
    </div>
    );
};  

export default UserMenu;