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
          <title>Setting</title>
          <Navbar/>
            <div className="flex flex-col justify-center items-center h-screen">
                
            </div>
          <Footer/>
        </>
    )
};

export default Setting;