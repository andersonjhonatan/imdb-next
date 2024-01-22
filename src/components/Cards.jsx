'use client'
import Image from 'next/image'
import React from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { GoThumbsup } from 'react-icons/go'

import { MdOutlineNewReleases } from 'react-icons/md'

const Cards = ({ cards }) => {
  const { theme } = useTheme()

  const cardResult = cards.map((card) => (
    <div key={card.id} className="items-stretch flex mb-4">
      <Link
        href={`/movie/${card.id}`}
        className={`flex flex-col gap-12 p-4 items-center  ${
          theme === 'dark' ? 'border-[1px] border-gray-700/70' : 'border border-black/35'
        } rounded-2xl`}
      >
        <figure className="flex-1">
          <Image
            src={`https://image.tmdb.org/t/p/original${
              card.poster_path || card.backdrop_path
            }`}
            alt={card.title || card.name}
            width={200}
            height={200}
            className="rounded-lg shadow-xl shadow-black h-auto w-auto"
          />
        </figure>
        <div className="flex flex-1 flex-col gap-4 justify-around items-center text-center  ">
          <p className="text-sm text-wrap text-justify line-clamp-3 indent-8">
            {card.overview}
          </p>
          <h1 className="text-xl font-bold">{card.title || card.name}</h1>
          <div className="flex gap-2 w-full justify-around">
            <p className="text-sm flex items-center gap-1">
              <MdOutlineNewReleases /> {card.release_date || card.first_air_date}
            </p>
            <p className="text-sm flex items-center gap-1">
              <GoThumbsup size={20} /> {card.vote_count}
            </p>
          </div>
        </div>
      </Link>
    </div>
  ))

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
      {cardResult}
    </div>
  )
}

export default Cards
