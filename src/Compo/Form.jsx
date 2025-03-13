import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { div } from "framer-motion/client";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [cont,setCont] = useState("")
  const [countdown, setCountdown] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (countdown > 0) return;

    setCountdown(5);
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(countdownInterval);
        }
        return prev - 1;
      });
    }, 1000);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams, // ✅ Correct format
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("SUCCESS!", response.status, response.text);
      setStatus("Message sent successfully! ✅ ");
      setCont("We will Contact within next 24hr")
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("FAILED...", error);
      setStatus("Failed to send message. ❌");

    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 dark:bg-[#15182b] group dark:hover:shadow-[0_0_20px_#0ff] dark:shadow-[0_0_5px_#0ff] hover:shadow-[0_8px_16px_rgba(176,224,230,0.8)] bg-gray-300 dark:text-white text-gray-900 rounded-xl ">
      <div className="flex flex-col items-center gap-2 my-2">
      <h2 className="text-2xl font-bold  text-center group-hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out group-hover:[text-shadow:0_0_15px_#374151]">Contact Us</h2>
      <div className="bg-green-500 w-12 h-1 group-hover:bg-orange-500"></div>
      </div>
      {status && <div className="flex items-center justify-center flex-col  my-2">
        <p className="text-center ">{status}</p>
        <p className="text-center ">{cont}</p>
      </div>
                  
        }
      <form onSubmit={handleSubmit} className="space-y-4 ">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 font-semibold sm:text-xl rounded-2xl dark:hover:border-emerald-500 border dark:bg-transparent bg-white dark:placeholder:text-gray-300 text-gray-800 placeholder:text-gray-700 border-gray-600 dark:text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 font-semibold sm:text-xl rounded-2xl  dark:hover:border-emerald-500  dark:bg-transparent bg-white dark:placeholder:text-gray-300 text-gray-800 placeholder:text-gray-700 border border-gray-600 dark:text-white"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full font-semibold sm:text-xl p-2 rounded-2xl  dark:hover:border-emerald-500 border dark:bg-transparent bg-white dark:placeholder:text-gray-300 placeholder:text-gray-700 text-gray-800 border-gray-600 dark:text-white"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-2 font-semibold  dark:bg-transparent bg-white dark:placeholder:text-gray-300 placeholder:text-gray-700 rounded-2xl  border dark:hover:border-emerald-500 border-gray-600 dark:text-white text-gray-800"
        />
        <button
          type="submit"
          disabled={countdown > 0}
          className={`w-full p-2 rounded-2xl text-white font-bold ${
            countdown > 0
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {countdown > 0 ? `Wait ${countdown}s...` : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Form;
