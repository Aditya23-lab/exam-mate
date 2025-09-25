


// import { useEffect, useState } from "react";
// import axios from "axios";
// import useDebounce from "../hooks/useDebounce";

// const AllFiles = () => {
//   const [files, setFiles] = useState([]);

//   const [userType, setUserType] = useState("college");
//   const [branch, setBranch] = useState("");
//   const [semester, setSemester] = useState("");
//   const [subject, setSubject] = useState("");
//   const [college, setCollege] = useState("");
//   const [school, setSchool] = useState("");
//   const [classLevel, setClassLevel] = useState("");
//   const [term, setTerm] = useState("");

//   const [previewFile, setPreviewFile] = useState(null);

//   const [subjectSuggestions, setSubjectSuggestions] = useState([]);
//   const [collegeSuggestions, setCollegeSuggestions] = useState([]);
//   const [schoolSuggestions, setSchoolSuggestions] = useState([]);
//   const [branchSuggestions, setBranchSuggestions] = useState([]);

//   const debouncedSubject = useDebounce(subject, 300);
//   const debouncedCollege = useDebounce(college, 300);
//   const debouncedSchool = useDebounce(school, 300);
//   const debouncedBranch = useDebounce(branch, 300);

//   const fetchFiles = async () => {
//     try {
//       const params = { userType };
//       if (subject) params.subject = subject;
//       if (userType === "college") {
//         if (college) params.college = college;
//         if (branch) params.branch = branch;
//         if (semester) params.semester = semester;
//       } else {
//         if (school) params.school = school;
//         if (classLevel) params.classLevel = classLevel;
//         if (term) params.term = term;
//       }
//       const res = await axios.get("http://localhost:5000/api/files", { params });
//       setFiles(res.data);
//     } catch (err) {
//       console.error("Error fetching files", err);
//     }
//   };

//   const fetchSuggestions = async (field, query, setter) => {
//     if (!query || query.length < 2) return setter([]);
//     try {
//       const res = await axios.get(
//         `http://localhost:5000/api/files/suggestions?field=${field}&query=${encodeURIComponent(query)}`
//       );
//       setter(res.data);
//     } catch (err) {
//       console.error(`❌ Error fetching ${field} suggestions:`, err.message);
//       setter([]);
//     }
//   };

//   useEffect(() => {
//     fetchFiles();
//   }, [userType, branch, semester, subject, college, school, classLevel, term]);

//   useEffect(() => {
//     fetchSuggestions("subject", debouncedSubject, setSubjectSuggestions);
//   }, [debouncedSubject]);

//   useEffect(() => {
//     fetchSuggestions("college", debouncedCollege, setCollegeSuggestions);
//   }, [debouncedCollege]);

//   useEffect(() => {
//     fetchSuggestions("school", debouncedSchool, setSchoolSuggestions);
//   }, [debouncedSchool]);

//   useEffect(() => {
//     fetchSuggestions("branch", debouncedBranch, setBranchSuggestions);
//   }, [debouncedBranch]);

//   const pastelClasses = [
//     "bg-pink-100 text-pink-900 border-pink-200",
//     "bg-purple-100 text-purple-900 border-purple-200",
//     "bg-emerald-100 text-emerald-900 border-emerald-200",
//     "bg-yellow-100 text-yellow-900 border-yellow-200",
//     "bg-rose-100 text-rose-900 border-rose-200",
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 px-4 py-10 font-inter">
//       <div className="max-w-6xl mx-auto space-y-6">

//         {/* User Type Toggle */}
//         <div className="flex gap-4">
//           <button
//             onClick={() => setUserType("college")}
//             className={`px-4 py-2 rounded-xl ${userType === "college" ? "bg-pink-600 text-white" : "bg-white border border-pink-200 text-pink-600"}`}
//           >
//             College
//           </button>
//           <button
//             onClick={() => setUserType("school")}
//             className={`px-4 py-2 rounded-xl ${userType === "school" ? "bg-rose-600 text-white" : "bg-white border border-rose-200 text-rose-600"}`}
//           >
//             School
//           </button>
//         </div>

//         {/* Filters */}
//         <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row md:flex-wrap gap-4 border border-rose-100">

//           {/* 🔍 Subject Filter */}
//           <AutoInput value={subject} setValue={setSubject} suggestions={subjectSuggestions} placeholder="🔍 Subject" />

//           {userType === "college" ? (
//             <>
//               <AutoInput value={college} setValue={setCollege} suggestions={collegeSuggestions} placeholder="🎓 College" />
//               <AutoInput value={branch} setValue={setBranch} suggestions={branchSuggestions} placeholder="🧠 Branch" />
//               <select
//                 value={semester}
//                 onChange={(e) => setSemester(e.target.value)}
//                 className="w-full md:flex-1 p-2 rounded-xl border border-pink-200 bg-white"
//               >
//                 <option value="">Semester</option>
//                 {[...Array(8)].map((_, i) => (
//                   <option key={i + 1} value={i + 1}>Sem {i + 1}</option>
//                 ))}
//               </select>
//             </>
//           ) : (
//             <>
//               <AutoInput value={school} setValue={setSchool} suggestions={schoolSuggestions} placeholder="🏫 School" />
//               <select
//                 value={classLevel}
//                 onChange={(e) => setClassLevel(e.target.value)}
//                 className="w-full md:flex-1 p-2 rounded-xl border border-rose-200 bg-white"
//               >
//                 <option value="">Select Class</option>
//                 {["9", "10", "11", "12"].map((c) => <option key={c}>{c}</option>)}
//               </select>
//               <select
//                 value={term}
//                 onChange={(e) => setTerm(e.target.value)}
//                 className="w-full md:flex-1 p-2 rounded-xl border border-rose-200 bg-white"
//               >
//                 <option value="">Select Term</option>
//                 {["Mid-Term", "Final", "Pre-Board"].map((t) => <option key={t}>{t}</option>)}
//               </select>
//             </>
//           )}
//         </div>

