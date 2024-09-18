import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { HistoryType } from "../types/types";

const fetchId = async(id : string) => {
    const res = await axios.get(`https://api.spacexdata.com/v4/history/${id}`)
    return res.data
}

export const useSingleHistory = (id : string) => {
    return useQuery<HistoryType>({
        queryKey:['getsinglehistory'],
        queryFn: () => fetchId(id),
        enabled: !!id,  
    });

}