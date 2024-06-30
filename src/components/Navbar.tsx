import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { IoHomeOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { MdAmpStories } from "react-icons/md";


export default function Navbar() {
    return (
      <div className="h-24 flex items-center justify-between">
        <div className="md:hidden lg:block w-[20%]">
          <Link href="/" className="font-bold text-xl text-orange-400">
            MKH
          </Link>
        </div>



        <div className="hidden md:flex w-[50%] text-sm items-center justify-between text-white">
          <div className="flex gap-6 ">
            <Link href="/" className="flex items-center gap-2">
              <IoHomeOutline/>
              <span>Homepage</span>
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <FaUserFriends/>
              <span>Friends</span>
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <MdAmpStories/>
              <span>Stories</span>
            </Link>
          </div>
      
        </div>


        <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
          <MobileMenu />
        </div>

      </div>
    );
  };
  
