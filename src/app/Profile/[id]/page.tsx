import LeftMenu from "@/components/LeftMenu";
import Feed from "@/components/middleBar/Feed";
import RightMenu from "@/components/RightBar/RightMenu";


export default function Page() {
    return (
        <>
            <div className="text-white flex gap-6 p-6">
                <div className="hidden xl:block w-[20%]"><LeftMenu /></div>
                <div className="w-full lg:w-[70%] xl:w-[50%]">
                    <div className="flex flex-col gap-6">
                        <Feed />
                    </div>
                </div>
                <div className="hidden lg:block w-[30%]"><RightMenu userID="test"/></div>
            </div>
        </>
    );
}