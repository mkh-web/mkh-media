import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import { request } from "https";
import Link from "next/link";

import { IoCloseOutline,IoCheckmarkOutline  } from "react-icons/io5";
import FriendRequsetList from "./FriendRequsetList";

export default async function FriendRequest() {
        const {userId} = auth()
        if(!userId) return null

        const Request = await prisma.followRequest.findMany({
            where:{
                receiverId:userId,
            },
            include:{
                sender:true
            }
        })


        if(Request.length === 0) return null


    return (
        <div className="p-4 bg-[#202020] shadow-md text-sm rounded-lg flex flex-col gap-4">

            <div className="flexBetween font-medium ">
                <span className=" text-gray-300">Friend Request</span>
                <Link href={""} className=" text-xs ">See all</Link>
            </div>

           <FriendRequsetList request={Request}/>
        </div>
    );
}