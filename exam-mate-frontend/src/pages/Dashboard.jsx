// import { useEffect, useState } from "react";
// import axios from "axios";
// import UserUploads from "../components/UserUploads";
// import { Link } from "react-router-dom";

// const Dashboard = () => {
//   const [user, setUser] = useState(null);
//   const [file, setFile] = useState(null);
//   const [branch, setBranch] = useState("");
//   const [semester, setSemester] = useState("");
//   const [subject, setSubject] = useState("");
//   const [college, setCollege] = useState("");

//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem("user"));
//     setUser(userData);
//   }, []);

//   const handleUpload = async (e) => {
//     e.preventDefault();
//     if (!file || !branch || !semester || !subject || !college) {
//       alert("Please fill all fields and select a file.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("branch", branch);
//     formData.append("semester", semester);
//     formData.append("subject", subject);
//     formData.append("college", college);

//     try {
//       const token = localStorage.getItem("token");
//       await axios.post("http://localhost:5000/api/files/upload", formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       alert("✅ File uploaded successfully!");
//       setFile(null);
//       setBranch("");
//       setSemester("");
//       setSubject("");
//       setCollege("");
//     } catch (err) {
//       alert("❌ Upload failed");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 font-inter px-4 py-10">
//       <div className="max-w-4xl mx-auto space-y-6">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-blue-800">📘 Welcome to Exam Mate</h1>
//           {user && (
//             <p className="text-gray-600 mt-2">
//               Logged in as: <span className="font-semibold">{user.name}</span> ({user.email})
//             </p>
//           )}
//           <Link
//             to="/files"
//             className="text-blue-600 mt-4 inline-block underline hover:text-blue-800 transition"
//           >
//             📂 Browse All Uploaded Files
//           </Link>
//         </div>

//         {/* Upload Box */}
//         <div className="bg-white p-6 rounded-2xl shadow-md">
//           <h2 className="text-xl font-semibold mb-4">📤 Upload a New File</h2>
//           <form onSubmit={handleUpload} className="grid gap-4">
//             <input
//               type="file"
//               accept=".pdf,.jpg,.jpeg,.png"
//               onChange={(e) => setFile(e.target.files[0])}
//               className="border border-gray-300 p-2 rounded"
//             />
//             <input
//               type="text"
//               placeholder="Branch"
//               value={branch}
//               onChange={(e) => setBranch(e.target.value)}
//               className="border border-gray-300 p-2 rounded"
//             />
//             <input
//               type="text"
//               placeholder="Semester"
//               value={semester}
//               onChange={(e) => setSemester(e.target.value)}
//               className="border border-gray-300 p-2 rounded"
//             />
//             <input
//               type="text"
//               placeholder="Subject"
//               value={subject}
//               onChange={(e) => setSubject(e.target.value)}
//               className="border border-gray-300 p-2 rounded"
//             />
//             <input
//               type="text"
//               placeholder="College"
//               value={college}
//               onChange={(e) => setCollege(e.target.value)}
//               className="border border-gray-300 p-2 rounded"
//             />
//             <button
//               type="submit"
//               className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold transition"
//             >
//               🚀 Upload File
//             </button>
//           </form>
//         </div>

//         {/* Uploaded Files */}
//         <div className="bg-white p-6 rounded-2xl shadow-md">
//           <h2 className="text-xl font-semibold mb-4">📁 My Uploaded Files</h2>
//           {user?.id && <UserUploads userId={user.id} />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// import { useEffect, useState } from "react";
// import axios from "axios";

// const Dashboard = () => {
//   const [files, setFiles] = useState([]);

//   const fetchMyFiles = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await axios.get("http://localhost:5000/api/files/my", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setFiles(res.data);
//     } catch (err) {
//       console.error("Error fetching my files:", err);
//     }
//   };

//   useEffect(() => {
//     fetchMyFiles();
//   }, []);

