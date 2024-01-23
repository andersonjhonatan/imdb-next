import Cards from '@/components/Cards'
import React from 'react'

const SearchPage = async ({ params }) => {
  const searchItem = params.searchItem

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${searchItem}&page=1&include_adult=false`
  )

  const data = await response.json()

  const results = data.results

  return (
    <div>
      {results &&
        results.length ===
          0 && (<h1 className="text-3xl font-bold text-center mt-16">No results found</h1>)}
      <Cards cards={results} />
    </div>
  )
}

export default SearchPage
