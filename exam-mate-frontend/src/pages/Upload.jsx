// import { useState } from "react";
// import axios from "axios";

// const Upload = () => {
//   const [file, setFile] = useState(null);
//   const [subject, setSubject] = useState("");
//   const [branch, setBranch] = useState("");
//   const [semester, setSemester] = useState("");
//   const [college, setCollege] = useState("");
//   const [message, setMessage] = useState("");

//   const handleUpload = async (e) => {
//     e.preventDefault();

//     if (!file || !subject || !branch || !semester || !college) {
//       return setMessage("❌ Please fill all fields and select a file");
//     }

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("subject", subject);
//     formData.append("branch", branch);
//     formData.append("semester", semester);
//     formData.append("college", college);

//     try {
//       const token = localStorage.getItem("token");
//       const res = await axios.post("http://localhost:5000/api/files/upload", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       setMessage("✅ File uploaded successfully!");
//       setFile(null);
//       setSubject("");
//       setBranch("");
//       setSemester("");
//       setCollege("");
//     } catch (err) {
//       console.error("Upload error", err);
//       setMessage("❌ Upload failed. Try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 px-4 py-10 font-inter">
//       <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-pink-100 space-y-6">
//         <h2 className="text-2xl font-bold text-pink-600">📤 Upload a File</h2>

//         <form onSubmit={handleUpload} className="space-y-4">
//           <div>
//             <label className="block mb-1 font-medium text-sm text-gray-700">📄 Choose PDF</label>
//             <input
//               type="file"
//               accept=".pdf"
//               onChange={(e) => setFile(e.target.files[0])}
//               className="w-full border border-pink-200 rounded-lg p-2"
//             />
//           </div>

//           <input
//             type="text"
//             placeholder="📘 Subject"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//             className="w-full border border-pink-200 rounded-lg p-2"
//           />
//           <input
//             type="text"
//             placeholder="🏛️ College"
//             value={college}
//             onChange={(e) => setCollege(e.target.value)}
//             className="w-full border border-pink-200 rounded-lg p-2"
//           />

//           <select
//             value={branch}
//             onChange={(e) => setBranch(e.target.value)}
//             className="w-full border border-pink-200 rounded-lg p-2"
//           >
//             <option value="">Select Branch</option>
//             <option value="Computer Science">Computer Science</option>
//             <option value="Electronics">Electronics</option>
//             <option value="Mechanical">Mechanical</option>
//             <option value="Civil">Civil</option>
//             <option value="Electrical">Electrical</option>
//             <option value="Biotechnology">Biotechnology</option>
//             <option value="Other">Other</option>
//           </select>

//           <select
//             value={semester}
//             onChange={(e) => setSemester(e.target.value)}
//             className="w-full border border-pink-200 rounded-lg p-2"
//           >
//             <option value="">Select Semester</option>
//             {[...Array(8)].map((_, i) => (
//               <option key={i} value={i + 1}>
//                 Semester {i + 1}
//               </option>
//             ))}
//           </select>

//           <button
//             type="submit"
//             className="w-full bg-pink-500 text-white font-medium py-2 rounded-lg hover:bg-pink-600 transition"
//           >
//             🚀 Upload Now
//           </button>
//         </form>

//         {message && <p className="text-center mt-4 text-sm">{message}</p>}
//       </div>
//     </div>
//   );
// };

// export default Upload;



// import { useState } from "react";
// import axios from "axios";

// const Upload = () => {
//   const [file, setFile] = useState(null);
//   const [userType, setUserType] = useState("college");

//   // Common
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");

//   // College-specific
//   const [branch, setBranch] = useState("");
//   const [semester, setSemester] = useState("");
//   const [college, setCollege] = useState("");

//   // School-specific
//   const [school, setSchool] = useState("");
//   const [classLevel, setClassLevel] = useState("");
//   const [term, setTerm] = useState("");

//   const handleUpload = async (e) => {
//     e.preventDefault();

//     if (userType === "college" && (!file || !subject || !branch || !semester || !college)) {
//       return setMessage("❌ Please fill all college fields and select a file");
//     }

//     if (userType === "school" && (!file || !subject || !school || !classLevel || !term)) {
//       return setMessage("❌ Please fill all school fields and select a file");
//     }

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("subject", subject);
//     formData.append("userType", userType);

//     if (userType === "college") {
//       formData.append("branch", branch);
//       formData.append("semester", semester);
//       formData.append("college", college);
//     } else {
//       formData.append("school", school);
//       formData.append("classLevel", classLevel);
//       formData.append("term", term);
//     }

//     try {
//       const token = localStorage.getItem("token");
//       await axios.post("http://localhost:5000/api/files/upload", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       setMessage("✅ File uploaded successfully!");
//       setFile(null);
//       setSubject("");
//       setBranch("");
//       setSemester("");
//       setCollege("");
//       setSchool("");
//       setClassLevel("");
//       setTerm("");
//     } catch (err) {
//       console.error("Upload error", err);
//       setMessage("❌ Upload failed. Try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 px-4 py-10 font-inter">
//       <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-pink-100 space-y-6">
//         <h2 className="text-2xl font-bold text-pink-600">📤 Upload a File</h2>

//         <form onSubmit={handleUpload} className="space-y-4">
//           {/* 🎓 Student Type Selector */}
//           <select
//             value={userType}
//             onChange={(e) => setUserType(e.target.value)}
//             className="w-full border border-pink-200 rounded-lg p-2"
//           >
//             <option value="college">🎓 College Student</option>
//             <option value="school">🏫 School Student</option>
//           </select>

//           {/* 📄 File Upload */}
//           <div>
//             <label className="block mb-1 font-medium text-sm text-gray-700">📄 Choose PDF</label>
//             <input
//               type="file"
//               accept=".pdf"
//               onChange={(e) => setFile(e.target.files[0])}
//               className="w-full border border-pink-200 rounded-lg p-2"
//             />
//           </div>

//           {/* 📘 Subject */}
//           <input
//             type="text"
//             placeholder="📘 Subject"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//             className="w-full border border-pink-200 rounded-lg p-2"
//           />

