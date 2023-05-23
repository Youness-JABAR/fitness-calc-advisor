import Navbar from '@/components/Navbar'
import './../styles/globals.css'
import { Inter } from 'next/font/google'
import { Head } from 'next/document'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  metadataBase : 'https://fitnesscalcadvisor.com',
  title: 'Fitness Calculator and Advisor | FitnessCalcAdvisor',
  description: 'Get accurate fitness calculations and personalized workout plans to achieve your health and fitness goals. Sign up now!',
  icons: {
    icon: '/images/logo.png',
  },
  openGraph: {
    title: 'Fitness Calculator and Advisor | FitnessCalcAdvisor',
    description: 'Get accurate fitness calculations and personalized workout plans to achieve your health and fitness goals. Sign up now!',
    url: 'https://fitnesscalcadvisor.com',
    siteName: 'FitnessCalcAdvisor',
    images: [
      {
        url: '/images/logo.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fitness Calculator and Advisor | FitnessCalcAdvisor',
    description: 'Get accurate fitness calculations and personalized workout plans to achieve your health and fitness goals. Sign up now!',
    site: '@FitnessCalcAdvisor', 
    // creator: '@yourusername', 
    images: ['/images/logo.png'],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
