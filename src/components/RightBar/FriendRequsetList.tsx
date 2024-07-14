"use client"

import { IoCheckmarkOutline, IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import { FollowRequest, User } from "@prisma/client";
import { useState } from "react";
import { acceptFollowRequest, declineFollowRequest } from "@/lib/actions";

type props = FollowRequest & {
    sender: User

}


export default function FriendRequsetList({ request }: { request: props[] }) {


    const [requestState, setRequestState] = useState(request);

    const accept = async (requestId: number, userId: string) => {
        try {
            await acceptFollowRequest(userId);
            setRequestState((prev) => prev.filter((req) => req.id !== requestId));
        } catch (err) { }
    };
    const decline = async (requestId: number, userId: string) => {
        try {
            await declineFollowRequest(userId);
            setRequestState((prev) => prev.filter((req) => req.id !== requestId));
        } catch (err) { }
    };



    return (
        <>
            {request.map((req) => (

                <div className="flexBetween" key={req.id}>
                    <div className="flex items-center gap-4">
                        <Image src={req.sender.avatar || "/noAvatar.png"}
                            alt="user img" className="w-10 h-10 rounded-full object-cover" width={40} height={40} />
                        <span>
                            {(req.sender.name && req.sender.surname) ? req.sender.name + " " + req.sender.surname : req.sender.username}
                        </span>
                    </div>

                    <div className="flex gap-3 justify-end">
                        <form action={() => accept(req.id, req.sender.id)}>
                            <button>
                            <IoCheckmarkOutline className="cursor-pointer h-7 w-7 p-1 border-2 border-white rounded-full hover:bg-white hover:text-green-900 transition" />
                            </button>
                        </form>
                        <form action={() => decline(req.id, req.sender.id)}>
                            <button>
                                <IoCloseOutline className=" cursor-pointer h-7 w-7 p-1 border-2 border-white rounded-full  hover:bg-white hover:text-red-900 transition" />
                            </button>
                        </form>
                    </div>


                </div>
            ))
            }
        </>
    );
}