//         {/* File Cards */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {files.length === 0 ? (
//             <p className="text-gray-500 col-span-full text-center">No files found.</p>
//           ) : (
//             files.map((file, idx) => (
//               <div
//                 key={file._id}
//                 className={`rounded-2xl border shadow-md p-4 hover:scale-[1.02] transition-all duration-200 ${pastelClasses[idx % pastelClasses.length]}`}
//               >
//                 <h3 className="text-lg font-semibold">{file.subject}</h3>
//                 {userType === "college" ? (
//                   <>
//                     <p className="text-sm">📘 Branch: {file.branch}</p>
//                     <p className="text-sm">🎓 Sem: {file.semester}</p>
//                     <p className="text-sm">🏛️ {file.college}</p>
//                   </>
//                 ) : (
//                   <>
//                     <p className="text-sm">🏫 {file.school}</p>
//                     <p className="text-sm">Class {file.classLevel}</p>
//                     <p className="text-sm">{file.term}</p>
//                   </>
//                 )}
//                 {/* <p className="text-xs mt-2">👤 {file.uploader?.name || "Unknown"}</p> */}
//                 <p className="text-xs mt-2">👤 {file.uploader?.name || "Unknown"}</p>

// {file.duplicateCount > 1 && (
//   <p className="text-xs mt-1 text-blue-700 font-medium">
//     🔁 {file.duplicateCount} Versions Available
//   </p>
// )}

//                 <div className="flex gap-2 mt-4">
//                   <button
//                     onClick={() => setPreviewFile(file.storedName)}
//                     className="bg-white border border-purple-300 text-purple-800 text-sm px-3 py-1 rounded hover:bg-purple-100"
//                   >
//                     👁️ Preview
//                   </button>
//                   <a
//                     href={`http://localhost:5000/api/files/download/${file.storedName}`}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="bg-purple-200 text-purple-900 text-sm px-4 py-1 rounded hover:bg-purple-300"
//                   >
//                     ⬇️ Download
//                   </a>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>

//       {/* Preview Modal */}
//       {previewFile && (
//         <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-xl p-4 w-full max-w-3xl h-[80vh] relative">
//             <button
//               onClick={() => setPreviewFile(null)}
//               className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
//             >
//               ✖
//             </button>
//             <iframe
//               src={`http://localhost:5000/api/files/view/${previewFile}`}
//               className="w-full h-full rounded"
//               title="PDF Preview"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // 🔤 Autocomplete Input Field Component
// const AutoInput = ({ value, setValue, suggestions, placeholder }) => (
//   <div className="relative w-full md:flex-1">
//     <input
//       type="text"
//       placeholder={placeholder}
//       value={value}
//       onChange={(e) => setValue(e.target.value)}
//       className="w-full p-2 rounded-xl border border-pink-200 bg-white"
//     />
//     {suggestions.length > 0 && (
//       <ul className="absolute z-10 bg-white border border-pink-200 mt-1 w-full rounded-xl max-h-40 overflow-auto">
//         {suggestions.map((s, i) => (
//           <li
//             key={i}
//             onClick={() => {
//               setValue(s);
//             }}
//             className="px-3 py-1 hover:bg-pink-100 cursor-pointer text-sm"
//           >
//             {s}
//           </li>
//         ))}
//       </ul>
//     )}
//   </div>
// );

// export default AllFiles;
// ghum phir ke ispe ana agar dikkat ho to ...






// import { useEffect, useState } from "react";
// import axios from "axios";
// import useDebounce from "../hooks/useDebounce";

// const AllFiles = () => {
//   const [files, setFiles] = useState([]);

//   const [userType, setUserType] = useState("college");
//   const [branch, setBranch] = useState("");
//   const [semester, setSemester] = useState("");
//   const [subject, setSubject] = useState("");
//   const [college, setCollege] = useState("");
//   const [school, setSchool] = useState("");
//   const [classLevel, setClassLevel] = useState("");
//   const [term, setTerm] = useState("");
//   const [examType, setExamType] = useState("");

  


//   const [previewFile, setPreviewFile] = useState(null);

//   const [subjectSuggestions, setSubjectSuggestions] = useState([]);
//   const [collegeSuggestions, setCollegeSuggestions] = useState([]);
//   const [schoolSuggestions, setSchoolSuggestions] = useState([]);
//   const [branchSuggestions, setBranchSuggestions] = useState([]);

//   const debouncedSubject = useDebounce(subject, 300);
//   const debouncedCollege = useDebounce(college, 300);
//   const debouncedSchool = useDebounce(school, 300);
//   const debouncedBranch = useDebounce(branch, 300);

