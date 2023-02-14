
// async function getData() {
//     const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
//     if (!res.ok) {
//         // This will activate the closest `error.js` Error Boundary
//         throw new Error('Failed to fetch data');
//     }

//     return res.json();

// }

export default async function MovieDetail({ params }) {

    const { movie } = params

    const res = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`)

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    // console.log(data)
    return (
        <>
            <div class="photo">
                <img src={`http://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" />
            </div>
            <div className="details">
                <h1 className="title">{data.title}</h1>
                <ul>
                    <li className="date">{data.release_date}</li> |
                    <li className="duration">{data.runtime ?? "N/A"}</li>
                </ul>

                <div className="more">
                    <div className="buttons">
                        <button>Watch Now</button><button>Trailer</button><button>Share</button>
                    </div>

                    <p className="summary">
                        {data.overview} </p>

                    <div className="bottom">
                        <p>COUNTRY<span className="director">{data.country}</span></p>
                        <p>RATINGS<span className="written">{data.vote_average == 0 ? "N/A" : data.vote_average}</span></p>
                        <p>STUDIO<span className="release">{data.companies}</span></p>
                        {/* <p>GENRE<span className="genre">{details}</span></p> */}
                    </div>
                </div>
            </div>


        </>
    )
}