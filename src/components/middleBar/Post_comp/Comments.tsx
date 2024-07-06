import Image from "next/image";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
import { BiSolidLike } from "react-icons/bi";


export default function Comments() {
    return (
        <div>
            <div className="flex items-center gap-4">
                <Image src={"https://images.pexels.com/photos/7615526/pexels-photo-7615526.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
                    alt="user" width={32} height={32} className="h-8 w-8 rounded-full" />

                <div className="flexBetween flex-1 gap-2 w-full border-2 p-2  rounded-md shadow-md border-gray-500 ">
                    <input type="text" placeholder="write a comment" name="" id="" className="bg-transparent flex-1" />
                    <MdOutlineEmojiEmotions className=" cursor-pointer  text-xl text-orange-400" />
                </div>

            </div>

            { /*comments */}
            <div className="">
                <div className="flex justify-between gap-4 mt-4">

                    <Image src={"https://images.pexels.com/photos/13464716/pexels-photo-13464716.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
                        alt="user" width={40} height={40} className="h-10 w-10 rounded-full" />

                    <div className="flex flex-col gap-2 flex-1">
                        <span>abd al aizi</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aut repudiandae minima delectus pariatur perspiciatis voluptatem libero quo natus ipsa, atque provident ut maxime veniam odio hic at est eligendi!</p>
                        <div className="flex items-center gap-8 text-xs">
                                <div className="flex items-center gap-2 bg-[#171717] p-2 rounded-xl">
                                    <BiSolidLike className=" cursor-pointer" />
                                    <span className="text-gray-300">|</span>
                                    <span className="text-gray-300">123 <span className="hidden md:inline">Likes</span></span>
                                </div>
                                <div className="text-gray-300">
                                    Reply
                                </div>
                        </div>

                    </div>

                    <HiDotsHorizontal />

                </div>
            </div>
        </div>
    );
}