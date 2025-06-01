"use client"

import { useState } from "react";

export default function Home() {
  console.log(" == in client == ")

  const [url, setUrl] = useState("");


  console.log(url)

  return (
    <div className="h-screen flex flex-col items-center">
      <h1 className="text-gray-300 font-bold text-3xl mt-5 text-center">Url Shortener Website</h1>
      <form 
        onSubmit={(e)=>{e.preventDefault();console.log("trying to do something here...");}} 
        className="flex justify-center mt-10 gap-4">
        <input 
        type="text" 
        placeholder="Enter your URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)} 
        className="outline-none py-2 px-4 w-[400px] border-none text-lg text-gray-300 rounded-lg bg-purple-700"/>
        <button 
        type="submit"
        className="bg-purple-600 rounded-lg text-gray-300 font-sans font-bold text-lg px-4 py-2">Generate URL</button>
      </form>
    </div>
  )
}