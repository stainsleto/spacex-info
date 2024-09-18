import { LaunchCardTypes } from "../../types/types"
import { useNavigate } from "react-router-dom"

export const LaunchCard = ({cardData} : LaunchCardTypes) => {
    const navigate = useNavigate()

    const handleCardClick = (el : string) => {
        navigate(`/launches/${el}`)
    }

    return(
        <>
            <div key={cardData?.id} className="border-2 border-gray-400 hover:bg-gray-200 hover:border-gray-300 p-5 rounded-md flex flex-col gap-5">
                <section className="flex items-center justify-betwen gap-5">
                    <img src={cardData.links.patch?.small} className="w-20" alt="" />
                    <div className="flex flex-col gap-2">
                        <h5 className="font-bold">{cardData?.name}</h5>
                        {
                            cardData.details ?
                            <p className="text-sm">{cardData.details?.split('').slice(0,50).join('')} {cardData.details?.split('').length > 50 ? '...' : ''}</p>
                            : 
                            <p className="text-sm">No details available</p>
                        }
                    </div>
                </section>
                <button onClick={() => handleCardClick(cardData?.id)} className="text-sm bg-black font-semibold text-white p-2 px-3 rounded-md">Learn More</button>
            </div>
            
        </>

    )
}