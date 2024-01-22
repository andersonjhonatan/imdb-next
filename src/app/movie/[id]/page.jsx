import Image from 'next/image'
import React from 'react'
import { FcRating } from 'react-icons/fc'
import { MdSupervisorAccount } from 'react-icons/md'

const MoviePage = async ({ params }) => {
  const movieId = params.id
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const movie = await res.json()


  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 p-16 bg-white/10 border border-gray-700/50 rounded-md max-w-6xl mx-auto mt-12 py-8 px-4">
      <figure className="flex-1 flex items-center justify-center">
        <Image
          src={`https://image.tmdb.org/t/p/original${
            movie?.backdrop_path || movie?.poster_path 
          }`}
          alt={movie?.title}
          width={500}
          height={500}
          className="rounded-lg shadow-xl shadow-black w-auto h-auto "
        />
      </figure>
      <div className="flex flex-col flex-1 gap-4 p-4">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-xl font-bold text-center ">{movie?.title}</h1>
          <p className="text-sm text-justify flex justify-center indent-8 max-md:w-5/6">
            {movie?.overview}
          </p>
        </div>
        <div className="flex gap-2 justify-around max-md:flex md:flex-col">
          <p className="text-sm flex items-center gap-1">
            <FcRating />
            {movie?.vote_average}
          </p>
          <p className="text-sm flex items-center gap-1">
            <MdSupervisorAccount size={25} /> {movie?.popularity}
          </p>
          <div className='flex gap-2'>Genres: {movie?.genres.map((genre) => (
            <p key={genre.id} className="text-sm flex items-center gap-1 underline underline-offset-8" >{genre.name}</p>
          ))}</div>
        </div>
      </div>
    </div>
  )
}

export default MoviePage
