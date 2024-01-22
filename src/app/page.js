import Cards from '@/components/Card'
import Image from 'next/image'

const API_KEY = process.env.API_KEY

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'trending'

  const response = await fetch(
    `https://api.themoviedb.org/3${
      genre === 'toprated' ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`
  )

  const data = await response.json()

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const results = data.results

  const card = results.map((result) => (
    <div
      key={result.id}
      className=" border border-black flex flex-col gap-2 p-4 items-center"
    >
      <div className="flex flex-1 flex-col justify-around items-center">
        <h1>{result.title}</h1>
        <p className="text-sm">{result.overview}</p>
      </div>
      <figure className="flex-1">
        <Image
          src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
          alt={result.title}
          width={200}
          height={200}
          className="rounded-lg shadow-xl shadow-black"
        />
      </figure>
    </div>
  ))

  return (
    <div className="grid grid-cols-4 gap-4 border border-red-500 p-4">
      <Cards card={card} />
    </div>
  )
}
