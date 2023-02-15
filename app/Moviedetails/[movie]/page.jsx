import Movie from '../../Movie'
import Button from '../../components/ui/button'
import Details from '../../components/ui/details'

export default async function MovieDetail({ params }) {

    const { movie } = params

    const res = `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`

    const similar = `https://api.themoviedb.org/3/movie/${movie}/similar?api_key=${process.env.API_KEY}&language=en-US&page=1`

    console.log(similar)
    console.log(res)
    const responses = await Promise.all([fetch(res), fetch(similar)])

    const selectedMovie = await responses[0].json()
    const similarMovie = await responses[1].json()

    // if (!res.ok) {
    //     // This will activate the closest `error.js` Error Boundary
    //     throw new Error('Failed to fetch data');
    // }

    return (
        <>
            <section className="flex">

                <div className="photo">
                    <img src={`http://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`} alt="" />
                </div>
                <div className="details">
                    <h1 className="title">{selectedMovie.title}</h1>
                    <ul>
                        <li className="date">{selectedMovie.release_date}</li> |
                        <li className="duration">{selectedMovie.runtime ?? "N/A"}</li>
                    </ul>

                    <div className="more">
                        <div className="buttons">

                            <Button name={'Watch Now'} />
                            <Button name={'Trailer'} />
                            <Button name={'Share'} />
                        </div>

                        <p className="summary">
                            {selectedMovie.overview} </p>

                        <div className="bottom">
                            <Details
                                title={'COUNTRY'}
                                info={selectedMovie.country ?? "N/A"}
                            />
                            <Details
                                title={'RATINGS'}
                                info={selectedMovie.vote_average == 0 ? "N/A" : selectedMovie.vote_average}
                            />
                            <Details
                                title={'STUDIO'}
                                info={selectedMovie.companies ?? "N/A"}
                            />

                            {/* <p>GENRE<span className="genre">{details}</span></p> */}
                        </div>
                    </div>
                </div>
            </section>
            <h3 className="title">Similar Movies</h3>
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