"use client"
import { switchBlock, SwitchFollow } from "@/lib/actions";
import { useState } from "react";


export default function UserinfoCardInteraction(
    {
        userId,
        isUserBlocked,
        isFollowing,
        isFollowSent,
    }: {
        userId: string;
        isUserBlocked: boolean;
        isFollowing: boolean;
        isFollowSent: boolean;
    }) {

    const [Userstate, setUSerstate] = useState({
        Following: isFollowing,
        blocked: isUserBlocked,
        FollowRequstSent: isFollowSent
    })


    async function follow() {
        try {
            await SwitchFollow(userId)
            setUSerstate(prev => ({
                ...prev,
                Following: prev.Following && false,
                FollowRequstSent:!prev.Following && !prev.FollowRequstSent ? true : false,
            }))
        } catch (error) {
            console.log(error)
        }
    }

    

    async function block() {
        try {
            await switchBlock(userId)
            setUSerstate(prev => ({
                ...prev,
                blocked: !prev.blocked ,
            }))
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className="flexBetween gap-3">

            <form action={follow} className="w-full">
                <button className="bg-orange-400 text-white rounded-md shadow-md w-full h-8 hover:text-orange-400 hover:bg-white transition-all">
                    {Userstate.Following ? "Follwing" : Userstate.FollowRequstSent ? "Friend Requst Sent" : "Follow"}</button>
            </form>

            <form action={block} className="w-full">
                <button className="bg-red-400 text-white rounded-md shadow-md w-full h-8 hover:text-red-400 hover:bg-white transition-all">
                    {Userstate.blocked ? "unblock " : "Block"}</button>
            </form>

        </div>
    );
}