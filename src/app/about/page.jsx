'use client'
import AboutComponent from '@/components/AboutComponent'
import React from 'react'
import { ImHome } from 'react-icons/im'


function AboutPage() {
  return (
    <div>
      <AboutComponent title="About Page" address="Home" Icon={ImHome}/>
    </div>
  )
}

export default AboutPage
