import Link from "next/link";
import Image from "next/image";

import { IoLocation,IoSchoolSharp  } from "react-icons/io5";
import { MdOutlineWork,MdDateRange  } from "react-icons/md";
import { FaLink } from "react-icons/fa6";


interface props {
    userID?: string,
}


export default function UserInfoCard({ userID }: props) {
    return (
        <div className="p-4 bg-[#202020] shadow-md text-sm rounded-lg flex flex-col gap-4">
            <div className="flexBetween font-medium ">
                <span className=" text-gray-300">User Information</span>
                <Link href={"/"} className=" text-xs ">See all</Link>
            </div>

            <div className="flex flex-col gap-4 text-gray-500">

                <div className="flex items-center gap-2">
                    <span className="text-xl text-white">Liyd flam</span>
                    <span className="text-sm">Liyd flam</span>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime tempore culpa magni rem dicta consequuntur sit sapiente commodi ab quasi</p>
                <div className=" flex flex-row items-center gap-1">
                    <IoLocation className="w-5 h-5"/>
                    <span>living in <b>Aden</b></span>
                </div>
                <div className=" flex flex-row items-center gap-1">
                    <IoSchoolSharp  className="w-5 h-5"/>
                    <span>went to <b>UST</b></span>
                </div>
                <div className=" flex flex-row items-center gap-1">
                    <MdOutlineWork className="w-5 h-5"/>
                    <span>work at <b>info soft</b></span>
                </div>
                <div className=" flexBetween flex-row  gap-1">
                    <div className="flex flex-row gap-1">
                    <FaLink className="w-5 h-5"/>
                    <Link href={"/"} className="text-orange-400">Website</Link>
                    </div>
                    <div className="flex flex-row gap-1">
                    <MdDateRange  className="w-5 h-5"/>
                    <p>Joined at 24/7/2020</p>
                    </div>
                </div>

                <div className="flexBetween gap-3">
                <button className="bg-orange-400 text-white rounded-md shadow-md w-full h-8 hover:text-orange-400 hover:bg-white transition-all">Following</button>
                <button className="bg-red-400 text-white rounded-md shadow-md w-full h-8 hover:text-red-400 hover:bg-white transition-all">block</button>
                </div>
                
            </div>
        </div>
    );
}