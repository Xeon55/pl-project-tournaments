// src/pages/login.jsx
export default function Login() {
    return (
      <div className="min-h-[88vh] flex items-center justify-center bg-neutral-900 text-white px-4">
        <div className="bg-neutral-800 p-8 rounded-xl w-full max-w-md shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Log in to your account</h2>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="bg-neutral-700 p-3 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-neutral-700 p-3 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
            />
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg">
              Log In
            </button>
          </form>
          <p className="text-sm text-center mt-4 text-gray-400">
            Don’t have an account? <a href="#" className="text-green-500 hover:underline">Register</a>
          </p>
        </div>
      </div>
    );
  }
  