import axios from "axios";


const axiosInstance = axios.create({
    baseURL: 'https://historical-artifacts-server-virid.vercel.app',
    withCredentials: true
});

const useAxios = () => {
    return axiosInstance;
};

export default useAxios;