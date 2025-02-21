"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useUser } from "@clerk/nextjs";
import NavigationButton from "@/components/_components/navigationButton";
import NotSignedIn from "./_components/notSignedIn";
import Loading from "../_components/isLoading";

const Workshop = () => {
    const { isLoaded, isSignedIn } = useUser();

    if (!isLoaded) {
        return (
            <Loading/>
        );
    }

    return (
        <>
            <title>Workshop</title>
            <Navbar/>
            {!isSignedIn && isLoaded ? (
                <NotSignedIn/>
            ) : ( 
                <div className="relative flex items-center justify-around flex-col sm:flex-row pt-16 bg-no-repeat bg-[url('/workshop1.jpg')] bg-cover h-[100vh] overflow-hidden bg-[#202a44]/40 bg-blend-multiply">
                    <div className="flex flex-col gap-7 order-1 sm:order-[0] items-center align-middle text-foreground">
                        <h1 className="font-semibold text-5xl lg:text-6xl super-lg:text-5xl text-center">Coming Soon... </h1>
                        <NavigationButton href="/" text="Về lại trang chủ"/>
                    </div>
                </div>
            )}
            <Footer/>
        </>
    );

};

export default Workshop;