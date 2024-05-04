"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "../components/LogoBanner";


export default function LoginInPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: ""
  });
  const router = useRouter();

  const onLoginIn = () => {
    console.log(user);
    router.replace('/');
  };

  return (
<div className=" bg-gray-300 min-h-screen">
<Header/>
<div className="flex justify-center items-center bg-opacity-40 p-5">
  <div className="container bg-white shadow-md rounded-lg p-4 w-max">
    <h1 className="heading font-bold text-2xl mb-4">Welcome back</h1>
    <p className="para text-gray-500 mb-8">Enter your credentials to access the account.</p>
    <form className="form flex flex-col gap-4 mb-6">

      <div className="inputField flex flex-col gap-1">
        <label htmlFor="Email" className="label font-semibold">Email</label>
        <input
          className="input border border-gray-300 rounded-md p-2"
          type="email"
          placeholder="name@email.com"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div className="inputField flex flex-col gap-1">
        <label htmlFor="Password" className="label font-semibold">Password</label>
        <input
          className="input border border-gray-300 rounded-md p-2"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>

      <div className="forgot flex justify-between items-center">
        <div className="terms flex gap-4 items-center">
          <input type="checkbox" name="" id="" />
          <p className="text-sm">Remember me</p>
        </div>
        <div>
          <Link className="forgotStyle text-purple-600 font-semibold" href={'/forgotPassword'}>Forgot Password?</Link>
        </div>
      </div>
      <button className="btn bg-blue-500 text-white py-2 px-4 rounded-md" onClick={onLoginIn}>Log In</button>
    </form>
    <p className="redirect text-center">
      <Link className="register font-semibold" href={"/signup"}>
        Create New Account
      </Link>{" "}
    </p>
  </div>
</div>
</div>

  );
}