//           {/* 🏛️ College Student Fields */}
//           {userType === "college" && (
//             <>
//               <input
//                 type="text"
//                 placeholder="🏛️ College"
//                 value={college}
//                 onChange={(e) => setCollege(e.target.value)}
//                 className="w-full border border-pink-200 rounded-lg p-2"
//               />
//               <select
//                 value={branch}
//                 onChange={(e) => setBranch(e.target.value)}
//                 className="w-full border border-pink-200 rounded-lg p-2"
//               >
//                 <option value="">Select Branch</option>
//                 <option value="Computer Science">Computer Science</option>
//                 <option value="Electronics">Electronics</option>
//                 <option value="Mechanical">Mechanical</option>
//                 <option value="Civil">Civil</option>
//                 <option value="Electrical">Electrical</option>
//                 <option value="Biotechnology">Biotechnology</option>
//                 <option value="Other">Other</option>
//               </select>
//               <select
//                 value={semester}
//                 onChange={(e) => setSemester(e.target.value)}
//                 className="w-full border border-pink-200 rounded-lg p-2"
//               >
//                 <option value="">Select Semester</option>
//                 {[...Array(8)].map((_, i) => (
//                   <option key={i} value={i + 1}>
//                     Semester {i + 1}
//                   </option>
//                 ))}
//               </select>
//             </>
//           )}

//           {/* 🏫 School Student Fields */}
//           {userType === "school" && (
//             <>
//               <input
//                 type="text"
//                 placeholder="🏫 School Name"
//                 value={school}
//                 onChange={(e) => setSchool(e.target.value)}
//                 className="w-full border border-pink-200 rounded-lg p-2"
//               />
//               <select
//                 value={classLevel}
//                 onChange={(e) => setClassLevel(e.target.value)}
//                 className="w-full border border-pink-200 rounded-lg p-2"
//               >
//                 <option value="">Select Class</option>
//                 <option value="9">Class 9</option>
//                 <option value="10">Class 10</option>
//                 <option value="11">Class 11</option>
//                 <option value="12">Class 12</option>
//               </select>
//               <select
//                 value={term}
//                 onChange={(e) => setTerm(e.target.value)}
//                 className="w-full border border-pink-200 rounded-lg p-2"
//               >
//                 <option value="">Select Term</option>
//                 <option value="Mid-Term">Mid-Term</option>
//                 <option value="Final">Final</option>
//                 <option value="Pre-Board">Pre-Board</option>
//               </select>
//             </>
//           )}

//           <button
//             type="submit"
//             className="w-full bg-pink-500 text-white font-medium py-2 rounded-lg hover:bg-pink-600 transition"
//           >
//             🚀 Upload Now
//           </button>
//         </form>

//         {message && <p className="text-center mt-4 text-sm">{message}</p>}
//       </div>
//     </div>
//   );
// };

// export default Upload;









// import { useState } from "react";
// import axios from "axios";

// const Upload = () => {
//   const [file, setFile] = useState(null);
//   const [userType, setUserType] = useState("college");

//   // Common
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");

//   // College-specific
//   const [branch, setBranch] = useState("");
//   const [customBranch, setCustomBranch] = useState(""); // NEW
//   const [semester, setSemester] = useState("");
//   const [college, setCollege] = useState("");

//   // School-specific
//   const [school, setSchool] = useState("");
//   const [classLevel, setClassLevel] = useState("");
//   const [term, setTerm] = useState("");

//   const handleUpload = async (e) => {
//     e.preventDefault();

//     const finalBranch = branch === "Other" ? customBranch.trim() : branch;

//     // Validation
//     if (userType === "college" && (!file || !subject || !finalBranch || !semester || !college)) {
//       return setMessage("❌ Please fill all college fields and select a file");
//     }
//     if (userType === "school" && (!file || !subject || !school || !classLevel || !term)) {
//       return setMessage("❌ Please fill all school fields and select a file");
//     }

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("subject", subject);
//     formData.append("userType", userType);

//     if (userType === "college") {
//       formData.append("branch", finalBranch);
//       formData.append("semester", semester);
//       formData.append("college", college);
//     } else {
//       formData.append("school", school);
//       formData.append("classLevel", classLevel);
//       formData.append("term", term);
//     }

//     try {
//       const token = localStorage.getItem("token");
//       await axios.post("http://localhost:5000/api/files/upload", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       setMessage("✅ File uploaded successfully!");
//       setFile(null);
//       setSubject("");
//       setBranch("");
//       setCustomBranch("");
//       setSemester("");
//       setCollege("");
//       setSchool("");
//       setClassLevel("");
//       setTerm("");
//     } catch (err) {
//       console.error("Upload error", err);
//       setMessage("❌ Upload failed. Try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 px-4 py-10 font-inter">
//       <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-pink-100 space-y-6">
//         <h2 className="text-2xl font-bold text-pink-600">📤 Upload a File</h2>

//         <form onSubmit={handleUpload} className="space-y-4">
//           {/* 🎓 Student Type Selector */}
//           <select
//             value={userType}
//             onChange={(e) => setUserType(e.target.value)}
//             className="w-full border border-pink-200 rounded-lg p-2"
//           >
//             <option value="college">🎓 College Student</option>
//             <option value="school">🏫 School Student</option>
//           </select>

//           {/* 📄 File Upload */}
//           <div>
//             <label className="block mb-1 font-medium text-sm text-gray-700">
//               📄 Choose PDF
//             </label>
//             <input
//               type="file"
//               accept=".pdf"
//               onChange={(e) => setFile(e.target.files[0])}
//               className="w-full border border-pink-200 rounded-lg p-2"
//             />
//           </div>

//           {/* 📘 Subject */}
//           <input
//             type="text"
//             placeholder="📘 Subject"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//             className="w-full border border-pink-200 rounded-lg p-2"
//           />

//           {/* 🏛️ College Student Fields */}
//           {userType === "college" && (
//             <>
//               <input
//                 type="text"
//                 placeholder="🏛️ College"
//                 value={college}
//                 onChange={(e) => setCollege(e.target.value)}
//                 className="w-full border border-pink-200 rounded-lg p-2"
//               />
//               <select
//                 value={branch}
//                 onChange={(e) => setBranch(e.target.value)}
//                 className="w-full border border-pink-200 rounded-lg p-2"
//               >
//                 <option value="">Select Branch</option>
//                 <option value="Computer Science">Computer Science</option>
//                 <option value="Electronics">Electronics</option>
//                 <option value="Mechanical">Mechanical</option>
//                 <option value="Civil">Civil</option>
//                 <option value="Electrical">Electrical</option>
//                 <option value="Biotechnology">Biotechnology</option>
//                 <option value="Other">Other</option>
//               </select>
//               {/* 👇 Input for "Other" branch */}
//               {branch === "Other" && (
//                 <input
//                   type="text"
//                   placeholder="Enter Custom Branch"
//                   value={customBranch}
//                   onChange={(e) => setCustomBranch(e.target.value)}
//                   className="w-full border border-pink-200 rounded-lg p-2"
//                 />
//               )}

