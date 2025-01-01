import "@/app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <head/>
      <body className={`antialiased font-sans`}>
        {children}
      </body>
    </html>
  )
}