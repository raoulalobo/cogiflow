import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FlowTech - Custom Automation | Test Before You Pay',
  description: 'Stop wasting time with generic templates. Get custom n8n automation built specifically for YOUR business. Test everything first, pay only when satisfied.',
  keywords: 'custom automation, bespoke n8n workflows, test before pay, no templates, personalized automation, FlowTech',
  authors: [{ name: 'FlowTech' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'FlowTech - Custom Automation | Test Before You Pay',
    description: 'Stop wasting time with generic templates. Get custom n8n automation built specifically for YOUR business. Test everything first, pay only when satisfied.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlowTech - Custom Automation | Test Before You Pay',
    description: 'Stop wasting time with generic templates. Get custom n8n automation built specifically for YOUR business. Test everything first, pay only when satisfied.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}