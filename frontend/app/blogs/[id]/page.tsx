

import { assets, blog_data } from "@/public/Assets/assets";
import Image from "next/image";
import Footer from "@/Components/Footer";


interface BlogPost {
  _id: string;
  title: string;
  description: string;
  image: string;       
  date: string;
  category: string;
  author: string;
  author_img: string;
  content: string;   
}


const Page = async ({params: paramsPromise}: {params:Promise<{id:string}>}) => {
    const params = await paramsPromise;
    let blogPost: BlogPost;

    try{
        const res = await fetch(`http://localhost:3001/posts/${params.id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error('Blog not found')
        }

        blogPost = await res.json();
    }
    catch (err){
        console.error('Error fetching blog:', err);
        return <p>Blog not found or backend error</p>;
    }


    return (
        <>
        <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
            <div className="flex justify-between items-center">
                <Image src="/bloggie-logo.png" width={180} height={180} alt="" className="w-[130px] sm:w-auto"/>
            </div>
            <div className="text-center my-24">
                <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">{blogPost.title}</h1>
                <Image src={blogPost.author_img} alt="" width={60} height={60} className="mx-auto mt-6 border border-color-white rounded-full"/>
                <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">{blogPost.author}</p>
            </div>
        </div>
        <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
            <Image src={blogPost.image} width={1280} height={720} alt="" className="border-6 border-white"/>
            <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
            <p>{blogPost.description}</p>
            <h3 className="my-5 text-[18px] font-semibold">Step 1: Self-Reflection and Goal Setting</h3>
            <div className="prose max-w-full">
                <div dangerouslySetInnerHTML={{__html: blogPost.content}}/>
            </div>
            <div className="my-24">
                <p className="text-black font font-semibold my-4">Share this article on social media</p>
                <div className="flex">
                    <Image src={assets.facebook_icon} width={50} alt="" />
                    <Image src={assets.twitter_icon} width={50} alt="" />
                    <Image src={assets.googleplus_icon} width={50} alt="" />
                </div>
            </div>
        </div>
        <div>
            <Footer/>c
        </div>
        </>
    )
}
export default Page;
