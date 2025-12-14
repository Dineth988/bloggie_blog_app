
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return(
        <div className='py-5 px-5 md:px-12 lg:px-28'>
            <div className="flex justify-between items-center">
                <Image src="/bloggie-logo.png" width={200} height={100} alt="" className="w-[130px] sm:w-auto"/>
                <Link href={'/login'}><button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black rounded-lg text-s cursor-pointer">Sign in</button></Link>
            </div>
            <div className="text-center my-8">
                <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
                
            </div>
            <div className="relative max-w-sm">
                <input type="text" placeholder="Search Blogs" className="border border-gray-300 rounded-lg px-4 py-2 pl-10 max-w-sm focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Image src="/icons8-search-50.png" alt="Search" width={20} height={20} className="text-gray-400"/>
                </div>
            </div>  
        </div>
    )
}

export default Header;