import axios from "axios"
import axiosInstance from "../utils/axiosInstance";
export const createShortUrl = async (url, slug) => {
    try {
        const { data } = await axiosInstance.post('/create', { url, slug });
        return data.shortUrl;
    } catch (error) {
        console.error('Error creating short URL:', error);
        throw error;
    }
}