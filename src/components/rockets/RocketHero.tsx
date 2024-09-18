import { useRocket } from "../../api/useRocket"
import { SkeletonLoader } from "../SkeletonLoader"
import { RocketCard } from "./RocketCard"
import { RocketType } from "../../types/types"
import { useState, useMemo } from "react"


export const RocketHero = () => {

    const[searchBox,setSearchBox] = useState('')

    const {data,isError,isLoading} = useRocket()

    const filteredData = useMemo( () =>  data?.filter( (rocket : RocketType) => rocket?.name.toLowerCase().includes(searchBox.toLowerCase())), [data,searchBox] )

    if(isError){
        return <p>Error on Launches Fetch</p>
    }

    return(
        <main className="montserrat container flex flex-col gap-5 items-center justify-center py-20">

            <h2 className="text-4xl font-bold">Rockets</h2>

            <input onChange={ e => setSearchBox(e.target.value)} className="px-5 border-2 border-b-gray-600 rounded-md text-gray-800" type="text" placeholder='Search Rockets' />


            { isLoading ? 
                <SkeletonLoader />
            : 
                <>
                    <section className="grid grid-cols-1 sm:grid-cols-3  gap-5 py-10">


                        { filteredData && filteredData.length > 0 ? 
                            (filteredData?.map( (rocket: RocketType)  => (
                            <RocketCard key={rocket.id} cardData={rocket} />
                        )))
                        : <p>No similar results found</p>
                    }

                    </section>
                    
                </>
        
    }
            
        </main>
    )
}