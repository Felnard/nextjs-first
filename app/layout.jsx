"use client"

import './globals.css'
import { useState } from "react";
import { Courier_Prime } from '@next/font/google'
import Link from 'next/link';

const montserrat = Courier_Prime({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat'
})
export default function RootLayout({ children }) {

  const [query, setQuery] = useState("");

  // function searchQuery(e) {
  //   setQuery(e.target.value)
  // }

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body >
        <nav>
          <input id="search" type="search" placeholder="Search..." onChange={(e) => setQuery(e.target.value)} />
          <Link href={`/SearchMovie/${query}`}>
            Search
          </Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
