import { useParams } from "react-router-dom"
import { SkeletonLoader } from "../SkeletonLoader"
// import { formatDate } from "../../utils/formatDate"
import { useSingleRocket } from "../../api/useSingleRocket"
import { TickIdentifier } from "../../utils/TickIdentifier"

export const RocketSingleDetail = () => {
    const {id} = useParams()

    const { data, isLoading, isError } = useSingleRocket(id as string);

    if(isError){
        return <p>Error on fetching history single details</p>
    }
    return(
        <main className="container flex flex-col montserrat py-20">

            { isLoading ? 
            <SkeletonLoader />
            : 
            <section className="grid grid-cols-1 gap-10 items-center justify-center">
                <h2 className="text-4xl font-bold">{data?.name}</h2>
                <img  className="w-40 sm:w-96 rounded-md" src={data?.flickr_images[0]} alt={data?.name} />

                <div className="flex flex-col gap-2 ">
                    <h4 className="font-semibold text-lg">{`Details about ${data?.name}`}</h4>
                    <p>Boosters : {data?.boosters}</p>
                    <p>Cost per launch : {data?.cost_per_launch}</p>
                    <p>Success rate pct : {data?.success_rate_pct}</p>
                    <p>First Flight : {data?.first_flight}</p>
                    <p>Country : {data?.country}</p>
                    <p className="w-4/5">Description: {data?.description}</p>
                </div>

                <div className="flex flex-col gap-2">
                    <h4 className="font-semibold text-lg">{`Images of ${data?.name}`}</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
                        {
                            data?.flickr_images.map( (rocket : string, index) => (
                                <img className="w-40 sm:w-72 rounded-md" key={index} src={rocket} />
                            ))
                        }
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 ">
                    <div className="flex flex-col gap-2">
                        <h4 className="font-semibold text-lg">{`Specfications of ${data?.name}`}</h4>
                        <p>Height in feet : {data?.height.feet}</p>
                        <p>Height in meters : {data?.height.meters}</p>
                        <p>Diameter in meters : {data?.diameter.meters}</p>
                        <p>Diameter in feet : {data?.diameter.feet}</p>
                        <p>Mass in Kg : {data?.mass.kg}</p>
                        <p>Mass in lb : {data?.mass.lb}</p>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <h4 className="font-semibold text-lg">{`First Stage of ${data?.name}`}</h4>
                        <p className="flex gap-2 items-center">Reusable : {TickIdentifier(data?.first_stage.reusable ?? false )}</p>
                        <p>Engines : {data?.first_stage.engines}</p>
                        <p>Fuel Amount in tons : {data?.first_stage.fuel_amount_tons}</p>
                        <p>Burn Time in Sec : {data?.first_stage.burn_time_sec}</p>
                        
                    </div>

                    <div className="flex flex-col gap-2">
                        <h4 className="font-semibold text-lg">{`Landing Legs`}</h4>
                        <p>Number : {data?.landing_legs.number}</p>
                        <p>Material : {data?.landing_legs.material}</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 ">
                    <h4 className="font-semibold text-lg">{`Engine details about ${data?.name}`}</h4>
                    <p>Isp Sea Level : {data?.engines.isp.sea_level}</p>
                    <p>Isp Vaccum : {data?.engines.isp.vacuum}</p>
                    <p>Thrust sea level (kN) : {data?.engines.thrust_sea_level.kN}</p>
                    <p>Thrust sea level (lbf) : {data?.engines.thrust_sea_level.lbf}</p>
                    <p>Thrust vacuum (kN) : {data?.engines.thrust_vacuum.kN}</p>
                    <p>Thrust vacuum (lbf) : {data?.engines.thrust_vacuum.lbf}</p>
                    <p>Number : {data?.engines.number}</p>
                    <p>Type : {data?.engines.type}</p>
                    <p>Version : {data?.engines.version}</p>
                    <p>Layout : {data?.engines.layout}</p>
                    <p>Engline Loss Max : {data?.engines.engine_loss_max}</p>
                    <p>Propellant 1 : {data?.engines.propellant_1}</p>
                    <p>Propellant 2 : {data?.engines.propellant_2}</p>
                    <p>Thrust to weight : {data?.engines.thrust_to_weight}</p>
                </div>

            </section>
        }
    </main>

    )
}