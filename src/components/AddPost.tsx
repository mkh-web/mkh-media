import Image from "next/image"
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaPhotoVideo,FaVideo,FaPoll  } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";


export default function AddPost() {
    return (
        <div className="p-4 bg-[#202020] shadow-sm rounded-lg flexBetween gap-4 text-sm">

            <Image src={"/stories.jpeg"} width={48} height={48} alt="avatar" className=" w-12 h-12 object-cover rounded-full" />

            <div className="flex-1">
                <div className="flex gap-4">
                    <textarea name="" id="" placeholder="What happen today" className="flex-1 resize-none bg-[#171717] rounded-md p-4"></textarea>
                    <MdOutlineEmojiEmotions className=" cursor-pointer self-end text-xl text-orange-400" />

                </div>
                <div className="flex items-center justify-start gap-4 mt-4 text-gray-400 flex-wrap">

                    <div className="flexCenter gap-2 cursor-pointer">
                        <FaPhotoVideo className=" text-xl text-blue-500" />
                        Photo
                    </div>
                    <div className="flexCenter gap-2 cursor-pointer">
                        <FaVideo  className=" text-xl text-pink-400" />
                        Video
                    </div>
                    <div className="flexCenter gap-2 cursor-pointer">
                        <MdEventAvailable className=" text-xl text-green-300" />
                        Event
                    </div>
                    <div className="flexCenter gap-2 cursor-pointer">
                        <FaPoll  className=" text-xl text-blue-400" />
                        Poll
                    </div>

                </div>
            </div>
        </div>
    );
}