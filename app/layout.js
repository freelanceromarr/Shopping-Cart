
import { Inter } from 'next/font/google'
import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import ReduxProvider from './redux/ReduxProvider'
import Navbar from './component/Navbar'
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] })

 export const metadata = {
  title: 'Cart App',
  description: 'product add and cart features',
}

export default function RootLayout({ children }) {
  return (
   
      <html lang="en">
        <body className={inter.className}>
          <ReduxProvider >
            <Navbar>
              {children}
            </Navbar>
          </ReduxProvider> 
        </body>
      </html>
    
  )
}
