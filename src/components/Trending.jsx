'use client'
import Link from 'next/link'
import React from 'react'

function Trending({ topTrending, trending, rated, topRated }) {
  return (
    <div className="flex gap-10 justify-center bg-amber-100 p-4  ">
      <Link href={topTrending} className="hover:text-amber-600 text-2xl text-black" >{trending}</Link>
      <Link href={topRated} className="hover:text-amber-600 text-2xl text-black">{rated}</Link>
    </div>
  )
}

export default Trending
