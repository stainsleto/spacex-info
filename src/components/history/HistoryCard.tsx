import { HistoryType } from "../../types/types"
import { formatDate } from "../../utils/formatDate"
import { useNavigate } from "react-router-dom"

type HistoryCardType = {
    cardData : HistoryType
}

export const HistoryCard = ({cardData} : HistoryCardType) => {

    const navigate = useNavigate()

    const handleCardClick = (id : string) => {
        navigate(`/history/${id}`)
    }

    return(
        <>
            <div key={cardData?.id} className="border-2 border-gray-400 p-5 rounded-md ">
                <section className="flex items-center justify-betwen gap-5 pb-3">
                    <div className="flex flex-col gap-2">
                        <h5 className="font-bold">{cardData?.title}</h5>
                        {
                            cardData.details ?
                            <div className="flex flex-col gap-2">
                                <p className="text-sm">{cardData.details?.split('').slice(0,110).join('')} {cardData.details?.split('').length > 110 ? '...' : ''}</p>
                                <p className="text-sm">Published On: {formatDate(cardData.event_date_utc)}</p>
                            </div>
                            : 
                                <p className="text-sm">No details available</p>
                        }
                    </div>
                </section>
                <button onClick= { () => handleCardClick(cardData?.id)} className="text-sm bg-black font-semibold text-white p-2 px-3 rounded-md">Read More</button>
            </div>
            
        </>

    )
}