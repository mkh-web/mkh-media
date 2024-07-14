import Link from "next/link";
import Image from "next/image";
import { User } from "@prisma/client";
import prisma from "@/lib/client";
interface props {
    user: User,
}

export default async function UserMediaCard({ user }: props) {

    const postWithMedia = await prisma.post.findMany({
        where: {
            userId: user.id,
            img: {
                not: null
            }
        },
        take: 0,
        orderBy: {
            createdAt: "desc"
        }
    })

    return (
        <div className="p-4 bg-[#202020] shadow-md text-sm rounded-lg flex flex-col gap-4">
            <div className="flexBetween font-medium ">
                <span className=" text-gray-300">User Media</span>
                <Link href={"/"} className=" text-xs ">See all</Link>
            </div>
            <div className="flex gap-4 justify-between flex-wrap">
            {postWithMedia.length ? postWithMedia.map((post) => (
                    <div className="relative w-1/5 h-24  shadow-sm" key={post.id}>
                        <Image alt="album" className="rounded-lg" fill src={post.img!} />
                    </div>
            )) : "No media found"}
            </div>
        </div>
    )
}