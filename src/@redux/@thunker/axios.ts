import axios from 'axios';

// const getCookie = (name:string)=>{
//     const value = `; ${document.cookie}`;
//     const parts = value.split(`; ${name}=`);
//     if (parts.length && parts.length === 2) return parts.pop().split(';').shift();
// }

/* eslint-disable */
const axiosClient = (_props: any) => {
    /**
     * Create Axios Instance
     */
    const axiosInstance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_BASE ?? `/api`,
        withCredentials: true,
        headers: {
            tzoffset: `${new Date().getTimezoneOffset()}`,
        },
    });

    axiosInstance.interceptors.request.use((config) => {
        /* ----------------------------- API Call Start ----------------------------- */
        // console.log('[===== Started API Call =====]');
        config.withCredentials = true;
        return config;
    });

    axiosInstance.interceptors.response.use(
        (response) => {
            /* ------------------------------ API Call End ------------------------------ */
            // console.log('[===== Ended API Call =====]');
            return response;
        },
        (error) => {
            if (error?.response?.status >= 400) {
                if (error?.response?.status === 401) {
                    localStorage.clear();
                    indexedDB.deleteDatabase('persist:root');
                    window.location.replace('/login');
                }
            }
            throw error;
        }
    );

    return axiosInstance;
};

export default axiosClient;
