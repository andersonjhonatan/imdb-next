import React from 'react'
import Link from 'next/link'

function MenuList({ title, address, Icon }) {
  return (
    <div>
      <div className="flex items-center gap-1 hover:cursor-pointer">
        <Icon className='sm:hidden' />
        <Link href={address} className="max-sm:hidden ">
          {title}
        </Link>
      </div>
    </div>
  )
}

export default MenuList
