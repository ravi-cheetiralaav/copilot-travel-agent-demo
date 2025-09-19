import '@/app/globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

// Temporarily disable Google Fonts due to network restrictions
// const inter = Inter({ subsets: ['latin'] })

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
      <body className="font-sans">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
