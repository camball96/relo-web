import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Relo — Your clients. Instantly recalled.',
  description:
    'The workspace for freelancers and service providers who need to know exactly what every client is on — the moment they pick up the phone.',
  openGraph: {
    title: 'Relo — Your clients. Instantly recalled.',
    description:
      'No spreadsheets. No digging. Just answers. Know exactly what every client has the moment they call.',
    url: 'https://relo.com',
    siteName: 'Relo',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
