import { useEffect, useState } from "react";
import axios from "axios";
const API_BASE = import.meta.env.VITE_API_URL ;


const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  const pastelClasses = [
    "bg-pink-50 text-pink-800 border-pink-100",
    "bg-yellow-50 text-yellow-800 border-yellow-100",
    "bg-green-50 text-green-800 border-green-100",
    "bg-purple-50 text-purple-800 border-purple-100",
    "bg-emerald-50 text-emerald-800 border-emerald-100",
  ];

  useEffect(() => {
    const fetchLeaders = async () => {
       try {
    const token = localStorage.getItem("token"); // only if needed
    const res = await axios.get(`${API_BASE}/api/files/leaderboard`, {
      headers: token
        ? { Authorization: `Bearer ${token}` }
        : undefined,
    });
    setLeaders(res.data);
  } catch (err) {
    console.error("Error fetching leaderboard", err);
  }
};
     
    fetchLeaders();
  }, []);

  const getRankBadge = (index) => {
    if (index === 0) return "🥇";
    if (index === 1) return "🥈";
    if (index === 2) return "🥉";
    return `#${index + 1}`;
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="min-h-screen px-4 py-10 bg-pink-50 font-inter">
      <div className="max-w-6xl mx-auto space-y-10">
        <h2 className="text-3xl font-bold text-pink-700 text-center">
          🏆 Top Uploaders
        </h2>

        {leaders.length === 0 ? (
          <p className="text-center text-gray-500">No leaderboard data yet.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leaders.map((user, index) => (
              <div
                key={user.email}
                className={`rounded-2xl border shadow p-4 flex flex-col items-center text-center hover:scale-[1.03] transition-all duration-300 ${pastelClasses[index % pastelClasses.length]}`}
              >
                <div className="text-2xl">{getRankBadge(index)}</div>

                <div className="w-16 h-16 rounded-full bg-white border border-gray-300 flex items-center justify-center text-xl font-bold mt-2 mb-2">
                  {getInitials(user.name)}
                </div>

                <h3 className="text-lg font-semibold">{user.name}</h3>
                <p className="text-sm text-gray-600">{user.email}</p>
                <p className="text-sm mt-2 font-medium text-pink-800">
                  📄 Uploads: {user.uploadCount}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
