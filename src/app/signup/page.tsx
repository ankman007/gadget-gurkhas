"use client";

import React, { useState } from "react";
import Link from "next/link"
import { useRouter } from "next/navigation";

export default function SignUpPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })

    const onSignUp = async () => {

    }
    return (

        <div className="flex flex-col justify-center min-h-screen py-2 w-80 m-6">
            <h1 className="">Create an account</h1><hr />
            <br />
            <label htmlFor="username" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Username</label>
            <input 
                className="p-1 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                type="text"
                id="username"
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})} 
                placeholder="Username"/>
    
            <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
            <input 
                className="p-1 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                type="text"
                id="email"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})} 
                placeholder="Email address"/>
        
            <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Password</label>
            <input 
                className="p-1 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                type="password"
                id="password"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})} 
                placeholder="Password"/>
                    
            <button 
                className="p-2 border border-green-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" 
                onClick={onSignUp}>
                Sign Up
            </button>

            <Link href={'/login'} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Already have a account? <b><u>Login</u></b></Link>
        </div>
    );
}