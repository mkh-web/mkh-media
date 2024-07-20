import Image from "next/image";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
import { BiSolidLike } from "react-icons/bi";
import prisma from "@/lib/client";
import CommentList from "./CommentList";


export default async function Comments({postId}:{postId:number}) {

    const comments = await prisma.comment.findMany({
        where:{
            postId
        },
        include:{
            user:true
        }
    })

    return (
        <div>
         <CommentList comments={comments} postId={postId}/>
        </div>
    );
}