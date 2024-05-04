"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "../components/LogoBanner";


export default function ResetPasswordPage() {
  const [user, setUser] = React.useState({

    password: "",
    cpassword:""
  });



  


  const onResetPassword = async () => {

    if(user.cpassword !== user.password){
        console.log("Password didn't match with each other")
    }

    console.log(user);
  };
  return (
<div className="min-h-screen bg-gray-300">
  <Header/>
  <div className="flex justify-center items-center bg-opacity-40">
  <div className="container mt-10 bg-white shadow-md rounded-lg p-8 w-96">
    <h1 className="heading font-bold text-2xl mb-4">Reset Password</h1>
    <p className="para text-gray-500 mb-8">Enter your new password.</p>
    <form className="form flex flex-col gap-4">

      <div className="inputField">
        <label htmlFor="Password" className="label font-semibold">New Password</label>
        <input
          className="input border border-gray-300 rounded-md p-2 mt-2"
          type="password"
          placeholder="New Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <div className="inputField">
        <label htmlFor="cPassword" className="label font-semibold">Repeat New Password</label>
        <input
          className="input border border-gray-300 rounded-md p-2 mt-2"
          type="password"
          placeholder="Repeat New Password"
          value={user.cpassword}
          onChange={(e) => setUser({ ...user, cpassword: e.target.value })}
        />
      </div>

      <button className="btn bg-blue-500 text-white py-2 px-4 rounded-md" onClick={onResetPassword}>Reset Password</button>
    </form>
  </div> 
</div>
</div>


  );
}
