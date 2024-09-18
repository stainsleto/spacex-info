import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SingleRocketType } from "../types/types";

const fetchId = async(id : string) => {
    const res = await axios.get(`https://api.spacexdata.com/v4/rockets/${id}`)
    return res.data
}

export const useSingleRocket = (id : string) => {
    return useQuery<SingleRocketType>({
        queryKey:['getsinglerocket'],
        queryFn: () => fetchId(id),
        enabled: !!id,  
    });

}