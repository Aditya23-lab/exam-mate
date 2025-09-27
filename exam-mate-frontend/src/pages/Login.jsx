


import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
const API_BASE = import.meta.env.VITE_API_URL ;


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(`${API_BASE}/api/auth/login`, formData);
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/dashboard");
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-yellow-50 flex items-center justify-center font-inter px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2">

        {/* 🔐 Left: Form */}
        <div className="p-8 space-y-6">
          <h2 className="text-3xl font-extrabold text-pink-700">Welcome back 👋</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="📧 Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <input
              type="password"
              name="password"
              placeholder="🔒 Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
            />

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-2 rounded-xl hover:bg-pink-700 transition"
            >
              🔓 Login
            </button>
          </form>

          <p className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link to="/" className="text-pink-600 hover:underline">
              Register here
            </Link>
          </p>
        </div>

        {/* ✨ Right: Illustration */}
        <div className="hidden md:flex bg-pink-100 items-center justify-center p-6">
          <div className="text-center space-y-2">
            <img
              src="https://illustrations.popsy.co/gray/student-magic.svg"
              alt="Login"
              className="w-48 mx-auto"
            />
            <p className="text-pink-700 font-medium text-lg">Your Study Buddy Awaits 🚀</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
