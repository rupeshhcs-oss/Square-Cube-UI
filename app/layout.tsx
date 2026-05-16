import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Square and Cube | Construction Consultancy & Project Management',
  description: 'Premium construction consultancy and project management services. 15+ years of experience delivering 50+ projects with excellence.',
  keywords: 'construction, consultancy, project management, real estate, design, architecture',
  openGraph: {
    title: 'Square and Cube',
    description: 'Premium construction consultancy and project management services',
    url: 'https://squareandcube.in',
    type: 'website',
    images: [
      {
        url: 'https://via.placeholder.com/1200x630',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a5f7a" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%231a5f7a' font-weight='bold'>S</text></svg>" />
      </head>
      <body className="bg-white text-gray-900">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