//   const pastelColors = [
//     "bg-pink-50 border-pink-200 text-pink-900",
//     "bg-purple-50 border-purple-200 text-purple-900",
//     "bg-yellow-50 border-yellow-200 text-yellow-900",
//     "bg-emerald-50 border-emerald-200 text-emerald-900",
//     "bg-orange-50 border-orange-200 text-orange-900",
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 px-4 py-10 font-inter">
//       <div className="max-w-5xl mx-auto space-y-6">
//         <div className="text-center mb-6">
//           <h1 className="text-4xl font-bold text-pink-600 mb-2">👋 Welcome Back!</h1>
//           <p className="text-gray-600 text-sm">Here are the files you've uploaded:</p>
//         </div>

//         <div className="flex justify-center">
//           <a
//             href="/upload"
//             className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition text-sm shadow"
//           >
//             ➕ Upload a New File
//           </a>
//         </div>

//         <div className="grid md:grid-cols-2 gap-6">
//           {files.length === 0 ? (
//             <p className="col-span-full text-center text-gray-500 mt-4">
//               You haven’t uploaded anything yet.
//             </p>
//           ) : (
//             files.map((file, index) => (
//               <div
//                 key={file._id}
//                 className={`rounded-2xl border p-4 shadow-md transition hover:shadow-lg ${pastelColors[index % pastelColors.length]}`}
//               >
//                 <div className="text-lg font-semibold mb-1">{file.subject}</div>
//                 <p className="text-sm">📘 Branch: {file.branch}</p>
//                 <p className="text-sm">🎓 Semester: {file.semester}</p>
//                 <p className="text-sm">🏛 College: {file.college}</p>
//                 <p className="text-xs mt-2">👤 You uploaded this</p>
//                 <a
//                   href={`http://localhost:5000/api/files/download/${file.storedName}`}
//                   className="mt-3 inline-block bg-white border border-gray-300 text-sm px-3 py-1 rounded-full hover:bg-gray-100 transition"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   ⬇️ Download
//                 </a>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Dashboard = () => {
//   const [myFiles, setMyFiles] = useState([]);
//   const [userName, setUserName] = useState("");

//   const pastelClasses = [
//     "bg-pink-50 text-pink-800 border-pink-100",
//     "bg-yellow-50 text-yellow-800 border-yellow-100",
//     "bg-green-50 text-green-800 border-green-100",
//     "bg-purple-50 text-purple-800 border-purple-100",
//     "bg-emerald-50 text-emerald-800 border-emerald-100",
//   ];

//   // 🧠 Fetch user uploads
//   const fetchMyFiles = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await axios.get("http://localhost:5000/api/files/my", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setMyFiles(res.data);
//     } catch (err) {
//       console.error("Error fetching my files:", err);
//     }
//   };

//   useEffect(() => {
//     fetchMyFiles();
//     const user = JSON.parse(localStorage.getItem("user"));
//     setUserName(user?.name || "User");
//   }, []);

//   return (
//     <div className="min-h-screen px-4 py-10 bg-pink-50 font-inter">
//       <div className="max-w-6xl mx-auto space-y-10">
        
//         {/* 🎉 Welcome Card */}
//         <div className="bg-white border border-pink-100 rounded-2xl p-6 shadow text-center">
//           <h2 className="text-2xl sm:text-3xl font-semibold text-pink-700">
//             👋 Welcome, {userName}!
//           </h2>
//           <p className="text-sm text-gray-600 mt-1">
//             Manage your uploads and help your friends revise better.
//           </p>

//           <Link
//             to="/upload"
//             className="inline-block mt-6 bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition text-sm"
//           >
//             📥 Upload a New File
//           </Link>
//         </div>

//         {/* 🗂️ My Uploaded Files */}
//         <div className="space-y-4">
//           <h3 className="text-xl font-bold text-pink-700">📚 My Uploaded Files</h3>

