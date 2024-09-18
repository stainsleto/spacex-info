import { useNavigate } from "react-router-dom"
import { SkeletonLoader } from "../SkeletonLoader"
import { RocketType } from "../../types/types"
import { RocketCard } from "../rockets/RocketCard"
import { useRocket } from "../../api/useRocket"

export const RocketInfo = () => {
    const navigate = useNavigate()

  const {data, isLoading, isError} = useRocket()

    if(isError){
        return <p>Error on Launches Fetch</p>
    }

    const handleLaunchMore = () => {
        navigate('/rockets')
    }
    return(
        <main className="montserrat container flex flex-col items-center justify-center py-20">

            <h2 className="text-4xl font-bold">Rockets</h2>

            { isLoading ? 
                <SkeletonLoader />
            : 
                <>
                    <section className="grid grid-cols-1 sm:grid-cols-3  gap-5 py-10">

                        {data?.slice(0,3).map( (rocket: RocketType)  => (
                            <RocketCard key={rocket.id} cardData={rocket} />
                        ))}

                    </section>
                    
                    <button onClick={handleLaunchMore} className="bg-black font-semibold text-white rounded-md p-2 px-3" >View More</button>
                </>
        
        }
            
        </main>
    )
    
}

