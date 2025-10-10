import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/api",
    timeout: 5000
})

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if(error.response) {
            const { status, data} = error.response;
            
            switch (status) {
                case 400:
                    console.error("Bad request", data);
                    break;
                case 401: 
                    console.error("Unauthorized:", data)
                    break;
                case 403:
                    console.error("Forbidden:", data);
                    break;
                case 404:
                    console.error("Not found:", data);
                    break;
                case 500:
                    console.error("Server error:", data);
                    break;
                default:
                    console.error("Unknown error:", data);
            } 
        }else if (error.request) {
            console.error("Network Error: No response received", error.request);
        } else {
            console.error("Error", error.message);
        }
        return Promise.reject({
            message: error.response?.data?.message || error.message || "Unknow error occured",
            status: error.response?.status,
            data: error.response?.data
        });
    }
)


export default axiosInstance;