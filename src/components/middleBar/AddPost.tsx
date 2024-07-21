"use client"

import Image from "next/image"
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaPhotoVideo, FaVideo, FaPoll } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import prisma from "@/lib/client";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { addPost } from "@/lib/actions";


export default function AddPost() {

    //const {userId} = auth() // عشان تتخزن معلومات التسجيل هنا 
 
    
/*
    async function testAction(formData:FormData) {//كذا تتعامل مع الفورم و بياناتتها
        "use server"

        if(!userId){
            return //هذا احتياط لو كان مافي مستخدم
        }


        const desc = formData.get("desc") as string // كذا تسحب الداتا
            //حطيناها في تراي كاتش عشاان خاطر لو صار ايروور
        try {
                prisma.post.create({//كرييت هو واحد من السيرفر اكشن
                    data:{//داتا هي الداتا الي بتدخلها 
                        userId: userId,
                        desc:desc,
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }
*/
const {user,isLoaded} = useUser()
const [desc,setDesc] = useState("")

if(!isLoaded) return "loading..."

    return (
        <div className="p-4 bg-[#202020] shadow-sm rounded-lg flexBetween  gap-4 text-sm">

            <Image src={user?.imageUrl || "noAvatar.png"} width={48} height={48} alt="avatar" className=" w-12 h-12 object-cover rounded-full" />

            <div className="flex-1">
                <form action={FormData =>addPost(FormData)} className="flex gap-4">
                    <textarea name="desc" id=""
                     placeholder="What happen today"
                     className="flex-1 resize-none bg-[#171717] rounded-md p-4"
                     onChange={(e)=>setDesc(e.target.value)}
                     ></textarea>

                    <button>send</button>
                </form>
                <div className="flex items-center justify-start gap-4 mt-4 text-gray-400 flex-wrap">

                    <div className="flexCenter gap-2 cursor-pointer">
                        <FaPhotoVideo className=" text-xl text-blue-500" />
                        Photo
                    </div>
                    <div className="flexCenter gap-2 cursor-pointer">
                        <FaVideo className=" text-xl text-pink-400" />
                        Video
                    </div>
                    <div className="flexCenter gap-2 cursor-pointer">
                        <MdEventAvailable className=" text-xl text-green-300" />
                        Event
                    </div>
                    <div className="flexCenter gap-2 cursor-pointer">
                        <FaPoll className=" text-xl text-blue-400" />
                        Poll
                    </div>

                </div>
            </div>
        </div>
    );
}