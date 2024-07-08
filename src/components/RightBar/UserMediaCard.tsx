import Link from "next/link";
import Image from "next/image";
import { User } from "@prisma/client";
interface props {
    user?: User,
}

export default function UserMediaCard({ user }: props) {
    return (
        <div className="p-4 bg-[#202020] shadow-md text-sm rounded-lg flex flex-col gap-4">
            <div className="flexBetween font-medium ">
                <span className=" text-gray-300">User Media</span>
                <Link href={"/"} className=" text-xs ">See all</Link>
            </div>

            <div className="flex gap-4 justify-between flex-wrap">
                <div className="relative w-1/5 h-24  shadow-sm">
                    <Image alt="album" className="rounded-lg" fill src={"https://images.pexels.com/photos/25975158/pexels-photo-25975158/free-photo-of-portrait-of-a-turtle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}/>
                </div>
            </div>
        </div>
    );
}