"use client"

import { Copy } from 'lucide-react'
import { useEffect, useState } from "react";


export default function Home() {
  
  console.log(" == in client == ");

  const [url, setUrl] = useState("");
  const [code, setCode] = useState("");
  const [urlShown, setUrlShown] = useState(false);
  const [shown, setShown] = useState(false);
  


  async function handleSubmit(e: React.FormEvent) {

    e.preventDefault();

    const response = await fetch(
      "/api/register-url",
      { method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      }
    )
    
    const { code } = await response.json();
    setCode(code);

    setUrlShown(true);


  }



  function handleCopy() {
    navigator.clipboard.writeText(`localhost:3000/${code}`);
    setShown(true);
    setTimeout(() => {
      setShown(false);
    }, 500);
  }

  return (
    <div className="h-screen flex flex-col items-center">
      <h1 className="text-gray-200 font-bold text-3xl mt-5 text-center">Url Shortener Website</h1>
      <form 
        onSubmit={handleSubmit} 
        className="flex justify-center mt-10 gap-4">
        <input 
        type="text" 
        placeholder="Enter your URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)} 
        className="outline-none py-2 px-4 w-[400px] border-none text-lg text-gray-300 rounded-lg bg-purple-700"/>
        <button 
        type="submit"
        className="bg-purple-700 rounded-lg text-gray-300 font-sans font-bold text-lg px-4 py-2">Generate URL</button>
      </form>
      {urlShown &&
        <div className="relative px-10 py-8 mt-5 rounded-lg flex justify-center items-center bg-purple-700">
          <h2 className="text-white font-bold text-3xl font-sans">{`localhost:3000/${code}`}</h2>
          <button
            onClick={handleCopy}
            className="absolute bottom-0 right-0 p-2 transperant"
            >
            <Copy size={15} className="text-white"/>
            {shown && 
              <p className="font-bold font-sans absolute text-white text-sm bottom-5 right-0 ">Copied!</p>
            }
          </button>
        </div>
      }
    </div>
  )
}