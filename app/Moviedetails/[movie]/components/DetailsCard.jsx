
import Button from '../../../components/ui/button'
import Details from '../../../components/ui/details'

export default function DetailsCard({ title, release_date, runtime, overview, country, vote_average, companies }) {
    return (
        <div className="flex flex-col  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <h1 className="title">{title}</h1>
            <ul>
                <li className="date">{release_date}</li> |
                <li className="duration">{runtime}</li>
            </ul>

            <div className="more">
                <div className="buttons">
                    <Button name={'Watch Now'} />
                    <Button name={'Trailer'} />
                    <Button name={'Share'} />
                </div>

                <p className="summary">
                    {overview} </p>

                <div className="bottom">
                    <Details
                        title={'COUNTRY'}
                        info={country}
                    />
                    <Details
                        title={'RATINGS'}
                        info={vote_average}
                    />
                    <Details
                        title={'STUDIO'}
                        info={companies}
                    />

                    {/* <p>GENRE<span className="genre">{details}</span></p> */}
                </div>
            </div>
        </div>
    )
}
