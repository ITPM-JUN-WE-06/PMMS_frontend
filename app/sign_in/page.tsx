"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import {Axios} from "axios";
import 'tailwindcss/tailwind.css';
import Image from "next/image";
import background from "./bg.png"

export default function SignIn(){
    const [user,setUser] = React.useState({
        email:"",
        password:"",
    })

    const onSignin = async () => {

    }
    


    return(
      <div className="flex flex-col items-center justify-between">
      <div className="relative w-full ">
        <div className="absolute -z-10 w-screen ">
          <Image src={background} alt="background image" className="w-screen h-screen blur-sm"/>
          </div>
          </div>
          <div className="flex justify-center items-center h-screen ">
          <div className="max-w-400 mx-auto my-auto p-20 border border-gray-300 rounded-lg bg-f9f9f9 bg-blue-100 shadow-md">
            <h1 className="text-center mb-5 text-blue-500 font-bold text-3xl">Sign In</h1>
          
        <h2 className="flex flex-col">
        
        <input
          className="mb-15 px-10 py-2 mb-5 border border-gray-300 rounded-lg text-gray-700 text-center" 
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({...user,email: e.target.value})}
        />
        
        <input
          className="mb-15 px-10 py-2 mb-5 border border-gray-300 rounded-lg text-gray-700 text-center" 
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({...user,password: e.target.value})}
        />
       
        <button onClick={onSignin} className=" px-5 py-2 bg-blue-500 text-white text-xl rounded-lg cursor-pointer hover:bg-blue-700 text-center font-bold" type="submit">Sign In</button>
        </h2>
        <h6 className="text-blue-500"><center>Don't have an Account?<u><Link href="/sign_up">Sign Up</Link></u></center></h6>
        </div>
        </div>
        </div>
        
    )
}