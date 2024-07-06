import Image from "next/image";
import Link from "next/link";

import { FaGifts } from "react-icons/fa";


export default function BirthDay() {
    return (
        <div className="p-4 bg-[#202020] shadow-md text-sm rounded-lg flex flex-col gap-4">

        <div className="flexBetween font-medium ">
            <span className=" text-gray-300">BirthDays</span>
        </div>

        <div className="flexBetween">
            <div className="flex items-center gap-4">
                <Image src={"https://images.pexels.com/photos/26572408/pexels-photo-26572408/free-photo-of-silhouette-of-man-by-the-sea-during-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} 
                alt="user img" className="w-10 h-10 rounded-full object-cover" width={40} height={40} />
                <span>yasser</span>
            </div>

            <div className="flex gap-3 justify-end">
                <button className=" bg-orange-400 text-xs p-2 rounded-md">Celebrate</button>

            </div>
            
        </div>

        <div className="p-4 bg-[#e2830636] rounded-lg ">
            <div className=" flex items-center gap-4    ">

            <FaGifts className="w-8 h-8"/>
            <Link href={""} className="flex flex-col gap-1 text-xs">
            <span className="text-orange-500">Upcoming BirthDays</span>
            </Link>
            </div>

            <div className="pt-1 flexBetween ">
                <div className="flex items-center gap-2">

            <Image src={"https://images.pexels.com/photos/2449600/pexels-photo-2449600.png?auto=compress&cs=tinysrgb&w=600"} 
                alt="user img" className="w-8 h-8 rounded-full object-cover" width={40} height={40} />
                <span>Ali</span>
                </div>
                <span>24/7</span>
            </div>
        </div>
    </div>
    );
}