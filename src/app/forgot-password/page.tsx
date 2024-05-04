"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/LogoBanner";

export default function ForgotPasswordPage() {
  const [user, setUser] = React.useState({

    email: ""
  });


  const onForgotPassword = async () => {

    console.log(user);
  };
  return (
<div className="min-h-screen bg-gray-300">
  <Header/>
  <div className="flex justify-center items-center  bg-opacity-40 p-5">
  <div className="container bg-white shadow-md rounded-lg p-8 w-96">
    <Link href={'/login'} className="mb-4"><FontAwesomeIcon className="arrow h-5" icon={faArrowLeft} /></Link>
    <h1 className="heading font-bold text-2xl mb-4 mt-2">Forgot Password</h1>
    <p className="para text-gray-500 mb-8">Enter your email address for which account you want to reset your password.</p>
    <form className="form flex flex-col gap-4">

      <div className="inputField flex flex-col gap-2">
        <label htmlFor="Email" className="label font-semibold">Email</label>
        <input
          className="input border border-gray-300 rounded-md p-2"
          type="email"
          placeholder="name@email.com"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>

      <button className="btn bg-blue-500 text-white py-2 px-4 rounded-md" onClick={onForgotPassword}>Reset Password</button>
    </form>
  </div>
</div>
</div>

  );
}
