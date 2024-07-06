import Image from "next/image";
import { HiDotsHorizontal } from "react-icons/hi";
import { BiSolidLike } from "react-icons/bi";
import { FaCommentDots,FaShare  } from "react-icons/fa";
import Comments from "./Comments";

export default function Post() {
    return (
        <div className="flex flex-col gap-4 p-4 bg-[#202020] shadow-sm rounded-lg">

            {/*هنا  معلومات الناشر */}
            <div className="flexBetween">
                <div className="flex items-center gap-4" >
                    <Image src={"https://images.pexels.com/photos/7615526/pexels-photo-7615526.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} width={40} height={40} className="w-10 h-10 rounded-full" alt="gg" />
                    <span className="font-medium">Khalid</span>
                </div>
                <HiDotsHorizontal />
            </div>


            <div className="flex flex-col gap-4">
            {/*هنا محتوى البوست */}
                <div className="w-full min-h-96 relative">
                    <Image src="https://images.pexels.com/photos/19082533/pexels-photo-19082533/free-photo-of-view-of-a-sunrise-from-a-flying-airplane.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="post"
                     className=" object-cover rounded-md" fill />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, molestiae culpa? Et, quis assumenda illo natus sunt, modi optio asperiores, libero atque repudiandae sequi velit suscipit. Eaque temporibus nisi similique!</p>
            </div>


            {/*هنا الجزء حق التعليقات و الاعجابات */}
            <div className="flexBetween my-4">
                <div className="flex gap-8">
                    <div className="flex items-center gap-2 bg-[#171717] p-2 rounded-xl">
                        <BiSolidLike className=" cursor-pointer"/>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-300">123 <span className="hidden md:inline">Likes</span></span>
                    </div>
                    <div className="flex items-center gap-2 bg-[#171717] p-2 rounded-xl">
                        <FaCommentDots className=" cursor-pointer"/>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-300">123 <span className="hidden md:inline">Comments</span></span>
                    </div>
                </div>

                <div className="">
                <div className="flex items-center gap-2 bg-[#171717] p-2 rounded-xl">
                        <FaShare  className=" cursor-pointer"/>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-300">123 <span className="hidden md:inline">Share</span></span>
                    </div>
                </div>
            </div>

            <div>
                <Comments />
            </div>
            
        </div>
    );
}