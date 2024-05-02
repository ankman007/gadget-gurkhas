"use client";
import { useState } from "react";
import Navigation from "@/app/components/Navigation";
import Header from "@/app/components/LogoBanner";
import Footer from "@/app/components/Footer";

export default function MyComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // function for handle form submission
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    //logic
    console.log({ name, email, message });
    // reset fields
    setName("");
    setEmail("");
    setMessage("");
    setSubmitted(true);
  }
  return (
    <>
      <Navigation />
      <Header />

      <div className="container w-full rounded-xl bg-gray-100 mx-auto m-4 p-6 text-black flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 capitalize text-center">
          Contact Us
        </h2>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="m-2 p-2 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="m-2 p-2 border border-gray-300 rounded-lg"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              className="m-2 p-2 border border-gray-300 rounded-lg resize-none"
              rows={4}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg mt-4 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Submit
            </button>
          </form>
        ) : (
          <p className="text-lg">Thank you for your submission!</p>
        )}
      </div>
      <Footer />
    </>
  );
}
