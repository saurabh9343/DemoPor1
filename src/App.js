import { Route, Routes } from "react-router-dom";

// 🧍‍♂️ User imports
import Home from "./components/user/Home";
import About from "./components/user/About";
import Contact from "./components/user/Contact";
import Login from "./components/user/Login";
import Signup from "./components/user/Signup";
import Bank from "./components/user/Bank";
import Logout from "./components/user/Logout";
import ProtectedRoute from "./components/user/ProtectedRoute";
import UserLayout from "./components/user/UserLayout";

// 🧑‍💼 Admin imports
import AdminLogin from "./components/admin/Login";
import AdminLayout from "./components/admin/AdminLayout";
import Users from "./components/admin/Users";
import AdminDeshboard from "./components/admin/AdminDeshboard";
import AdminLogout from "./components/admin/AdminLogout";
import AdminProtectedRoute from "./components/admin/AdminProtectedRoute"; // ✅ Add this

const App = () => {
  return (
    <>
      <Routes>
        {/* ================= USER ROUTES ================= */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* 🔐 User Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/bank" element={<Bank />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Route>

        {/* ================= ADMIN ROUTES ================= */}

        {/* 🔓 Public Admin Login Route */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* 🔐 Protected Admin Routes with Outlet */}
        <Route
          path="/admin"
          element={
            <AdminProtectedRoute>
              <AdminLayout />
            </AdminProtectedRoute>
          }
        >
          <Route path="/admin/dashboard" element={<AdminDeshboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="logout" element={<AdminLogout />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
