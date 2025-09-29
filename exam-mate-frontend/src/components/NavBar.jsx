





// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const token = localStorage.getItem("token");
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   return (
//     <nav className="bg-pink-50 shadow-md py-4 px-6 sticky top-0 z-50 border-b border-pink-100">
//       <div className="max-w-7xl mx-auto flex justify-between items-center font-inter">
//         <Link to="/" className="text-xl font-bold text-pink-600 tracking-wide">
//           🎓 Exam Mate
//         </Link>

//         {token && (
//           <div className="flex flex-wrap gap-3 text-sm font-medium">
//             <Link
//               to="/dashboard"
//               className="bg-pink-100 text-pink-800 px-3 py-1 rounded-xl hover:bg-pink-200 transition"
//             >
//               Dashboard
//             </Link>
//             <Link
//               to="/files"
//               className="bg-purple-100 text-purple-800 px-3 py-1 rounded-xl hover:bg-purple-200 transition"
//             >
//               All Files
//             </Link>
//             <Link
//               to="/upload"
//               className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-xl hover:bg-emerald-200 transition"
//             >
//               📥 Upload
//             </Link>
//             <Link
//               to="/leaderboard"
//               className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-xl hover:bg-yellow-200 transition"
//             >
//               🏆 Leaderboard
//             </Link>
      
//             <button
//               onClick={handleLogout}
//               className="bg-gray-200 text-gray-700 px-3 py-1 rounded-xl hover:bg-gray-300 transition"
//             >
//               Logout
//             </button>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;






import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-pink-50 shadow-md py-4 px-6 sticky top-0 z-50 border-b border-pink-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center font-inter">
        <Link to="/" className="text-xl font-bold text-pink-600 tracking-wide">
          🎓 Exam Mate
        </Link>

        {/* 🔘 Hamburger (Mobile) */}
        {token && (
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-pink-700 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        )}

        {/* 🔗 Desktop Menu */}
        {token && (
          <div className="hidden md:flex flex-wrap gap-3 text-sm font-medium">
            <Link
              to="/dashboard"
              className="bg-pink-100 text-pink-800 px-3 py-1 rounded-xl hover:bg-pink-200 transition"
            >
              Dashboard
            </Link>
            <Link
              to="/files"
              className="bg-purple-100 text-purple-800 px-3 py-1 rounded-xl hover:bg-purple-200 transition"
            >
              All Files
            </Link>
            <Link
              to="/upload"
              className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-xl hover:bg-emerald-200 transition"
            >
              📥 Upload
            </Link>
            <Link
              to="/leaderboard"
              className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-xl hover:bg-yellow-200 transition"
            >
              🏆 Leaderboard
            </Link>
            <button
              onClick={handleLogout}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-xl hover:bg-gray-300 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>

      {/* 📱 Mobile Dropdown */}
      {token && isOpen && (
        <div className="md:hidden mt-3 px-4 flex flex-col gap-2 text-sm font-medium">
          <Link
            to="/dashboard"
            onClick={closeMenu}
            className="bg-pink-100 text-pink-800 px-3 py-2 rounded-lg hover:bg-pink-200 transition"
          >
            Dashboard
          </Link>
          <Link
            to="/files"
            onClick={closeMenu}
            className="bg-purple-100 text-purple-800 px-3 py-2 rounded-lg hover:bg-purple-200 transition"
          >
            All Files
          </Link>
          <Link
            to="/upload"
            onClick={closeMenu}
            className="bg-emerald-100 text-emerald-800 px-3 py-2 rounded-lg hover:bg-emerald-200 transition"
          >
            📥 Upload
          </Link>
          <Link
            to="/leaderboard"
            onClick={closeMenu}
            className="bg-yellow-100 text-yellow-800 px-3 py-2 rounded-lg hover:bg-yellow-200 transition"
          >
            🏆 Leaderboard
          </Link>
          <button
            onClick={() => {
              handleLogout();
              closeMenu();
            }}
            className="bg-gray-200 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
