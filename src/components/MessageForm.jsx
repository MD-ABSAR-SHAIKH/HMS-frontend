import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";

const MessageForm = () => {
  const { url } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://hms-backend-czxa.onrender.com/api/v1/message/send",
        { firstName, lastName, phone, email, message },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success(res.data.message);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Unable to send your message."
      );
    }
  };

  return (
    <section className="w-full max-w-full overflow-x-clip px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-4xl rounded-xl bg-white p-4 shadow-md sm:p-6 md:p-8">
        <h2 className="py-2 text-center text-2xl font-bold sm:text-3xl">
          Send Us a Message
        </h2>

        <p className="mb-6 mt-2 text-center text-sm text-gray-600 sm:text-base">
          Have a question? Get in touch with our team.
        </p>

        <form onSubmit={handleMessage} className="w-full">
          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 gap-4 py-3 sm:grid-cols-2">
            <input
              className="w-full min-w-0 rounded-md border border-gray-300 p-3 outline-none transition focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
              type="text"
              placeholder="First Name"
              aria-label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />

            <input
              className="w-full min-w-0 rounded-md border border-gray-300 p-3 outline-none transition focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
              type="text"
              placeholder="Last Name"
              aria-label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-1 gap-4 py-3 sm:grid-cols-2">
            <input
              className="w-full min-w-0 rounded-md border border-gray-300 p-3 outline-none transition focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              className="w-full min-w-0 rounded-md border border-gray-300 p-3 outline-none transition focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
              type="tel"
              placeholder="Phone Number"
              aria-label="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* Message */}
          <div className="mt-3">
            <textarea
              className="w-full min-w-0 resize-y rounded-md border border-gray-300 p-3 outline-none transition focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
              rows={6}
              placeholder="Write your message here..."
              aria-label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="w-full rounded-md bg-violet-600 px-8 py-3 font-semibold text-white shadow-md transition hover:bg-violet-700 sm:w-auto"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MessageForm;