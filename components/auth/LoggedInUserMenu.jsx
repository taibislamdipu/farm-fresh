"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Logout from "./Logout";

export default function LoggedInUserMenu({ session }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname(); // watch route changes

  const handleToggle = () => setOpen((prev) => !prev);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // const handleLogout = async (e) => {
  //   e.stopPropagation();
  //   setOpen(false);
  //   await signOut({ callbackUrl: "/login" });
  // };

  return (
    <div ref={menuRef} className="relative inline-block text-left">
      <button
        onClick={handleToggle}
        className="dark:hover:text-primary-400 flex items-center space-x-2 text-gray-700 hover:text-primary-600 dark:text-gray-300"
      >
        <Image
          src={
            session?.user?.profilePicture
              ? session.user.profilePicture
              : session?.user?.image
          }
          alt="User"
          className="h-8 w-8 rounded-full"
          width={32}
          height={32}
        />
        <span className="hidden sm:block">{session?.user?.name}</span>
        <MdOutlineKeyboardArrowDown size={24} />
      </button>

      {open && (
        <div className="absolute right-0 z-10 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <div className="py-2 text-sm text-gray-700 dark:text-gray-300">
            <div className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
              <Link href="/manage-product">Manage Listings</Link>
            </div>
            <Logout setOpen={setOpen} />
          </div>
        </div>
      )}
    </div>
  );
}
