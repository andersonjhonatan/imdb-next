'use client'
import Image from 'next/image'
import React from 'react'
import { useTheme } from 'next-themes'


const Cards = ({ cards }) => {
  const { theme } = useTheme()

  const cardResult = cards.map((card) => (
    <div
      key={card.id}
      className={`flex flex-col gap-12 p-4 items-center border ${theme === 'dark' ? 'border-white' : 'border-black'} rounded-2xl`}
    >
      <figure className="flex-1">
        <Image
          src={`https://image.tmdb.org/t/p/original${card.poster_path}`}
          alt={card.title || card.name}
          width={200}
          height={200}
          className="rounded-lg shadow-xl shadow-black h-auto w-auto"
        />
      </figure>
      <div className="flex flex-1 flex-col justify-around items-center ">
        <p className="text-sm text-wrap text-justify ">
          {card.overview.length < 48 ? 'No description available' : card.overview}
        </p>
        <h1>{card.title}</h1>
      </div>
    </div>
  ))
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {cardResult}
    </div>
  )
}

export default Cards
