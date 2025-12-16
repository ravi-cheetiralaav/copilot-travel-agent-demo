import '@/app/globals.css'
import { Inter } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { XmasThemeProvider } from '@/lib/contexts/XmasThemeContext'
import { XmasSnowflakes } from '@/components/ui/XmasSnowflakes'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TravelApp - Discover Amazing Destinations',
  description: 'Search for trips, manage bookings, view travel guides, and track points with our comprehensive travel application.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <XmasThemeProvider>
          <div className="min-h-screen flex flex-col relative">
            <XmasSnowflakes />
            <Header />
            <main className="flex-1 relative z-10">
              {children}
            </main>
            <Footer />
          </div>
        </XmasThemeProvider>
      </body>
    </html>
  )
}
