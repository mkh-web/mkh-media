import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { FaUsers } from "react-icons/fa";

export default async function ProfileCard() {

    const { userId } = auth()

    if (!userId) return null
    
    const user = await prisma.user.findFirst({
        where: {
            id: userId,
        },
        include: {
            _count: {
                select: {
                    followers: true
                }
            }
        }
    })
    
    return (
        <div className="p-4 bg-[#202020] shadow-md text-sm rounded-lg flex flex-col gap-5">
            <div className="relative h-20">
                <Image src={user?.cover || "noCover.png"} alt="cover" fill className="rounded-md object-cover" />
                <Image src={user?.avatar || "noAvatar.png"} alt="cover" width={48} height={48} className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-white z-10" />
            </div>
            <div className="h-20 flex flex-col gap-2 items-center mt-2">
                <span className="font-bold"> {(user?.name && user.surname) ? user.name + " "+ user.surname : user?.username}</span>
                <div className="flex items-center gap-4">
                    <FaUsers />
                    <span>{user?._count.followers} Followers </span>
                </div>

                <Link href={`/profile/${user?.username}`} className="w-full">
                <button className="bg-orange-400 text-white rounded-md shadow-md w-full h-8 hover:text-orange-400 hover:bg-white transition-all">My profile</button>
                </Link>
            </div>
        </div>

    );
}