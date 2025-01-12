"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Title from "./_components/title";
// import Introduction from "./_components/introduction";
// import Core from "./_components/core";

export default function Home() {
  return (
    <>
      <title>Trang chủ</title>
      <Navbar/>
      <Title/>
      <div className="flex flex-col items-center lg:px-[5%] xl:px-[10%] 2xl:px-[20%]"> 
        {/* <Introduction/>
        <Core/> */}
      </div>
      <Footer/>
    </>
  );
};