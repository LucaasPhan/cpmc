"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useUser } from "@clerk/nextjs";
import NotSignedIn from "./_components/notSignedIn";
import Loading from "../_components/isLoading";
import ComingSoon from "./_components/comingSoon";

const Workshop = () => {
    const { isLoaded, isSignedIn } = useUser();

    if (!isLoaded) {
        return (
            <Loading/>
        )
    }

    return (
        <>
            <title>Workshop</title>
            <Navbar/>
            {!isSignedIn && isLoaded ? (
                <NotSignedIn/>
            ) : ( 
                <ComingSoon/>
            )}
            <Footer/>
        </>
    );

};

export default Workshop;