//               <select
//                 value={semester}
//                 onChange={(e) => setSemester(e.target.value)}
//                 className="w-full border border-pink-200 rounded-lg p-2"
//               >
//                 <option value="">Select Semester</option>
//                 {[...Array(8)].map((_, i) => (
//                   <option key={i} value={i + 1}>
//                     Semester {i + 1}
//                   </option>
//                 ))}
//               </select>
//             </>
//           )}

//           {/* 🏫 School Student Fields */}
//           {userType === "school" && (
//             <>
//               <input
//                 type="text"
//                 placeholder="🏫 School Name"
//                 value={school}
//                 onChange={(e) => setSchool(e.target.value)}
//                 className="w-full border border-pink-200 rounded-lg p-2"
//               />
//               <select
//                 value={classLevel}
//                 onChange={(e) => setClassLevel(e.target.value)}
//                 className="w-full border border-pink-200 rounded-lg p-2"
//               >
//                 <option value="">Select Class</option>
//                 <option value="9">Class 9</option>
//                 <option value="10">Class 10</option>
//                 <option value="11">Class 11</option>
//                 <option value="12">Class 12</option>
//               </select>
//               <select
//                 value={term}
//                 onChange={(e) => setTerm(e.target.value)}
//                 className="w-full border border-pink-200 rounded-lg p-2"
//               >
//                 <option value="">Select Term</option>
//                 <option value="Mid-Term">Mid-Term</option>
//                 <option value="Final">Final</option>
//                 <option value="Pre-Board">Pre-Board</option>
//               </select>
//             </>
//           )}

//           <button
//             type="submit"
//             className="w-full bg-pink-500 text-white font-medium py-2 rounded-lg hover:bg-pink-600 transition"
//           >
//             🚀 Upload Now
//           </button>
//         </form>

//         {message && <p className="text-center mt-4 text-sm">{message}</p>}
//       </div>
//     </div>
//   );
// };

// export default Upload;








// import { useState } from "react";
// import axios from "axios";

// const Upload = () => {
//   const [file, setFile] = useState(null);
//   const [userType, setUserType] = useState("college");

//   // Common
//   const [subject, setSubject] = useState("");
//   const [examType, setExamType] = useState("");
//   const [message, setMessage] = useState("");

//   // College-specific
//   const [branch, setBranch] = useState("");
//   const [customBranch, setCustomBranch] = useState("");
//   const [semester, setSemester] = useState("");
//   const [college, setCollege] = useState("");

//   // School-specific
//   const [school, setSchool] = useState("");
//   const [classLevel, setClassLevel] = useState("");
//   const [term, setTerm] = useState("");

//   const handleUpload = async (e) => {
//     e.preventDefault();

//     if (!file || !subject || !examType) {
//       return setMessage("❌ Please fill all common fields and select a file");
//     }

//     if (userType === "college" && (!branch || !semester || !college)) {
//       return setMessage("❌ Please fill all college fields");
//     }

//     if (branch === "Other" && !customBranch) {
//       return setMessage("❌ Please enter your custom branch");
//     }

//     if (userType === "school" && (!school || !classLevel || !term)) {
//       return setMessage("❌ Please fill all school fields");
//     }

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("subject", subject);
//     formData.append("examType", examType);
//     formData.append("userType", userType);

//     if (userType === "college") {
//       formData.append("branch", branch === "Other" ? customBranch : branch);
//       formData.append("semester", semester);
//       formData.append("college", college);
//     } else {
//       formData.append("school", school);
//       formData.append("classLevel", classLevel);
//       formData.append("term", term);
//     }

//     try {
//       const token = localStorage.getItem("token");
//       await axios.post("http://localhost:5000/api/files/upload", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       setMessage("✅ File uploaded successfully!");
//       setFile(null);
//       setSubject("");
//       setExamType("");
//       setBranch("");
//       setCustomBranch("");
//       setSemester("");
//       setCollege("");
//       setSchool("");
//       setClassLevel("");
//       setTerm("");
//     } catch (err) {
//       console.error("Upload error", err);
//       setMessage("❌ Upload failed. Try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 px-4 py-10 font-inter">
//       <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-pink-100 space-y-6">
//         <h2 className="text-2xl font-bold text-pink-600">📤 Upload a File</h2>

//         <form onSubmit={handleUpload} className="space-y-4">
//           {/* 🎓 Student Type Selector */}
//           <select
//             value={userType}
//             onChange={(e) => setUserType(e.target.value)}
//             className="w-full border border-pink-200 rounded-lg p-2"
//           >
//             <option value="college">🎓 College Student</option>
//             <option value="school">🏫 School Student</option>
//           </select>

//           {/* 📄 File Upload */}
//           <div>
//             <label className="block mb-1 font-medium text-sm text-gray-700">📄 Choose PDF</label>
//             <input
//               type="file"
//               accept=".pdf"
//               onChange={(e) => setFile(e.target.files[0])}
//               className="w-full border border-pink-200 rounded-lg p-2"
//             />
//           </div>

//           {/* 📘 Subject */}
//           <input
//             type="text"
//             placeholder="📘 Subject"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//             className="w-full border border-pink-200 rounded-lg p-2"
//           />

//           {/* 📝 Exam Type */}
//           <select
//             value={examType}
//             onChange={(e) => setExamType(e.target.value)}
//             className="w-full border border-pink-200 rounded-lg p-2"
//           >
//             <option value="">Select Exam Type</option>
//             <option value="Mid-Term">Mid-Term</option>
//             <option value="Final">Final</option>
//             <option value="Pre-Board">Pre-Board</option>
//             <option value="Class Test">Class Test</option>
//             <option value="Assignment">Assignment</option>
//           </select>

//           {/* 🏛️ College Student Fields */}
//           {userType === "college" && (
//             <>
//               <input
//                 type="text"
//                 placeholder="🏛️ College"
//                 value={college}
//                 onChange={(e) => setCollege(e.target.value)}
//                 className="w-full border border-pink-200 rounded-lg p-2"
//               />

//               <select
//                 value={branch}
//                 onChange={(e) => setBranch(e.target.value)}
//                 className="w-full border border-pink-200 rounded-lg p-2"
//               >
//                 <option value="">Select Branch</option>
//                 <option value="Computer Science">Computer Science</option>
//                 <option value="Electronics">Electronics</option>
//                 <option value="Mechanical">Mechanical</option>
//                 <option value="Civil">Civil</option>
//                 <option value="Electrical">Electrical</option>
//                 <option value="Biotechnology">Biotechnology</option>
//                 <option value="Other">Other</option>
//               </select>

