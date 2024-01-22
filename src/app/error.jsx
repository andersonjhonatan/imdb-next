'use client'
import React from 'react'
import { useEffect } from 'react'

function Error({ error, reset }) {
  useEffect(() => {
    console.log(error)
  }, [error])
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white/10">
      <div className="text-center bg-black p-28 rounded-lg flex flex-col gap-4">
        <h2>Something went wrong!</h2>
        <button
          onClick={() => reset()}
          className="hover:text-amber-600  p-4 rounded-md hover:bg-white duration-300"
        >
          Try again
        </button>
      </div>
    </div>
  )
}

export default Error
