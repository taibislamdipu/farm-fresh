"use client";

import { signOut } from "next-auth/react";

export default function Logout({ setOpen }) {
  const handleLogout = async (e) => {
    e.stopPropagation();
    setOpen(false);
    await signOut({ callbackUrl: "/login" });
  };

  return (
    <div
      className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
      onClick={handleLogout}
    >
      Logout
    </div>
  );
}
