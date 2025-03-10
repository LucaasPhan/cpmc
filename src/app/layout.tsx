import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs';
import { viVN } from "@clerk/localizations";

const inter = Inter({
  subsets: ['vietnamese'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <ClerkProvider
      telemetry={false}
      localization={viVN}>
      <html lang="en-US" suppressHydrationWarning>
        <head/>
        <body className={`${inter.className} antialiased font-sans`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}