"use client";
import Navbar from "@/components/navbar";
import Title from "./_components/title";
import Introduction from "./_components/introduction";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <title>Trang chủ</title>
      <Navbar/>
      <div className="flex flex-col items-center lg:px-[7%] xl:px-[20%]"> 
        <Title/>
        <Introduction/>
      </div>
      <Footer/>
    </>
  );
};