//   const fetchFiles = async () => {
//     try {
//       const params = { userType };
//       if (subject) params.subject = subject;
//       if (examType) {
//   params.examType = examType;
// }

//       if (userType === "college") {
//         if (college) params.college = college;
//         if (branch) params.branch = branch;
//         if (semester) params.semester = semester;
//       } else {
//         if (school) params.school = school;
//         if (classLevel) params.classLevel = classLevel;
//         if (term) params.term = term;
//       }
//       const res = await axios.get("http://localhost:5000/api/files", { params });
//       setFiles(res.data);
//     } catch (err) {
//       console.error("Error fetching files", err);
//     }
//   };

//   const fetchSuggestions = async (field, query, setter) => {
//     if (!query || query.length < 2) return setter([]);
//     try {
//       const res = await axios.get(
//         `http://localhost:5000/api/files/suggestions?field=${field}&query=${encodeURIComponent(query)}`
//       );
//       setter(res.data);
//     } catch (err) {
//       console.error(`❌ Error fetching ${field} suggestions:`, err.message);
//       setter([]);
//     }
//   };

//   useEffect(() => {
//     fetchFiles();
//   }, [userType, branch, semester, subject, college, school, classLevel, term, examType]);

//   useEffect(() => {
//     fetchSuggestions("subject", debouncedSubject, setSubjectSuggestions);
//   }, [debouncedSubject]);

//   useEffect(() => {
//   setExamType("");
// }, [userType]);


//   useEffect(() => {
//     fetchSuggestions("college", debouncedCollege, setCollegeSuggestions);
//   }, [debouncedCollege]);

//   useEffect(() => {
//     fetchSuggestions("school", debouncedSchool, setSchoolSuggestions);
//   }, [debouncedSchool]);

//   useEffect(() => {
//     fetchSuggestions("branch", debouncedBranch, setBranchSuggestions);
//   }, [debouncedBranch]);

//   const pastelClasses = [
//     "bg-pink-100 text-pink-900 border-pink-200",
//     "bg-purple-100 text-purple-900 border-purple-200",
//     "bg-emerald-100 text-emerald-900 border-emerald-200",
//     "bg-yellow-100 text-yellow-900 border-yellow-200",
//     "bg-rose-100 text-rose-900 border-rose-200",
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 px-4 py-10 font-inter">
//       <div className="max-w-6xl mx-auto space-y-6">

//         {/* User Type Toggle */}
//         <div className="flex gap-4">
//           <button
//             onClick={() => setUserType("college")}
//             className={`px-4 py-2 rounded-xl ${userType === "college" ? "bg-pink-600 text-white" : "bg-white border border-pink-200 text-pink-600"}`}
//           >
//             College
//           </button>
//           <button
//             onClick={() => setUserType("school")}
//             className={`px-4 py-2 rounded-xl ${userType === "school" ? "bg-rose-600 text-white" : "bg-white border border-rose-200 text-rose-600"}`}
//           >
//             School
//           </button>
//         </div>

//         {/* Filters */}
//         <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row md:flex-wrap gap-4 border border-rose-100">

//           {/* 🔍 Subject Filter */}
//           <AutoInput value={subject} setValue={setSubject} suggestions={subjectSuggestions} placeholder="🔍 Subject" />
//           <select
//   value={examType}
//   onChange={(e) => setExamType(e.target.value)}
//   className="w-full md:flex-1 p-2 rounded-xl border border-pink-200 bg-white"
// >
//   <option value="">📚 All Types</option>
//   {/* <option value="Mid">📝 Mid-Term</option>
//   <option value="End">📖 End-Term</option> */}
//   <option value="Notes">🗒️ Notes</option>
// </select>


//           {userType === "college" ? (
//             <>
//               <AutoInput value={college} setValue={setCollege} suggestions={collegeSuggestions} placeholder="🎓 College" />
//               <AutoInput value={branch} setValue={setBranch} suggestions={branchSuggestions} placeholder="🧠 Branch" />
//               <select
//                 value={semester}
//                 onChange={(e) => setSemester(e.target.value)}
//                 className="w-full md:flex-1 p-2 rounded-xl border border-pink-200 bg-white"
//               >
//                 <option value="">Semester</option>
//                 {[...Array(8)].map((_, i) => (
//                   <option key={i + 1} value={i + 1}>Sem {i + 1}</option>
//                 ))}
//               </select>
//             </>
//           ) : (
//             <>
//               <AutoInput value={school} setValue={setSchool} suggestions={schoolSuggestions} placeholder="🏫 School" />
//               <select
//                 value={classLevel}
//                 onChange={(e) => setClassLevel(e.target.value)}
//                 className="w-full md:flex-1 p-2 rounded-xl border border-rose-200 bg-white"
//               >
//                 <option value="">Select Class</option>
//                 {["9", "10", "11", "12"].map((c) => <option key={c}>{c}</option>)}
//               </select>
//               <select
//                 value={term}
//                 onChange={(e) => setTerm(e.target.value)}
//                 className="w-full md:flex-1 p-2 rounded-xl border border-rose-200 bg-white"
//               >
//                 <option value="">Select Term</option>
//                 {["Mid-Term", "Final", "Pre-Board"].map((t) => <option key={t}>{t}</option>)}
//               </select>
//             </>
//           )}
//         </div>

