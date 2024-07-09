import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ReactNode } from 'react'

export const metadata = {
  title: 'CryptoHikes',
  description: 'Explore the best hiking trails and learn about cryptocurrency.',
}

interface LayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}