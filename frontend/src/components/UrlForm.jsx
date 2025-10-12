import React, { useState } from "react";
import axios from "axios";
import { createShortUrl } from "../api/shortUrl.api";
import { useSelector } from "react-redux";
const UrlForm = () => {
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState();
    const [copied, setCopied] = useState(false);
    const [customSlug, setCustomSlug] = useState("");
    const {isAuthenticated} = useSelector((state) => state.auth);
    const handleSubmit = async () => {
        const shortUrl = await createShortUrl(url);
        setShortUrl(shortUrl);
    }

    const handleCopy = () =>{
        navigator.clipboard.writeText(shortUrl);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    const handleKeydown = (e) => {
        if(e.key === 'Enter') {
            handleSubmit();
        }
    };
    
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
            onKeyDown={handleKeydown}
            placeholder="https://example.com"
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
            {isAuthenticated && (
                <div className="mt-4">
                    <label htmlFor="customSlug" className="block text-sm font-medium text-gray-700 mb-1">
                    Custom URL (optional)
                    </label>
                    <input 
                        type="text"
                        id="customSlug"
                        value={customSlug}
                        onChange={(e) => setCustomSlug(e.target.value)}
                        placeholder="Enter custom slug"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            )}
            {shortUrl && (
                <div className="mt-6">
                    <h2 className="text-lg font-semibold mb-2">
                        Your shortened URL
                    </h2>
                    <div className="flex items-center">
                        <input 
                        type="text"
                        readOnly
                        value={shortUrl}
                        className="flex-1 p-2 border border-gray-300 rounded-l-md bg-gray-50"
                        />
                        <button
                            onClick={handleCopy}
                            className={`px-4 py-2 rounded-r-md transition-colors duration-200 ${
                                copied ? "bg-green-500 text-white hover:bg-green-600"
                                        : "bg-gray-200 hover:bg-gray-300"
                            }`}
                        >
                            {copied ? 'Copied!': 'Copy'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UrlForm;