//         {/* File Cards */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {files.length === 0 ? (
//             <p className="text-gray-500 col-span-full text-center">No files found.</p>
//           ) : (
//             files.map((file, idx) => (
//               <div
//                 key={file._id}
//                 className={`rounded-2xl border shadow-md p-4 hover:scale-[1.02] transition-all duration-200 ${pastelClasses[idx % pastelClasses.length]}`}
//               >
//                 {/* <h3 className="text-lg font-semibold">{file.subject}</h3> */}
//                 <h3 className="text-lg font-semibold">
//   {file.subject}
//   {file.examType && (
//     <span className="ml-2 text-xs bg-purple-200 text-purple-800 px-2 py-0.5 rounded-full">
//       {file.examType}
//     </span>
//   )}
// </h3>

//                 {userType === "college" ? (
//                   <>
//                     <p className="text-sm">📘 Branch: {file.branch}</p>
//                     <p className="text-sm">🎓 Sem: {file.semester}</p>
//                     <p className="text-sm">🏛️ {file.college}</p>
//                   </>
//                 ) : (
//                   <>
//                     <p className="text-sm">🏫 {file.school}</p>
//                     <p className="text-sm">Class {file.classLevel}</p>
//                     <p className="text-sm">{file.term}</p>
//                   </>
//                 )}
//                 {/* <p className="text-xs mt-2">👤 {file.uploader?.name || "Unknown"}</p> */}
//                 <p className="text-xs mt-2">👤 {file.uploader?.name || "Unknown"}</p>

// {file.duplicateCount > 1 && (
//   <p className="text-xs mt-1 text-blue-700 font-medium">
//     🔁 {file.duplicateCount} Versions Available
//   </p>
// )}

//                 <div className="flex gap-2 mt-4">
//                   <button
//                     onClick={() => setPreviewFile(file.storedName)}
//                     className="bg-white border border-purple-300 text-purple-800 text-sm px-3 py-1 rounded hover:bg-purple-100"
//                   >
//                     👁️ Preview
//                   </button>
//                   <a
//                     href={`http://localhost:5000/api/files/download/${file.storedName}`}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="bg-purple-200 text-purple-900 text-sm px-4 py-1 rounded hover:bg-purple-300"
//                   >
//                     ⬇️ Download
//                   </a>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>

//       {/* Preview Modal */}
//       {previewFile && (
//         <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-xl p-4 w-full max-w-3xl h-[80vh] relative">
//             <button
//               onClick={() => setPreviewFile(null)}
//               className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
//             >
//               ✖
//             </button>
//             {/* <iframe
//               src={`http://localhost:5000/api/files/view/${previewFile}`}
//               className="w-full h-full rounded"
//               title="PDF Preview"
//             /> */}
//             {previewFile?.endsWith('.pdf') ? (
//   <embed
//     src={`http://localhost:5000/api/files/view/${previewFile}`}
//     type="application/pdf"
//     width="100%"
//     height="600px"
//   />
// ) : (
//   <img
//     src={`http://localhost:5000/uploads/${previewFile}`}
//     alt="Preview"
//     className="w-full max-h-[600px] object-contain"
//   />
// )}

//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // 🔤 Autocomplete Input Field Component
// const AutoInput = ({ value, setValue, suggestions, placeholder }) => (
//   <div className="relative w-full md:flex-1">
//     <input
//       type="text"
//       placeholder={placeholder}
//       value={value}
//       onChange={(e) => setValue(e.target.value)}
//       className="w-full p-2 rounded-xl border border-pink-200 bg-white"
//     />
//     {suggestions.length > 0 && (
//       <ul className="absolute z-10 bg-white border border-pink-200 mt-1 w-full rounded-xl max-h-40 overflow-auto">
//         {suggestions.map((s, i) => (
//           <li
//             key={i}
//             onClick={() => {
//               setValue(s);
//             }}
//             className="px-3 py-1 hover:bg-pink-100 cursor-pointer text-sm"
//           >
//             {s}
//           </li>
//         ))}
//       </ul>
//     )}
//   </div>
// );

// export default AllFiles;







// import { useEffect, useState } from "react";
// import axios from "axios";
// import useDebounce from "../hooks/useDebounce";

// const AllFiles = () => {
//   const [files, setFiles] = useState([]);

//   const [userType, setUserType] = useState("college");
//   const [branch, setBranch] = useState("");
//   const [semester, setSemester] = useState("");
//   const [subject, setSubject] = useState("");
//   const [college, setCollege] = useState("");
//   const [school, setSchool] = useState("");
//   const [classLevel, setClassLevel] = useState("");
//   const [term, setTerm] = useState("");
//   const [examType, setExamType] = useState("");

  


//   const [previewFile, setPreviewFile] = useState(null);

//   const [subjectSuggestions, setSubjectSuggestions] = useState([]);
//   const [collegeSuggestions, setCollegeSuggestions] = useState([]);
//   const [schoolSuggestions, setSchoolSuggestions] = useState([]);
//   const [branchSuggestions, setBranchSuggestions] = useState([]);

//   const debouncedSubject = useDebounce(subject, 300);
//   const debouncedCollege = useDebounce(college, 300);
//   const debouncedSchool = useDebounce(school, 300);
//   const debouncedBranch = useDebounce(branch, 300);

