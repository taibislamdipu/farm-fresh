"use client";

import { useSession } from "next-auth/react";
import LoggedInUserMenu from "../auth/LoggedInUserMenu";
import LoginButton from "../auth/LoginButton";

export default function UserMenu() {
  const { data: session } = useSession(); // reactive session;

  return (
    <div>
      {session?.user ? <LoggedInUserMenu session={session} /> : <LoginButton />}
    </div>
  );
}
