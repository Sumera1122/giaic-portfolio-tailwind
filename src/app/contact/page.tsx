"use client"; 

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Sending data to the API route
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ fullName, email, message }),
    });

    const data = await res.json();
    if (data.success) {
      alert("Message sent successfully!");
      setFullName("");
      setEmail("");
      setMessage("");
    } else {
      setError(data.message || "Something went wrong.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="w-full h-full flex justify-center items-center mt-10 space-x-64">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 mt-20 text-lime-400 md:bg-lime-400 backdrop-blur md:text-black md:w-[40%] md:h-[80%] md:m-20  md:p-10"
      >
        <h5 className="flex justify-center items-center  mb-10 text-[26px] md:text-3xl border-b-2 border-lime-400 md:border-black font-extrabold leading-8 md:mt-10  md:mr-10">
          Get in Touch
        </h5>

        {/* Full Name */}
        <div className="flex justify-center mt-20 items-center gap-2 md:mt-8">
          <label htmlFor="fullname" className="text-[20px] md:text-[22px] font-bold md:text-xl mr-4">
            Full Name
          </label>
          <input
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            type="text"
            id="fullname"
            placeholder="Your Name"
            className="p-2 rounded-[2px] bg-transparent border border-lime-400 md:bg-black md:text-white"
            required
          />
        </div>

        {/* Email */}
        <div className="flex justify-center items-center gap-12">
          <label htmlFor="email" className="text-[20px]  ml-2 font-bold md:text-xl mr-4">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            placeholder="example@example.com"
            className="p-2 rounded-[2px] bg-transparent border border-lime-400 md:bg-black md:ml-3" 
            required
          />
        </div>

        {/* Message */}
        <div className="flex justify-center items-center">
          <label htmlFor="message" className="text-[18px] font-bold md:text-xl mr-10 ml-[-5px]">
            Message
          </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            name="message"
            id="message"
            placeholder="Your message"
            className="p-2 rounded-[2px] w-[230px] bg-transparent border  border-lime-400 md:bg-black md:text-white  md:mr-2"
            required
          ></textarea>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button
            type="submit"
            variant="outline"
            className="mt-8 bg-black text-lime-400 w-[260px] h-[40px] md:w-[350px] md:p-4 ml-30"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
