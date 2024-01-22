import Cards from '@/components/Card'

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


  return (
    <div>
      <Cards cards={results} />
    </div>
  )
}
