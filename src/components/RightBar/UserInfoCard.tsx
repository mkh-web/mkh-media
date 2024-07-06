import Link from "next/link";

interface props {
    userID?: string,
}


export default function UserInfoCard({ userID }: props) {
    return (
        <div className="p-4 bg-[#202020] shadow-md text-sm rounded-lg flex flex-col gap-4">
                <div className="flexBetween font-medium ">
                <span className=" text-gray-300">user information</span>
                <Link href={""} className=" text-xs ">See all</Link>
            </div>
        </div>
    );
}