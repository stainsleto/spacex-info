import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { RocketType } from "../types/types";

const getRockets = async () => {
    const res = await axios.get("https://api.spacexdata.com/v4/rockets")
    return res.data
}

export const useRocket = () => {
    return useQuery<RocketType[]>({
        queryKey:['getrockets'],
        queryFn: getRockets,
    });
};