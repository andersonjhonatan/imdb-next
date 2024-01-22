import React from 'react'
import NavBar from './NavBar'

function NavBarTrendingTopRated
() {
  return (
    <div className="flex gap-10 justify-center bg-amber-100 text-black p-4">
      <NavBar title="Trending" params="trending" />
      <NavBar title="Top Rated" params="toprated" />
    </div>
  )
}

export default NavBarTrendingTopRated
