import Image from "next/image";
import { HiDotsHorizontal } from "react-icons/hi";

interface props {
    size: "sm" | "md" | "lg",
}


export default function Ad({ size }: props) {
    return (
        <div className="p-4 bg-[#202020] shadow-md text-sm rounded-lg">
            <div className="flexBetween text-gray-500 font-medium mb-2">
                <span>Sponsard Ads</span>
                <HiDotsHorizontal />
            </div>

            <div className={`flex flex-col ${size === "sm" ? "gap-2" : "gap-4"}`}>
                <div className={`relative w-full ${size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"}`}>

                    <Image src={"https://images.pexels.com/photos/731217/pexels-photo-731217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        fill alt="ads" className="rounded-lg  object-cover" />
                </div>

                <div className="flex items-center gap-4">
                    <Image src={"https://images.pexels.com/photos/1368382/pexels-photo-1368382.jpeg?auto=compress&cs=tinysrgb&w=600"} width={40} height={40} alt="avatar" className=" w-10 h-10 object-cover rounded-full" />
                    <span className=" text-orange-400">travel abroad for free</span>
                </div>
                <p className={size === "sm" ? "text-xs" : "text-sm"}>
                    {size === "sm" ? "this is a free way to travel to most of places that you don't know yet" : size === "md" ? "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iusto temporibus sequi reprehenderit exercitationem ratione aliquam earum non, "
                        : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iusto temporibus sequi reprehenderit exercitationem ratione aliquam earum non,placeat culpa maiores sapiente voluptas ut quibusdam qui nemo adipisci? Recusandae, natus.   "}
                </p>

                <button className="bg-orange-400 text-xs p-2 rounded-md">Learn more</button>
            </div>

        </div>
    );
}