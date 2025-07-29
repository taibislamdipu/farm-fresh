import { IoMdMenu } from "react-icons/io";

export default function MobileMenu() {
  return (
    <button className="md:hidden p-2 text-gray-700 dark:text-gray-300 border rounded-md">
      <IoMdMenu size={24} />
    </button>
  );
}
