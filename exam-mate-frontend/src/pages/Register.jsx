



import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    college: "",
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
      const res = await axios.post("http://localhost:5000/api/auth/register", formData);
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/dashboard");
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-yellow-50 flex items-center justify-center font-inter px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2">

        {/* 🎓 Left: Form */}
        <div className="p-8 space-y-6">
          <h2 className="text-3xl font-extrabold text-pink-700">Create your Exam Mate account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="👤 Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
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
            <input
              type="text"
              name="college"
              placeholder="🎓 College"
              value={formData.college}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
            />

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-2 rounded-xl hover:bg-pink-700 transition"
            >
              🚀 Register
            </button>
          </form>

          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-pink-600 hover:underline">
              Login here
            </Link>
          </p>
        </div>

        {/* ✨ Right: Visual */}
        <div className="hidden md:flex bg-pink-100 items-center justify-center p-6">
          <div className="text-center space-y-2">
            <img
              src="https://illustrations.popsy.co/gray/student-studying.svg"
              alt="Study"
              className="w-48 mx-auto"
            />
            <p className="text-pink-700 font-medium text-lg">Empowering Students with Past Papers ✨</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
