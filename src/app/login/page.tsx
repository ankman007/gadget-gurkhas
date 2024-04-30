"use client";
import React, { useState } from "react";
import Link from "next/link"
import { useRouter } from "next/navigation";

export default function LogInPage() {
    const [user, setUser] = React.useState({
        password: "",
        username: "",
    })

    const onLogIn = async () => {

    }
    return (

        <div className="flex flex-col justify-center min-h-screen py-2 w-64 m-6">
            <h1 className="">Log In</h1><hr />
            <br />

            <label htmlFor="username" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Username</label>
            <input 
                className="p-1 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                type="text"
                id="username"
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})} 
                placeholder="Username"/>
        
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
                onClick={onLogIn}>
                Log In
            </button>

            <Link href={'/login'} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"><b><u>Forgot password</u>?</b></Link>
        </div>
    );
}