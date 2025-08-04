import { auth } from "@/auth";
import LoggedInUserMenu from "../auth/LoggedInUserMenu";
import LoginButton from "../auth/LoginButton";

export default async function UserMenu() {
  const session = await auth();
  console.log("session--->", session);
  return (
    <div>
      {session?.user ? <LoggedInUserMenu session={session} /> : <LoginButton />}
    </div>
  );
}
