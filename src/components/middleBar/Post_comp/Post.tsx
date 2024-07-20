import Image from "next/image";
import { HiDotsHorizontal } from "react-icons/hi";

import Comments from "./Comments";
import { Post as PostType, User } from "@prisma/client";
import FeedInteraction from "./PostInteraction";
import { Suspense } from "react";


type FeedPostType = PostType & { user: User } & {
    likes: [{ userId: string }];
} & {
    _count: { comments: number };
};

export default async function Post({ post }: { post: FeedPostType }) {
    return (
        <div className="flex flex-col gap-4 p-4 bg-[#202020] shadow-sm rounded-lg">

            {/*هنا  معلومات الناشر */}
            <div className="flexBetween">
                <div className="flex items-center gap-4" >
                    <Image src={post.user.avatar || "/noAvatar.png"}
                        width={40} height={40} className="w-10 h-10 rounded-full" alt="gg" />
                    <span className="font-medium">
                        {post.user.name && post.user.surname
                            ? post.user.name + " " + post.user.surname
                            : post.user.username}
                    </span>
                </div>
                <HiDotsHorizontal />
            </div>


            <div className="flex flex-col gap-4">
                {/*هنا محتوى البوست */}
                {post.img && (
                    <div className="w-full min-h-96 relative">

                        <Image src={post.img} alt="post"
                            className=" object-cover rounded-md" fill />
                    </div>
                )}
                <p>{post.desc}</p>
            </div>


            {/*هنا الجزء حق التعليقات و الاعجابات */}
            <FeedInteraction postId={post.id} likes={post.likes.map((like) => like.userId)} commentNumber={post._count.comments}
            />

            <div>
                <Suspense fallback="Loading...">
                    <Comments postId={post.id} />
                </Suspense>
            </div>

        </div>
    );
}