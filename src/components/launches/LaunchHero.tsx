import { useLaunches } from "../../api/useLaunches"
import { SkeletonLoader } from "../SkeletonLoader"
import { LaunchType } from "../../types/types"
import { LaunchCard } from "./LaunchCard"
import { useState, useMemo } from "react"


export const LaunchHero = () => {

    const [searchBox, setSearchBox] = useState('')

    const {data,isError,isLoading} = useLaunches()

    const filteredData = useMemo( () => data?.filter( (el:LaunchType) => el.name.toLowerCase().includes(searchBox.toLowerCase()) ) ,[data,searchBox])

    if(isError){
        return <p>Error on Launches Fetch</p>
    }

    return(
        <main className="montserrat container flex gap-5 flex-col items-center justify-center py-20">

            <h2 className="text-4xl font-bold">Launches</h2>

            <input onChange={ e => setSearchBox(e.target.value)} className="px-5 border-2 border-b-gray-600 rounded-md text-gray-800" type="text" placeholder='Search Launches' />

            { isLoading ? 
                <SkeletonLoader />
                : 
                <>
                    <section className="grid grid-cols-1 sm:grid-cols-3  gap-5 py-10">

                        {
                            filteredData && filteredData.length > 0 ? 
                            
                            (filteredData?.map( (launch: LaunchType)  => (
                                <LaunchCard key={launch.id} cardData={launch} />
                            )))

                            : <p>No similar results found</p>
                            
                        }
                    </section>
                    
                </>
        
    }
            
        </main>
    )
}