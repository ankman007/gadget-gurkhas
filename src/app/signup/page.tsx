"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function SignUpPage() {
  const [user, setUser] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cpassword:"",
    username: "",
  });

  const [isChecked, setIsChecked] = useState(false);


  const onCheckboxChange = (e:any) => {
    setIsChecked(e.target.checked);
  };

  


  const onSignUp = async () => {
    if(user.cpassword !== user.password){
        console.log("Password didn't match")
    }
    console.log(user);
  };
  return (
<div className="flex justify-center items-center min-h-screen bg-gray-400 bg-opacity-40 p-5">
  <div className="container bg-white shadow-md rounded-lg p-4 md:w-3/5 lg:w-2/5 xl:w-1/3">
    <h1 className="font-bold text-2xl mb-4">Create an account</h1>
    <form className="flex flex-col gap-4 mb-6">
      <div className="names flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-1 flex-grow">
          <label htmlFor="First Name" className="label font-semibold">First Name</label>
          <input
            className="border border-gray-300 rounded-md p-2"
            type="text"
            placeholder="Ram"
            value={user.firstName}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-1 flex-grow">
          <label htmlFor="Last Name" className="label font-semibold">Last Name</label>
          <input
            className="border border-gray-300 rounded-md p-2"
            type="text"
            placeholder="Thapa"
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="Email" className="label font-semibold">Email</label>
        <input
          className="border border-gray-300 rounded-md p-2"
          type="email"
          placeholder="name@email.com"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="Password" className="label font-semibold">Password</label>
        <input
          className="border border-gray-300 rounded-md p-2"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="Repeat Password" className="label font-semibold">Repeat Password</label>
        <input
          className="border border-gray-300 rounded-md p-2"
          type="password"
          value={user.cpassword}
          onChange={(e) => setUser({ ...user, cpassword: e.target.value })}
        />
      </div>
      <div className="flex gap-4 items-center">
        <input type="checkbox" onChange={onCheckboxChange} required />
        <p className="text-sm">
          I agree with{" "}
          <a className="termsCondition text-purple-600" href="/terms">
            Terms & Conditions.
          </a>{" "}
        </p>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-md disabled:bg-gray-500 disabled:text-gray-400" onClick={onSignUp} disabled={!isChecked}>Create Account</button>
    </form>
    <p className="text-center">
      Already have an account?{" "}
      <a className="text-purple-600" href="/login">
        Log In
      </a>{" "}
    </p>
  </div>
</div>



  );
}
