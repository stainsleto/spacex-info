import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { LaunchSingleType } from "../types/types";

const fetchId = async(id : string) => {
    const res = await axios.get(`https://api.spacexdata.com/v4/launches/${id}`)
    return res.data
}

export const useSingleLaunch = (id : string) => {
    return useQuery<LaunchSingleType>({
        queryKey:['getsinglelaunch'],
        queryFn: () => fetchId(id),
        enabled: !!id,  
    });

}