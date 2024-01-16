import React from 'react'
import MenuList from './MenuList'
import { ImHome } from 'react-icons/im'
import { BsFillInfoSquareFill } from 'react-icons/bs'

import DarkModeSwitch from './DarkModeSwitch'
import Link from 'next/link'

function Header() {
  return (
    <div className="sticky top-0 z-50">
      <div className="flex justify-between items-center p-3 mx-auto max-w-6xl ">
        <div className="flex gap-3">
          <MenuList title="Home" address="/" Icon={ImHome} />
          <MenuList title="About" address="/about" Icon={BsFillInfoSquareFill} />
        </div>
        <div className="flex gap-3 items-center">
          <DarkModeSwitch />
          <Link href="/" className="flex items-center">
            <span className="font-bold bg-amber-500 px-2 py-1 rounded">Imdb</span>
            <span>Clone</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