//   const fetchFiles = async () => {
//     try {
//       const params = { userType };
//       if (subject) params.subject = subject;
//       if (examType) {
//   params.examType = examType;
// }

//       if (userType === "college") {
//         if (college) params.college = college;
//         if (branch) params.branch = branch;
//         if (semester) params.semester = semester;
//       } else {
//         if (school) params.school = school;
//         if (classLevel) params.classLevel = classLevel;
//         if (term) params.term = term;
//       }
//       const res = await axios.get("http://localhost:5000/api/files", { params });
//       setFiles(res.data);
//     } catch (err) {
//       console.error("Error fetching files", err);
//     }
//   };

//   const fetchSuggestions = async (field, query, setter) => {
//     if (!query || query.length < 2) return setter([]);
//     try {
//       const res = await axios.get(
//         `http://localhost:5000/api/files/suggestions?field=${field}&query=${encodeURIComponent(query)}`
//       );
//       setter(res.data);
//     } catch (err) {
//       console.error(`❌ Error fetching ${field} suggestions:`, err.message);
//       setter([]);
//     }
//   };

//   useEffect(() => {
//     fetchFiles();
//   }, [userType, branch, semester, subject, college, school, classLevel, term, examType]);

//   useEffect(() => {
//     fetchSuggestions("subject", debouncedSubject, setSubjectSuggestions);
//   }, [debouncedSubject]);

//   useEffect(() => {
//   setExamType("");
// }, [userType]);


//   useEffect(() => {
//     fetchSuggestions("college", debouncedCollege, setCollegeSuggestions);
//   }, [debouncedCollege]);

//   useEffect(() => {
//     fetchSuggestions("school", debouncedSchool, setSchoolSuggestions);
//   }, [debouncedSchool]);

//   useEffect(() => {
//     fetchSuggestions("branch", debouncedBranch, setBranchSuggestions);
//   }, [debouncedBranch]);

//   const pastelClasses = [
//     "bg-pink-100 text-pink-900 border-pink-200",
//     "bg-purple-100 text-purple-900 border-purple-200",
//     "bg-emerald-100 text-emerald-900 border-emerald-200",
//     "bg-yellow-100 text-yellow-900 border-yellow-200",
//     "bg-rose-100 text-rose-900 border-rose-200",
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 px-4 py-10 font-inter">
//       <div className="max-w-6xl mx-auto space-y-6">

//         {/* User Type Toggle */}
//         <div className="flex gap-4">
//           <button
//             onClick={() => setUserType("college")}
//             className={`px-4 py-2 rounded-xl ${userType === "college" ? "bg-pink-600 text-white" : "bg-white border border-pink-200 text-pink-600"}`}
//           >
//             College
//           </button>
//           <button
//             onClick={() => setUserType("school")}
//             className={`px-4 py-2 rounded-xl ${userType === "school" ? "bg-rose-600 text-white" : "bg-white border border-rose-200 text-rose-600"}`}
//           >
//             School
//           </button>
//         </div>

//         {/* Filters */}
//         <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row md:flex-wrap gap-4 border border-rose-100">

//           {/* 🔍 Subject Filter */}
//           <AutoInput value={subject} setValue={setSubject} suggestions={subjectSuggestions} placeholder="🔍 Subject" />
//           <select
//   value={examType}
//   onChange={(e) => setExamType(e.target.value)}
//   className="w-full md:flex-1 p-2 rounded-xl border border-pink-200 bg-white"
// >
//   <option value="">📚 All Types</option>
//   {/* <option value="Mid">📝 Mid-Term</option>
//   <option value="End">📖 End-Term</option> */}
//   <option value="Notes">🗒️ Notes</option>
// </select>


//           {userType === "college" ? (
//             <>
//               <AutoInput value={college} setValue={setCollege} suggestions={collegeSuggestions} placeholder="🎓 College" />
//               <AutoInput value={branch} setValue={setBranch} suggestions={branchSuggestions} placeholder="🧠 Branch" />
//               <select
//                 value={semester}
//                 onChange={(e) => setSemester(e.target.value)}
//                 className="w-full md:flex-1 p-2 rounded-xl border border-pink-200 bg-white"
//               >
//                 <option value="">Semester</option>
//                 {[...Array(8)].map((_, i) => (
//                   <option key={i + 1} value={i + 1}>Sem {i + 1}</option>
//                 ))}
//               </select>
//             </>
//           ) : (
//             <>
//               <AutoInput value={school} setValue={setSchool} suggestions={schoolSuggestions} placeholder="🏫 School" />
//               <select
//                 value={classLevel}
//                 onChange={(e) => setClassLevel(e.target.value)}
//                 className="w-full md:flex-1 p-2 rounded-xl border border-rose-200 bg-white"
//               >
//                 <option value="">Select Class</option>
//                 {["9", "10", "11", "12"].map((c) => <option key={c}>{c}</option>)}
//               </select>
//               <select
//                 value={term}
//                 onChange={(e) => setTerm(e.target.value)}
//                 className="w-full md:flex-1 p-2 rounded-xl border border-rose-200 bg-white"
//               >
//                 <option value="">Select Term</option>
//                 {["Mid-Term", "Final", "Pre-Board"].map((t) => <option key={t}>{t}</option>)}
//               </select>
//             </>
//           )}
//         </div>

