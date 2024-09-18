import { useParams } from "react-router-dom"
import { SkeletonLoader } from "../SkeletonLoader"
import { formatDate } from "../../utils/formatDate"
import { useSingleHistory } from "../../api/useSingleHistory"
import { Link } from "react-router-dom"

export const HistorySingleDetails = () => {
    
    const {id} = useParams()

    const { data, isLoading, isError } = useSingleHistory(id as string);

    if(isError){
        return <p>Error on fetching history single details</p>
    }

    return(

        <main className="container flex flex-col montserrat py-20">

            {isLoading ? 
            <SkeletonLoader />
            :
                <section className="flex flex-col gap-10 items-center justify-center">
                    <h2 className="text-4xl font-bold text-center">{data?.title}</h2>

                    <div className="flex flex-col gap-5 border-2 border-gray-600 rounded-lg p-5 bg-gray-100">

                        {data?.event_date_utc ? 
                            <p>Published date: {formatDate(data?.event_date_utc)}</p>
                            : '' }

                    <p>Details : {data?.details}</p>

                    <p>Article Link :  {data?.links?.article ? <Link className="bg-black text-white p-1 px-2 rounded-lg" to={data?.links?.article} > Read more </Link> : 'No article available'} </p>
                    
                    </div>

            

                </section>
            }

        </main>

    )
}