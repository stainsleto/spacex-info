import { useNavigate } from "react-router-dom"
import { useHistory } from "../../api/useHistory"
import { HistoryType } from "../../types/types"
import { HistoryCard } from "../history/HistoryCard"
import RocketImage from '../../assets/rocket.webp'
import { SkeletonLoader } from "../SkeletonLoader"

export const HistoryInfo = () => {

    const navigate = useNavigate()

    const {data, isLoading, isError} = useHistory()

    if(isError){
        return <p>Error on History Fetch</p>
    }

    const handleHistoryMore = () => {
        navigate('/history')
    }
        
    return(
        <main className="montserrat bg-gray-100 py-20 ">

            <div className="container flex flex-col gap-5 items-center justify-evenly ">


                <h2 className="text-4xl font-bold">History</h2>

                {
                    isLoading ? 
                        <SkeletonLoader />
                    :

                <>                
                    <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-10">
                        <section className=" w-auto sm:w-4/12 flex flex-col gap-5">
                            <img className="w-[30rem] mt-10 rounded-lg" src={RocketImage} alt='rocket' />
                            <p className="text-sm font-semibold leading-relaxed w-6/6">Discover the milestones and achievements that have shaped the world of space exploration. From pioneering rockets to groundbreaking missions, this section highlights significant events and accomplishments in the field of space technology.</p>
                        </section>

                        <section className="grid grid-cols-1 gap-5 py-10 sm:w-4/12">

                        
                            {data?.slice(0,3).map( (history: HistoryType)  => (
                                <HistoryCard key={history.id} cardData={history} />
                            ))}


                        </section>
                    
                    </div>
                    <button onClick={handleHistoryMore} className="bg-black font-semibold text-white rounded-md p-2 px-3" >View More</button>
                </>
                
                }
            
            </div>
        </main>
    )
    
}

