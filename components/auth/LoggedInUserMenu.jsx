"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function LoggedInUserMenu({ session }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const handleToggle = () => setOpen((prev) => !prev);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    // Safe to use in client component
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async (e) => {
    e.stopPropagation();
    setOpen(false);
    await signOut({ callbackUrl: "/login" });
  };

  return (
    <div ref={menuRef} className="relative inline-block text-left">
      <button
        onClick={handleToggle}
        className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
      >
        <Image
          src={session?.user?.image}
          alt="User"
          className="w-8 h-8 rounded-full"
          width={32}
          height={32}
        />
        <span className="hidden sm:block">{session?.user?.name}</span>
        <MdOutlineKeyboardArrowDown size={24} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-10">
          <div className="py-2 text-sm text-gray-700 dark:text-gray-300">
            <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
              Profile
            </div>
            <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
              Settings
            </div>
            <div
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
