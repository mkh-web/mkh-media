import Image from "next/image";
import { FaUsers } from "react-icons/fa";

export default function ProfileCard() {
    return (
        <div className="p-4 bg-[#202020] shadow-md text-sm rounded-lg flex flex-col gap-5">
            <div className="relative h-20">
                <Image src={"https://images.pexels.com/photos/26754397/pexels-photo-26754397/free-photo-of-sunrise-praia-do-felix.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} alt="cover" fill className="rounded-md object-cover"/>
                <Image src={"https://images.pexels.com/photos/17710992/pexels-photo-17710992/free-photo-of-small-child-in-a-bucket-hat-and-dungarees-among-the-strawberry-beds-in-the-greenhouse.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} alt="cover" width={48} height={48} className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-white z-10"/>
            </div>
            <div className="h-20 flex flex-col gap-2 items-center mt-2">
                <span className="font-bold">Bashar edoward</span>
                <div className="flex items-center gap-4">
                    <FaUsers />
                    <span>Followers 506</span>
                </div>

                <button className="bg-orange-400 text-white rounded-md shadow-md w-full h-8 hover:text-orange-400 hover:bg-white transition-all">My profile</button>
            </div>
        </div>

    );
}