"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./style.module.css";

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
    <div className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Create an account</h1>
        <form className={styles.form}>
          <div className={styles.names}>
            <div className={styles.inputField}>
              <label htmlFor="First Name" className={styles.label}>
                First Name
              </label>
              <input
                className={styles.input}
                type="text"
                name=""
                id=""
                placeholder="Ram"
                value={user.firstName}
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
              />
            </div>
            <div className={styles.inputField}>
              <label htmlFor="Last Name" className={styles.label}>
                Last Name
              </label>
              <input
                className={styles.input}
                type="text"
                name=""
                id=""
                placeholder="Thapa"
                value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
            </div>
          </div>
          <div className={styles.inputField}>
            <label htmlFor="Email" className={styles.label}>
              Email
            </label>
            <input
              className={styles.input}
              type="email"
              name=""
              id=""
              placeholder="name@email.com"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="Password" className={styles.label}>
              Password
            </label>
            <input
              className={styles.input}
              type="password"
              name=""
              id=""
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="Repeat Password" className={styles.label}>
              Repeat Password
            </label>
            <input
              className={styles.input}
              type="password"
              name=""
              id=""
              value={user.cpassword}
              onChange={(e) => setUser({ ...user, cpassword: e.target.value })}
            />
          </div>
          <div className={styles.terms}>
            <input type="checkbox" onChange={onCheckboxChange} name="" id="" required />
            <p>
              I agree with{" "}
              <Link className={styles.termsCondition} href={"/terms"}>
                Terms & Conditons.
              </Link>{" "}
            </p>
          </div>
          <button className={styles.btn} onClick={onSignUp} disabled={!isChecked}>Create Account</button>
        </form>
        <p className={styles.redirect}>
          Already have an account?{" "}
          <Link className={styles.termsCondition} href={"/login"}>
            Log In
          </Link>{" "}
        </p>
      </div>
    </div>

    // <div className="flex flex-col justify-center min-h-screen py-2 w-80 m-6">
    //     <h1 className="">Create an account</h1><hr />
    //     <br />
    //     <label htmlFor="username" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Username</label>
    //     <input
    //         className="p-1 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
    //         type="text"
    //         id="username"
    //         value={user.username}
    //         onChange={(e) => setUser({...user, username: e.target.value})}
    //         placeholder="Username"/>

    //     <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
    //     <input
    //         className="p-1 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
    //         type="text"
    //         id="email"
    //         value={user.email}
    //         onChange={(e) => setUser({...user, email: e.target.value})}
    //         placeholder="Email address"/>

    //     <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Password</label>
    //     <input
    //         className="p-1 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
    //         type="password"
    //         id="password"
    //         value={user.password}
    //         onChange={(e) => setUser({...user, password: e.target.value})}
    //         placeholder="Password"/>

    //     <button
    //         className="p-2 border border-green-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
    //         onClick={onSignUp}>
    //         Sign Up
    //     </button>

    //     <Link href={'/login'} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Already have a account? <b><u>Login</u></b></Link>
    // </div>
  );
}
