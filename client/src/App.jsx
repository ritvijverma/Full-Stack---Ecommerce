import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
import Policy from "./pages/Policy";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import ForgotPassword from "./Auth/ForgotPassword";
import Dashboard from "./components/user/Dashboard";
import AdminRoute from "./components/Routes/AdminRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import UserRoute from "./components/Routes/UserRoute";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard">
          {/* User Dashboard */}
          <Route element={<UserRoute />}>
            <Route path="user" element={<Dashboard />} />
          </Route>

          {/* Admin Dashboard */}
          <Route element={<AdminRoute />}>
            <Route path="admin" element={<AdminDashboard />} />
          </Route>
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <ToastContainer />
    </>
  );
};

export default App;
