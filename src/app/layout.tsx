import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs';

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
    <ClerkProvider
      telemetry={false}>
          <html lang="vn-VN">
        <head/>
        <body className={`${inter.className} antialiased font-sans`}>
          {children}
        </body>
      </html>
      </ClerkProvider>
  )
}