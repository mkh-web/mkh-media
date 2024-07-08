import Link from "next/link";
import Image from "next/image";

import { IoLocation, IoSchoolSharp } from "react-icons/io5";
import { MdOutlineWork, MdDateRange } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { User } from "@prisma/client";


interface props {
    user: User,
}


export default async function UserInfoCard({ user }: props) {

    const createAtDate = new Date(user.createdAt)

    const formattedDate = createAtDate.toLocaleString("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
    })

    //checking the block section
    return (
        <div className="p-4 bg-[#202020] shadow-md text-sm rounded-lg flex flex-col gap-4">
            <div className="flexBetween font-medium ">
                <span className=" text-gray-300">User Information</span>
                <Link href={"/"} className=" text-xs ">See all</Link>
            </div>

            <div className="flex flex-col gap-4 text-gray-500">

                <div className="flex items-center gap-2">
                    <span className="text-xl text-white">{(user.name && user.surname) ? user.name + " " + user.surname : user?.username}</span>
                    <span className="text-sm">@{user.username}</span>
                </div>
                <p>{user?.description}</p>
                {user.city &&
                    <div className=" flex flex-row items-center gap-1">
                        <IoLocation className="w-5 h-5" />
                        <span>living in <b>{user.city}</b></span>
                    </div>
                }
                {user.school &&
                    <div className=" flex flex-row items-center gap-1">
                        <IoSchoolSharp className="w-5 h-5" />
                        <span>went to <b>{user.school}</b></span>
                    </div>
                }
                {user.work &&
                    <div className=" flex flex-row items-center gap-1">
                        <MdOutlineWork className="w-5 h-5" />
                        <span>work at <b>{user.work}</b></span>
                    </div>
                }
                <div className=" flexBetween flex-row  gap-1">
                    {user.website &&
                        <div className="flex flex-row gap-1">
                            <FaLink className="w-5 h-5" />
                            <Link href={user.website} className="text-orange-400">Website</Link>
                        </div>
                    }

                    <div className="flex flex-row gap-1">
                        <MdDateRange className="w-5 h-5" />
                        <p>Joined at {formattedDate}</p>
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