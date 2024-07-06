import Ad from "../Ad";
import BirthDay from "./BirthDay";
import FriendRequest from "./FriendRequest";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";

interface props {
    userID?: string,
}

export default function RightMenu({ userID }: props) {
    return (
        <div className="flex flex-col gap-4">
            {userID ? (
                <>
                <UserInfoCard userID={userID}/>
                <UserMediaCard userID={userID}/>

                </>
            ) : null}
            <FriendRequest />
            <BirthDay />
            <Ad size="md" />
        </div>
    );
}