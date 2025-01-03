"use client";
import { useUser } from '@clerk/clerk-react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const Setting = () => {
    const { user } = useUser();

    if (!user) {
        return null;
    }

    return (
        <>
          <Navbar/>
            <div className="flex justify-center items-center h-screen">
                <div className="text-3xl font-semibold text-center">Setting (TEST)</div>
            </div>
          <Footer/>
        </>
    )
};

export default Setting;