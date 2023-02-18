import Link from 'next/link'

export default function Movie({ id, img_src, title }) {
    return (

        <div className="flex flex-col flex-wrap items-center w-70 p-3">

            <img src={'http://image.tmdb.org/t/p/w500/' + img_src} alt="" width={800} height={800} />
            <Link href={`/Moviedetails/${id}`}>
                <h1 className='pt-5 hover:underline'>{title}</h1>
            </Link>
        </div>
    )
}