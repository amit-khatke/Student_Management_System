import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 px-6 py-5 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Logo / Name */}
        <Link to="/" className="text-2xl font-bold text-white">
          Student Management
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link to="/" className="text-white hover:underline transition">
            Home
          </Link>
          <Link to="/login" className="text-white hover:underline transition">
            Login
          </Link>
          <Link to="/signup" className="text-white hover:underline transition">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
