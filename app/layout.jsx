import './globals.css'
import { Courier_Prime } from '@next/font/google'

const montserrat = Courier_Prime({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat'
})
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body >
        <nav>

          <form id="form">
            <input id="search" type="search" placeholder="Search..." />
          </form>
        </nav>
        {children}
      </body>
    </html>
  )
}
