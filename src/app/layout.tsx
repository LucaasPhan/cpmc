import { Roboto } from 'next/font/google';
import "@/app/globals.css";

const geistSans = Roboto({
  weight: '400',
});

const geistMono = Roboto({
  weight: '400',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head/>
      <body className={`${geistSans} ${geistMono} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
