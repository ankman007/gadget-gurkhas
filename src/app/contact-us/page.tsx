"use client";
import { useState, useEffect } from "react";
import Header from "../components/LogoBanner";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

interface ContactDetails {
  name: string;
  email: string;
  message: string;
  submitted: boolean;
  error: string;
}

export default function ContactUsPage() {
  const [ contactDetails, setContactDetails ] = useState<ContactDetails>({
    name: '',
    email: '',
    message: '',
    submitted: false,
    error: '';
  });


  const handleFormCange = (e: React.ChangeEvent<HTMLFormInputElement | HTMLTextAreaElement>) => {
    setContactDetails({...contactDetails, [e.target.name]: e.target.value });
  }

  const handleFormSubmission = (e: React.FormEvent<HTMLFormEvent>) => {
    e.preventDefault();
    console.log(contactDetails)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactDetails.email)) {
      setContactDetails({ ...contactDetails, error: "Invalid email address" });
      return;
    }

    setContactDetails({
      name: '', 
      email: '', 
      message: '', 
      submitted: true,
      error: '',
    });
  };  

  return (
    <>

    <Navigation />
      <Header />
      <div className="container mx-auto my-8 p-8 bg-gray-100 rounded-xl">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
        {!contactDetails.submitted ? (

        <form className="max-w-md mx-auto" onSubmit={handleFormSubmission}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Name
            </label>
            <input 
              type="text" 
              id="name"
              name="name" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
              placeholder="Your name" 
              required 
              value={contactDetails.name} 
              onChange={handleFormCange}/>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
              placeholder="Your email" 
              required 
              value={contactDetails.email} 
              onChange={handleFormCange}/>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-blue-500" 
              placeholder="Your message" 
              required 
              value={contactDetails.message} 
              onChange={handleFormCange}></textarea>
          </div>

          <div className="text-center">
            <button 
              type="submit" 
              className="bg-blue-900 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              Submit
            </button>
          </div>

        </form>
        ) : ( 
          <p className="container flex mx-auto justify-center">
            Thank your for you message. We will get back to you as soon as possible.
          </p> 
        ) }
      </div>
      <Footer />
    </>
  )
}