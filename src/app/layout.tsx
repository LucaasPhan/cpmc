import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: '400',
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <head/>
      <body className={`${inter.className} antialiased font-sans`}>
        {children}
      </body>
    </html>
  )
}