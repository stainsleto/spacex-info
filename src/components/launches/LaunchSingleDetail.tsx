import { Link, useParams } from "react-router-dom"
import { SkeletonLoader } from "../SkeletonLoader"
import { formatDate } from "../../utils/formatDate"
import { useSingleLaunch } from "../../api/useSingleLaunch"
import { TickIdentifier } from "../../utils/TickIdentifier"
export const LaunchSingleDetail = () => {
    const {id} = useParams()

    const { data, isLoading, isError } = useSingleLaunch(id as string);

    if(isError){
        return <p>Error on fetching history single details</p>
    }

    return(
        <main className="container flex flex-col montserrat py-20">

            {isLoading ? 
            <SkeletonLoader />
            :
                <section className="grid grid-cols-1 gap-10 items-center justify-center">
                    <h2 className="text-4xl font-bold text-center">{data?.name}</h2>

                    <div className="grid grid-cols-1 items-center sm:grid-cols-4 gap-10">
                        <img className="w-40 sm:w-72" src={data?.links?.patch?.large}  alt={data?.name}/>

                        <div className="flex flex-col gap-2 ">

                        {data?.date_utc ? 
                            <p>Date : {formatDate(data?.date_utc)}</p>
                            : '' }

                        <p>Details : {data?.details ? data?.details : 'No data' }</p>
                        <p>Window : {data?.window}</p>
                        <p className="flex gap-2 items-center">Auto Update : {TickIdentifier(data?.auto_update ?? false)}</p>
                        <p className="flex gap-2 items-center">Upcoming : {TickIdentifier(data?.upcoming ?? false)}</p>

                    </div>


                    <div className="flex flex-col gap-2 ">
                        <h4 className="font-semibold text-lg">Fairings</h4>
                        <p className="flex gap-2 items-center">Reused: {TickIdentifier(data?.fairings?.reused ?? false)}</p>
                        <p className="flex gap-2 items-center">Recovery Attempted: {TickIdentifier(data?.fairings?.recovery_attempt ?? false )}</p>
                        <p className="flex gap-2 items-center">Recovered: {TickIdentifier(data?.fairings?.recovered ?? false)} </p>
                    </div>

                    </div>

                    <div className="flex flex-col gap-5 w-3/5">
                        <h4 className="font-semibold text-lg">{`Failures of ${data?.name}`}</h4>

                        { data?.failures.length || 0 > 0 ?
                            <div>
                                {data?.failures.map( (failure,index) => (
                                    <div key={index}>
                                        <p>Time : {failure.time}</p>
                                        <p>Reason : {failure.reason}</p>

                                    </div>
                                ))}
                            </div>
                            : 'No Data'
                        
                        }
                        

                    </div>   


                    <div className="flex flex-col gap-5 w-3/5">
                        <h4 className="font-semibold text-lg">Publications</h4>

                        <p>Article : {data?.links?.article ? <Link className="bg-black text-white p-1 px-2 rounded-lg" to={data?.links?.article} > Read more </Link> : 'No article available'}</p>
                        <p>Wikipedia : {data?.links?.wikipedia ? <Link to={data?.links?.wikipedia} className="bg-black text-white p-1 px-2 rounded-lg" > Read more </Link> : 'No wikipedia available'}</p>

                    </div>            

                </section>
            }

        </main>
    )
}
