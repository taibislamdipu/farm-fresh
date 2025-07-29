import Image from "next/image";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function UserMenu() {
  return (
    <div className="relative">
      <button className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
        <Image
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
          alt="User"
          className="w-8 h-8 rounded-full"
          width={32}
          height={32}
        />
        <span className="hidden sm:block">John Doe</span>

        <MdOutlineKeyboardArrowDown size={24} />
      </button>
    </div>
  );
}
