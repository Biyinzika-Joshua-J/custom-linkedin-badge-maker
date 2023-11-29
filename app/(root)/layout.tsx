import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar/Navbar'
import Footer from '@/components/shared/Footer/Footer'

export const metadata: Metadata = {
  title: 'Linkedin Custom Badge Maker',
  description: 'Create custom linkedin badges!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar/>
      {children}
      <Footer/>
    </main>
  )
}
