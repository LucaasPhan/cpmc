"use client";
import Navbar from "@/components/navbar";
import Anchor from "./_components/Anchor";

export default function Home() {
  return (
    <>
      <title>Trang Chủ</title>
      <Navbar>
          <Anchor
            href="#"
            text="Home"
          />
          <Anchor
            href="#"
            text="About"
          />
          <Anchor
            href="#"
            text="CPMC?"
          />
          <Anchor
            href="#"
            text="Skibidi"
          />
      </Navbar>
    </>
  );
};
