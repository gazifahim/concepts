import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-gray-600 mb-6">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="px-5 py-2 bg-black text-white rounded-md hover:opacity-80"
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
