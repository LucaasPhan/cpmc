"use client";
import Navbar from "@/components/navbar";
import Introduction from "./_components/introduction";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <title>Trang Chủ</title>
      <Navbar/>
      <div className="flex flex-col items-center"> 
        <Introduction/>
      </div>
      <Footer/>
    </>
  );
};
