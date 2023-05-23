import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'
import { Navbar } from './components/Navbar'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-principal' })
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'Jordan Braz - Portfolio',
  description: 'Portfolio website create By Jordan Braz',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-yellow-50 font-sans text-blue-100`}
      >
        {/* <header>
          <Navbar />
        </header> */}
        {children}
      </body>
    </html>
  )
}
