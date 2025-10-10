import axios from "axios"
import axiosInstance from "../utils/axiosInstance";
export const createShortUrl = async (url) => {
    const {data} = await axios.post(`${axiosInstance.defaults.baseURL}/create`, {url});
    return data.shortUrl;
}