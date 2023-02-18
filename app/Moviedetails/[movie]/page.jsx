import Movie from '../../components/Movie'
import DetailsCard from './components/DetailsCard'

export default async function MovieDetail({ params }) {

    const { movie } = params

    const res = `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`

    const similar = `https://api.themoviedb.org/3/movie/${movie}/similar?api_key=${process.env.API_KEY}&language=en-US&page=1`

    console.log(similar)
    console.log(res)
    const responses = await Promise.all([fetch(res), fetch(similar)])

    const selectedMovie = await responses[0].json()
    const similarMovie = await responses[1].json()

    return (
        <>
            <section className="flex justify-center m-5 mt-32">

                <div className="photo">
                    <img src={`http://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`} alt="" />
                </div>
                <DetailsCard
                    title={selectedMovie.title}
                    release_date={selectedMovie.release_date}
                    runtime={selectedMovie.runtime ?? "N/A"}
                    overview={selectedMovie.overview}
                    country={selectedMovie.country ?? "N/A"}
                    vote_average={selectedMovie.vote_average == 0 ? "N/A" : selectedMovie.vote_average}
                    companies={selectedMovie.companies ?? "N/A"}
                />

            </section>
            <h3 className="text-xl bg-sky-700 p-4">Similar Movies</h3>
            <section className='grid gap-16 grid-cols-fluid items-center'>
                {similarMovie.results.map(movie => (
                    <Movie
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        release_date={movie.release_date}
                        img_src={movie.poster_path}
                    />
                ))}
            </section>
        </>
    )
}