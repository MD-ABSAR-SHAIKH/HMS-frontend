import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const inputClass =
  "w-full min-w-0 p-3 text-sm sm:text-base border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed";

const AppointmentForm = () => {
  const { isAuthenticated, setIsAuthenticated, url } = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);
  const [department, setDepartment] = useState("");

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Radiology",
    "Oncology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      const { data } = await axios.get(
        "https://hms-backend-czxa.onrender.com/api/v1/user/doctors",
        { withCredentials: true }
      );
      setDoctors(Array.isArray(data.doctors) ? data.doctors : [data.doctors]);
    };
    fetchDoctors();
  }, []);

  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      const hasVisitedBool = Boolean(hasVisited);
      const { data } = await axios.post(
        "https://hms-backend-czxa.onrender.com/api/v1/appointment/post",
        {
          firstName,
          lastName,
          email,
          phone,
          dob,
          nic,
          gender,
          appointment_date: appointmentDate,
          department,
          doctor_firstName: doctorFirstName,
          doctor_lastName: doctorLastName,
          address,
          hasVisited: hasVisitedBool,
        },
        { withCredentials: true }
      );
      toast.success(data.message);
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="w-full flex flex-col items-center py-6 sm:py-10">
      <h1 className="font-bold text-xl sm:text-2xl mb-4 sm:mb-6 text-gray-800 text-center">
        Book Your Appointment
      </h1>

      <form
        onSubmit={handleAppointment}
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 shadow-lg rounded-lg p-4 sm:p-6 lg:p-8"
      >
        <input
          className={inputClass}
          type="text"
          value={firstName}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className={inputClass}
          type="text"
          value={lastName}
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          className={inputClass}
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={inputClass}
          type="tel"
          value={phone}
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          className={inputClass}
          type="text"
          value={nic}
          placeholder="NIC"
          onChange={(e) => setNic(e.target.value)}
        />
        <select
          className={inputClass}
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <label className="flex flex-col gap-1 text-sm sm:text-base text-gray-600 min-w-0">
          Select DOB:
          <input
            className={inputClass}
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </label>
        <label className="flex flex-col gap-1 text-sm sm:text-base text-gray-600 min-w-0">
          Select Appointment Date:
          <input
            className={inputClass}
            type="date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
          />
        </label>

        <select
          className={inputClass}
          value={department}
          onChange={(e) => {
            setDepartment(e.target.value);
            setDoctorFirstName("");
            setDoctorLastName("");
          }}
        >
          <option value="">Select Department</option>
          {departmentsArray.map((depart, index) => (
            <option key={index} value={depart}>
              {depart}
            </option>
          ))}
        </select>
        <select
          className={inputClass}
          value={`${doctorFirstName} ${doctorLastName}`}
          onChange={(e) => {
            const [first, last] = e.target.value.split(" ");
            setDoctorFirstName(first);
            setDoctorLastName(last);
          }}
          disabled={!department}
        >
          <option value="">Select Doctor</option>
          {doctors
            .filter((doctor) => doctor.doctorDepartment === department)
            .map((doctor, index) => (
              <option
                key={index}
                value={`${doctor.firstName} ${doctor.lastName}`}
              >
                {doctor.firstName} {doctor.lastName}
              </option>
            ))}
        </select>

        <textarea
          className={`${inputClass} md:col-span-2 resize-y`}
          rows={4}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
        />

        <div className="md:col-span-2 flex items-center gap-2">
          <input
            id="hasVisited"
            type="checkbox"
            className="h-4 w-4"
            checked={hasVisited}
            onChange={(e) => setHasVisited(e.target.checked)}
          />
          <label
            htmlFor="hasVisited"
            className="text-sm sm:text-base text-gray-600"
          >
            Have you visited before?
          </label>
        </div>

        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Get Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;