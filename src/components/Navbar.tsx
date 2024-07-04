import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { IoHomeOutline, IoLogInOutline } from "react-icons/io5";
import { FaUserFriends, FaRegUser } from "react-icons/fa";
import { MdAmpStories } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";



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
            <IoHomeOutline  className="text-2xl"/>
            <span>Homepage</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <FaUserFriends  className="text-2xl"/>
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex items-center gap-2 ">
            <MdAmpStories className="text-2xl"/>
            <span>Stories</span>
          </Link>
        </div>

      <div className="hidden xl:flexCenter p-2 bg-[#202020] rounded-lg">
        <input type="text" placeholder="search" className="bg-transparent" />
    <CiSearch/>
      </div>
      </div>


      <div className="w-[50%] md:w-[30%] flex items-center gap-4 xl:gap-8 justify-end text-white">
        <ClerkLoading>
          <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
        </ClerkLoading>

        <ClerkLoaded>

          <SignedIn>
              <div className=" cursor-pointer text-2xl">
                <FaRegUser />
              </div>
              <div className=" cursor-pointer text-2xl">
                <AiFillMessage />
              </div>
              <div className=" cursor-pointer text-2xl">
                <IoMdNotifications />
              </div>
          </SignedIn>

          <UserButton />

          <SignedOut>
            <div className="flexCenter gap-1">


            <div className="cursor-pointer text-2xl ">
              <IoLogInOutline />
            </div>
            <Link href={"/sign-in"} className=" text-base">
            Log in
            </Link>
            </div>
          </SignedOut>

        </ClerkLoaded>

        <MobileMenu />
      </div>
    </div>

  );
};

