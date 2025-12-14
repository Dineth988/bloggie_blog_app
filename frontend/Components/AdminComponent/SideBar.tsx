import { assets } from "@/public/Assets/assets"
import Image from "next/image"
import Link from "next/link"

const sideBar = () => {
    return (
        <div className="flex flex-col bg-slate-100">
            <div className="px-2 sm:pl-14 py-3 border border-black">
                <Image src="/bloggie-logo.png" alt="" width={39} height={2}/>
            </div> 
            <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-black">
                <Link href='/admin/addBlog' className="flex item-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
                    <Image src={assets.add_icon}  alt="" width={28} height={2} /><p>Add Blogs</p> 
                </Link>
                <Link href='/admin/blogList' className="mt-5 flex item-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
                    <Image src={assets.blog_icon}  alt="" width={28} height={2} /><p>Blog List</p> 
                </Link>
            </div>

        </div>
    )
}
export default sideBar