import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div>
      <h1>Product Not Found</h1>
      <Link href="/" className="underline text-blue-500">
        Back to Home
      </Link>
    </div>
  );
}
