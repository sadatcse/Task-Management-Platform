// api, axios (axios secure), tan stack 

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./UseAxioSecure";
import useAuth from "./useAuth";

const useTask = () => {
    const axiosSecure = useAxiosSecure();
    const { user} = useAuth();
    const { refetch, data: tasks = [] } = useQuery({
        queryKey: ['tasks', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/tasks?email=${user.email}`);
            console.log(res.data);
            return res.data;
            
        }
    })

    return [tasks, refetch]
};

export default useTask;