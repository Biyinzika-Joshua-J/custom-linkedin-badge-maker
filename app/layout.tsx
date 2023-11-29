import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// fontawesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

import { ThemeProvider } from '@/context/ThemeProvider';
config.autoAddCss = false;


const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
