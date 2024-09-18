import { useHistory } from "../../api/useHistory"
import { SkeletonLoader } from "../SkeletonLoader"
import { HistoryCard } from "./HistoryCard"
import { HistoryType } from "../../types/types"
import { useMemo, useState } from "react"

export const HistoryHero = () => {


    const {data,isLoading, isError} = useHistory()
    const [searchBox, setSearchBox] = useState('')

    const filteredData = useMemo( () => data?.filter((history: HistoryType) =>
        history.title.toLowerCase().includes(searchBox.toLowerCase())
    ), [data,searchBox]);
    
  

    if(isError){
        return <p>Error on History Fetch</p>
    }

    return(
        <main className="montserrat bg-gray-100 py-20 ">

            <div className="container flex flex-col gap-5 items-center justify-evenly ">


                <h2 className="text-4xl font-bold">History</h2>

                <input className="px-5 border-2 border-b-gray-600 rounded-md text-gray-800" onChange={( (e) => setSearchBox(e.target.value) )} type="text" placeholder='Search History' />

                {
                    isLoading ? 
                    <SkeletonLoader />
                    :
                    
                    <>                
                    <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-10">

                        <section className="grid grid-cols-1 gap-5 py-10">

                        {
                            filteredData && filteredData?.length > 0 ?
                            (
                                filteredData?.map( (history: HistoryType)  => (
                                <HistoryCard key={history.id} cardData={history} />
                                ))
                        ) : <p>No similar results found</p>

                        }

                        </section>
                    
                    </div>
                </>
                
            }
            
            </div>
        </main>
    )
}