import Navbar from "@/components/navbar";
import Title from "./_components/title";
import Introduction from "./_components/introduction";
import Footer from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
};

export default function Home() {
  return (
    <>
      <title>Trang chủ</title>
      <Navbar/>
      <div className="flex flex-col items-center px-[260px]"> 
        <Title/>
        <Introduction/>
      </div>
      <Footer/>
    </>
  );
};
