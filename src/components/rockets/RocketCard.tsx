import { RocketType } from "../../types/types"
import { useNavigate } from "react-router-dom"

type RocketCardType = {
    cardData : RocketType
}

export const RocketCard = ({cardData} : RocketCardType) => {
    const navigate = useNavigate()

    const handleCardClick = (el : string) => {
        navigate(`/rockets/${el}`)
    }

    return(
        <>
            <div key={cardData?.id} className="border-2 border-gray-400 hover:bg-gray-200 hover:border-gray-300 p-5 rounded-md flex flex-col gap-5">
                <section className="flex items-center justify-betwen gap-5">
                    <img src={cardData?.flickr_images[0]} className="w-32 rounded-md" alt="rocket" />
                    <div className="flex flex-col gap-2">
                        <h5 className="font-bold">{cardData?.name}</h5>
                        {
                            cardData.description ?
                            <div>
                            <p className="text-sm">{cardData.description?.split('').slice(0,50).join('')} {cardData.description?.split('').length > 50 ? '...' : ''}</p>
                            <p className="text-sm">Cost Per Launch : ${cardData?.cost_per_launch}</p>
                            </div>
                            : 
                            <p className="text-sm">No description data available</p>
                        }
                    </div>
                </section>
                <button onClick={() => handleCardClick(cardData?.id)} className="text-sm bg-black font-semibold text-white p-2 px-3 rounded-md">Learn More</button>
            </div>
            
        </>

    )
}