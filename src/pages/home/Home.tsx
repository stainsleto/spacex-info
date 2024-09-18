
import { Hero } from "../../components/home/Hero"
import { LaunchesInfo } from "../../components/home/LaunchesInfo"
import { Header } from "../../components/Header"
import { HistoryInfo } from "../../components/home/HistoryInfo"
import { RocketInfo } from "../../components/home/RocketInfo"

export const Home = () => {
    
    
    return (
        <>
            <Header />
            <Hero />
            <LaunchesInfo />
            <HistoryInfo />
            <RocketInfo />
        </>
    )
}