//               {branch === "Other" && (
//                 <input
//                   type="text"
//                   placeholder="Enter your branch"
//                   value={customBranch}
//                   onChange={(e) => setCustomBranch(e.target.value)}
//                   className="w-full border border-pink-200 rounded-lg p-2"
//                 />
//               )}

//               <select
//                 value={semester}
//                 onChange={(e) => setSemester(e.target.value)}
//                 className="w-full border border-pink-200 rounded-lg p-2"
//               >
//                 <option value="">Select Semester</option>
//                 {[...Array(8)].map((_, i) => (
//                   <option key={i} value={i + 1}>
//                     Semester {i + 1}
//                   </option>
//                 ))}
//               </select>
//             </>
//           )}

//           {/* 🏫 School Student Fields */}
//           {userType === "school" && (
//             <>
//               <input
//                 type="text"
//                 placeholder="🏫 School Name"
//                 value={school}
//                 onChange={(e) => setSchool(e.target.value)}
//                 className="w-full border border-pink-200 rounded-lg p-2"
//               />

//               <select
//                 value={classLevel}
//                 onChange={(e) => setClassLevel(e.target.value)}
//                 className="w-full border border-pink-200 rounded-lg p-2"
//               >
//                 <option value="">Select Class</option>
//                 <option value="9">Class 9</option>
//                 <option value="10">Class 10</option>
//                 <option value="11">Class 11</option>
//                 <option value="12">Class 12</option>
//               </select>

//               <select
//                 value={term}
//                 onChange={(e) => setTerm(e.target.value)}
//                 className="w-full border border-pink-200 rounded-lg p-2"
//               >
//                 <option value="">Select Term</option>
//                 <option value="Mid-Term">Mid-Term</option>
//                 <option value="Final">Final</option>
//                 <option value="Pre-Board">Pre-Board</option>
//               </select>
//             </>
//           )}

//           <button
//             type="submit"
//             className="w-full bg-pink-500 text-white font-medium py-2 rounded-lg hover:bg-pink-600 transition"
//           >
//             🚀 Upload Now
//           </button>
//         </form>

//         {message && <p className="text-center mt-4 text-sm">{message}</p>}
//       </div>
//     </div>
//   );
// };

// export default Upload;
// // working code 


// import { useState, useEffect } from "react";
// import axios from "axios";
// import useDebounce from "../hooks/useDebounce";

// const Upload = () => {
//   const [file, setFile] = useState(null);
//   const [userType, setUserType] = useState("college");

//   // Common
//   const [subject, setSubject] = useState("");
//   const [examType, setExamType] = useState("");
//   const [message, setMessage] = useState("");

//   // College
//   const [branch, setBranch] = useState("");
//   const [semester, setSemester] = useState("");
//   const [college, setCollege] = useState("");

//   // School
//   const [school, setSchool] = useState("");
//   const [classLevel, setClassLevel] = useState("");
//   const [term, setTerm] = useState("");

//   // Suggestions lists
//   const [subjectSuggestions, setSubjectSuggestions] = useState([]);
//   const [branchSuggestions, setBranchSuggestions] = useState([]);
//   const [collegeSuggestions, setCollegeSuggestions] = useState([]);
//   const [schoolSuggestions, setSchoolSuggestions] = useState([]);

//   // Debounced inputs
//   const ds = useDebounce(subject, 300);
//   const db = useDebounce(branch, 300);
//   const dc = useDebounce(college, 300);
//   const dsc = useDebounce(school, 300);

//   // Fetch suggestions
//   const fetchSuggestions = async (field, query, setter) => {
//     if (!query || query.length < 2) return setter([]);
//     try {
//       const { data } = await axios.get(
//         `http://localhost:5000/api/files/suggestions?field=${field}&query=${encodeURIComponent(query)}`
//       );
//       setter(data);
//     } catch (e) {
//       console.error(`Error ${field}:`, e);
//       setter([]);
//     }
//   };

//   useEffect(() => { fetchSuggestions("subject", ds, setSubjectSuggestions); }, [ds]);
//   useEffect(() => {
//     if (userType === "college") {
//       fetchSuggestions("branch", db, setBranchSuggestions);
//       fetchSuggestions("college", dc, setCollegeSuggestions);
//     } else {
//       fetchSuggestions("school", dsc, setSchoolSuggestions);
//     }
//   }, [db, dc, dsc, userType]);

//   const handleSelect = (value, setter, clearSetter) => {
//     setter(value);
//     clearSetter([]);
//   };

//   const handleUpload = async (e) => {
//     e.preventDefault();
//     if (!file || !subject || !examType) return setMessage("❌ Please fill all common fields and select a file");
//     if (userType === "college" && (!branch || !semester || !college)) return setMessage("❌ Fill all college fields");
//     if (userType === "school" && (!school || !classLevel || !term)) return setMessage("❌ Fill all school fields");

//     const form = new FormData();
//     form.append("file", file);
//     form.append("subject", subject);
//     form.append("examType", examType);
//     form.append("userType", userType);
//     if (userType === "college") {
//       form.append("branch", branch);
//       form.append("semester", semester);
//       form.append("college", college);
//     } else {
//       form.append("school", school);
//       form.append("classLevel", classLevel);
//       form.append("term", term);
//     }

//     try {
//       const token = localStorage.getItem("token");
//       await axios.post("http://localhost:5000/api/files/upload", form, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setMessage("✅ File uploaded successfully!");
//       // Clear
//       setFile(null); setSubject(""); setExamType("");
//       setBranch(""); setSemester(""); setCollege("");
//       setSchool(""); setClassLevel(""); setTerm("");
//     } catch (err) {
//       console.error(err);
//       setMessage("❌ Upload failed. Try again.");
//     }
//   };

//   const renderInputWithSuggestions = (label, value, setter, suggestions, fieldKey, clearSetter) => (
//     <div className="relative">
//       <input
//         type="text"
//         placeholder={label}
//         value={value}
//         onChange={e => setter(e.target.value)}
//         className="w-full border border-pink-200 rounded-lg p-2"
//       />
//       {suggestions.length > 0 && (
//         <ul className="absolute z-10 bg-white border border-pink-200 mt-1 w-full rounded-lg max-h-40 overflow-auto">
//           {suggestions.map((s, i) => (
//             <li key={i}
//               onClick={() => handleSelect(s, setter, clearSetter)}
//               className="px-3 py-1 hover:bg-pink-100 cursor-pointer text-sm"
//             >{s}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-100 px-4 py-10 font-inter">
//       <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-pink-100 space-y-6">
//         <h2 className="text-2xl font-bold text-pink-600">📤 Upload a File</h2>