//         {/* File Cards */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {files.length === 0 ? (
//             <p className="text-gray-500 col-span-full text-center">No files found.</p>
//           ) : (
//             files.map((file, idx) => (
//               <div
//                 key={file._id}
//                 className={`rounded-2xl border shadow-md p-4 hover:scale-[1.02] transition-all duration-200 ${pastelClasses[idx % pastelClasses.length]}`}
//               >
//                 {/* <h3 className="text-lg font-semibold">{file.subject}</h3> */}
//                 <h3 className="text-lg font-semibold">
//   {file.subject}
//   {file.examType && (
//     <span className="ml-2 text-xs bg-purple-200 text-purple-800 px-2 py-0.5 rounded-full">
//       {file.examType}
//     </span>
//   )}
// </h3>

//                 {userType === "college" ? (
//                   <>
//                     <p className="text-sm">📘 Branch: {file.branch}</p>
//                     <p className="text-sm">🎓 Sem: {file.semester}</p>
//                     <p className="text-sm">🏛️ {file.college}</p>
//                   </>
//                 ) : (
//                   <>
//                     <p className="text-sm">🏫 {file.school}</p>
//                     <p className="text-sm">Class {file.classLevel}</p>
//                     <p className="text-sm">{file.term}</p>
//                   </>
//                 )}
//                 {/* <p className="text-xs mt-2">👤 {file.uploader?.name || "Unknown"}</p> */}
//                 <p className="text-xs mt-2">👤 {file.uploader?.name || "Unknown"}</p>

// {file.duplicateCount > 1 && (
//   <p className="text-xs mt-1 text-blue-700 font-medium">
//     🔁 {file.duplicateCount} Versions Available
//   </p>
// )}

//                 <div className="flex gap-2 mt-4">
//                   <button
//                     onClick={() => setPreviewFile(file.storedName)}
//                     className="bg-white border border-purple-300 text-purple-800 text-sm px-3 py-1 rounded hover:bg-purple-100"
//                   >
//                     👁️ Preview
//                   </button>
//                   <a
//                     href={`http://localhost:5000/api/files/download/${file.storedName}`}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="bg-purple-200 text-purple-900 text-sm px-4 py-1 rounded hover:bg-purple-300"
//                   >
//                     ⬇️ Download
//                   </a>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>

//       {/* Preview Modal */}
//       {previewFile && (
//         <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-xl p-4 w-full max-w-3xl h-[80vh] relative">
//             <button
//               onClick={() => setPreviewFile(null)}
//               className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
//             >
//               ✖
//             </button>
//             {/* <iframe
//               src={`http://localhost:5000/api/files/view/${previewFile}`}
//               className="w-full h-full rounded"
//               title="PDF Preview"
//             /> */}
//             {previewFile?.endsWith('.pdf') ? (
//   <embed
//     src={`http://localhost:5000/api/files/view/${previewFile}`}
//     type="application/pdf"
//     width="100%"
//     height="600px"
//   />
// ) : (
//   <img
//     src={`http://localhost:5000/uploads/${previewFile}`}
//     alt="Preview"
//     className="w-full max-h-[600px] object-contain"
//   />
// )}

//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // 🔤 Autocomplete Input Field Component
// const AutoInput = ({ value, setValue, suggestions, placeholder }) => (
//   <div className="relative w-full md:flex-1">
//     <input
//       type="text"
//       placeholder={placeholder}
//       value={value}
//       onChange={(e) => setValue(e.target.value)}
//       className="w-full p-2 rounded-xl border border-pink-200 bg-white"
//     />
//     {suggestions.length > 0 && (
//       <ul className="absolute z-10 bg-white border border-pink-200 mt-1 w-full rounded-xl max-h-40 overflow-auto">
//         {suggestions.map((s, i) => (
//           <li
//             key={i}
//             onClick={() => {
//               setValue(s);
//             }}
//             className="px-3 py-1 hover:bg-pink-100 cursor-pointer text-sm"
//           >
//             {s}
//           </li>
//         ))}
//       </ul>
//     )}
//   </div>
// );

// export default AllFiles;



import { useEffect, useState } from "react";
import axios from "axios";
import useDebounce from "../hooks/useDebounce";

