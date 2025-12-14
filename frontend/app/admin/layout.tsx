import { ReactNode } from "react";
import SideBar from "@/Components/AdminComponent/SideBar";
import Image from "next/image";
import { assets } from "@/public/Assets/assets";


export default function Layout({children}: {children:ReactNode}){
    return (
        <>
            <div className="flex"> 
                <SideBar/>
                <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full py-3 max-height-[60px] px-12 border-b border-black">
                        <h3 className="font-medium">Admin Panel</h3>
                        <Image src={assets.profile_icon} alt="" width={40} />
                    </div>
                    {children}
                </div>
            </div>
            
        </>
    )
}