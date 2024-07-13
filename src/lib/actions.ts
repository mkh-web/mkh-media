"use server"

import { auth } from "@clerk/nextjs/server"
import prisma from "./client"
import { error } from "console"

export async function SwitchFollow(userId: string) {
    const { userId: currentUserId } = auth()

    if (!currentUserId) throw new Error("user is not auth")

    try {
        const existingFollow = await prisma.follower.findFirst({

            where: {
                followerId: currentUserId,
                followingId: userId
            }
        })

        if (existingFollow) {
            await prisma.follower.delete({
                where: {
                    id: existingFollow.id,
                }
            })
        } else {
            const existingFollowRequset = await prisma.followRequest.findFirst({
                where: {
                    senderId: currentUserId,
                    receiverId: userId,
                }
            })
            if (existingFollowRequset) {
                await prisma.follower.delete({
                    where: {
                        id: existingFollowRequset.id,
                    }
                })
            } else {
                await prisma.followRequest.create({
                    data: {
                        senderId: currentUserId,
                        receiverId: userId,
                    }
                })
            }

        }

    } catch (error) {
        console.log(error)
    }
}
//-----------------
export const switchBlock = async (userId: string) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) {
    throw new Error("User is not Authenticated!!");
  }

  try {
    const existingBlock = await prisma.block.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: userId,
      },
    });

    if (existingBlock) {
      await prisma.block.delete({//عشان ما تسوي مرتين بلوك
        where: {
          id: existingBlock.id,
        },
      });
    } else {
      await prisma.block.create({
        data: {
          blockerId: currentUserId,
          blockedId: userId,
        },
      });
    }
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong!");
  }
};
