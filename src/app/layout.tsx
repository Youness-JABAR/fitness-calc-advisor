import Navbar from '@/components/Navbar'
import './../styles/globals.css'
import { Inter } from 'next/font/google'
import { Head } from 'next/document'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fitness Calculator and Advisor | FitnessCalcAdvisor',
  description: 'Get accurate fitness calculations and personalized workout plans to achieve your health and fitness goals. Sign up now!',
  icons: {
    icon: '/images/logo.png',
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="icon" href="/images/logo.png" />
      </Head> */}
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
