import Link from "next/link";

export default function LoginButton() {
  return (
    <Link href="/login">
      <button className="px-5 bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg font-medium transition">
        Login
      </button>
    </Link>
  );
}