//           {myFiles.length === 0 ? (
//             <p className="text-gray-500">You haven't uploaded any files yet.</p>
//           ) : (
//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {myFiles.map((file, index) => (
//                 <div
//                   key={file._id}
//                   className={`rounded-2xl border p-4 shadow transition hover:shadow-md ${pastelClasses[index % pastelClasses.length]}`}
//                 >
//                   <h4 className="text-lg font-semibold">{file.subject}</h4>
//                   <p className="text-sm">📘 Branch: {file.branch}</p>
//                   <p className="text-sm">🎓 Semester: {file.semester}</p>
//                   <p className="text-sm">🏛️ College: {file.college}</p>
//                   <div className="mt-3">
//                     <a
//                       href={`http://localhost:5000/api/files/download/${file.storedName}`}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="bg-pink-100 text-pink-800 px-4 py-1 rounded hover:bg-pink-200 text-sm"
//                     >
//                       ⬇️ Download
//                     </a>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Dashboard = () => {
//   const [myFiles, setMyFiles] = useState([]);
//   const [userName, setUserName] = useState("");

//   const pastelClasses = [
//     "bg-pink-50 text-pink-800 border-pink-100",
//     "bg-yellow-50 text-yellow-800 border-yellow-100",
//     "bg-green-50 text-green-800 border-green-100",
//     "bg-purple-50 text-purple-800 border-purple-100",
//     "bg-emerald-50 text-emerald-800 border-emerald-100",
//   ];

//   const fetchMyFiles = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await axios.get("http://localhost:5000/api/files/my", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setMyFiles(res.data);
//     } catch (err) {
//       console.error("Error fetching my files:", err);
//     }
//   };

//   const handleDelete = async (fileId) => {
//     const confirm = window.confirm("Are you sure you want to delete this file?");
//     if (!confirm) return;

//     try {
//       const token = localStorage.getItem("token");
//       await axios.delete(`http://localhost:5000/api/files/${fileId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       // Refresh after deletion
//       fetchMyFiles();
//     } catch (err) {
//       console.error("❌ Delete error:", err.message);
//       alert("Failed to delete file.");
//     }
//   };

//   useEffect(() => {
//     fetchMyFiles();
//     const user = JSON.parse(localStorage.getItem("user"));
//     setUserName(user?.name || "User");
//   }, []);

//   return (
//     <div className="min-h-screen px-4 py-10 bg-pink-50 font-inter">
//       <div className="max-w-6xl mx-auto space-y-10">

//         {/* 🎉 Welcome Section */}
//         <div className="bg-white border border-pink-100 rounded-2xl p-6 shadow text-center">
//           <h2 className="text-2xl sm:text-3xl font-semibold text-pink-700">
//             👋 Welcome, {userName}!
//           </h2>
//           <p className="text-sm text-gray-600 mt-1">
//             Manage your uploads and help your friends revise better.
//           </p>
//           <Link
//             to="/upload"
//             className="inline-block mt-6 bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition text-sm"
//           >
//             📥 Upload a New File
//           </Link>
//         </div>

//         {/* 📚 My Uploaded Files */}
//         <div className="space-y-4">
//           <h3 className="text-xl font-bold text-pink-700">📚 My Uploaded Files</h3>
//           {myFiles.length === 0 ? (
//             <p className="text-gray-500">You haven't uploaded any files yet.</p>
//           ) : (
//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {myFiles.map((file, index) => (
//                 <div
//                   key={file._id}
//                   className={`rounded-2xl border p-4 shadow transition hover:shadow-md ${pastelClasses[index % pastelClasses.length]}`}
//                 >
//                   <h4 className="text-lg font-semibold">{file.subject}</h4>
//                   <p className="text-sm">📘 Branch: {file.branch}</p>
//                   <p className="text-sm">🎓 Semester: {file.semester}</p>
//                   <p className="text-sm">🏛️ College: {file.college}</p>
//                   <div className="mt-3 flex flex-wrap gap-2">
//                     <a
//                       href={`http://localhost:5000/api/files/download/${file.storedName}`}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="bg-pink-100 text-pink-800 px-4 py-1 rounded hover:bg-pink-200 text-sm"
//                     >
//                       ⬇️ Download
//                     </a>
//                     <button
//                       onClick={() => handleDelete(file._id)}
//                       className="bg-red-100 text-red-700 px-4 py-1 rounded hover:bg-red-200 text-sm"
//                     >
//                       🗑️ Delete
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const API_BASE = import.meta.env.VITE_API_URL ;


