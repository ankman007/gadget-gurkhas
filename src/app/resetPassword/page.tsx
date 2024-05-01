"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./style.module.css";

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
    <div className={styles.main}>
      <div className={styles.container}>
        
        <h1 className={styles.heading}>Reset Password</h1>
        <p className={styles.para}>Enter your new password.</p>
        <form className={styles.form}>

          <div className={styles.inputField}>
            <label htmlFor="Password" className={styles.label}>
              New Password
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
            <label htmlFor="cPassword" className={styles.label}>
              Repeat New Password
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


          <button className={styles.btn} onClick={onResetPassword}>Reset Password</button>
        </form>
  
      </div>
    </div>

  );
}
