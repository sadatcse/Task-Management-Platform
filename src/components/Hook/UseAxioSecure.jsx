import axios from 'axios';
export const axiosSecure = axios.create({
    baseURL: 'https://task-management-platform-server-zeta.vercel.app'
})
const UseAxioSecure = () => {
    return axiosSecure;

};

export default UseAxioSecure;