const AllFiles = () => {
  const [files, setFiles] = useState([]);
  const [userType, setUserType] = useState("college");
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState("");
  const [college, setCollege] = useState("");
  const [school, setSchool] = useState("");
  const [classLevel, setClassLevel] = useState("");
  const [term, setTerm] = useState("");
  const [examType, setExamType] = useState("");
  const [previewFile, setPreviewFile] = useState(null);

  const [subjectSuggestions, setSubjectSuggestions] = useState([]);
  const [collegeSuggestions, setCollegeSuggestions] = useState([]);
  const [schoolSuggestions, setSchoolSuggestions] = useState([]);
  const [branchSuggestions, setBranchSuggestions] = useState([]);

  // ⭐ Feedback states
  const [feedbacks, setFeedbacks] = useState({});
  const [newFeedback, setNewFeedback] = useState({});
  const [showFeedback, setShowFeedback] = useState({}); // 🔥 NEW

  const debouncedSubject = useDebounce(subject, 300);
  const debouncedCollege = useDebounce(college, 300);
  const debouncedSchool = useDebounce(school, 300);
  const debouncedBranch = useDebounce(branch, 300);

  // ---------------- FETCH FILES ----------------
  const fetchFiles = async () => {
    try {
      const params = { userType };
      if (subject) params.subject = subject;
      if (examType) params.examType = examType;

      if (userType === "college") {
        if (college) params.college = college;
        if (branch) params.branch = branch;
        if (semester) params.semester = semester;
      } else {
        if (school) params.school = school;
        if (classLevel) params.classLevel = classLevel;
        if (term) params.term = term;
      }
      const res = await axios.get("http://localhost:5000/api/files", { params });
      setFiles(res.data);
    } catch (err) {
      console.error("Error fetching files", err);
    }
  };

  // ---------------- FETCH SUGGESTIONS ----------------
  const fetchSuggestions = async (field, query, setter) => {
    if (!query || query.length < 2) return setter([]);
    try {
      const res = await axios.get(
        `http://localhost:5000/api/files/suggestions?field=${field}&query=${encodeURIComponent(query)}`
      );
      setter(res.data);
    } catch (err) {
      console.error(`❌ Error fetching ${field} suggestions:`, err.message);
      setter([]);
    }
  };

  // ---------------- FETCH FEEDBACK ----------------
  const fetchFeedback = async (fileId) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/feedback/${fileId}`);
      setFeedbacks((prev) => ({ ...prev, [fileId]: res.data }));
    } catch (err) {
      console.error("Error fetching feedback:", err);
    }
  };

  // ---------------- SUBMIT FEEDBACK ----------------
  const submitFeedback = async (fileId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login to submit feedback!");
        return;
      }
      await axios.post(
        `http://localhost:5000/api/feedback/${fileId}`,
        newFeedback[fileId],
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchFeedback(fileId);
      setNewFeedback((prev) => ({ ...prev, [fileId]: { rating: "", comment: "" } }));
    } catch (err) {
      console.error("Error submitting feedback:", err);
    }
  };

  // ---------------- USE EFFECTS ----------------
  useEffect(() => {
    fetchFiles();
  }, [userType, branch, semester, subject, college, school, classLevel, term, examType]);

  useEffect(() => {
    fetchSuggestions("subject", debouncedSubject, setSubjectSuggestions);
  }, [debouncedSubject]);

  useEffect(() => {
    setExamType("");
  }, [userType]);

  useEffect(() => {
    fetchSuggestions("college", debouncedCollege, setCollegeSuggestions);
  }, [debouncedCollege]);

  useEffect(() => {
    fetchSuggestions("school", debouncedSchool, setSchoolSuggestions);
  }, [debouncedSchool]);

  useEffect(() => {
    fetchSuggestions("branch", debouncedBranch, setBranchSuggestions);
  }, [debouncedBranch]);

  // ---------------- STYLE CLASSES ----------------
  const pastelClasses = [
    "bg-pink-100 text-pink-900 border-pink-200",
    "bg-purple-100 text-purple-900 border-purple-200",
    "bg-emerald-100 text-emerald-900 border-emerald-200",
    "bg-yellow-100 text-yellow-900 border-yellow-200",
    "bg-rose-100 text-rose-900 border-rose-200",
  ];

  // ---------------- RENDER ----------------
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 px-4 py-10 font-inter">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* User Type Toggle */}
        <div className="flex gap-4">
          <button
            onClick={() => setUserType("college")}
            className={`px-4 py-2 rounded-xl ${
              userType === "college"
                ? "bg-pink-600 text-white"
                : "bg-white border border-pink-200 text-pink-600"
            }`}
          >
            College
          </button>
          <button
            onClick={() => setUserType("school")}
            className={`px-4 py-2 rounded-xl ${
              userType === "school"
                ? "bg-rose-600 text-white"
                : "bg-white border border-rose-200 text-rose-600"
            }`}
          >
            School
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-md p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border border-rose-100">
          <AutoInput value={subject} setValue={setSubject} suggestions={subjectSuggestions} placeholder="🔍 Subject" />
          <select
            value={examType}
            onChange={(e) => setExamType(e.target.value)}
            className="w-full md:flex-1 p-2 rounded-xl border border-pink-200 bg-white"
          >
            <option value="">📚 All Types</option>
            <option value="Notes">🗒️ Notes</option>
          </select>

          {userType === "college" ? (
            <>
              <AutoInput value={college} setValue={setCollege} suggestions={collegeSuggestions} placeholder="🎓 College" />
              <AutoInput value={branch} setValue={setBranch} suggestions={branchSuggestions} placeholder="🧠 Branch" />
              <select
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="w-full md:flex-1 p-2 rounded-xl border border-pink-200 bg-white"
              >
                <option value="">Semester</option>
                {[...Array(8)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    Sem {i + 1}
                  </option>
                ))}
              </select>
            </>
          ) : (
            <>
              <AutoInput value={school} setValue={setSchool} suggestions={schoolSuggestions} placeholder="🏫 School" />
              <select
                value={classLevel}
                onChange={(e) => setClassLevel(e.target.value)}
                className="w-full md:flex-1 p-2 rounded-xl border border-rose-200 bg-white"
              >
                <option value="">Select Class</option>
                {["9", "10", "11", "12"].map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              <select
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                className="w-full md:flex-1 p-2 rounded-xl border border-rose-200 bg-white"
              >
                <option value="">Select Term</option>
                {["Mid-Term", "Final", "Pre-Board"].map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </>
          )}
        </div>

        {/* File Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {files.length === 0 ? (
            <p className="text-gray-500 col-span-full text-center">No files found.</p>
          ) : (
            files.map((file, idx) => (
              <div
                key={file._id}
                className={`rounded-2xl border shadow-md p-4 hover:scale-[1.02] transition-all duration-200 ${
                  pastelClasses[idx % pastelClasses.length]
                }`}
              >
                <h3 className="text-lg font-semibold">
                  {file.subject}
                  {file.examType && (
                    <span className="ml-2 text-xs bg-purple-200 text-purple-800 px-2 py-0.5 rounded-full">
                      {file.examType}
                    </span>
                  )}
                </h3>

                {userType === "college" ? (
                  <>
                    <p className="text-sm">📘 Branch: {file.branch}</p>
                    <p className="text-sm">🎓 Sem: {file.semester}</p>
                    <p className="text-sm">🏛️ {file.college}</p>
                  </>
                ) : (
                  <>
                    <p className="text-sm">🏫 {file.school}</p>
                    <p className="text-sm">Class {file.classLevel}</p>
                    <p className="text-sm">{file.term}</p>
                  </>
                )}
                <p className="text-xs mt-2">👤 {file.uploader?.name || "Unknown"}</p>

                {file.duplicateCount > 1 && (
                  <p className="text-xs mt-1 text-blue-700 font-medium">
                    🔁 {file.duplicateCount} Versions Available
                  </p>
                )}

                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => setPreviewFile(file.storedName)}
                    className="bg-white border border-purple-300 text-purple-800 text-sm px-3 py-1 rounded hover:bg-purple-100"
                  >
                    👁️ Preview
                  </button>
                  <a
                    href={`http://localhost:5000/api/files/download/${file.storedName}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-purple-200 text-purple-900 text-sm px-4 py-1 rounded hover:bg-purple-300"
                  >
                    ⬇️ Download
                  </a>
                </div>

                {/* ⭐ Feedback Section */}
                <div className="mt-4">
                  <button
                    onClick={() => {
                      if (!showFeedback[file._id]) {
                        fetchFeedback(file._id); // fetch only first time
                      }
                      setShowFeedback((prev) => ({
                        ...prev,
                        [file._id]: !prev[file._id],
                      }));
                    }}
                    className="text-sm text-blue-600 underline"
                  >
                    {showFeedback[file._id] ? "🙈 Hide Feedback" : "💬 View Feedback"}
                  </button>

                  {/* Show feedback only if toggled ON */}
                  {showFeedback[file._id] && (
                    <>
                      {feedbacks[file._id]?.length > 0 ? (
                        feedbacks[file._id].map((fb, i) => (
                          <div key={i} className="border-t border-gray-200 mt-2 pt-2 text-sm">
                            ⭐ {fb.rating}/5 — {fb.comment} <br />
                            👤 {fb.user?.name}
                          </div>
                        ))
                      ) : (
                        <p className="text-xs mt-2 text-gray-500">No feedback yet.</p>
                      )}

                      {/* Add Feedback */}
                      <div className="mt-2 flex flex-col gap-2">
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span
                              key={star}
                              onClick={() =>
                                setNewFeedback((prev) => ({
                                  ...prev,
                                  [file._id]: { ...prev[file._id], rating: star },
                                }))
                              }
                              className={`cursor-pointer text-xl ${
                                (newFeedback[file._id]?.rating || 0) >= star
                                  ? "text-yellow-500"
                                  : "text-gray-300"
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>

                        <input
                          type="text"
                          placeholder="Write a comment"
                          value={newFeedback[file._id]?.comment || ""}
                          onChange={(e) =>
                            setNewFeedback((prev) => ({
                              ...prev,
                              [file._id]: { ...prev[file._id], comment: e.target.value },
                            }))
                          }
                          className="p-2 border rounded w-full text-sm resize-none h-16"
                        />
                        <button
                          onClick={() => submitFeedback(file._id)}
                          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1.5 rounded-lg text-sm shadow hover:opacity-90 transition"
                        >
                          🚀 Submit Feedback
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Preview Modal */}
      {previewFile && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-4 w-full max-w-3xl h-[80vh] relative">
            <button
              onClick={() => setPreviewFile(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
            >
              ✖
            </button>
            {previewFile?.endsWith(".pdf") ? (
              <embed
                src={`http://localhost:5000/api/files/view/${previewFile}`}
                type="application/pdf"
                width="100%"
                height="600px"
              />
            ) : (
              <img
                src={`http://localhost:5000/uploads/${previewFile}`}
                alt="Preview"
                className="w-full max-h-[600px] object-contain"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// 🔤 Autocomplete Input Field Component
const AutoInput = ({ value, setValue, suggestions, placeholder }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);

  return (
    <div className="relative w-full md:flex-1">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setShowSuggestions(true);
        }}
        className="w-full p-2 rounded-xl border border-pink-200 bg-white"
        onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
        onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white border border-pink-200 mt-1 w-full rounded-xl max-h-40 overflow-auto">
          {suggestions.map((s, i) => (
            <li
              key={i}
              onClick={() => {
                setValue(s);
                setShowSuggestions(false);
              }}
              className="px-3 py-1 hover:bg-pink-100 cursor-pointer text-sm"
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllFiles;
