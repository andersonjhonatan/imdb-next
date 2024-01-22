'use client'
import AboutComponent from '@/components/AboutComponent'
import React from 'react'
import { ImHome } from 'react-icons/im'

function AboutPage() {
  return (
    <div>
      <AboutComponent
        title1="1"
        title2="2"
        title3="3"
        address="Home"
        Icon={ImHome}
      />
    </div>
  )
}

export default AboutPage