'use client'

import Link from 'next/link'
import React from 'react'

function AboutComponent({ title1, title2, title3}) {
  return (
    <div className="flex justify-center">
      <div>
        <Link href="/" className="text-3xl hover:text-amber-600">{title1}</Link>
        <Link href="/" className="text-3xl hover:text-amber-600">{title2}</Link>
        <Link href="/" className="text-3xl hover:text-amber-600">{title3}</Link>
      </div>
    </div>
  )
}

export default AboutComponent
