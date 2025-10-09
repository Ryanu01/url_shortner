import React, { useState } from "react";
import axios from "axios";
const UrlForm = () => {
    const [url, setUrl] = useState();
    const [shortUrl, setShortUrl] = useState();
    const handleSubmit = async () => {
        const data = await axios.post("http://localhost:3000/api/create", {url}) 
        console.log(data);
    }
    return (
        <div className="space-y-4">
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

            <button 
                onClick={handleSubmit}
                type="submit"
                className="w-full bg-blue-500 text white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focuse:ring-offset-2 disabled:opacity-50"
            >
                Shorten Url
            </button>
            
        </div>
    )
}

export default UrlForm;