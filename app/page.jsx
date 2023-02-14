import Movie from './Movie';
async function movies() {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();

}

export default async function Home() {
  const response = await movies()
  // console.log(response)
  return (
    <main>
      <div className='grid gap-16 grid-cols-fluid items-center'>

        {response.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            // overview={movie.overview}
            release_date={movie.release_date}
            img_src={movie.poster_path}


          />
        ))}
      </div>
    </main>
  )
}