const Dashboard = () => {
  const [myFiles, setMyFiles] = useState([]);
  const [userName, setUserName] = useState("");
  const [recommendedSubjects, setRecommendedSubjects] = useState([]);

  const pastelClasses = [
    "bg-pink-50 text-pink-800 border-pink-100",
    "bg-yellow-50 text-yellow-800 border-yellow-100",
    "bg-green-50 text-green-800 border-green-100",
    "bg-purple-50 text-purple-800 border-purple-100",
    "bg-emerald-50 text-emerald-800 border-emerald-100",
  ];

  const fetchMyFiles = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.get(`${API_BASE}/api/files/my`, {
      params, // query parameters
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
      setMyFiles(res.data);
      generateRecommendations(res.data);
    } catch (err) {
      console.error("Error fetching my files:", err);
    }
  };

  // 🧠 Simple AI Recommendation Logic
  const generateRecommendations = (files) => {
    const subjectFrequency = {};

    files.forEach((file) => {
      const subject = file.subject.toLowerCase().trim();
      subjectFrequency[subject] = (subjectFrequency[subject] || 0) + 1;
    });

    const sorted = Object.entries(subjectFrequency)
      .sort((a, b) => b[1] - a[1])
      .map(([subject]) => subject.charAt(0).toUpperCase() + subject.slice(1));

    setRecommendedSubjects(sorted.slice(0, 3)); // top 3
  };

  const handleDelete = async (fileId) => {
    if (!window.confirm("Are you sure you want to delete this file?")) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_BASE}/api/files/${fileId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMyFiles((prev) => prev.filter((file) => file._id !== fileId));
    } catch (err) {
      alert("Delete failed");
      console.error("Delete error:", err.message);
    }
  };

  useEffect(() => {
    fetchMyFiles();
    const user = JSON.parse(localStorage.getItem("user"));
    setUserName(user?.name || "User");
  }, []);

  return (
    <div className="min-h-screen px-4 py-10 bg-pink-50 font-inter">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* 👋 Welcome Section */}
        <div className="bg-white border border-pink-100 rounded-2xl p-6 shadow text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-pink-700">
            👋 Welcome, {userName}!
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Manage your uploads and help others revise better.
          </p>
          <Link
            to="/upload"
            className="inline-block mt-6 bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition text-sm"
          >
            📥 Upload a New File
          </Link>
        </div>

        {/* 🧠 Recommended Subjects */}
        {recommendedSubjects.length > 0 && (
          <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl shadow">
            <h3 className="text-lg font-semibold text-emerald-800 mb-2">🧠 Recommended Subjects</h3>
            <div className="flex gap-3 flex-wrap">
              {recommendedSubjects.map((subject, i) => (
                <span
                  key={i}
                  className="bg-white border border-emerald-200 text-emerald-800 px-3 py-1 rounded-xl text-sm shadow-sm"
                >
                  ✅ {subject}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 📚 My Uploaded Files */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-pink-700">📚 My Uploaded Files</h3>

          {myFiles.length === 0 ? (
            <p className="text-gray-500">You haven't uploaded any files yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {myFiles.map((file, index) => (
                <div
                  key={file._id}
                  className={`rounded-2xl border p-4 shadow transition hover:shadow-md ${pastelClasses[index % pastelClasses.length]}`}
                >
                  <h4 className="text-lg font-semibold">{file.subject}</h4>
                  <p className="text-sm">📘 Branch: {file.branch}</p>
                  <p className="text-sm">🎓 Semester: {file.semester}</p>
                  <p className="text-sm">🏛️ College: {file.college}</p>
                  <div className="mt-4 flex gap-2 flex-wrap">
                    <a
                      href={`${API_BASE}/api/files/download/${file.storedName}`}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-pink-100 text-pink-800 px-4 py-1 rounded hover:bg-pink-200 text-sm"
                    >
                      ⬇️ Download
                    </a>
                    <button
                      onClick={() => handleDelete(file._id)}
                      className="bg-red-100 text-red-700 px-4 py-1 rounded hover:bg-red-200 text-sm"
                    >
                      ❌ Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
