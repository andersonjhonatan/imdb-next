'use client'

import Link from 'next/link'
import React from 'react'

function AboutComponent({ title1, title2, title3 }) {
  return (
    <div className="flex justify-center w-full " >
      <div className="flex flex-col gap-6 p-4 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center">About IMDb</h1>
        <p className="text-md indent-8 text-justify">{title1}</p>
        <p className="text-md indent-8 text-justify">{title2}</p>
        <p className="text-md indent-8 text-justify">{title3}</p>
      </div>
    </div>
  )
}

export default AboutComponent
