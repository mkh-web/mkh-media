import Image from "next/image";


export default function Stories() {
    return (
        <div className="p-4 bg-[#202020] shadow-sm rounded-lg overflow-scroll text-xs scrollbar-hide">
            <div className="flex gap-8 w-max">

            <div className="flex flex-col items-center gap-2 cursor-pointer">
        <Image src="/stories.jpeg" alt="stories" width={60} height={60} className="rounded-full ring-2" />
        <span className="font-medium">mohnd</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 cursor-pointer">
        <Image src="/stories.jpeg" alt="stories" width={60} height={60} className="rounded-full ring-2" />
        <span className="font-medium">mohnd</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 cursor-pointer">
        <Image src="/stories.jpeg" alt="stories" width={60} height={60} className="rounded-full ring-2" />
        <span className="font-medium">mohnd</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 cursor-pointer">
        <Image src="/stories.jpeg" alt="stories" width={60} height={60} className="rounded-full ring-2" />
        <span className="font-medium">mohnd</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 cursor-pointer">
        <Image src="/stories.jpeg" alt="stories" width={60} height={60} className="rounded-full ring-2" />
        <span className="font-medium">mohnd</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 cursor-pointer">
        <Image src="/stories.jpeg" alt="stories" width={60} height={60} className="rounded-full ring-2" />
        <span className="font-medium">mohnd</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 cursor-pointer">
        <Image src="/stories.jpeg" alt="stories" width={60} height={60} className="rounded-full ring-2" />
        <span className="font-medium">mohnd</span>
            </div>

            </div>
        </div>
    );
}