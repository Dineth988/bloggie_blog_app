'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormEvent } from "react";


const page = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
    
        const formData = new FormData(event.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
    
        try {
            const res = await fetch("http://localhost:3001/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!res.ok) {
                throw new Error('');
            }
            
            window.alert("User registered");
            const data = await res.json();
    
            router.push("/login"); 
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
      };



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">

                <h1 className="text-2xl font-semibold mb-6 text-center">Register Form</h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <label className="block mb-2">Email</label>
                <input name="email" type="email" placeholder="Enter your email" className="w-full border px-3 py-2 rounded mb-4" required />
                <label className="block mb-2">Username</label>
                <input name="userName" type="text" placeholder="Enter your User Name" className="w-full border px-3 py-2 rounded mb-4" required />
                <label className="block mb-2">Password</label>
                <input name="password" type="password" placeholder="Enter your password" className="w-full border px-3 py-2 rounded mb-4" required />
                <button type="submit"  disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" > {loading ? "Registering..." : "Register"} </button>
            </form>
        </div>
    )
}

export default page