//         <form onSubmit={handleUpload} className="space-y-4">
//           <select value={userType}
//             onChange={e => setUserType(e.target.value)}
//             className="w-full border border-pink-200 rounded-lg p-2">
//             <option value="college">🎓 College Student</option>
//             <option value="school">🏫 School Student</option>
//           </select>

//           <div>
//             <label>📄 File (PDF, JPG, PNG)</label>
//             <input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={e => setFile(e.target.files[0])}
//               className="w-full border border-pink-200 rounded-lg p-2" />
//           </div>

//           {renderInputWithSuggestions("📘 Subject", subject, setSubject, subjectSuggestions, "subject", setSubjectSuggestions)}

//           <select value={examType}
//             onChange={e => setExamType(e.target.value)}
//             className="w-full border border-pink-200 rounded-lg p-2">
//             <option value="">Select Exam Type</option>
//             {["Mid-Term","Final","Pre-Board","Class Test","Assignment"].map(v => <option key={v} value={v}>{v}</option>)}
//           </select>

//           {userType === "college" ? (
//             <>
//               {renderInputWithSuggestions("🎓 College", college, setCollege, collegeSuggestions, "college", setCollegeSuggestions)}
//               {renderInputWithSuggestions("🧠 Branch", branch, setBranch, branchSuggestions, "branch", setBranchSuggestions)}
//               <select value={semester}
//                 onChange={e => setSemester(e.target.value)}
//                 className="w-full border border-pink-200 rounded-lg p-2">
//                 <option value="">Select Semester</option>
//                 {[...Array(8)].map((_,i)=> <option key={i} value={i+1}>Semester {i+1}</option>)}
//               </select>
//             </>
//           ) : (
//             <>
//               {renderInputWithSuggestions("🏫 School", school, setSchool, schoolSuggestions, "school", setSchoolSuggestions)}
//               <select value={classLevel}
//                 onChange={e => setClassLevel(e.target.value)}
//                 className="w-full border border-pink-200 rounded-lg p-2">
//                 {["9","10","11","12"].map(c=> <option key={c} value={c}>Class {c}</option>)}
//               </select>
//               <select value={term}
//                 onChange={e => setTerm(e.target.value)}
//                 className="w-full border border-pink-200 rounded-lg p-2">
//                 {["Mid-Term","Final","Pre-Board"].map(t=> <option key={t} value={t}>{t}</option>)}
//               </select>
//             </>
//           )}

//           <button type="submit" className="w-full bg-pink-500 text-white font-medium py-2 rounded-lg hover:bg-pink-600 transition">
//             🚀 Upload Now
//           </button>
//         </form>

//         {message && <p className="text-center mt-4 text-sm">{message}</p>}
//       </div>
//     </div>
//   );
// };

