import LoginForm from "@/components/auth/LoginForm";
import { ImLeaf } from "react-icons/im";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-primary-500 p-3">
              <ImLeaf className="text-2xl text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome back
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Sign in to your FarmFresh account
          </p>
        </div>

        <LoginForm />

        {/* <!-- Demo Accounts --> */}
        {/* <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">
            Demo Accounts:
          </h3>
          <div className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
            <div>
              <strong>Customer:</strong> customer@demo.com / password123
            </div>
            <div>
              <strong>Farmer:</strong> farmer@demo.com / password123
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
