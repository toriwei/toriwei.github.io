import { Space_Grotesk } from 'next/font/google'
import Navbar from './components/navbar'
import Contact from './components/work/contact'

import './globals.css'

const space_grotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'Tori Wei',
  description: 'Personal website',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={space_grotesk.className}>
        <div className='mx-8 md:mx-16 my-4 text-md md:text-lg'>
          <Navbar />
          {children}
          <Contact />
        </div>
      </body>
    </html>
  )
}
