
import Movie from '../../components/Movie';

export default async function Search({ params }) {
    const { search } = params
    console.log(search)

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=1bfdbff05c2698dc917dd28c08d41096&query=${search}`);
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }
    const data = await res.json()

    return (

        <div className='grid grid-cols-fluid items-center gap-6 mt-28 '>
            {data.results.map((movie) => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    release_date={movie.release_date}
                    img_src={movie.poster_path}
                />
            ))}
        </div>
    )
}