import { ImLeaf } from "react-icons/im";

export default function RegistrationPageHeader() {
  return (
    <div className="text-center mb-8">
      <div className="flex justify-center mb-6">
        <div className="bg-primary-500 p-3 rounded-full">
          <ImLeaf className="text-white text-2xl" />
        </div>
      </div>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        Create your account
      </h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Join FarmFresh community today
      </p>
    </div>
  );
}
