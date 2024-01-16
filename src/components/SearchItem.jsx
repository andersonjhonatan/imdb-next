import React from 'react'

function SearchItem({ name, search }) {
  return (
    <div className="flex mt-2 max-w-6xl mx-auto justify-between p-4">
      <input type="text" placeholder={name} className='w-full bg-transparent'/>
      <button className='hover:text-amber-600 bg-amber-100 rounded p-2 text-black'>{search}</button>
    </div>
  )
}

export default SearchItem
