import Link from "next/link";
import ProfileCard from "./ProfileCard";

import { FaImage, FaRegNewspaper } from "react-icons/fa";
import { MdLocalActivity, MdEvent, MdOutlinePhotoAlbum, MdOutlineVideoSettings } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { TbFileCertificate } from "react-icons/tb";
import { IoListSharp } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import Ad from "../Ad";

interface props {
    type: "home" | "profile"
}

export default function LeftMenu({ type }: props) {
    return (
        <div className="flex flex-col gap-6">
            {type === "home" && <ProfileCard />}
            <div className="p-4 bg-[#202020] shadow-md text-sm rounded-lg flex flex-col gap-2">

                <Link href={""} className="flex gap-2 items-center hover:bg-[#171717] rounded-lg pl-2 py-2">
                    <FaImage className="text-orange-300 w-5 h-5" />
                    My post
                </Link>

                <hr className=" border-t-2 border-black opacity-20 w-36 self-center" />

                <Link href={""} className="flex gap-2 items-center hover:bg-[#171717] rounded-lg pl-2 py-2">
                    <MdLocalActivity className="text-blue-300 w-5 h-5" />
                    Activity
                </Link>
                <hr className=" border-t-2 border-black opacity-20 w-36 self-center" />

                <Link href={""} className="flex gap-2 items-center hover:bg-[#171717] rounded-lg pl-2 py-2">
                    <FaCartShopping className="text-green-300 w-5 h-5" />
                    Martket place
                </Link>
                <hr className=" border-t-2 border-black opacity-20 w-36 self-center" />

                <Link href={""} className="flex gap-2 items-center hover:bg-[#171717] rounded-lg pl-2 py-2">
                    <MdEvent className="text-yellow-300 w-5 h-5" />
                    Event
                </Link>
                <hr className=" border-t-2 border-black opacity-20 w-36 self-center" />

                <Link href={""} className="flex gap-2 items-center hover:bg-[#171717] rounded-lg pl-2 py-2">
                    <MdOutlinePhotoAlbum className="text-red-300 w-5 h-5" />
                    Album
                </Link>
                <hr className=" border-t-2 border-black opacity-20 w-36 self-center" />

                <Link href={""} className="flex gap-2 items-center hover:bg-[#171717] rounded-lg pl-2 py-2">
                    <MdOutlineVideoSettings className="text-blue-300 w-5 h-5" />
                    Videos
                </Link>
                <hr className=" border-t-2 border-black opacity-20 w-36 self-center" />

                <Link href={""} className="flex gap-2 items-center hover:bg-[#171717] rounded-lg pl-2 py-2">
                    <FaRegNewspaper className="text-white w-5 h-5" />
                    News
                </Link>
                <hr className=" border-t-2 border-black opacity-20 w-36 self-center" />

                <Link href={""} className="flex gap-2 items-center hover:bg-[#171717] rounded-lg pl-2 py-2">
                    <TbFileCertificate className="text-red-300 w-5 h-5" />
                    Courses
                </Link>
                <hr className=" border-t-2 border-black opacity-20 w-36 self-center" />

                <Link href={""} className="flex gap-2 items-center hover:bg-[#171717] rounded-lg pl-2 py-2">
                    <IoListSharp className="text-pink-300 w-5 h-5" />
                    Lists
                </Link>
                <hr className=" border-t-2 border-black opacity-20 w-36 self-center" />

                <Link href={""} className="flex gap-2 items-center hover:bg-[#171717] rounded-lg pl-2 py-2">
                    <IoIosSettings className="text-blue-200 w-5 h-5" />
                    Settings
                </Link>
            </div>

            <Ad size="sm"/>
        </div>
    );
}