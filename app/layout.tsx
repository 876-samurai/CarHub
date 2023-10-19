import './globals.css'
import type { Metadata } from 'next'
import { Navbar, Footer } from '@/components'



export const metadata: Metadata = {
  title: 'Student Car Hub',
  description: 'Discover the best and most affordable cars for students to rent.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
