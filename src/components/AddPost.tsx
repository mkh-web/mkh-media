import Image from "next/image"


export default function AddPost() {
    return (
        <div className="p-4 bg-[#202020] shadow-sm rounded-lg flexBetween gap-4 text-sm">
            
            <Image src={"/stories.jpeg"} width={48} height={48} alt="avatar" className=" w-12 h-12 object-cover rounded-full" />

            <div className="">
                <div className=""></div>
                <div className=""></div>
            </div>
        </div>
    );
}