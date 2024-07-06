import Image from "next/image";
import Link from "next/link";

import { IoCloseOutline,IoCheckmarkOutline  } from "react-icons/io5";

export default function FriendRequest() {
    return (
        <div className="p-4 bg-[#202020] shadow-md text-sm rounded-lg flex flex-col gap-4">

            <div className="flexBetween font-medium ">
                <span className=" text-gray-300">Friend Request</span>
                <Link href={""} className=" text-xs ">See all</Link>
            </div>

            <div className="flexBetween">
                <div className="flex items-center gap-4">
                    <Image src={"https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600"} 
                    alt="user img" className="w-10 h-10 rounded-full object-cover" width={40} height={40} />
                    <span>mohmd</span>
                </div>

                <div className="flex gap-3 justify-end">
                    <IoCheckmarkOutline className="cursor-pointer h-7 w-7 p-1 border-2 border-white rounded-full hover:bg-white hover:text-green-900 transition"/>
                    <IoCloseOutline className=" cursor-pointer h-7 w-7 p-1 border-2 border-white rounded-full  hover:bg-white hover:text-red-900 transition"/>
                </div>
                
            </div>
        </div>
    );
}