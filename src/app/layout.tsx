import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: '400',
  subsets: ['vietnamese']
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="vn-VN">
      <head/>
      <body className={`${inter.className} antialiased font-sans`}>
        {children}
      </body>
    </html>
  )
}