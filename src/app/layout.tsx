import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({
  subsets: ['vietnamese'],
  weight: '400'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <ClerkProvider
      telemetry={false}>
          <html lang="en-US" suppressHydrationWarning>
        <head/>
        <body className={`${inter.className} antialiased font-sans`}>
          {children}
        </body>
      </html>
      </ClerkProvider>
  )
}