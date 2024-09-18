import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { LaunchType } from "../types/types";

const fetchLaunches = async () => {
    const res = await axios.get("https://api.spacexdata.com/v4/launches");
    return res.data;
};

export const useLaunches = () => {
    return useQuery<LaunchType[]>({
        queryKey: ['getlaunches'],
        queryFn: fetchLaunches,
    });
};