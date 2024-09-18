import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { HistoryType } from "../types/types";

const getHistory = async () => {
    const res = await axios.get("https://api.spacexdata.com/v4/history")
    return res.data
}

export const useHistory = () => {
    return useQuery<HistoryType[]>({
        queryKey:['gethistory'],
        queryFn: getHistory,
    });
};