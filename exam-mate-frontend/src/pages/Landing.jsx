import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Landing = () => {
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTagline(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-pink-50 via-rose-100 to-yellow-50 flex items-center justify-center px-6 font-inter overflow-hidden">
      
      {/* 🟣 BLOB BACKGROUND */}
      <div className="absolute w-[28rem] h-[28rem] bg-pink-300 rounded-full blur-3xl opacity-30 top-0 left-[-5rem] animate-blob z-0"></div>

      {/* 🔥 HERO CONTENT */}
      <div className="text-center space-y-8 max-w-3xl w-full z-10">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-pink-700 leading-tight">
          🎓 Exam Mate
        </h1>

        {showTagline && (
          <div className="inline-block bg-white border border-pink-200 px-5 py-2 rounded-full text-pink-700 text-sm font-semibold animate-fade-in">
            By Students, For Students
          </div>
        )}

        <p className="text-gray-700 text-base sm:text-lg px-4 font-medium">
          Access & share question papers. Fast. Free. Forever.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/register"
            className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition text-sm"
          >
            🚀 Get Started
          </Link>
          <Link
            to="/login"
            className="bg-white border border-pink-300 text-pink-700 px-6 py-3 rounded-full hover:bg-pink-100 transition text-sm"
          >
            🔑 Login
          </Link>
        </div>

        <p className="text-xs text-gray-500 mt-10">
          Made with ❤️ at NIT Nagaland | © 2025
        </p>
      </div>
    </div>
  );
};

export default Landing;
