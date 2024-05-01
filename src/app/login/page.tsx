"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./style.module.css";

export default function LoginInPage() {
  const [user, setUser] = React.useState({

    email: "",
    password: ""
  });



  


  const onLoginIn = async () => {

    console.log(user);
  };
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Welcome back</h1>
        <p className={styles.para}>Enter your credentails to access the account.</p>
        <form className={styles.form}>

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

        <div className={styles.forgot}>
        <div className={styles.terms}>
            <input type="checkbox" name="" id="" required />
            <p>
              Remember me
            </p>
          </div>
          <div>
            <Link className={styles.forgotStyle} href={'/forgotPassword'}>Forgot Password?</Link>
          </div>
        </div>
          <button className={styles.btn} onClick={onLoginIn}>Log In</button>
        </form>
        <p className={styles.redirect}>
          <Link className={styles.register} href={"/signup"}>
            Create New Account
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}
