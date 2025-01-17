import AddPost from "@/components/middleBar/AddPost";
import LeftMenu from "@/components/leftBar/LeftMenu";
import RightMenu from "@/components/RightBar/RightMenu";
import Stories from "@/components/middleBar/Stories";
import Feed from "@/components/middleBar/Feed";



export default function HomePage() {
  return (
    <div className="text-white flex gap-6 p-6">
        <div className="hidden xl:block w-[20%]"><LeftMenu type="home"/></div>
          
        <div className="w-full lg:w-[70%] xl:w-[50%]">
          <div className="flex flex-col gap-6">
            <Stories/>
            <AddPost/>
            <Feed/>
          </div>
        </div>  
        <div className="hidden lg:block w-[30%]"><RightMenu/></div>
    </div>
  );
} 