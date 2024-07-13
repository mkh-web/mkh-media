import LeftMenu from "@/components/leftBar/LeftMenu";
import Feed from "@/components/middleBar/Feed";
import RightMenu from "@/components/RightBar/RightMenu";
import prisma from "@/lib/client";
import { auth, currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function Page({ params }: { params: { username: string } }) {

    const username = params.username
    const { userId } = auth()

    if (!userId) return null
    
    const user = await prisma.user.findFirst({
        where: {
            username: username,
            id: userId,

        },
        include: {
            _count: {
                select: {
                    followers: true,
                    followings: true,
                    posts: true,
                }
            }
        }
    }
    )


    const { userId: currentUserID } = auth()

    let isBlocked

    if (currentUserID) {
        const res = await prisma.block.findFirst({
            where: {
                blockerId: user?.id,
                blockedId: currentUserID,
            }
        })

        if (res) isBlocked = true
        else isBlocked = false
    }

    if (!user) 
        return null

    return (
        <>
            <div className="text-white flex gap-6 p-6">
                <div className="hidden xl:block w-[20%]"><LeftMenu type="profile" /></div>
                <div className="w-full lg:w-[70%] xl:w-[50%]">
                    <div className="flex flex-col gap-6">
                        <div className="flexCenter flex-col">

                            <div className="w-full h-64 relative">
                                <Image src={user.cover || "/noCover.png"}
                                    className=" object-cover shadow-lg rounded-lg" alt="img progile" fill />
                                <Image src={user.avatar || "/noAvatar.png"} alt="test"
                                    className=" w-32 h-32 absolute left-0 right-0 m-auto -bottom-16 ring-black ring-2 rounded-full object-cover" width={120} height={120} />
                            </div>
                            <h1 className="mt-20 mb-4 text-1xl font-medium"> {(user?.name && user.surname) ? user.name + " " + user.surname : user?.username}</h1>
                            <div className="flexCenter gap-12 mb-4">
                                <div className="flex flex-col items-center">
                                    <span className="font-medium">{user._count.posts}</span>
                                    <span className="text-sm">Posts</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="font-medium">{user._count.followers}</span>
                                    <span className="text-sm">Followers</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="font-medium">{user._count.followings}</span>
                                    <span className="text-sm">Follwowing</span>
                                </div>
                            </div>
                        </div>

                        <Feed />
                    </div>
                </div>
                <div className="hidden lg:block w-[30%]"><RightMenu user={user} /></div>
            </div>
        </>
    );
}