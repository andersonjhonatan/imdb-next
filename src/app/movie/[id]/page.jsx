import Image from 'next/image'
import React from 'react'
import { FcRating } from "react-icons/fc";
import { MdSupervisorAccount } from "react-icons/md";



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
    <div className="flex bg-white/10 border border-gray-700/50 rounded-md max-w-6xl mx-auto mt-12 py-8 px-4">
      <figure>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie?.backdrop_path || movie?.poster_path
          }`}
          alt={movie?.title}
          width={500}
          height={500}
          className="rounded-lg shadow-xl shadow-black w-auto h-auto "
        />
      </figure>
      <div className="flex flex-col flex-1 gap-4 p-4">
        <h1 className="text-xl font-bold text-center ">{movie?.title}</h1>
        <p className="text-sm text-justify indent-8">{movie?.overview}</p>
        <p className="text-sm flex items-center gap-1"><FcRating/>{movie?.vote_average}</p>
        <p className="text-sm flex items-center gap-1"><MdSupervisorAccount size={25} /> {movie?.popularity }</p>
      </div>
    </div>
  )
}

export default MoviePage
