"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./style.module.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function ForgotPasswordPage() {
  const [user, setUser] = React.useState({

    email: ""
  });



  


  const onForgotPassword = async () => {

    console.log(user);
  };
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Link href={'/login'}><FontAwesomeIcon className={styles.arrow} icon={faArrowLeft} /></Link>
        <h1 className={styles.heading}>Forgot Password</h1>
        <p className={styles.para}>Enter your email address for which account you want to <br /> reset your password.</p>
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


          <button className={styles.btn} onClick={onForgotPassword}>Reset Password</button>
        </form>
  
      </div>
    </div>

  );
}
