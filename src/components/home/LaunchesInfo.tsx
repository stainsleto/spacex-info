import { LaunchCard } from "../launches/LaunchCard"
import { LaunchType } from "../../types/types"
import { useNavigate } from "react-router-dom"
import { SkeletonLoader } from "../SkeletonLoader"
import { useLaunches } from "../../api/useLaunches"

export const LaunchesInfo = () => {

    const navigate = useNavigate()

    const {data, isLoading, isError} = useLaunches()

    if(isError){
        return <p>Error on Launches Fetch</p>
    }

    const handleLaunchMore = () => {
        navigate('/launches')
    }
        
    return(
        <main className="montserrat container flex flex-col items-center justify-center py-20">

            <h2 className="text-4xl font-bold">Launches</h2>

            { isLoading ? 
                <SkeletonLoader />
            : 
                <>
                    <section className="grid grid-cols-1 sm:grid-cols-3  gap-5 py-10">

                        {data?.slice(0,6).map( (launch: LaunchType)  => (
                            <LaunchCard key={launch.id} cardData={launch} />
                        ))}

                    </section>
                    
                    <button onClick={handleLaunchMore} className="bg-black font-semibold text-white rounded-md p-2 px-3" >View More</button>
                </>
        
        }
            
        </main>
    )
    
}

