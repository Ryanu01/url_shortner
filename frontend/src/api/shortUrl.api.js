import axios from "axios"
import axiosInstance from "../utils/axiosInstance";
export const createShortUrl = async (url) => {
    try {
        const { data } = await axiosInstance.post('/create', { url });
        return data.shortUrl;
    } catch (error) {
        console.error('Error creating short URL:', error);
        throw error;
    }
}