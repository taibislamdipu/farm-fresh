import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkMode() {
  return (
    <button
      id="darkToggle"
      className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
    >
      <FaMoon className="hidden dark:block" />
      <FaSun className="dark:hidden" />
    </button>
  );
}
