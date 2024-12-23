import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import "@/app/globals.css";

const geistSans = Roboto({
  weight: '400',
});

const geistMono = Roboto({
  weight: '400',
});

export const metadata: Metadata = {
  title: "CPMC",
  description: "Central Park Media Crew",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans} ${geistMono} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
