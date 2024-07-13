import { User } from "@prisma/client";
import Ad from "../Ad";
import BirthDay from "./BirthDay";
import FriendRequest from "./FriendRequest";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";
import { Suspense } from "react";

interface props {
    user?: User,
}

export default function RightMenu({ user }: props) {
    return (
        <div className="flex flex-col gap-4">
            {user ? (
                <>
                    <Suspense fallback="loading..">
                        <UserInfoCard user={user} />
                    </Suspense>
                    <Suspense fallback="loading..">
                        <UserMediaCard user={user} />
                    </Suspense>
                </>
            ) : null}

            <FriendRequest />
            <BirthDay />
            <Ad size="md" />
        </div>
    );
}