// export default Upload;
// iska ui/ux
// // ispe anna
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Upload = () => {
//   const navigate = useNavigate();
//   const [file, setFile] = useState(null);
//   const [userType, setUserType] = useState('college');

//   // College fields
//   const [subject, setSubject] = useState('');
//   const [branch, setBranch] = useState('');
//   const [semester, setSemester] = useState('');
//   const [college, setCollege] = useState('');
//   const [examType, setExamType] = useState('');

//   // School fields
//   const [school, setSchool] = useState('');
//   const [classLevel, setClassLevel] = useState('');
//   const [term, setTerm] = useState('');

//   const handleUpload = async (e) => {
//     e.preventDefault();

//     if (!file || !subject || !examType || 
//         (userType === 'college' && (!branch || !semester || !college)) ||
//         (userType === 'school' && (!school || !classLevel || !term))
//     ) {
//       alert('Please fill all required fields');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('userType', userType);
//     formData.append('subject', subject);
//     formData.append('examType', examType);

//     if (userType === 'college') {
//       formData.append('branch', branch);
//       formData.append('semester', semester);
//       formData.append('college', college);
//     } else {
//       formData.append('school', school);
//       formData.append('classLevel', classLevel);
//       formData.append('term', term);
//     }

//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.post('http://localhost:5000/api/files/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       alert('File uploaded successfully!');
//       navigate('/dashboard'); // or wherever you want to go
//     } catch (error) {
//       console.error('Upload error:', error.response?.data || error.message);
//       alert('Upload failed. Please check the console for details.');
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow rounded-lg space-y-4">
//       <h2 className="text-xl font-bold">Upload File</h2>

//       <select value={userType} onChange={(e) => setUserType(e.target.value)} className="w-full p-2 border rounded">
//         <option value="college">College</option>
//         <option value="school">School</option>
//       </select>

//       <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject"
//         className="w-full p-2 border rounded" />

//       <input type="text" value={examType} onChange={(e) => setExamType(e.target.value)} placeholder="Exam Type (Mid, Final, etc.)"
//         className="w-full p-2 border rounded" />

//       {userType === 'college' && (
//         <>
//           <input type="text" value={branch} onChange={(e) => setBranch(e.target.value)} placeholder="Branch"
//             className="w-full p-2 border rounded" />
//           <input type="text" value={semester} onChange={(e) => setSemester(e.target.value)} placeholder="Semester"
//             className="w-full p-2 border rounded" />
//           <input type="text" value={college} onChange={(e) => setCollege(e.target.value)} placeholder="College"
//             className="w-full p-2 border rounded" />
//         </>
//       )}

//       {userType === 'school' && (
//         <>
//           <input type="text" value={school} onChange={(e) => setSchool(e.target.value)} placeholder="School"
//             className="w-full p-2 border rounded" />

//           <select value={classLevel} onChange={(e) => setClassLevel(e.target.value)}
//             className="w-full p-2 border rounded">
//             <option value="">Select Class</option>
//             <option value="9">Class 9</option>
//             <option value="10">Class 10</option>
//             <option value="11">Class 11</option>
//             <option value="12">Class 12</option>
//           </select>

//           <select value={term} onChange={(e) => setTerm(e.target.value)}
//             className="w-full p-2 border rounded">
//             <option value="">Select Term</option>
//             <option value="Mid-Term">Mid-Term</option>
//             <option value="Final">Final</option>
//             <option value="Pre-Board">Pre-Board</option>
//           </select>
//         </>
//       )}

//       <input type="file" onChange={(e) => setFile(e.target.files[0])}
//         className="w-full p-2 border rounded" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" />

//       <button onClick={handleUpload}
//         className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
//         Upload
//       </button>
//     </div>
//   );
// };

// export default Upload;
// logic 




// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// // Simple debounce hook
// function useDebounce(value, delay) {
//   const [debounced, setDebounced] = useState(value);
//   useEffect(() => {
//     const handler = setTimeout(() => setDebounced(value), delay);
//     return () => clearTimeout(handler);
//   }, [value, delay]);
//   return debounced;
// }

// const Upload = () => {
//   const navigate = useNavigate();
//   const [file, setFile] = useState(null);
//   const [userType, setUserType] = useState("college");

//   // Common
//   const [subject, setSubject] = useState("");
//   const [examType, setExamType] = useState("");
//   const [message, setMessage] = useState("");

//   // College
//   const [branch, setBranch] = useState("");
//   const [semester, setSemester] = useState("");
//   const [college, setCollege] = useState("");

//   // School
//   const [school, setSchool] = useState("");
//   const [classLevel, setClassLevel] = useState("");
//   const [term, setTerm] = useState("");

//   // Suggestions
//   const [subjectSuggestions, setSubjectSuggestions] = useState([]);
//   const [branchSuggestions, setBranchSuggestions] = useState([]);
//   const [collegeSuggestions, setCollegeSuggestions] = useState([]);
//   const [schoolSuggestions, setSchoolSuggestions] = useState([]);

//   const ds = useDebounce(subject, 300);
//   const db = useDebounce(branch, 300);
//   const dc = useDebounce(college, 300);
//   const dsc = useDebounce(school, 300);

//   const fetchSuggestions = async (field, query, setter) => {
//     if (!query || query.length < 2) return setter([]);
//     try {
//       const { data } = await axios.get(`http://localhost:5000/api/files/suggestions?field=${field}&query=${encodeURIComponent(query)}`);
//       setter(data);
//     } catch (e) {
//       console.error(`Suggestion error (${field}):`, e);
//       setter([]);
//     }
//   };

//   useEffect(() => { fetchSuggestions("subject", ds, setSubjectSuggestions); }, [ds]);
//   useEffect(() => {
//     if (userType === "college") {
//       fetchSuggestions("branch", db, setBranchSuggestions);
//       fetchSuggestions("college", dc, setCollegeSuggestions);
//     } else {
//       fetchSuggestions("school", dsc, setSchoolSuggestions);
//     }
//   }, [db, dc, dsc, userType]);

//   const handleSelect = (value, setter, clearSetter) => {
//     setter(value);
//     clearSetter([]);
//   };

//   const handleUpload = async (e) => {
//     e.preventDefault();
//     if (!file || !subject || !examType) return setMessage("❌ Please fill all common fields and select a file");
//     if (userType === "college" && (!branch || !semester || !college)) return setMessage("❌ Fill all college fields");
//     if (userType === "school" && (!school || !classLevel || !term)) return setMessage("❌ Fill all school fields");

//     const form = new FormData();
//     form.append("file", file);
//     form.append("subject", subject);
//     form.append("examType", examType);
//     form.append("userType", userType);
//     if (userType === "college") {
//       form.append("branch", branch);
//       form.append("semester", semester);
//       form.append("college", college);
//     } else {
//       form.append("school", school);
//       form.append("classLevel", classLevel);
//       form.append("term", term);
//     }

//     try {
//       const token = localStorage.getItem("token");
//       await axios.post("http://localhost:5000/api/files/upload", form, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setMessage("✅ File uploaded successfully!");
//       setTimeout(() => navigate("/dashboard"), 1000);
//     } catch (err) {
//       console.error("Upload error:", err);
//       setMessage("❌ Upload failed. Try again.");
//     }
//   };

//   const renderInputWithSuggestions = (label, value, setter, suggestions, clearSetter) => (
//     <div className="relative">
//       <input
//         type="text"
//         placeholder={label}
//         value={value}
//         onChange={e => setter(e.target.value)}
//         className="w-full border border-pink-300 rounded-lg p-2 focus:ring-2 focus:ring-pink-400"
//       />
//       {suggestions.length > 0 && (
//         <ul className="absolute z-10 bg-white border border-pink-300 mt-1 w-full rounded-lg max-h-40 overflow-auto">
//           {suggestions.map((s, i) => (
//             <li key={i}
//               onClick={() => handleSelect(s, setter, clearSetter)}
//               className="px-3 py-1 hover:bg-pink-100 cursor-pointer text-sm"
//             >{s}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-50 px-4 py-10 font-inter">
//       <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-pink-200 space-y-6">
//         <h2 className="text-2xl font-bold text-pink-600 text-center">📤 Upload a File</h2>

//         <form onSubmit={handleUpload} className="space-y-4">
//           <select value={userType}
//             onChange={e => setUserType(e.target.value)}
//             className="w-full border border-pink-300 rounded-lg p-2">
//             <option value="college">🎓 College Student</option>
//             <option value="school">🏫 School Student</option>
//           </select>

//           <input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={e => setFile(e.target.files[0])}
//             className="w-full border border-pink-300 rounded-lg p-2" />

//           {renderInputWithSuggestions("📘 Subject", subject, setSubject, subjectSuggestions, setSubjectSuggestions)}

//           <select value={examType}
//             onChange={e => setExamType(e.target.value)}
//             className="w-full border border-pink-300 rounded-lg p-2">
//             <option value="">Select Exam Type</option>
//             {["Mid-Term", "Final", "Pre-Board", "Class Test", "Assignment"].map(v => (
//               <option key={v} value={v}>{v}</option>
//             ))}
//           </select>

//           {userType === "college" && (
//             <>
//               {renderInputWithSuggestions("🎓 College", college, setCollege, collegeSuggestions, setCollegeSuggestions)}
//               {renderInputWithSuggestions("🧠 Branch", branch, setBranch, branchSuggestions, setBranchSuggestions)}
//               <select value={semester}
//                 onChange={e => setSemester(e.target.value)}
//                 className="w-full border border-pink-300 rounded-lg p-2">
//                 <option value="">Select Semester</option>
//                 {[...Array(8)].map((_, i) => (
//                   <option key={i} value={i + 1}>Semester {i + 1}</option>
//                 ))}
//               </select>
//             </>
//           )}

//           {userType === "school" && (
//             <>
//               {renderInputWithSuggestions("🏫 School", school, setSchool, schoolSuggestions, setSchoolSuggestions)}
//               <select value={classLevel}
//                 onChange={e => setClassLevel(e.target.value)}
//                 className="w-full border border-pink-300 rounded-lg p-2">
//                 {["9", "10", "11", "12"].map(c => (
//                   <option key={c} value={c}>Class {c}</option>
//                 ))}
//               </select>

//               <select value={term}
//                 onChange={e => setTerm(e.target.value)}
//                 className="w-full border border-pink-300 rounded-lg p-2">
//                 {["Mid-Term", "Final", "Pre-Board"].map(t => (
//                   <option key={t} value={t}>{t}</option>
//                 ))}
//               </select>
//             </>
//           )}

//           <button type="submit"
//             className="w-full bg-pink-500 text-white font-medium py-2 rounded-lg hover:bg-pink-600 transition">
//             🚀 Upload Now
//           </button>
//         </form>

//         {message && <p className="text-center mt-4 text-sm text-gray-700">{message}</p>}
//       </div>
//     </div>
//   );
// };

// export default Upload;




// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import useDebounce from "../hooks/useDebounce";

// const Upload = () => {
//   const navigate = useNavigate();
//   const [file, setFile] = useState(null);
//   const [userType, setUserType] = useState("college");

//   // Common
//   const [subject, setSubject] = useState("");
//   const [examType, setExamType] = useState("");
//   const [message, setMessage] = useState("");

//   // College
//   const [branch, setBranch] = useState("");
//   const [semester, setSemester] = useState("");
//   const [college, setCollege] = useState("");

//   // School
//   const [school, setSchool] = useState("");
//   const [classLevel, setClassLevel] = useState("");
//   const [term, setTerm] = useState("");

//   // Suggestions
//   const [subjectSuggestions, setSubjectSuggestions] = useState([]);
//   const [branchSuggestions, setBranchSuggestions] = useState([]);
//   const [collegeSuggestions, setCollegeSuggestions] = useState([]);
//   const [schoolSuggestions, setSchoolSuggestions] = useState([]);

//   // Debounced values
//   const dSubject = useDebounce(subject, 300);
//   const dBranch = useDebounce(branch, 300);
//   const dCollege = useDebounce(college, 300);
//   const dSchool = useDebounce(school, 300);

//   // Fetch suggestions
//   const fetchSuggestions = async (field, query, setter) => {
//     if (!query || query.length < 2) return setter([]);
//     try {
//       const { data } = await axios.get(`http://localhost:5000/api/files/suggestions?field=${field}&query=${encodeURIComponent(query)}`);
//       setter(data);
//     } catch (err) {
//       setter([]);
//       console.error("Suggestion error:", err);
//     }
//   };

//   useEffect(() => { fetchSuggestions("subject", dSubject, setSubjectSuggestions); }, [dSubject]);
//   useEffect(() => {
//     if (userType === "college") {
//       fetchSuggestions("branch", dBranch, setBranchSuggestions);
//       fetchSuggestions("college", dCollege, setCollegeSuggestions);
//     } else {
//       fetchSuggestions("school", dSchool, setSchoolSuggestions);
//     }
//   }, [userType, dBranch, dCollege, dSchool]);

//   const handleSelect = (val, setter, clearSetter) => {
//     setter(val);
//     clearSetter([]);
//   };

//   const handleUpload = async (e) => {
//     e.preventDefault();

//     if (!file || !subject || !examType ||
//         (userType === "college" && (!branch || !semester || !college)) ||
//         (userType === "school" && (!school || !classLevel || !term))) {
//       return setMessage("❌ Please fill all required fields.");
//     }

//     const form = new FormData();
//     form.append("file", file);
//     form.append("userType", userType);
//     form.append("subject", subject);
//     form.append("examType", examType);

//     if (userType === "college") {
//       form.append("branch", branch);
//       form.append("semester", semester);
//       form.append("college", college);
//     } else {
//       form.append("school", school);
//       form.append("classLevel", classLevel);
//       form.append("term", term);
//     }

//     try {
//       const token = localStorage.getItem("token");
//       await axios.post("http://localhost:5000/api/files/upload", form, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setMessage("✅ File uploaded successfully!");
//       navigate("/dashboard");
//     } catch (err) {
//       console.error("Upload failed:", err);
//       setMessage("❌ Upload failed.");
//     }
//   };

//   const renderInputWithSuggestions = (label, value, setter, suggestions, clearSetter) => (
//     <div className="relative">
//       <input
//         type="text"
//         value={value}
//         onChange={e => setter(e.target.value)}
//         placeholder={label}
//         className="w-full border border-pink-200 rounded-lg p-2"
//       />
//       {suggestions.length > 0 && (
//         <ul className="absolute z-10 bg-white border border-pink-200 mt-1 w-full rounded-lg max-h-40 overflow-auto">
//           {suggestions.map((item, i) => (
//             <li key={i} onClick={() => handleSelect(item, setter, clearSetter)}
//               className="px-3 py-1 hover:bg-pink-100 cursor-pointer text-sm">
//               {item}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-100 px-4 py-10 font-inter">
//       <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-pink-100 space-y-6">
//         <h2 className="text-2xl font-bold text-pink-600">📤 Upload a File</h2>

//         <form onSubmit={handleUpload} className="space-y-4">
//           <select value={userType} onChange={e => setUserType(e.target.value)}
//             className="w-full border border-pink-200 rounded-lg p-2">
//             <option value="college">🎓 College Student</option>
//             <option value="school">🏫 School Student</option>
//           </select>

//           <div>
//             <label className="block text-sm mb-1">📄 File (PDF, JPG, PNG)</label>
//             <input type="file" accept=".pdf,.jpg,.jpeg,.png"
//               onChange={(e) => setFile(e.target.files[0])}
//               className="w-full border border-pink-200 rounded-lg p-2" />
//           </div>

//           {renderInputWithSuggestions("📘 Subject", subject, setSubject, subjectSuggestions, setSubjectSuggestions)}

//           <select value={examType} onChange={e => setExamType(e.target.value)}
//             className="w-full border border-pink-200 rounded-lg p-2">
//             <option value="">Select Exam Type</option>
//             {["Mid-Term", "Final", "Pre-Board", "Class Test", "Assignment",].map(opt => (
//               <option key={opt} value={opt}>{opt}</option>
//             ))}
//           </select>

//           {userType === "college" && (
//             <>
//               {renderInputWithSuggestions("🎓 College", college, setCollege, collegeSuggestions, setCollegeSuggestions)}
//               {renderInputWithSuggestions("🧠 Branch", branch, setBranch, branchSuggestions, setBranchSuggestions)}
//               <select value={semester} onChange={e => setSemester(e.target.value)}
//                 className="w-full border border-pink-200 rounded-lg p-2">
//                 <option value="">Select Semester</option>
//                 {[...Array(8)].map((_, i) => (
//                   <option key={i + 1} value={i + 1}>Semester {i + 1}</option>
//                 ))}
//               </select>
//             </>
//           )}

//           {userType === "school" && (
//             <>
//               {renderInputWithSuggestions("🏫 School", school, setSchool, schoolSuggestions, setSchoolSuggestions)}
//               <select value={classLevel} onChange={e => setClassLevel(e.target.value)}
//                 className="w-full border border-pink-200 rounded-lg p-2">
//                 <option value="">Select Class</option>
//                 {[9, 10, 11, 12].map(c => (
//                   <option key={c} value={c}>Class {c}</option>
//                 ))}
//               </select>

//               <select value={term} onChange={e => setTerm(e.target.value)}
//                 className="w-full border border-pink-200 rounded-lg p-2">
//                 <option value="">Select Term</option>
//                 {["Mid-Term", "Final", "Pre-Board"].map(t => (
//                   <option key={t} value={t}>{t}</option>
//                 ))}
//               </select>
//             </>
//           )}

//           <button type="submit" className="w-full bg-pink-500 text-white font-medium py-2 rounded-lg hover:bg-pink-600 transition">
//             🚀 Upload Now
//           </button>
//         </form>

//         {message && <p className="text-center mt-4 text-sm text-gray-700">{message}</p>}
//       </div>
//     </div>
//   );
// };

// export default Upload;




import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";
const API_BASE = import.meta.env.VITE_API_URL ;


const Upload = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [userType, setUserType] = useState("college");

  // Common
  const [subject, setSubject] = useState("");
  const [examType, setExamType] = useState("");
  const [message, setMessage] = useState("");

  // College
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const [college, setCollege] = useState("");

  // School
  const [school, setSchool] = useState("");
  const [classLevel, setClassLevel] = useState("");

  // Suggestions
  const [subjectSuggestions, setSubjectSuggestions] = useState([]);
  const [branchSuggestions, setBranchSuggestions] = useState([]);
  const [collegeSuggestions, setCollegeSuggestions] = useState([]);
  const [schoolSuggestions, setSchoolSuggestions] = useState([]);

  const dSubject = useDebounce(subject, 300);
  const dBranch = useDebounce(branch, 300);
  const dCollege = useDebounce(college, 300);
  const dSchool = useDebounce(school, 300);

  const fetchSuggestions = async (field, query, setter) => {
    if (!query || query.length < 2) return setter([]);
    try {
      const { data } = await axios.get(`${API_BASE}/api/files/suggestions?field=${field}&query=${encodeURIComponent(query)}`);
      setter(data);
    } catch (err) {
      console.error("Suggestion error:", err);
      setter([]);
    }
  };

  useEffect(() => {
    fetchSuggestions("subject", dSubject, setSubjectSuggestions);
  }, [dSubject]);

  useEffect(() => {
    if (userType === "college") {
      fetchSuggestions("branch", dBranch, setBranchSuggestions);
      fetchSuggestions("college", dCollege, setCollegeSuggestions);
    } else {
      fetchSuggestions("school", dSchool, setSchoolSuggestions);
    }
  }, [userType, dBranch, dCollege, dSchool]);

  const handleSelect = (val, setter, clearSetter) => {
    setter(val);
    clearSetter([]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file || !subject || !examType ||
      (userType === "college" && (!branch || !semester || !college)) ||
      (userType === "school" && (!school || !classLevel))) {
      return setMessage("❌ Please fill all required fields.");
    }

    const form = new FormData();
    form.append("file", file);
    form.append("userType", userType);
    form.append("subject", subject);
    form.append("examType", examType);

    if (userType === "college") {
      form.append("branch", branch);
      form.append("semester", semester);
      form.append("college", college);
    } else {
      form.append("school", school);
      form.append("classLevel", classLevel);
    }

    try {
      const token = localStorage.getItem("token");
      await axios.post(`${API_BASE}/api/files/upload`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage("✅ File uploaded successfully!");
      navigate("/dashboard");
    } catch (err) {
      console.error("Upload failed:", err);
      setMessage("❌ Upload failed.");
    }
  };

  const renderInputWithSuggestions = (label, value, setter, suggestions, clearSetter) => (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={e => setter(e.target.value)}
        placeholder={label}
        className="w-full border border-pink-200 rounded-lg p-2"
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white border border-pink-200 mt-1 w-full rounded-lg max-h-40 overflow-auto">
          {suggestions.map((item, i) => (
            <li key={i} onClick={() => handleSelect(item, setter, clearSetter)}
              className="px-3 py-1 hover:bg-pink-100 cursor-pointer text-sm">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 font-inter">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-pink-100 space-y-6">
        <h2 className="text-2xl font-bold text-pink-600">📤 Upload a File</h2>

        <form onSubmit={handleUpload} className="space-y-4">
          <select value={userType} onChange={e => setUserType(e.target.value)}
            className="w-full border border-pink-200 rounded-lg p-2">
            <option value="college">🎓 College Student</option>
            <option value="school">🏫 School Student</option>
          </select>

          <div>
            <label className="block text-sm mb-1">📄 File (PDF, JPG, PNG)</label>
            <input type="file" accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => setFile(e.target.files[0])}
              className="w-full border border-pink-200 rounded-lg p-2" />
          </div>

          {renderInputWithSuggestions("📘 Subject", subject, setSubject, subjectSuggestions, setSubjectSuggestions)}

          <select value={examType} onChange={e => setExamType(e.target.value)}
            className="w-full border border-pink-200 rounded-lg p-2">
            <option value="">Select Exam Type</option>
            {["Mid-Term", "Final", "Pre-Board", "Class Test", "Assignment", "Notes"].map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>

          {userType === "college" && (
            <>
              {renderInputWithSuggestions("🎓 College", college, setCollege, collegeSuggestions, setCollegeSuggestions)}
              {renderInputWithSuggestions("🧠 Branch", branch, setBranch, branchSuggestions, setBranchSuggestions)}
              <select value={semester} onChange={e => setSemester(e.target.value)}
                className="w-full border border-pink-200 rounded-lg p-2">
                <option value="">Select Semester</option>
                {[...Array(8)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>Semester {i + 1}</option>
                ))}
              </select>
            </>
          )}

          {userType === "school" && (
            <>
              {renderInputWithSuggestions("🏫 School", school, setSchool, schoolSuggestions, setSchoolSuggestions)}
              <select value={classLevel} onChange={e => setClassLevel(e.target.value)}
                className="w-full border border-pink-200 rounded-lg p-2">
                <option value="">Select Class</option>
                {[9, 10, 11, 12].map(c => (
                  <option key={c} value={c}>Class {c}</option>
                ))}
              </select>
            </>
          )}

          <button type="submit" className="w-full bg-pink-500 text-white font-medium py-2 rounded-lg hover:bg-pink-600 transition">
            🚀 Upload Now
          </button>
        </form>

        {message && <p className="text-center mt-4 text-sm text-gray-700">{message}</p>}
      </div>
    </div>
  );
};

export default Upload;
