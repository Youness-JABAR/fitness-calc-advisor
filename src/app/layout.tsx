import Navbar from '@/components/Navbar'
import './../styles/globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  metadataBase : 'https://fitnesscalcadvisor.com',
  title: 'Fitness Calculator and Advisor | FitnessCalcAdvisor',
  description: 'Get accurate fitness calculations and personalized workout plans to achieve your health and fitness goals. Sign up now!',
  icons: {
    icon: '/images/logo.webp',
  },
  openGraph: {
    title: 'Fitness Calculator and Advisor | FitnessCalcAdvisor',
    description: 'Get accurate fitness calculations and personalized workout plans to achieve your health and fitness goals. Sign up now!',
    url: 'https://fitnesscalcadvisor.com',
    siteName: 'FitnessCalcAdvisor',
    images: [
      {
        url: '/images/logo.webp',
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
    images: ['/images/logo.webp'],
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
        <Footer/>
        {/* <!-- Default Statcounter code for FitnessCalcAdvisor https://fitnesscalcadvisor.com/ --> */}

          <script
            dangerouslySetInnerHTML={{
              __html: `
              var sc_project=12885181; 
              var sc_invisible=1; 
              var sc_security="34f06055"; 
            `,
            }}
          />
          <script
            src="https://www.statcounter.com/counter/counter.js"
            async
          />
          <noscript>
            <div className="statcounter">
              <a
                title="free web stats"
                href="https://statcounter.com/"
                target="_blank"
              >
                <img
                  className="statcounter"
                  src="https://c.statcounter.com/12885181/0/34f06055/1/"
                  alt="free web stats"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </a>
            </div>
          </noscript>
        {/* <!-- End of Statcounter Code --> */}
        </body>
    </html>
  )
}
