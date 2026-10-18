import React, { useContext, useState } from "react";
import { Context } from "../main";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const inputClass =
  "w-full min-w-0 p-3 text-sm sm:text-base border border-gray-400 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated, url } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://hms-backend-czxa.onrender.com/api/v1/user/login",
        {
          email,
          password,
          confirmPassword,
          role: "Patient",
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      setIsAuthenticated(true);
      toast.success(response.data.message);
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center bg-slate-300 px-4 py-8 sm:py-12">
      <div className="w-full max-w-md flex flex-col items-center">
        <h1 className="font-bold text-xl sm:text-2xl my-2">Sign In</h1>
        <p className="text-gray-600 text-sm sm:text-base p-2 text-center">
          Please Login To Continue
        </p>

        <form
          onSubmit={handleLogin}
          className="w-full flex flex-col items-center gap-4"
        >
          <input
            className={inputClass}
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={inputClass}
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className={inputClass}
            type="password"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div className="flex flex-wrap justify-center items-center text-sm sm:text-base">
            <p className="text-gray-600 p-2">Not Registered?</p>
            <Link to="/register" className="text-blue-700">
              Register Now
            </Link>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto bg-black py-3 px-8 font-bold text-white rounded-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;