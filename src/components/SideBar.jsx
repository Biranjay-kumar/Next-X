import { BsTwitterX } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { BiSolidMessage } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { MdBookmarks } from "react-icons/md";
import Link from "next/link";

function SideBar() {
  return (
    <div className="relative h-full w-64 bg-white shadow-lg p-5 flex flex-col justify-between">
      <div>
        <Link href="/" className="p-2">
          <div className="mb-8 flex ml-8  p-2">
            <BsTwitterX className="hover:bg-gray-100 p-3 w-16 h-16 rounded-full" />
          </div>
        </Link>
        <div>
          <Link href="/">
            <div className="flex items-center gap-3 mb-5 cursor-pointer hover:bg-gray-100 p-3 rounded-lg">
              <IoMdHome size={28} className="text-blue-500" />
              <h1 className="font-bold text-xl text-gray-700">Home</h1>
            </div>
          </Link>
          <div className="flex items-center gap-3 mb-5 cursor-pointer hover:bg-gray-100 p-3 rounded-lg">
            <CiSearch size={28} className="text-blue-500" />
            <h1 className="font-bold text-xl text-gray-700">Explore</h1>
          </div>
          <div className="flex items-center gap-3 mb-5 cursor-pointer hover:bg-gray-100 p-3 rounded-lg">
            <IoMdNotifications size={28} className="text-blue-500" />
            <h1 className="font-bold text-xl text-gray-700">Notification</h1>
          </div>
          <div className="flex items-center gap-3 mb-5 cursor-pointer hover:bg-gray-100 p-3 rounded-lg">
            <BiSolidMessage size={28} className="text-blue-500" />
            <h1 className="font-bold text-xl text-gray-700">Message</h1>
          </div>
          <div className="flex items-center gap-3 mb-5 cursor-pointer hover:bg-gray-100 p-3 rounded-lg">
            <MdBookmarks size={28} className="text-blue-500" />
            <h1 className="font-bold text-xl text-gray-700">Bookmarks</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <button className="mt-8 bg-blue-500 px-8 py-3 text-white rounded-full font-semibold hover:bg-blue-600 transition duration-300">
          Sign In
        </button>
        <div className="mt-10 w-full flex items-center justify-between p-4 border-t bg-gray-100 rounded-lg">
          <div>
            <h1 className="font-bold text-lg text-gray-700">Biranjay Kumar</h1>
            <p className="text-sm text-gray-500">biranjay@gmail.com</p>
          </div>
          <div>
            {/* <img src={logo} alt="User Profile" className="h-10 w-10 rounded-full border-2 border-blue-500" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
