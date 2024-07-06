import LeftMenu from "@/components/LeftMenu";
import Feed from "@/components/middleBar/Feed";
import RightMenu from "@/components/RightBar/RightMenu";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <div className="text-white flex gap-6 p-6">
                <div className="hidden xl:block w-[20%]"><LeftMenu type="profile"/></div>
                <div className="w-full lg:w-[70%] xl:w-[50%]">
                    <div className="flex flex-col gap-6">
                        <div className="flexCenter flex-col">

                            <div className="w-full h-64 relative">
                                <Image src={"https://images.pexels.com/photos/26754397/pexels-photo-26754397/free-photo-of-sunrise-praia-do-felix.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} 
                               className=" object-cover shadow-lg rounded-lg" alt="img progile" fill/>
                                <Image src={"https://images.pexels.com/photos/17710992/pexels-photo-17710992/free-photo-of-small-child-in-a-bucket-hat-and-dungarees-among-the-strawberry-beds-in-the-greenhouse.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} 
                               className=" w-32 h-32 absolute left-0 right-0 m-auto -bottom-16 ring-black ring-2 rounded-full object-cover" width={120} height={120} alt="img progile" />
                            </div>
                            <h1 className="mt-20 mb-4 text-1xl font-medium">bashar edorwd</h1>
                            <div className="flexCenter gap-12 mb-4">
                                <div className="flex flex-col items-center">
                                    <span className="font-medium">21</span>
                                    <span className="text-sm">Posts</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="font-medium">51k</span>
                                    <span className="text-sm">Followers</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="font-medium">70</span>
                                    <span className="text-sm">Follwowing</span>
                                </div>
                            </div>
                        </div>

                        <Feed />
                    </div>
                </div>
                <div className="hidden lg:block w-[30%]"><RightMenu userID="test"/></div>
            </div>
        </>
    );
}