import Link from 'next/link'

export default function Movie({ id, img_src, title, release_date, overview }) {
    return (

        <div className="flex flex-column flex-wrap items-center w-80 p-3">
            <h1>{title}</h1>
            <p>{release_date}</p>
            <p>{overview}</p>
            <Link href={`/${id}`}>
                <img src={'http://image.tmdb.org/t/p/w500/' + img_src} alt="" width={800} height={800} />
            </Link>
        </div>
    )
}