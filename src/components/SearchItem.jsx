'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'


function SearchItem() {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSearch = ({ target: { value } }) => {
    setSearch(value)
  }

  const submitSearch = (e) => {
    e.preventDefault()
    router.push(`/search/${search}`)
  }

  return (
    <div className="flex mt-2 max-w-6xl mx-auto justify-between p-4">
      <form onSubmit={submitSearch} className="flex gap-2 w-full">
        <input
          type="text"
          placeholder="Search Keyword..."
          className="w-full bg-transparent"
          onChange={handleSearch}
          value={search}
        />
        <button
          type="submit"
          className="hover:text-amber-600 bg-amber-100 rounded p-2 text-black disabled:bg-slate-500 disabled:cursor-not-allowed disabled:hover:text-black"
          onClick={submitSearch}
          disabled={search === ''}
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchItem
