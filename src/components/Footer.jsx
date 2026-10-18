import React from "react";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const hours = [
    { id: 1, day: "Monday", time: "9:00 AM - 11:00 PM" },
    { id: 2, day: "Tuesday", time: "12:00 PM - 12:00 AM" },
    { id: 3, day: "Wednesday", time: "10:00 AM - 10:00 PM" },
    { id: 4, day: "Thursday", time: "9:00 AM - 9:00 PM" },
    { id: 5, day: "Friday", time: "3:00 PM - 9:00 PM" },
    { id: 6, day: "Saturday", time: "9:00 AM - 3:00 PM" },
  ];

  return (
    <footer className="w-full max-w-full min-w-0 overflow-x-clip mt-8">
      <hr className="w-5/6 mx-auto border-black" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 min-w-0">

          {/* Logo */}
          <div className="flex justify-center sm:justify-start items-start min-w-0">
            <img
              src="/logo.png"
              alt="Hospital Logo"
              className="w-44 sm:w-48 lg:w-52 max-w-full h-auto object-contain"
            />
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start gap-2 min-w-0">
            <h2 className="text-xl font-bold mb-1">Quick Links</h2>

            <Link to="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>

            <Link
              to="/appointment"
              className="hover:text-blue-600 transition-colors"
            >
              Appointment
            </Link>

            <Link
              to="/about"
              className="hover:text-blue-600 transition-colors"
            >
              About
            </Link>
          </div>

          {/* Working Hours */}
          <div className="w-full min-w-0">
            <h2 className="text-xl font-bold mb-3 text-center sm:text-left">
              Working Hours
            </h2>

            <ul className="space-y-2 w-full">
              {hours.map((e) => (
                <li
                  key={e.id}
                  className="flex flex-wrap justify-between gap-x-3 gap-y-1 text-sm min-w-0"
                >
                  <span className="font-medium">{e.day}</span>
                  <span className="text-gray-600 break-words">
                    {e.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-4 items-center sm:items-start min-w-0">
            <h2 className="text-xl font-bold">Contact Us</h2>

            <a
              href="tel:8002895833"
              className="flex gap-3 items-center max-w-full min-w-0 hover:text-blue-600 transition-colors"
            >
              <FaPhone className="shrink-0" />
              <span className="break-all">800 289 5833</span>
            </a>

            <a
              href="mailto:absarraza@gmail.com"
              className="flex gap-3 items-center max-w-full min-w-0 hover:text-blue-600 transition-colors"
            >
              <MdEmail className="shrink-0" />
              <span className="break-all">absarraza@gmail.com</span>
            </a>

            <span className="flex gap-3 items-center min-w-0">
              <FaLocationArrow className="shrink-0" />
              <span>Purnea, India</span>
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 mt-8 pt-5 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Hospital Management System. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;