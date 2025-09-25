





import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AllFiles from "./pages/AllFiles";
import Upload from "./pages/Upload";
import Navbar from "./components/Navbar";
import Leaderboard from "./pages/Leaderboard";
import Landing from "./pages/Landing"; // ✅ NEW

// 🔐 Protected Route Wrapper
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* ✅ Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Public Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* ✅ Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/files"
          element={
            <PrivateRoute>
              <AllFiles />
            </PrivateRoute>
          }
        />
        <Route
          path="/upload"
          element={
            <PrivateRoute>
              <Upload />
            </PrivateRoute>
          }
        />
         <Route
          path="/leaderboard"
          element={
            <PrivateRoute>
              <Leaderboard />
            </PrivateRoute>
          }
        />

        {/* 🚫 Catch-all */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;





// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import AllFiles from "./pages/AllFiles";
// import Upload from "./pages/Upload";
// import Leaderboard from "./pages/Leaderboard";
// import FeedbackWidget from "./components/FeedbackWidget";


// import Navbar from "./components/Navbar";

// // 🔐 Protected Route
// const PrivateRoute = ({ children }) => {
//   const token = localStorage.getItem("token");
//   return token ? children : <Navigate to="/login" />;
// };

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Register />} />
//         <Route path="/login" element={<Login />} />

//         {/* Protected Routes */}
//         <Route
//           path="/dashboard"
//           element={
//             <PrivateRoute>
//               <Dashboard />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/files"
//           element={
//             <PrivateRoute>
//               <AllFiles />
//             </PrivateRoute>
//           }
//         />
     
//         <Route
//           path="/upload"
//           element={
//             <PrivateRoute>
//               <Upload />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/leaderboard"
//           element={
//             <PrivateRoute>
//               <Leaderboard />
//             </PrivateRoute>
//           }
//         />

//         {/* Fallback */}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
