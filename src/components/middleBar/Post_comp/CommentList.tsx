"use client"

import { MdOutlineEmojiEmotions } from "react-icons/md";
import Image from "next/image";
import { BiSolidLike } from "react-icons/bi";
import { HiDotsHorizontal } from "react-icons/hi";
import { useUser } from "@clerk/nextjs";
import { Comment, User } from "@prisma/client";
import { useState } from "react";
import { addComment } from "@/lib/actions";

type CommentWithUser = Comment & { user: User };


export default function CommentList({ comments, postId }: { comments: CommentWithUser[], postId: number }) {


    const { user } = useUser();
    const [commentState, setCommentState] = useState(comments);
    const [desc, setDesc] = useState("");

    const add = async () => {
        if (!user || !desc) return;
        try {
            const createdComment = await addComment(postId, desc);
            setCommentState((prev) => [createdComment, ...prev]);
        } catch (err) { }
    };


    return (
        <>
            {user && <div className="flex items-center gap-4">
                <Image src={user.imageUrl || "noAvatar.png"}
                    alt="user" width={32} height={32} className="h-8 w-8 rounded-full" />

                <div className="flexBetween flex-1 gap-2 w-full border-2 p-2  rounded-md shadow-md border-gray-500 ">
                    <form action={add}>
                        <input type="text" placeholder="write a comment" name="" id=""
                            onChange={e => setDesc(e.target.value)} className="bg-transparent flex-1" />
                        <MdOutlineEmojiEmotions className=" cursor-pointer  text-xl text-orange-400" />
                    </form>
                </div>

            </div>}

            { /*comments */}
            <div className="">
                {commentState.map(comment => (

                    <div className="flex justify-between gap-4 mt-4" key={comment.id}>

                        <Image src={comment.user.avatar || "noAvatar.png"}
                            alt="user" width={40} height={40} className="h-10 w-10 rounded-full" />

                        <div className="flex flex-col gap-2 flex-1">
                            <span>
                                {comment.user.name && comment.user.surname
                                    ? comment.user.name + " " + comment.user.surname
                                    : comment.user.username}
                            </span>
                            <p>{comment.desc}</p>
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
                ))}
            </div>
        </>
    );
}