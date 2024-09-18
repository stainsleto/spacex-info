import { Link } from "react-router-dom"

export const Hero = () => {
    return (
        <main className="bg-heroBg bg-cover bg-center h-screen flex flex-col items-center justify-center bg-fixed mt-[-6rem] montserrat">
            <div className="flex bg-black/70 rounded-lg py-10 w-5/6 sm:w-3/6 flex-col gap-5 sm:gap-7 items-center justify-center container text-center">

                <h1 className="text-white font-extrabold text-3xl sm:text-6xl text-center" style={{ lineHeight: '1.3' }}>
                    Starship Info <br /> to Land Astronauts
                </h1>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-5">
                    <Link to='/rockets' className="text-white rounded-md p-2 px-3 border-2 border-gray-600 text-md sm:text-lg  font-bold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">Rockets</Link>

                    <Link to='/launches' className="bg-white rounded-md flex gap-3 justify-center items-center text-center p-2 px-3 text-gray-600 text-md sm:text-lg  font-bold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">Recent launches
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5 sm:size-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </Link>
                </div>
            </div>
        
        </main>
    )
}