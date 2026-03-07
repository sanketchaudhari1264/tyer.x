import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="bg-[#1e3a5f] text-white px-10 py-4 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-2">
        <img src={logo} alt="TyreX" className="h-14" />
      </div>

      <ul className="flex gap-8 uppercase text-sm font-semibold tracking-wide">
        <li>
          <Link to="/" className="hover:text-gray-300 cursor-pointer transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-300 cursor-pointer transition-colors">
            About
          </Link>
        </li>
        <li>
          <Link to="/products" className="hover:text-gray-300 cursor-pointer transition-colors">
            Product
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-300 cursor-pointer transition-colors">
            Contact
          </Link>
        </li>
        <li className="border-l-2 border-gray-500 pl-8">
          <Link 
            to="/admin-login" 
            className="text-red-400 hover:text-red-300 cursor-pointer transition-colors flex items-center gap-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
            </svg>
            Admin
          </Link>
        </li>
      </ul>

      <div className="flex gap-4 items-center">
        <Link to="/login">
          <button className="hover:text-gray-300 font-medium transition-colors">Login</button>
        </Link>
        <Link to="/signup">
          <button className="border-2 border-white px-5 py-1.5 rounded hover:bg-white hover:text-[#1e3a5f] transition-all font-medium">
            Sign up
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;