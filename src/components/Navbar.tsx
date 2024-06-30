import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

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
              <Image
                src="/home.png"
                alt="Homepage"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span>Homepage</span>
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/friends.png"
                alt="Friends"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span>Friends</span>
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/stories.png"
                alt="Stories"
                width={16}
                height={16}
                className="w-4 h-4"
              />
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
  
