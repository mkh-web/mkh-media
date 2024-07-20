"use client"

import { switchLike } from "@/lib/actions";
import { useAuth } from "@clerk/nextjs";
import { useState } from "react";
import { BiSolidLike } from "react-icons/bi";
import { FaCommentDots, FaShare } from "react-icons/fa";



export default function FeedInteraction({
    postId,
    likes,
    commentNumber,
}: {
    postId: number;
    likes: string[];
    commentNumber: number;
}) {
    const { isLoaded, userId } = useAuth();
    const [likeState, setLikeState] = useState({
        likeCount: likes.length,
        isLiked: userId ? likes.includes(userId) : false,
    })


    const likeAction = async () => {

        try {
            switchLike(postId)
            setLikeState(state => ({
                likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
                isLiked: !state.isLiked,
            }))
        } catch (error) {
            throw new Error
        }
    }

    return (
        <>
            <div className="flexBetween my-4">
                <div className="flex gap-8">
                    <div className=" bg-[#171717] p-2 rounded-xl">
                        <form action={likeAction}>
                            <button className=" gap-2 flex items-center">

                                <BiSolidLike className={`cursor-pointer ${likeState.isLiked && "text-green-600"}`} />
                                <span className="text-gray-300">|</span>
                                <span className="text-gray-300">{likeState.likeCount} <span className="hidden md:inline">Likes</span></span>
                            </button>
                        </form>
                    </div>
                    <div className="flex items-center gap-2 bg-[#171717] p-2 rounded-xl">
                        <FaCommentDots className=" cursor-pointer text-orange-400" />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-300">{commentNumber} <span className="hidden md:inline">Comments</span></span>
                    </div>
                </div>

                <div className="">
                    <div className="flex items-center gap-2 bg-[#171717] p-2 rounded-xl">
                        <FaShare className=" cursor-pointer" />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-300"> <span className="hidden md:inline">Share</span></span>
                    </div>
                </div>
            </div>
        </>
    );
}