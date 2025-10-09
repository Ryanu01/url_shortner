import React, { useState } from "react";
import axios from "axios";
const UrlForm = () => {
    const [url, setUrl] = useState();
    const [shortUrl, setShortUrl] = useState();
    const handleSubmit = async () => {
        const data = await axios.post("/api/create", {url}) 
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700">
                Enter your URL
            </label>
            <input 
            type="url"
            id="url"
            value={url}
            onInput={(e) => setUrl(e.target.value)}
            placeholder="https://www.example.com"
            required
            className="w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
        </form>
    )
}