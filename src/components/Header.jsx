import React from 'react'
import MenuList from './MenuList'
import { ImHome } from 'react-icons/im'
import { BsFillInfoSquareFill } from 'react-icons/bs'
import { WiSolarEclipse } from 'react-icons/wi'

function Header() {
  return (
    <div className="sticky top-0 bg-slate-500">
      <div className="flex justify-between items-center p-3 mx-auto max-w-6xl ">
        <div className="flex gap-3">
          <MenuList title="Home" address="/" Icon={ImHome} />
          <MenuList title="About" address="/about" Icon={BsFillInfoSquareFill} />
        </div>
        <div className="flex gap-3 items-center">
          <MenuList title="" address="/eclipse" Icon={WiSolarEclipse} />
          <div className="flex gap-3 items-center">
            <WiSolarEclipse className="max-sm:hidden" actt />
            <span className="font-bold bg-amber-500 px-2 py-1 rounded">Imdb</span>
            <span>Clone</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
