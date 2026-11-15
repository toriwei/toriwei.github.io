import { Inter } from 'next/font/google'

import './globals.css'

const font = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata = {
  title: 'Tori Wei',
  description: 'Personal website',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='min-h-full bg-blue-100'>
      <body className={font.className}>{children}</body>
    </html>
  )
}
