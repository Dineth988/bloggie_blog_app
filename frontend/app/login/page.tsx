
'use client'

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginPage = () => {
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
      const res = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error("Invalid credentials");
      }

      router.push("/admin"); 
    } 
    catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
            
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">

                <h1 className="text-2xl font-semibold mb-6 text-center">Login</h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <label className="block mb-2">Email</label>
                <input name="email" type="email" placeholder="Enter your email" className="w-full border px-3 py-2 rounded mb-4" required />
                     
                <label className="block mb-2">Password</label>
                <input name="password" type="password" placeholder="Enter your password" className="w-full border px-3 py-2 rounded mb-4" required />
                <button type="submit"  disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" > {loading ? "Logging in..." : "Login"} </button>
                <Link href={'/register'}> <button disabled={loading} className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-700" >Register</button></Link>
            </form>
        </div>
  );
};

export default LoginPage;
