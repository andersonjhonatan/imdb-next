'use client'

import Link from 'next/link'
import React from 'react'

function AboutComponent({ title, address, Icon }) {
  return (
    <div className="flex justify-center">
      <h1 className="text-3xl font-bold">{title}</h1>
    </div>
  )
}

export default AboutComponent
