import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../main";
import axios from "axios";
import { toast } from "react-toastify";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get(
        "https://hms-backend-czxa.onrender.com/api/v1/user/patient/logout",
        { withCredentials: true }
      );

      toast.success(res.data.message);
      setIsAuthenticated(false);
      setShow(false);
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Logout failed");
    }
  };

  const gotoLogin = () => {
    setShow(false);
    navigate("/login");
  };

  const closeMenu = () => setShow(false);

  const linkClasses =
    "text-sm font-medium transition-colors hover:text-blue-700";

  const authButtonClasses =
    "rounded-full bg-blue-950 px-5 py-2 text-sm font-bold text-white shadow-md transition-colors hover:bg-blue-800";

  return (
    <nav className="sticky top-0 z-50 w-full max-w-full bg-slate-300">
      <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="shrink-0"
        >
          <img
            src="/logo.png"
            alt="ZeeCare Medical Institute"
            className="h-12 w-auto max-w-[145px] object-contain sm:h-14 sm:max-w-[190px] lg:h-16 lg:max-w-[208px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden min-w-0 flex-1 items-center justify-end gap-5 md:flex lg:gap-8">
          <Link to="/" className={linkClasses}>
            HOME
          </Link>

          <Link to="/appointment" className={linkClasses}>
            APPOINTMENT
          </Link>

          <Link to="/about" className={linkClasses}>
            ABOUT US
          </Link>

          <a
            href="https://hms-admins-dashboard.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClasses}
          >
            DASHBOARD
          </a>

          {isAuthenticated ? (
            <button
              type="button"
              onClick={handleLogout}
              className={authButtonClasses}
            >
              LOGOUT
            </button>
          ) : (
            <button
              type="button"
              onClick={gotoLogin}
              className={authButtonClasses}
            >
              LOGIN
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setShow((prev) => !prev)}
          className="shrink-0 p-2 text-2xl text-blue-950 md:hidden"
          aria-label={show ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={show}
        >
          {show ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {show && (
        <div className="absolute left-0 top-full flex w-full max-w-full flex-col items-center gap-5 border-t border-slate-400 bg-slate-300 px-4 py-6 shadow-md md:hidden">
          <Link to="/" onClick={closeMenu} className={linkClasses}>
            HOME
          </Link>

          <Link
            to="/appointment"
            onClick={closeMenu}
            className={linkClasses}
          >
            APPOINTMENT
          </Link>

          <Link to="/about" onClick={closeMenu} className={linkClasses}>
            ABOUT US
          </Link>

          <a
            href="https://hms-admins-dashboard.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className={linkClasses}
          >
            DASHBOARD
          </a>

          {isAuthenticated ? (
            <button
              type="button"
              onClick={handleLogout}
              className={authButtonClasses}
            >
              LOGOUT
            </button>
          ) : (
            <button
              type="button"
              onClick={gotoLogin}
              className={authButtonClasses}
            >
              LOGIN
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;