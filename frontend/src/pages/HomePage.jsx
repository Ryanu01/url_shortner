import React from "react";
import UrlForm from "../components/urlForm";

const HomePage = () => {
    return (
            <div className="min-h-screen bg-gray-100 flex flex-col items-center justiyf-centre p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-centre mb-6">URL Shortner</h1>
        <UrlForm/>
      </div>
    </div>
    )
}

export default HomePage;