'use client'

import { assets } from "@/public/Assets/assets"
import Image from "next/image"
import { title } from "process"
import { FormEvent, useState } from "react"
import { useFormState } from "react-dom"


const page = () => {

    const [message, setMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false)

   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setMessage(null);

    const formData = new FormData(event.currentTarget);
    const data = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        content: formData.get("content") as string,
        category: formData.get("category") as string,
        image: formData.get("image") as string,
        author: "dinethhh", // fixed author
        author_img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        date: new Date().toISOString(),
    }
  
    try{
        const res =await fetch("http://localhost:3001/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!res.ok){
            throw new Error("Failed to create blog");
        }

        window.alert("Blog created successfully")
        event.currentTarget?.reset();

    }
    catch(err) {
        console.error('Error fetching blog:', err);
        setMessage("Failed to create blog")
    }

   }

    return (
        <>
            <form onSubmit={handleSubmit} className="pt-5 px-5 sm:pt-12 sm:pl-16">
                <p className="text-xl">Upload thumbnail</p>
                <input name="image" className="w-full sm:w-[500px] mt-4 px-4 py-3 border" type="text" placeholder="Image link" required/>
                <p className="text-xl mt-4">Blog title</p>
                <input name="title" className="w-full sm:w-[500px] mt-4 px-4 py-3 border" type="text" placeholder="Blog title" required/>
                <p className="text-xl mt-4">Blog Description</p>
                <textarea name="description" className="w-full sm:w-[500px] mt-4 px-4 py-3 border" placeholder="Description" required rows={2}/>
                <p className="text-xl mt-4">Content</p>
                <textarea name="content" className="w-full sm:w-[500px] mt-4 px-4 py-3 border" placeholder="Type here" required rows={6}/>
                <p className="text-xl mt-4">Blog category</p>
                <select name="category" className="mt-4 border w-40 px-4 py-3 text-gray-500">
                    <option value="Startup">Startup</option>
                    <option value="Technology">Technology</option>
                    <option value="Lifestyle">Lifestyle</option>
                </select>
                <br />
                <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">Add</button>
                
            </form>
        </>
    )
}
export default page